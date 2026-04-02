import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getRouteMeta, type RouteMeta } from "./seoConfig";

const BASE_URL = "https://www.techcompiler.com";

/** Solution routes that sit under an implicit /Solutions category */
const SOLUTION_PATHS = new Set([
  "/Product-Engineering",
  "/Mobile-Applications",
  "/Big-Data-Analytics",
  "/Google-Apps-for-Business",
  "/Social-Integration",
]);

/** Derive the page display name from its full title string */
function pageName(title: string): string {
  return title
    .replace(/ — Case Study — .*$/, "")
    .replace(/ — .*$/, "")
    .trim();
}

/** Auto-build a BreadcrumbList schema from the current pathname */
function buildBreadcrumb(
  pathname: string,
  title: string
): Record<string, unknown> | null {
  if (pathname === "/") return null;

  const name = pageName(title);
  const segments = pathname.split("/").filter(Boolean);
  const items: Record<string, unknown>[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
  ];

  if (segments.length === 2) {
    // /services/web-dev  or  /Technologies/React-JS
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
      item: `${BASE_URL}${pathname}`,
    });
  } else {
    const isCaseStudy = title.includes("— Case Study —");
    const isSolution = SOLUTION_PATHS.has(pathname);
    if (isCaseStudy) {
      items.push({ "@type": "ListItem", position: 2, name: "Case Studies" });
      items.push({
        "@type": "ListItem",
        position: 3,
        name,
        item: `${BASE_URL}${pathname}`,
      });
    } else if (isSolution) {
      items.push({ "@type": "ListItem", position: 2, name: "Solutions" });
      items.push({
        "@type": "ListItem",
        position: 3,
        name,
        item: `${BASE_URL}${pathname}`,
      });
    } else {
      items.push({
        "@type": "ListItem",
        position: 2,
        name,
        item: `${BASE_URL}${pathname}`,
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

interface PageMetaProps {
  /** Override any field from the central seoConfig for this specific page */
  overrides?: Partial<RouteMeta>;
}

export default function PageMeta({ overrides }: PageMetaProps = {}) {
  const { pathname } = useLocation();
  const meta = { ...getRouteMeta(pathname), ...overrides };
  const canonicalUrl = `${BASE_URL}${meta.canonical ?? pathname}`;

  // Normalise structuredData to an array (may be undefined, object, or array)
  const schemas: Record<string, unknown>[] = meta.structuredData
    ? Array.isArray(meta.structuredData)
      ? meta.structuredData
      : [meta.structuredData]
    : [];

  const breadcrumb = buildBreadcrumb(pathname, meta.title);

  return (
    <Helmet>
      {/* ── Primary ─────────────────────────────────────────── */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph ──────────────────────────────────────── */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      {meta.ogImage && <meta property="og:image:width" content="1200" />}
      {meta.ogImage && <meta property="og:image:height" content="630" />}
      <meta property="og:site_name" content="TechCompiler DataSystems" />

      {/* ── Twitter Card ────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.ogImage && <meta name="twitter:image" content={meta.ogImage} />}

      {/* ── Structured Data (JSON-LD) ────────────────────────── */}
      {schemas.map((schema, i) => (
        <script key={`ld-${i}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* ── Auto-generated BreadcrumbList ───────────────────── */}
      {breadcrumb && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      )}
    </Helmet>
  );
}
