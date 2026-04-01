import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "FULL STACK DEVELOPMENT",
  title: "Full Stack Development",
  subtitle: "Build seamless digital experiences from front to back",
  description: "TechCompiler's full-stack teams design and build production web and mobile applications across React, Angular, Node.js, Django, Spring Boot, and .NET. We handle everything from frontend component architecture and REST or GraphQL API design to database modelling and cloud deployment — delivering complete, tested systems with documented handover. Engagements run on fixed milestones with weekly progress reviews.",
  stats: [
    { value: "100+", label: "Projects Delivered" },
    { value: "92%", label: "Client Retention Rate" },
    { value: "2x", label: "Faster Time to Market" },
  ],

  overviewTitle: "What is Full Stack Development?",
  overviewParagraphs: [
    "Full Stack Development refers to the end-to-end building of web or mobile applications\u2014spanning both the client-side (frontend) and server-side (backend) components. A full stack team is equipped to handle everything from UI design to server logic, APIs, databases, and deployment.",
    "This enables businesses to streamline development, reduce cross-team dependencies, and ship fully integrated solutions with less coordination overhead.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "A comprehensive suite of frontend, backend, and full application development services.",
  services: [
    { name: "Frontend Development", subtitle: "Craft stunning and responsive user interfaces", description: "We design intuitive and performant user experiences using the latest frontend technologies such as React, Angular, and Vue.js.", image: "/images/frontend-dev.png" },
    { name: "Backend Development", subtitle: "Robust server-side logic & APIs", description: "Our team builds scalable backends using Node.js, Spring Boot, Django, and more, ensuring secure, efficient, and flexible architectures.", image: "/images/backend-dev.png" },
    { name: "Database Design & Integration", subtitle: "Data that powers your application", description: "We work with SQL and NoSQL databases to structure, optimize, and manage your data\u2014ensuring seamless access and performance.", image: "/images/database-dev.png" },
    { name: "End-to-End Web & App Development", subtitle: "From concept to launch", description: "Whether you're building a dynamic web platform or a cross-platform mobile app, we deliver full-stack solutions tailored to your needs.", image: "/images/fullstack-end-to-end.png" },
  ],

  whyTitle: "Why Full Stack Matters",
  whyCards: [
    { title: "Faster Development", desc: "Unified teams working across the stack reduce coordination delays." },
    { title: "Cost-Effective", desc: "One team handles both frontend and backend, reducing overhead." },
    { title: "Better Collaboration", desc: "Full stack developers see the full picture and improve integration." },
    { title: "Greater Agility", desc: "Quickly adapt to changes across layers of the application." },
  ],

  workflowTitle: "Our Full Stack Development Process",
  workflowSteps: [
    { step: "Requirement Gathering", desc: "Understand client goals, user needs, and tech requirements." },
    { step: "UI/UX & Architecture", desc: "Design interfaces and choose the right frontend-backend stack." },
    { step: "Development & Integration", desc: "Code frontend, backend, APIs, and integrate database systems." },
    { step: "Testing & QA", desc: "Ensure performance, security, and cross-device compatibility." },
    { step: "Deployment & Support", desc: "Deploy the application and provide ongoing maintenance." },
  ],

  techTitle: "Industries We Serve",
  techItems: ["SaaS", "eCommerce", "Healthcare", "Finance", "Education", "Real Estate", "Travel", "Media & Entertainment"],

  whyUsTitle: "Why Choose Us?",
  whyUsCards: [
    { title: "Cross-Functional Teams", desc: "Our developers are skilled across the stack\u2014ensuring faster delivery and seamless coordination." },
    { title: "Future-Proof Solutions", desc: "We use modern, scalable technologies that ensure long-term maintainability and growth." },
  ],
};

const FullStackDevelopment = () => <ServicePageLayout data={data} />;

export default FullStackDevelopment;