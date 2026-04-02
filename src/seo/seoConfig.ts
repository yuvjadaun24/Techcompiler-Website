/**
 * Central SEO & Open Graph configuration for every route.
 * This single source of truth is consumed by:
 *   1. <PageMeta> (client-side, React helmet-async)
 *   2. scripts/prerender.mjs (build-time static HTML generator)
 */

export interface RouteMeta {
  title: string;
  description: string;
  /** Absolute or root-relative path to the OG image */
  ogImage?: string;
  /** Canonical URL path (e.g. "/services/web-dev") */
  canonical?: string;
  keywords?: string;
  /** JSON-LD structured data — single object or array of objects */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "TechCompiler DataSystems";
const BASE_URL = "https://techcompiler.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.png`;

export const SITE_DEFAULTS: RouteMeta = {
  title: `${SITE_NAME} — Custom Software & IT Solutions`,
  description:
    "TechCompiler DataSystems delivers end-to-end software engineering, cloud infrastructure, AI/ML, mobile & web development, and IT consulting services worldwide.",
  ogImage: DEFAULT_OG_IMAGE,
};

/** Map of route path → RouteMeta overrides */
export const routeSeoConfig: Record<string, RouteMeta> = {
  "/": {
    title: `${SITE_NAME} — Custom Software & IT Solutions`,
    description:
      "TechCompiler DataSystems delivers custom software products, AI agents, mobile apps, and cloud-native IT solutions for startups and enterprise clients worldwide.",
    ogImage: DEFAULT_OG_IMAGE,
    keywords:
      "custom software development, IT solutions, AI agents, mobile app development, cloud infrastructure",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
      foundingDate: "2010",
      description:
        "TechCompiler DataSystems is a global technology solutions provider delivering custom software, AI agents, cloud infrastructure, and IT consulting services.",
      areaServed: "Worldwide",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "412 Linden Avenue",
          addressLocality: "Rochester",
          addressRegion: "NY",
          postalCode: "14625",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Gold Tower, Wave One, Sector 18",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201301",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "4F Kabutocho Dai-6 Hayama Building, 17-2 Nihonbashi Kabutocho, Chuo-ku",
          addressLocality: "Tokyo",
          addressCountry: "JP",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/techcompiler",
        "https://twitter.com/techcompiler",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${BASE_URL}/Contact-Us`,
      },
    },
  },

  // ── Services ───────────────────────────────────────────────
  "/services/web-dev": {
    title: `Web Development Services — ${SITE_NAME}`,
    description:
      "Full-cycle web application development with React, Angular, Vue, .NET, and Node.js. We deliver scalable, high-performance, and pixel-perfect digital products.",
    keywords: "web development, React, Angular, Vue, Node.js, full stack",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Development Services",
      description: "End-to-end web application development: React, Angular, Vue, Node.js, .NET — from architecture through delivery.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Web Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/web-dev`,
    },
  },
  "/services/UI-UX-Designing": {
    title: `UI/UX Design Services — ${SITE_NAME}`,
    description:
      "User-centred UI/UX design services: wireframes, interactive prototypes, design systems, and pixel-perfect interfaces that drive engagement and conversions.",
    keywords: "UI UX design, user experience, wireframing, Figma, design systems",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "UI/UX Design Services",
      description: "Research-led UI/UX design: wireframes, prototypes, design systems, and usability testing for web and mobile products.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "UI/UX Design",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/UI-UX-Designing`,
    },
  },
  "/services/Infrastructure-Services": {
    title: `Infrastructure Services — ${SITE_NAME}`,
    description:
      "Cloud and on-premises infrastructure planning, provisioning, monitoring, and lifecycle management for enterprises of all sizes on AWS, Azure, and Google Cloud.",
    keywords: "cloud infrastructure, AWS, Azure, GCP, DevOps, server management",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Infrastructure Services",
      description: "Cloud and on-premises infrastructure: provisioning, networking, security, and 24/7 monitoring on AWS, Azure, and GCP.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "IT Infrastructure",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/Infrastructure-Services`,
    },
  },
  "/services/Digital-Transformation": {
    title: `Digital Transformation — ${SITE_NAME}`,
    description:
      "Strategic digital transformation consulting to modernise legacy systems, automate workflows, accelerate cloud adoption, and unlock new business growth.",
    keywords: "digital transformation, modernisation, cloud migration, automation",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Digital Transformation",
      description: "Structured modernisation: legacy system retirement, cloud migration, process automation, and system integration.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Digital Transformation",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/Digital-Transformation`,
    },
  },
  "/services/Embedded-Product": {
    title: `Embedded Product Engineering — ${SITE_NAME}`,
    description:
      "IoT, firmware, and embedded systems engineering — from concept to production-ready hardware-software integration — trusted by global hardware and device brands.",
    keywords: "embedded systems, IoT, firmware, hardware software integration",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Embedded Product Engineering",
      description: "IoT, firmware, and embedded systems engineering from concept to production-ready hardware-software integration.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Embedded Systems Engineering",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/Embedded-Product`,
    },
  },
  "/services/Business-Intelligence": {
    title: `Business Intelligence Services — ${SITE_NAME}`,
    description:
      "Transform raw business data into actionable insight with custom BI dashboards, ETL pipelines, and analytics solutions powered by Power BI and modern data tools.",
    keywords: "business intelligence, BI dashboards, ETL, data visualisation, Power BI",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Business Intelligence Services",
      description: "Data warehouse design, ETL pipelines, and Power BI / Tableau dashboards that give non-technical teams direct access to business metrics.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Business Intelligence",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/Business-Intelligence`,
    },
  },
  "/services/DevOps": {
    title: `DevOps Services — ${SITE_NAME}`,
    description:
      "Automated CI/CD pipelines, Kubernetes orchestration, container management, and infrastructure-as-code delivered by certified DevOps and cloud engineers.",
    keywords: "DevOps, CI/CD, Kubernetes, Docker, Terraform, cloud automation",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "DevOps Engineering",
      description: "CI/CD pipelines, Kubernetes orchestration, infrastructure-as-code, and 24/7 monitoring delivered by certified DevOps engineers.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "DevOps",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/DevOps`,
    },
  },
  "/services/Managed-IT-Services": {
    title: `Managed IT Services — ${SITE_NAME}`,
    description:
      "Round-the-clock managed IT support, proactive system monitoring, patch management, and infrastructure maintenance — keeping your business running at all times.",
    keywords: "managed IT, IT support, 24/7 monitoring, helpdesk",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Managed IT Services",
      description: "Fixed-fee IT management covering monitoring, patching, helpdesk, backup, and security across your entire IT estate.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Managed IT Services",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/Managed-IT-Services`,
    },
  },
  "/services/IT-Outsourcing": {
    title: `IT Outsourcing — ${SITE_NAME}`,
    description:
      "Flexible IT outsourcing models including staff augmentation, dedicated development teams, and project-based engagements to scale your capacity on demand.",
    keywords: "IT outsourcing, staff augmentation, dedicated development team",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "IT Outsourcing",
      description: "Dedicated development teams, staff augmentation, and project-based delivery integrated into your workflow from day one.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "IT Outsourcing",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/IT-Outsourcing`,
    },
  },
  "/services/IT-Consulting": {
    title: `IT Consulting — ${SITE_NAME}`,
    description:
      "Expert technology consulting that aligns IT strategy with business goals, reduces operational costs, and accelerates software and product delivery at scale.",
    keywords: "IT consulting, technology strategy, CTO advisory, digital strategy",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "IT Consulting",
      description: "Vendor-neutral technology consulting that aligns IT strategy with business goals, reduces costs, and accelerates delivery.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "IT Consulting",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/IT-Consulting`,
    },
  },
  "/services/Database-Migration": {
    title: `Database Migration Services — ${SITE_NAME}`,
    description:
      "Seamless database migration across SQL, NoSQL, and cloud-native platforms, executed with zero-downtime strategies, automated testing, and rollback plans.",
    keywords: "database migration, PostgreSQL, MySQL, MongoDB, cloud database",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Database Migration Services",
      description: "Risk-managed migrations across Oracle, SQL Server, PostgreSQL, and cloud platforms with zero unplanned downtime and verifiable data integrity.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Database Migration",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/Database-Migration`,
    },
  },
  "/services/Data-Analytics": {
    title: `Data Analytics Services — ${SITE_NAME}`,
    description:
      "End-to-end data analytics covering data engineering, machine learning pipelines, predictive forecasting models, and real-time interactive dashboard development.",
    keywords: "data analytics, data engineering, machine learning, predictive analytics",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Data Analytics Services",
      description: "End-to-end data analytics: data engineering, ML pipelines, predictive forecasting, and real-time dashboard development.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Data Analytics",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/Data-Analytics`,
    },
  },
  "/services/Full-Stack-Development": {
    title: `Full-Stack Development — ${SITE_NAME}`,
    description:
      "Comprehensive full-stack development across React, Node.js, .NET, and Python — spanning frontend interfaces, backend APIs, and cloud-native architecture.",
    keywords: "full stack development, React, Node.js, .NET, Python",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Full-Stack Development",
      description: "Complete full-stack development across React, Node.js, .NET, and Python — frontend, backend APIs, and cloud-native architecture.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Full-Stack Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/services/Full-Stack-Development`,
    },
  },

  // ── Technologies ────────────────────────────────────────────
  "/Technologies/Angular-JS": {
    title: `AngularJS Development — ${SITE_NAME}`,
    description:
      "Expert AngularJS and Angular development for enterprise-grade, maintainable single-page applications with rapid feature delivery and code quality standards.",
    keywords: "AngularJS development, Angular, front-end development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AngularJS Development",
      description: "Enterprise Angular and AngularJS development for maintainable, high-performance single-page applications.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Angular-JS`,
    },
  },
  "/Technologies/React-JS": {
    title: `React.js Development — ${SITE_NAME}`,
    description:
      "High-performance React.js applications built with hooks, Context API, and modern tooling by senior engineers for fast and highly responsive user experiences.",
    keywords: "React development, React.js, front-end, SPA",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "React.js Development",
      description: "High-performance React.js applications built with modern tooling by senior engineers for fast, highly responsive user experiences.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/React-JS`,
    },
  },
  "/Technologies/Vue-JS": {
    title: `Vue.js Development — ${SITE_NAME}`,
    description:
      "Progressive Vue.js web applications with composable architecture, Vuex state management, and Nuxt.js for performant server-side rendered web experiences.",
    keywords: "Vue.js development, Vuex, Nuxt, front-end",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Vue.js Development",
      description: "Progressive Vue.js web applications with composable architecture and Nuxt.js for performant server-side rendered experiences.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Vue-JS`,
    },
  },
  "/Technologies/JavaScript": {
    title: `JavaScript Development — ${SITE_NAME}`,
    description:
      "Modern JavaScript engineering for web, mobile, and server applications using ES2024+ standards, async patterns, and performance-first development practices.",
    keywords: "JavaScript, ES2024, front-end development, Node",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "JavaScript Development",
      description: "Modern JavaScript engineering for web, mobile, and server applications using ES2024+ standards and performance-first practices.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/JavaScript`,
    },
  },
  "/Technologies/TypeScript": {
    title: `TypeScript Development — ${SITE_NAME}`,
    description:
      "Type-safe TypeScript solutions that eliminate runtime errors, improve code maintainability, and accelerate delivery for large engineering teams at scale.",
    keywords: "TypeScript, type safety, large scale apps",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "TypeScript Development",
      description: "Type-safe TypeScript solutions that eliminate runtime errors and accelerate delivery for large engineering teams at scale.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/TypeScript`,
    },
  },
  "/Technologies/CSS-3": {
    title: `CSS3 & Modern Styling — ${SITE_NAME}`,
    description:
      "Pixel-perfect, responsive CSS3 styling with Tailwind CSS, CSS Modules, animations, and design tokens to ship visual polish that matches every design spec.",
    keywords: "CSS3, Tailwind, responsive design, animations",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "CSS3 & Modern Styling",
      description: "Pixel-perfect, responsive CSS3 styling with Tailwind CSS, animations, and design tokens that match every design specification.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/CSS-3`,
    },
  },
  "/Technologies/HTML-5": {
    title: `HTML5 Development — ${SITE_NAME}`,
    description:
      "Clean, semantic HTML5 markup that is fully accessible, SEO-optimised, and cross-browser compatible, following W3C standards and WCAG accessibility guidelines.",
    keywords: "HTML5, semantic markup, accessibility, SEO",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "HTML5 Development",
      description: "Clean, semantic HTML5 markup that is fully accessible, SEO-optimised, and cross-browser compatible per W3C and WCAG standards.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/HTML-5`,
    },
  },
  "/Technologies/Dot-Net": {
    title: `.NET Development — ${SITE_NAME}`,
    description:
      "Scalable .NET web APIs, Windows services, microservices, and enterprise applications on the Microsoft stack, delivered by certified .NET and C# specialists.",
    keywords: ".NET, ASP.NET, C#, enterprise development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: ".NET Development",
      description: "Scalable .NET web APIs, microservices, and enterprise applications on the Microsoft stack by certified .NET and C# specialists.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Dot-Net`,
    },
  },
  "/Technologies/Dot-Net-Core": {
    title: `.NET Core Development — ${SITE_NAME}`,
    description:
      "Cross-platform .NET Core APIs and microservices with high throughput, minimal runtime footprint, and cloud-native architecture patterns for modern deployments.",
    keywords: ".NET Core, cross-platform, microservices, C#",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: ".NET Core Development",
      description: "Cross-platform .NET Core APIs and microservices with high throughput, minimal footprint, and cloud-native architecture patterns.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Dot-Net-Core`,
    },
  },
  "/Technologies/PHP": {
    title: `PHP Development — ${SITE_NAME}`,
    description:
      "Modern PHP development with Laravel and Symfony frameworks, RESTful API design, headless CMS integrations, and bespoke WordPress plugin and theme engineering.",
    keywords: "PHP, Laravel, Symfony, WordPress, back-end",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "PHP Development",
      description: "Modern PHP development with Laravel and Symfony, RESTful API design, and bespoke WordPress plugin and theme engineering.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/PHP`,
    },
  },
  "/Technologies/Java": {
    title: `Java Development — ${SITE_NAME}`,
    description:
      "Enterprise Java applications and microservices built with Spring Boot, Jakarta EE, and cloud-native patterns for reliable and high-throughput deployments.",
    keywords: "Java, Spring Boot, microservices, enterprise",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Java Development",
      description: "Enterprise Java applications and microservices built with Spring Boot and cloud-native patterns for high-throughput deployments.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Java`,
    },
  },
  "/Technologies/Node-Js": {
    title: `Node.js Development — ${SITE_NAME}`,
    description:
      "Real-time, scalable Node.js back-ends using Express and NestJS with event-driven architectures, WebSocket support, and REST and GraphQL API development.",
    keywords: "Node.js, Express, NestJS, real-time, back-end",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Node.js Development",
      description: "Real-time, scalable Node.js back-ends using Express and NestJS with event-driven architectures and REST/GraphQL APIs.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Node-Js`,
    },
  },
  "/Technologies/IOS": {
    title: `iOS App Development — ${SITE_NAME}`,
    description:
      "Native iOS apps crafted in Swift and SwiftUI, plus cross-platform builds with React Native — App Store-ready, optimised for iOS 17+, and built for seamless UX.",
    keywords: "iOS development, Swift, Xcode, Apple, mobile app",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "iOS App Development",
      description: "Native iOS apps in Swift and SwiftUI, plus cross-platform React Native builds — App Store-ready and optimised for iOS 17+.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Mobile Application Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/IOS`,
    },
  },
  "/Technologies/Android": {
    title: `Android App Development — ${SITE_NAME}`,
    description:
      "Performant Android apps built with Kotlin and Jetpack Compose, following Google's latest standards. Supports Android 14+, tablets, and Wear OS devices.",
    keywords: "Android development, Kotlin, Jetpack Compose, mobile app",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Android App Development",
      description: "Performant Android apps built with Kotlin and Jetpack Compose following Google's current standards, supporting Android 14+.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Mobile Application Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Android`,
    },
  },
  "/Technologies/React-Native": {
    title: `React Native Development — ${SITE_NAME}`,
    description:
      "Cross-platform iOS and Android apps with React Native — a single shared codebase delivering near-native performance, fluid animations, and rapid time-to-market.",
    keywords: "React Native, cross-platform, iOS, Android, mobile development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "React Native Development",
      description: "Cross-platform iOS and Android apps with a single shared React Native codebase delivering near-native performance and rapid time-to-market.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Mobile Application Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/React-Native`,
    },
  },
  "/Technologies/Woo-Commerce": {
    title: `WooCommerce Development — ${SITE_NAME}`,
    description:
      "Custom WooCommerce stores, plugin development, theme engineering, and payment gateway integrations for fast, scalable, and conversion-optimised e-commerce.",
    keywords: "WooCommerce, e-commerce, WordPress, online store",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "WooCommerce Development",
      description: "Custom WooCommerce stores, plugin development, and payment gateway integrations for scalable, conversion-optimised e-commerce.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "E-Commerce Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Woo-Commerce`,
    },
  },
  "/Technologies/Magento": {
    title: `Magento Development — ${SITE_NAME}`,
    description:
      "Enterprise Magento and Adobe Commerce solutions with custom modules, headless PWA storefronts, performance tuning, and end-to-end platform migration services.",
    keywords: "Magento, Adobe Commerce, e-commerce, headless",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Magento Development",
      description: "Enterprise Magento and Adobe Commerce solutions with custom modules, headless PWA storefronts, and performance tuning.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "E-Commerce Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Technologies/Magento`,
    },
  },

  // ── Solutions ───────────────────────────────────────────────
  "/Product-Engineering": {
    title: `Product Engineering — ${SITE_NAME}`,
    description:
      "End-to-end product engineering from initial ideation through architecture, design, agile development, quality assurance, and post-launch growth support.",
    keywords: "product engineering, product development, MVP, SaaS",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Product Engineering",
      description: "End-to-end product engineering from ideation through architecture, agile development, QA, and post-launch growth support.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Product Engineering",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Product-Engineering`,
    },
  },
  "/Mobile-Applications": {
    title: `Mobile App Development — ${SITE_NAME}`,
    description:
      "Native and hybrid mobile applications for iOS and Android, from UX research and design prototyping through to App Store and Google Play Store submission.",
    keywords: "mobile app development, iOS, Android, React Native",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Mobile App Development",
      description: "Native and hybrid mobile applications for iOS and Android, from UX research through App Store and Google Play submission.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Mobile Application Development",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Mobile-Applications`,
    },
  },
  "/Big-Data-Analytics": {
    title: `Big Data & Analytics Solutions — ${SITE_NAME}`,
    description:
      "Scalable big data architectures, real-time streaming pipelines, and ML analytics solutions to help organisations make faster, data-informed decisions.",
    keywords: "big data, data engineering, Hadoop, Spark, analytics",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Big Data & Analytics",
      description: "Scalable big data architectures, real-time streaming pipelines, and ML analytics for faster, data-informed decisions.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Data Analytics",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Big-Data-Analytics`,
    },
  },
  "/Google-Apps-for-Business": {
    title: `Google Workspace Solutions — ${SITE_NAME}`,
    description:
      "Google Workspace implementation, migration, and custom Apps Script and Google Cloud integrations for enterprise productivity and business workflow automation.",
    keywords: "Google Workspace, G Suite, Google Cloud, App Script",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Google Workspace Solutions",
      description: "Google Workspace implementation, migration, and custom Apps Script integrations for enterprise productivity and workflow automation.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Cloud Solutions",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Google-Apps-for-Business`,
    },
  },
  "/Social-Integration": {
    title: `Social Media Integration — ${SITE_NAME}`,
    description:
      "Seamless social login, sharing, analytics, and API integrations across Facebook, Instagram, LinkedIn, and more — engineered for user growth and acquisition.",
    keywords: "social media integration, OAuth, social login, API integration",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Social Media Integration",
      description: "Seamless social login, sharing, analytics, and API integrations across Facebook, Instagram, LinkedIn, and more for user growth.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Software Integration",
      areaServed: "Worldwide",
      url: `${BASE_URL}/Social-Integration`,
    },
  },

  // ── Case Studies ─────────────────────────────────────────────
  "/Whirlpool-Merch": {
    title: `Whirlpool Merch — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler engineered and scaled a modern merchandise e-commerce platform for Whirlpool, improving conversion rates, streamlining operational workflows.",
  },
  "/Shopper-Drug-Mart": {
    title: `Shoppers Drug Mart — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler modernised the Shoppers Drug Mart digital loyalty and omnichannel commerce platform to serve millions of Canadian customers more reliably.",
  },
  "/Jll-Presentation": {
    title: `JLL Presentation Platform — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built an interactive data presentation tool for JLL's global commercial real estate teams, enhancing productivity across international markets.",
  },
  "/YepMe-Ecommerce": {
    title: `Yepme E-Commerce — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler engineered a scalable e-commerce platform for Yepme's online fashion brand, handling peak traffic spikes and rapid product catalogue growth.",
  },
  "/Perfect-Wedding-Guide": {
    title: `Perfect Wedding Guide — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built a mobile-first wedding planning app with rich media content, vendor discovery, and social sharing features for engaged couples globally.",
  },
  "/ISAA-Web-Application": {
    title: `ISA Application — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler delivered a robust enterprise web application for ISA, streamlining compliance tracking, reporting workflows, and management processes.",
  },
  "/Newsbeen-Application": {
    title: `NewsBeen Media — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built a high-traffic news aggregation app for NewsBeen, delivering real-time articles and personalised content feeds to readers globally.",
  },
  "/GoEmerge-Application": {
    title: `GoEmerge Mobile App — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built GoEmerge — a cross-platform mobile app connecting users with local on-demand service providers through real-time discovery and booking.",
  },
  "/Krispy-Kreme-Hangout": {
    title: `Krispy Kreme Hangout — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built a Google Workspace-powered loyalty and social engagement app for Krispy Kreme, boosting customer retention and expanding brand reach.",
  },
  "/ATLAS-Roofing-Stock-Audit": {
    title: `ATLAS Roofing Stock Audit — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler delivered a mobile stock-audit application that fully digitised field inventory operations for ATLAS Roofing across the United States market.",
  },
  "/Onix-Application-Manager": {
    title: `Onix Application Manager — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler engineered a custom application lifecycle management platform for Onix, empowering clients to deploy and govern their software assets.",
  },
  "/Georgia-Department-of-Economic-Development": {
    title: `Georgia Economic Development — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built a social media integration and public engagement platform for the Georgia Department of Economic Development to amplify their reach.",
  },
  "/KLM-Clear-for-Boarding": {
    title: `KLM Clear for Boarding — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler engineered a contactless passenger boarding and biometric authentication solution for KLM Royal Dutch Airlines, improving gate throughput.",
  },
  "/Emerge-360": {
    title: `Emerge 360 — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built Emerge 360, a 360-degree brand engagement platform connecting companies with their audiences through immersive digital experiences.",
  },
  "/GrowthCloud": {
    title: `GrowthCloud — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler engineered GrowthCloud, a cloud-native sales intelligence and CRM integration platform designed to accelerate pipeline for B2B revenue teams.",
  },
  "/RCC-TV-Stream-Director": {
    title: `RCC TV Stream Director — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built live broadcast stream management and director tooling for RCC TV, enabling seamless multi-source production and on-air workflows.",
  },
  "/PWG-Mobile": {
    title: `Perfect Wedding Guide Mobile — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler designed and developed a mobile-first wedding planning app with vendor discovery, rich media galleries, and social sharing for engaged couples.",
  },
  "/IWIGT-iPad": {
    title: `IWIGT iPad App — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built an interactive iPad application for Imaginative Minds, delivering immersive educational content and creative storytelling experiences.",
  },
  "/Blogmint-Application": {
    title: `Blogmint — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler engineered Blogmint, an influencer marketing platform connecting brands with content creators for scalable, data-driven digital campaigns.",
  },
  "/Abscbn-News": {
    title: `ABS-CBN News — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler built a high-traffic mobile news application for ABS-CBN, delivering real-time breaking news and personalised content feeds to millions.",
  },
  "/Teenbeen-Media": {
    title: `TeenBeen Media — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler developed TeenBeen Media, a youth-focused social content platform with personalised feeds, user-generated content, and community features.",
  },
  "/Prune-Digital": {
    title: `Prune Digital — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler partnered with Prune Digital to build custom mobile applications and digital marketing tools that accelerate client acquisition and growth.",
  },
  "/ISAWeb-Application": {
    title: `ISA Web Application — Case Study — ${SITE_NAME}`,
    description:
      "How TechCompiler delivered an integrated web application for ISA, automating compliance workflows, document management, and stakeholder reporting.",
  },

  // ── Other pages ─────────────────────────────────────────────
  "/Our-Clients": {
    title: `Our Clients — ${SITE_NAME}`,
    description:
      "Trusted by startups, scale-ups, and Fortune 500 companies. Explore TechCompiler DataSystems' client portfolio spanning retail, finance, media, and technology.",
    keywords: "clients, portfolio, case studies, partnerships",
  },
  "/Careers": {
    title: `Careers at ${SITE_NAME}`,
    description:
      "Join a team of passionate engineers, designers, and problem solvers at TechCompiler DataSystems. Build impactful global software products and grow your career.",
    keywords: "careers, jobs, hiring, software engineer, remote",
  },
  "/Contact-Us": {
    title: `Contact Us — ${SITE_NAME}`,
    description:
      "Reach the TechCompiler DataSystems team for project inquiries, partnership requests, or general questions about our software development services and solutions.",
    keywords: "contact, get in touch, hire, project inquiry",
  },
  "/ai-agent": {
    title: `AI Agent Solutions — ${SITE_NAME}`,
    description:
      "Deploy intelligent AI agents and workflow automation that augment your team, eliminate manual tasks, and streamline business operations at enterprise scale.",
    keywords: "AI agent, LLM, automation, artificial intelligence, machine learning",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Agent Solutions",
      description: "Custom AI agents built on large language models to automate knowledge work, eliminate manual tasks, and streamline enterprise operations.",
      provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
      serviceType: "Artificial Intelligence",
      areaServed: "Worldwide",
      url: `${BASE_URL}/ai-agent`,
    },
  },
};

/** Resolve the effective meta for a given route path */
export function getRouteMeta(path: string): RouteMeta {
  return { ...SITE_DEFAULTS, ...(routeSeoConfig[path] ?? {}) };
}
