import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import ReactNativeImg from "@/assets/Technologies Icon/ReactNativeImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "React Native Development Services",
  subtitle: "Cross-platform mobile apps with React Native",
  description:
    "Our expert React Native developers create cutting-edge cross-platform mobile applications tailored to your specific business needs. Leveraging years of React Native experience, our developers implement proven architectural patterns and industry best practices to craft intuitive mobile experiences.",
  stats: [
    { value: "80", label: "React Native Projects" },
    { value: "95%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: ReactNativeImg,
  overviewSections: [
    {
      title: "What is React Native development?",
      paragraphs: [
        "React Native is a popular open-source framework maintained by Facebook that enables developers to build cross-platform mobile applications using JavaScript and React. It renders native components, delivering truly native performance and user experience on both iOS and Android from a single codebase.",
        "Our React Native development team builds high-quality mobile applications that look and feel native on every platform. Leveraging React Native's capabilities, we have helped businesses of all sizes launch successful mobile apps.",
      ],
    },
    {
      title: "Harness React Native services to craft innovative mobile solutions",
      paragraphs: [
        "Our React Native team upholds the highest performance, security, and user experience standards to deliver long-lasting value. We leverage comprehensive testing, effective deployment strategies via CI/CD, and robust third-party integrations.",
        "With its write-once deploy-anywhere approach and native rendering, React Native dramatically reduces development time and cost while delivering the quality users expect.",
      ],
    },
    {
      title: "Core capabilities of our React Native development team",
      paragraphs: [
        "Our React Native developers possess deep expertise across the entire mobile development lifecycle: from initial architecture design through development, testing, and ongoing maintenance. We specialize in performance optimization, smooth animations, and native module integrations.",
      ],
    },
    {
      title: "Crafting ground-breaking mobile products with TechCompiler's React Native expertise",
      paragraphs: [
        "Leveraging our React Native capabilities, we create unique, scalable, and robust mobile applications spanning industries, from media to finance, e-commerce to insurance, and logistics to healthcare.",
      ],
    },
    {
      title: "Our React Native development process",
      paragraphs: [
        "Our development process begins with a thorough discovery phase where we analyze your business objectives, target users, and technical requirements. We then architect a solution that maximizes React Native's strengths for your specific use case.",
        "Following architecture approval, our team implements the application with a focus on performance and code quality, followed by rigorous testing across a wide range of real devices before deployment.",
      ],
    },
  ],
  servicesHeading: "Explore our React Native development services",
  services: [
    {
      name: "Custom React Native App Development",
      subtitle: "Tailor-made mobile applications for your business",
      description:
        "We build custom React Native mobile applications designed around your specific business needs. Our developers create feature-rich, performant apps that deliver native-quality experiences across iOS and Android.",
      image: "/images/reactnative/custom.png",
    },
    {
      name: "React Native UI/UX Design",
      subtitle: "Beautiful and intuitive mobile interfaces",
      description:
        "Our design team creates stunning, user-centric mobile interfaces following platform-specific design guidelines. We ensure your app looks and feels native on every device while maintaining your brand identity.",
      image: "/images/reactnative/uiux.png",
    },
    {
      name: "React Native Enterprise Development",
      subtitle: "Scalable mobile solutions for enterprise",
      description:
        "We build enterprise-grade React Native applications with robust security, scalability, and integration capabilities. Our solutions connect seamlessly with your existing enterprise systems and workflows.",
      image: "/images/reactnative/enterprise.png",
    },
    {
      name: "React Native Migration Services",
      subtitle: "Transition your existing app to React Native",
      description:
        "Migrate your existing iOS or Android application to React Native for reduced maintenance overhead and broader reach. Our migration specialists ensure a smooth transition with feature parity and improved performance.",
      image: "/images/reactnative/migration.png",
    },
    {
      name: "React Native App Testing",
      subtitle: "Comprehensive quality assurance",
      description:
        "Our QA team performs comprehensive testing of your React Native application across a wide range of devices, OS versions, and network conditions to ensure reliability, performance, and an excellent user experience.",
      image: "/images/reactnative/testing.png",
    },
    {
      name: "React Native Consulting",
      subtitle: "Expert mobile strategy and architecture guidance",
      description:
        "Our React Native consultants help you navigate technical decisions, architecture choices, and best practices. We assess your current situation and provide strategic recommendations to maximize your mobile investment.",
      image: "/images/reactnative/consulting.png",
    },
  ],
};

const ReactNative = () => <TechPageLayout data={data} />;

export default ReactNative;
