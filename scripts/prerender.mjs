#!/usr/bin/env node
/**
 * scripts/prerender.mjs
 *
 * Post-build static pre-rendering for SEO / social sharing.
 *
 * Strategy
 * ────────
 * Rather than a full SSR renderToString (which would fight with
 * browser-only deps like Three.js, Spline, GSAP, Lenis), this script:
 *
 *   1. Reads the built `dist/index.html` as a template.
 *   2. For every route defined in seoConfig, injects the correct
 *      <title>, <meta>, og:*, twitter:*, canonical, and JSON-LD tags
 *      directly into the HTML template.
 *   3. Writes the result to `dist/<route-path>/index.html`.
 *
 * Web servers with `try_files $uri $uri/ /index.html` (nginx) or
 * equivalent already serve these per-route files before falling back
 * to the SPA shell, so social crawlers and search engines get real
 * meta tags while the JS app still hydrates normally.
 *
 * Usage (runs automatically via `npm run build:seo`)
 *   node scripts/prerender.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

// ── Compile seoConfig.ts → temp ESM via esbuild (already a devDep) ───────────
const seoConfigSrc = path.join(ROOT, "src", "seo", "seoConfig.ts");
const tmpOut = path.join(ROOT, "node_modules", ".prerender-seo-config.mjs");

await build({
  entryPoints: [seoConfigSrc],
  bundle: false,
  format: "esm",
  platform: "node",
  outfile: tmpOut,
  logLevel: "silent",
});

const { routeSeoConfig, SITE_DEFAULTS } = await import(pathToFileURL(tmpOut).href);

try { fs.unlinkSync(tmpOut); } catch { /* ignore */ }

const BASE_URL = "https://techcompiler.com";

// ── Solution routes (sit under implicit /Solutions breadcrumb) ────────────────
const SOLUTION_PATHS = new Set([
  "/Product-Engineering",
  "/Mobile-Applications",
  "/Big-Data-Analytics",
  "/Google-Apps-for-Business",
  "/Social-Integration",
]);

/** Derive the page display name from its full title string */
function pageName(title) {
  return title
    .replace(/ — Case Study — .*$/, "")
    .replace(/ — .*$/, "")
    .trim();
}

/** Build a BreadcrumbList schema for a given route */
function buildBreadcrumbSchema(routePath, title) {
  if (routePath === "/") return null;

  const name = pageName(title);
  const segments = routePath.split("/").filter(Boolean);
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
  ];

  if (segments.length === 2) {
    const cat = segments[0];
    const catLabel =
      cat === "services"
        ? "Services"
        : cat.charAt(0).toUpperCase() + cat.slice(1);
    items.push({
      "@type": "ListItem",
      position: 2,
      name: catLabel,
      item: `${BASE_URL}/${cat}`,
    });
    items.push({
      "@type": "ListItem",
      position: 3,
      name,
      item: `${BASE_URL}${routePath}`,
    });
  } else {
    const isCaseStudy = title.includes("— Case Study —");
    const isSolution = SOLUTION_PATHS.has(routePath);
    if (isCaseStudy) {
      items.push({ "@type": "ListItem", position: 2, name: "Case Studies" });
      items.push({ "@type": "ListItem", position: 3, name, item: `${BASE_URL}${routePath}` });
    } else if (isSolution) {
      items.push({ "@type": "ListItem", position: 2, name: "Solutions" });
      items.push({ "@type": "ListItem", position: 3, name, item: `${BASE_URL}${routePath}` });
    } else {
      items.push({ "@type": "ListItem", position: 2, name, item: `${BASE_URL}${routePath}` });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

// ── Read built index.html as the HTML template ────────────────────────────────
const templatePath = path.join(DIST, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("❌  dist/index.html not found. Run `npm run build` first.");
  process.exit(1);
}
const template = fs.readFileSync(templatePath, "utf-8");

// ── Helpers ───────────────────────────────────────────────────────────────────
function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildMetaBlock(routePath) {
  const meta = { ...(SITE_DEFAULTS ?? {}), ...(routeSeoConfig?.[routePath] ?? {}) };
  const title = esc(meta.title ?? "TechCompiler DataSystems");
  const desc = esc(meta.description ?? "");
  const ogImage = meta.ogImage ?? `${BASE_URL}/og-default.png`;
  const canonical = `${BASE_URL}${meta.canonical ?? routePath}`;
  const kwLine = meta.keywords
    ? `\n    <meta name="keywords" content="${esc(meta.keywords)}" />`
    : "";

  // Normalise structuredData to an array (may be undefined, single object, or array)
  const schemas = meta.structuredData
    ? Array.isArray(meta.structuredData)
      ? meta.structuredData
      : [meta.structuredData]
    : [];

  // Auto-append BreadcrumbList for all non-root routes
  const breadcrumb = buildBreadcrumbSchema(routePath, meta.title ?? "");
  if (breadcrumb) schemas.push(breadcrumb);

  const ldLines = schemas
    .map(
      (schema) =>
        `\n    <script type="application/ld+json">\n    ${JSON.stringify(schema, null, 2)}\n    </script>`
    )
    .join("");

  return `
    <title>${title}</title>
    <meta name="description" content="${desc}" />${kwLine}
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${esc(ogImage)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="TechCompiler DataSystems" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <meta name="twitter:image" content="${esc(ogImage)}" />${ldLines}`;
}

/** Strip existing per-route head tags then inject fresh route-specific ones. */
function injectMeta(html, routePath) {
  let result = html
    .replace(/<title>[^<]*<\/title>/gi, "")
    .replace(/<meta\s+name="description"[^>]*>/gi, "")
    .replace(/<meta\s+name="keywords"[^>]*>/gi, "")
    .replace(/<meta\s+name="robots"[^>]*>/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/<meta\s+property="og:[^>]*>/gi, "")
    .replace(/<meta\s+name="twitter:[^>]*>/gi, "")
    .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");

  // Inject right after <meta charset=...>
  return result.replace(/(<meta\s+charset[^>]*>)/i, `$1${buildMetaBlock(routePath)}`);
}

// ── Generate per-route static HTML files ─────────────────────────────────────
const routes = Object.keys(routeSeoConfig);
console.log(`\n🚀  Pre-rendering ${routes.length} routes...\n`);

let ok = 0;
let fail = 0;

for (const routePath of routes) {
  try {
    const output = injectMeta(template, routePath);

    if (routePath === "/") {
      fs.writeFileSync(templatePath, output, "utf-8");
      console.log(`  ✅  / → dist/index.html`);
    } else {
      // /services/web-dev → dist/services/web-dev/index.html
      const segments = routePath.replace(/^\//, "").split("/");
      const dir = path.join(DIST, ...segments);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), output, "utf-8");
      console.log(`  ✅  ${routePath} → dist${routePath}/index.html`);
    }
    ok++;
  } catch (err) {
    console.error(`  ❌  ${routePath} — ${err.message}`);
    fail++;
  }
}

console.log(`\n📦  Done. ${ok} succeeded, ${fail} failed.\n`);
if (fail > 0) process.exit(1);
