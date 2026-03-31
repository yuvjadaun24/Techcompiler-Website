import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import NodeJSImg from "@/assets/Technologies Icon/NodeJSImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "Node.js Development Services",
  subtitle: "Scalable and high-performance Node.js applications",
  description:
    "Our expert Node.js developers create cutting-edge web and mobile applications tailored to your specific business needs. Leveraging years of Node.js experience, our developers implement proven architectural patterns and industry best practices to craft intuitive Node.js-powered digital products.",
  stats: [
    { value: "85", label: "Node.js Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: NodeJSImg,
  overviewSections: [
    {
      title: "What is Node.js development?",
      paragraphs: [
        "Node.js is a powerful, open-source, server-side JavaScript runtime environment that enables developers to build scalable network applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications.",
        "Our Node.js development team builds robust backend systems, APIs, and microservices that power modern applications. With deep expertise in Node.js frameworks like Express, Nest.js, and Fastify, we deliver high-performance server-side solutions.",
      ],
    },
    {
      title: "Harness Node.js development services to craft innovative solutions",
      paragraphs: [
        "Our Node.js team upholds the highest performance, security, and scalability standards to deliver long-lasting value. We leverage extensive unit testing, effective deployment strategies, and robust integrations for solutions built to thrive over time.",
        "With its non-blocking architecture, Node.js excels at handling thousands of concurrent connections, making it ideal for real-time applications, streaming services, and microservices architectures.",
      ],
    },
    {
      title: "Crafting ground-breaking digital products using TechCompiler's Node.js capabilities",
      paragraphs: [
        "Leveraging our deep Node.js expertise, we create unique, scalable, and robust backend architectures spanning industries, from media to finance, e-commerce to insurance, and logistics to healthcare.",
      ],
    },
  ],
  servicesHeading: "Explore our Node.js development services",
  services: [
    {
      name: "Custom Node.js Development",
      subtitle: "Tailor-made Node.js solutions for your business",
      description:
        "Our expert Node.js developers create cutting-edge applications tailored to your specific business needs. We implement proven architectural patterns and industry best practices to craft high-performance Node.js-powered solutions.",
      image: "/images/nodejs/custom.png",
    },
    {
      name: "Node.js API Development",
      subtitle: "Robust RESTful and GraphQL APIs",
      description:
        "We specialize in building robust, scalable APIs using Node.js. From RESTful to GraphQL APIs, our developers create the connective tissue that powers your applications and enables seamless data exchange.",
      image: "/images/nodejs/api.png",
    },
    {
      name: "Node.js Microservices Development",
      subtitle: "Scalable microservices architectures",
      description:
        "Break down monolithic applications into scalable, maintainable microservices with our Node.js expertise. We architect distributed systems that improve scalability, resilience, and development velocity.",
      image: "/images/nodejs/microservices.png",
    },
    {
      name: "Real-time Application Development",
      subtitle: "Live, interactive application experiences",
      description:
        "Leverage Node.js' event-driven architecture to build real-time applications including chat apps, live dashboards, collaborative tools, and streaming services that deliver engaging user experiences.",
      image: "/images/nodejs/realtime.png",
    },
    {
      name: "Node.js Enterprise Solutions",
      subtitle: "Scalable enterprise-grade applications",
      description:
        "We develop full-fledged Node.js enterprise solutions designed to scale with your rapid growth. Our developers architect robust application structures and leverage enterprise-grade frameworks.",
      image: "/images/nodejs/enterprise.png",
    },
    {
      name: "Node.js Migration Services",
      subtitle: "Modernize your legacy backend systems",
      description:
        "Evolve legacy architectures with our Node.js migration services. Our specialists seamlessly transition existing backend systems to Node.js for improved performance, scalability, and maintainability.",
      image: "/images/nodejs/migration.png",
    },
    {
      name: "Node.js Consulting",
      subtitle: "Expert architectural guidance",
      description:
        "We offer expert Node.js consulting covering architecture design, best practices, performance optimization, and security. Our specialists assess your current landscape and provide recommendations to maximize business impact.",
      image: "/images/nodejs/consulting.png",
    },
  ],
};

const NodeJS = () => <TechPageLayout data={data} />;

export default NodeJS;
