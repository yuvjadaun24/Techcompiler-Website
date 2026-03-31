import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import JavaScriptImg from "@/assets/Technologies Icon/JavaScriptImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "JavaScript Development Services",
  subtitle: "Building innovative solutions with JavaScript",
  description:
    "Our expert JavaScript developers create cutting-edge web and mobile applications tailored to your specific business needs. Leveraging years of JavaScript experience, our developers implement proven architectural patterns and industry best practices to craft intuitive JavaScript-powered digital products.",
  stats: [
    { value: "85", label: "JavaScript Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: JavaScriptImg,
  overviewSections: [
    {
      title: "What is JavaScript development?",
      paragraphs: [
        "JavaScript is a popular programming language that enables developers to build dynamic, cross-platform, and fully functional web/mobile applications. It is widely used in the development landscape because of its lightweight framework, making it easier to run on any device without needing a lot of processing power.",
        "Leveraging the JavaScript ecosystem, our team of developers creates everything from fast response interfaces to fully-featured applications. Using JavaScript's capabilities and expertise, we have helped thousands of businesses create powerful digital products.",
      ],
    },
    {
      title: "Harness JavaScript development services to craft innovative solutions",
      paragraphs: [
        "Our JavaScript team upholds the highest performance, security, and scalability standards to deliver long-lasting value. We leverage extensive unit testing, effective deployment strategies, and robust CMS integrations for solutions built to thrive over time.",
        "With universal browser support, immense community adoption, and extensive tools for rapid development across the full stack, JavaScript is uniquely positioned as the ideal language for web and app creation now and for years to come.",
      ],
    },
    {
      title: "Crafting ground-breaking digital products using TechCompiler's JavaScript capabilities",
      paragraphs: [
        "Leveraging our JavaScript capabilities, we are an expert in creating unique, scalable, and robust web, mobile, and desktop apps spanning industries, from media to finance, e-commerce to insurance, and logistics to healthcare.",
      ],
    },
    {
      title: "Unveiling how our development process works",
      paragraphs: [
        "Our specialists thoroughly analyze your business objectives, user needs, management priorities, and technical considerations to inform solution planning and design. We identify pain points, desired metrics, and outcomes.",
        "With requirements established, we architect human-centric solutions using modern JS capabilities for efficiency, resilience, and scale. Our architects blueprint modular components, data flow modeling, UX guardrails, and technical specification documents as the project's foundation.",
        "Our design team translates defined requirements into intuitive, aesthetic experiences realized in user journeys, wireframes, interactive prototypes, and visually stunning mockups optimized to accelerate user outcomes.",
        "With UX guardrails set, our expert development teams implement high-performance logic using modern JS frameworks like React, Angular, and Vue alongside cloud services tailored to project needs.",
        "Apart from development, we also ensure that every solution undergoes rigorous automated testing and manual validation before deployment. Our specialist DevOps engineers leverage leading CI/CD pipelines to enable rapid iteration.",
        "We also provide support for continuous monitoring, maintenance, and feature upgrades to guarantee your solution's integrity and business impact over time.",
      ],
    },
  ],
  featuresTitle: "Here are a few reasons developers consistently choose JS",
  features: [
    { label: "Ubiquitous browser runtimes", text: "JavaScript runs in all modern browsers, ensuring compatibility and accessibility." },
    { label: "Massive open-source libraries", text: "A vast ecosystem of libraries and frameworks accelerates development." },
    { label: "Full stack capabilities", text: "JavaScript can be used for both front-end and back-end development." },
    { label: "Cloud native benefits", text: "JavaScript applications can easily integrate with cloud services for scalability." },
  ],
  servicesHeading: "Explore our range of JavaScript development services",
  services: [
    {
      name: "Custom JavaScript Development",
      subtitle: "Building innovative solutions with JavaScript",
      description:
        "Our expert JavaScript developers create cutting-edge web and mobile applications tailored to your specific business needs. Leveraging years of JavaScript experience, our developers implement proven architectural patterns and industry best practices.",
      image: "/images/javascript/custom.png",
    },
    {
      name: "JavaScript UI/UX Development",
      subtitle: "Intuitive, user-centric interfaces that enhance engagement",
      description:
        "User experience is crucial for any application. Our creative JavaScript developers design intuitive, user-centric interfaces that enhance engagement and drive action. We combine aesthetic design sensibilities with UX best practices.",
      image: "/images/javascript/uiux.png",
    },
    {
      name: "JavaScript Web Development",
      subtitle: "Dynamic web apps optimized for modern needs",
      description:
        "Our JavaScript web development team builds dynamic web apps optimized for the modern internet age. By leveraging JavaScript's capabilities, we create seamless web experiences where content updates instantly without page refreshes.",
      image: "/images/javascript/web.png",
    },
    {
      name: "JavaScript Mobile App Development",
      subtitle: "Cross-platform mobile apps with native quality",
      description:
        "Enable mobile access to your web app's full functionality with our JavaScript mobile development services. Our experts build cross-platform apps compatible across iOS and Android, ensuring a native-quality experience.",
      image: "/images/javascript/mobile.png",
    },
    {
      name: "JavaScript Enterprise App Development",
      subtitle: "Scalable solutions for enterprise growth",
      description:
        "We develop full-fledged JavaScript enterprise solutions designed from scratch to scale with your rapid growth. Our JavaScript developers architect robust application structures and reusable components.",
      image: "/images/javascript/enterprise.png",
    },
    {
      name: "JavaScript Migration and Porting Services",
      subtitle: "Modernize your legacy applications",
      description:
        "Evolve legacy applications with our JavaScript migration services. Our specialists seamlessly transition apps from other frameworks to modern JavaScript architecture for speed and scalability.",
      image: "/images/javascript/migration.png",
    },
    {
      name: "JavaScript Consulting Services",
      subtitle: "Expert guidance for your JavaScript projects",
      description:
        "We offer expert JavaScript consulting services covering your app's planning, architecture, integrations, and more. Our JavaScript specialists assess your current landscape and provide candid recommendations to maximize business impact.",
      image: "/images/javascript/consulting.png",
    },
  ],
};

const JavaScript = () => <TechPageLayout data={data} />;

export default JavaScript;
