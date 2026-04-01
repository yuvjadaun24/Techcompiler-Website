import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import appServices from "../../../assets/app-services.png";

const data: ServicePageData = {
  eyebrow: "APPLICATION SERVICES",
  title: "Application Services",
  subtitle: "End-to-end web and application development that ships on schedule and holds up under load.",
  description: "TechCompiler builds production-grade web and mobile applications for clients across North America, India, and Japan. Our teams work in React, Angular, Vue, Node.js, and .NET — handling everything from architecture design to CI/CD and post-launch support. We've shipped 190+ projects across e-commerce, SaaS, fintech, and media verticals, with engagements structured around fixed milestones and transparent weekly reporting.",
  stats: [
    { value: "45+", label: "Satisfied Clients" },
    { value: "100%", label: "Delivery Rate" },
    { value: "190+", label: "Projects Completed" },
  ],
  heroImage: appServices,
  useNav: true,

  overviewTitle: "What we build",
  overviewParagraphs: [
    "Application development covers the full lifecycle of a software product: scoping requirements, designing system architecture, writing and testing code, and deploying to production. At TechCompiler, that process is owned by senior engineers — not handed off to junior staff after the contract is signed.",
    "Every engagement starts with a two-week discovery phase. We review your existing codebase, map integration points, agree on the tech stack, and deliver a scope document before a line of new code is written. That upfront work eliminates the ambiguity that causes most projects to overrun.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Custom web and application development across the full stack.",
  services: [
    { name: "Custom Web Applications", subtitle: "Built for your workflow, not adapted from a template", description: "We design and build web applications from scratch — React or Angular frontends, Node.js or .NET backends, and databases sized to your actual traffic. Every codebase is documented, tested, and handed over with full source control history.", image: "/images/branding-sample.png" },
    { name: "E-Commerce Development", subtitle: "Storefronts that convert and hold up under peak load", description: "From bespoke WooCommerce and Magento builds to custom React storefronts, we've handled catalogues with 50,000+ SKUs, multi-currency checkouts, and third-party ERP integrations.", image: "/images/branding-sample.png" },
    { name: "API & Integration Services", subtitle: "Connect your tools without fracturing your data", description: "We design RESTful and GraphQL APIs and build the integrations that tie together your CRM, ERP, payment gateways, and third-party platforms — with error handling and monitoring included from day one.", image: "/images/branding-sample.png" },
    { name: "Web Portal & CMS Development", subtitle: "Content and data your team can manage without a developer", description: "Customer portals, admin dashboards, and headless CMS builds with Contentful, Sanity, or Strapi. Role-based access, audit logging, and performance budgets baked into every delivery.", image: "/images/branding-sample.png" },
  ],

  whyTitle: "Why Application Services Matter",
  whyCards: [
    { title: "Tailored Business Solutions", desc: "We don't offer cookie-cutter apps. Every product is built specifically for your business model and goals." },
    { title: "Speed, Security, Scale", desc: "Optimized performance, hardened security, and horizontal scalability — built into every layer of your application from the start." },
    { title: "Intelligent Interfaces", desc: "We merge clean UI with AI to make smart, adaptive applications that users love to interact with." },
    { title: "Future-Proof Tech", desc: "We use scalable stacks and modular architecture, so your application keeps up with tomorrow's needs." },
  ],

  workflowTitle: "Our Proven Workflow",
  workflowSteps: [
    { step: "Discovery & Planning", desc: "We begin by understanding your business objectives and outlining the technical architecture needed." },
    { step: "Design & Prototyping", desc: "Crafting intuitive user interfaces with wireframes and interactive mockups for feedback-driven iteration." },
    { step: "Agile Development", desc: "We execute in sprints using scalable, modular code and constant integration to ensure on-time delivery." },
    { step: "Testing & QA", desc: "Comprehensive manual and automated testing ensures your app is bug-free, fast, and production-ready." },
    { step: "Launch & Support", desc: "We deploy, monitor performance, and offer continuous improvements based on real user feedback." },
  ],

  techTitle: "Our Tech Stack",
  techItems: ["React.js", "Next.js", "Node.js", "Spring Boot", "Tailwind CSS", "MongoDB", "MySQL", "Firebase", "Figma", "AWS", "Framer Motion", "RESTful APIs"],

  whyUsTitle: "Why Work With Us?",
  whyUsCards: [
    { title: "We Think Like Partners", desc: "Collaboration is key. We align closely with your team and vision to ensure every sprint adds value." },
    { title: "Design x Engineering", desc: "Our process is where design and development go hand-in-hand, delivering experiences that look and perform beautifully." },
  ],
};

const TempWebDev = () => <ServicePageLayout data={data} />;

export default TempWebDev;
