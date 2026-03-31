import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import appServices from "../../../assets/app-services.png";

const data: ServicePageData = {
  eyebrow: "APPLICATION SERVICES",
  title: "Application Services",
  subtitle: "Transforming ideas into reality with our futuristic applications development",
  description: "Elevate your business to new heights with TechCompiler's advanced application development services. Our skilled team harnesses the power of cutting-edge artificial intelligence to craft tailored solutions that cater to your unique requirements. From initial consultation to seamless migration, meticulous implementation, and ongoing support, we meticulously optimize every facet of your custom application for unparalleled success. With a steadfast commitment to addressing your business challenges, we synergize creativity and technical prowess to deliver solutions that catalyze growth and surpass expectations. Collaborate with TechCompiler and embark on a transformative digital odyssey that propels your business to the forefront of innovation.",
  stats: [
    { value: "45+", label: "Satisfied Clients" },
    { value: "100%", label: "Delivery Rate" },
    { value: "190+", label: "Projects Completed" },
  ],
  heroImage: appServices,
  useNav: true,

  overviewTitle: "What is an application development service?",
  overviewParagraphs: [
    "Application improvement offerings discuss with the complete manner of conceptualizing, designing, constructing, checking out, and deploying software programs tailor-made to satisfy specific business needs. These services are provided by skilled professionals who leverage their expertise in software engineering, programming languages, and development methodologies to create robust and scalable applications.",
    "The software improvement procedure normally starts with a detailed evaluation of the customer's requirements, business objectives, and target audience. This preliminary phase includes gathering information, figuring out pain points, and defining the desired capability and functions. Once the necessities are defined, the development team proceeds with the design phase, creating wireframes, user interface mockups, and architectural blueprints.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Empowering brands to grow and share their stories since '18.",
  services: [
    { name: "Branding", subtitle: "Defining your unique identity", description: "Our branding services help create a strong, memorable identity that resonates with your audience, ensuring your brand stands out in a crowded market.", image: "/images/branding-sample.png" },
    { name: "Design", subtitle: "Creating intuitive and stunning visuals", description: "We design sleek and engaging interfaces that combine aesthetics with usability to elevate your product's experience.", image: "/images/branding-sample.png" },
    { name: "Development", subtitle: "Building scalable solutions", description: "From frontend to backend, we craft fast, secure, and responsive web applications tailored to your goals.", image: "/images/branding-sample.png" },
    { name: "Motion", subtitle: "Adding life to your brand", description: "With captivating animations and transitions, we help your digital presence come alive in meaningful ways.", image: "/images/branding-sample.png" },
  ],

  whyTitle: "Why Application Services Matter",
  whyCards: [
    { title: "Tailored Business Solutions", desc: "We don't offer cookie-cutter apps. Every product is built specifically for your business model and goals." },
    { title: "Speed, Security, Scale", desc: "Optimized performance, top-tier data security, and room to grow — all built into every layer of your app." },
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
