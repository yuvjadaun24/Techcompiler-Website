import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import TypeScriptImg from "@/assets/Technologies Icon/TypeScriptImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "TypeScript Development Services",
  subtitle: "Type-safe applications built for scale",
  description:
    "Our expert TypeScript developers create cutting-edge web and mobile applications tailored to your specific business needs. Leveraging years of TypeScript experience, our developers implement proven architectural patterns and industry best practices to craft robust, maintainable TypeScript-powered digital products.",
  stats: [
    { value: "85", label: "TypeScript Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: TypeScriptImg,
  overviewSections: [
    {
      title: "What is TypeScript development?",
      paragraphs: [
        "TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions. It compiles to plain JavaScript and is designed to develop large-scale applications, providing better tooling, earlier error detection, and improved code maintainability.",
        "Our TypeScript development team builds robust web applications, APIs, and enterprise systems that benefit from TypeScript's type safety and developer tooling. We leverage TypeScript across the full stack, from React frontends to Node.js backends.",
      ],
    },
    {
      title: "Harness TypeScript development services to craft innovative solutions",
      paragraphs: [
        "Our TypeScript team upholds the highest quality, security, and scalability standards to deliver long-lasting value. We leverage TypeScript's type system to catch errors early, improve code documentation, and facilitate collaboration across large development teams.",
        "TypeScript's static typing, advanced IDE support, and mature ecosystem make it the preferred choice for serious enterprise applications where code quality and maintainability are paramount.",
      ],
    },
    {
      title: "Building reliable enterprise solutions with TechCompiler's TypeScript expertise",
      paragraphs: [
        "Leveraging our TypeScript capabilities, we create unique, scalable, and robust applications spanning industries. Our TypeScript codebase delivers the confidence needed for rapid feature development without compromising reliability.",
      ],
    },
  ],
  servicesHeading: "Explore our range of TypeScript development services",
  services: [
    {
      name: "Custom TypeScript Development",
      subtitle: "Type-safe solutions built for your business",
      description:
        "We build custom TypeScript solutions designed around your specific business requirements. Our developers leverage TypeScript's type system and modern patterns to create maintainable, scalable applications.",
      image: "/images/typescript/custom.png",
    },
    {
      name: "TypeScript Web Application Development",
      subtitle: "Modern, reliable web applications",
      description:
        "Our TypeScript web development services deliver modern, high-quality web applications. We use TypeScript with leading frameworks like React, Angular, and Vue to build robust front-end applications.",
      image: "/images/typescript/web.png",
    },
    {
      name: "TypeScript Backend Development",
      subtitle: "Strongly-typed server-side solutions",
      description:
        "We build type-safe backend systems using TypeScript with Node.js, NestJS, and other server-side frameworks. Strong typing ensures API contracts are honored and reduces runtime errors in production.",
      image: "/images/typescript/backend.png",
    },
    {
      name: "TypeScript API Development",
      subtitle: "Well-typed APIs for reliable integrations",
      description:
        "Our TypeScript API development services produce well-documented, type-safe APIs that reduce integration errors. We generate types from API schemas to ensure consistency between frontend and backend.",
      image: "/images/typescript/api.png",
    },
    {
      name: "TypeScript Enterprise Development",
      subtitle: "Scalable type-safe enterprise solutions",
      description:
        "We develop enterprise-grade TypeScript applications designed for large teams and complex domains. TypeScript's type system enables confident refactoring and onboarding in enterprise environments.",
      image: "/images/typescript/enterprise.png",
    },
    {
      name: "JavaScript to TypeScript Migration",
      subtitle: "Modernize your JavaScript codebase",
      description:
        "Migrate your existing JavaScript projects to TypeScript with our expert migration services. We incrementally add type safety to your codebase, improving code quality without disrupting ongoing development.",
      image: "/images/typescript/migration.png",
    },
    {
      name: "TypeScript Consulting",
      subtitle: "Expert TypeScript architecture and strategy",
      description:
        "Our TypeScript consultants help you adopt TypeScript effectively, from type system design to migration strategies and best practices. We provide guidance to maximize the productivity and quality benefits of TypeScript.",
      image: "/images/typescript/consulting.png",
    },
  ],
};

const TypeScriptDevelopment = () => <TechPageLayout data={data} />;

export default TypeScriptDevelopment;
