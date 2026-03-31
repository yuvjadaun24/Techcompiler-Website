import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import HTML5Img from "@/assets/Technologies Icon/HTML5Img.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "HTML5 Development Services",
  subtitle: "Crafting exceptional digital experiences with HTML5",
  description:
    "Our HTML5 experts craft sites and apps, all while blending functionality with aesthetically pleasing interfaces. Choose our balanced HTML5 approach to build ambitious digital products with strong foundations.",
  stats: [
    { value: "85", label: "HTML5 Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: HTML5Img,
  overviewSections: [
    {
      title: "What is HTML5 development?",
      paragraphs: [
        "HTML5 development refers to building websites, web applications, and mobile apps utilizing the latest markup capabilities for greater versatility. HTML5 introduced major improvements like new multimedia elements for responsive images, SVG graphics, and accessible video streams.",
        "It enabled offline storage, drag and drop, geolocation, and other advanced functionalities through JavaScript APIs. The markup evolved to incorporate complex data visualizations, 2D/3D animations, math equations, and WebGL graphics for games.",
      ],
    },
    {
      title: "HTML5 development services to build dynamic websites and applications",
      paragraphs: [
        "With over a thousand complex HTML5 projects delivered, TechCompiler offers unmatched web development expertise honed from building ambitious yet resilient sites and apps at tremendous scales. We house renowned HTML5 specialists integrating emerging capabilities responsibly by applying industry best practices.",
        "Our refined process emphasizes performance optimizations so nothing hinders user engagement. We fix vital web issues rapidly to retain profound site integrity across iterations.",
      ],
    },
    {
      title: "Unveiling how our development process works",
      paragraphs: [
        "We collaborate early with stakeholders to grasp objectives and pain points. Then, we provide solutions that balance pragmatism and innovation. Our streamlined process actualizes HTML5's potential through focused metrics guiding data-driven refinements toward delighting users.",
      ],
    },
  ],
  servicesHeading: "Explore our range of HTML5 development services",
  services: [
    {
      name: "Custom HTML5 Development",
      subtitle: "Crafting exceptional digital experiences with HTML5",
      description:
        "Our HTML5 experts craft sites and apps, all while blending functionality with aesthetically pleasing interfaces. Choose our balanced HTML5 approach to build ambitious digital products with strong foundations.",
      image: "/images/html5/custom.png",
    },
    {
      name: "HTML5 Website Development",
      subtitle: "Specialized HTML5 web development for conversion success",
      description:
        "Get specialized HTML5 web development with our technical leadership positioning sites for conversion success and growth. We architect resilient systems to support towering ambitions with maintainability built-in.",
      image: "/images/html5/web-development.png",
    },
    {
      name: "HTML5 Website Design",
      subtitle: "Transforming creative visions into high-performing responsive code",
      description:
        "Great web design blends engineering and art into delightful digital experiences. Our HTML5 website design services transform creative visions into high-performing responsive code painstakingly optimized for every viewport.",
      image: "/images/html5/web-design.png",
    },
    {
      name: "Responsive Design",
      subtitle: "Tailoring flawless experiences across devices",
      description:
        "With shifting consumer behaviors across devices, responsive web design tailors flawless experiences. Our HTML5 responsive services harness CSS Flexbox and Grid for intelligent content reflowing between breakpoints.",
      image: "/images/html5/responsive-design.png",
    },
    {
      name: "Mobile Web Development",
      subtitle: "Building friendly interfaces for hypermobile customers",
      description:
        "Meet today's hypermobile customers where they are with mobile sites built for multiple usage. Our HTML5 mobile web development builds friendly interfaces and interactive components while sustaining speed.",
      image: "/images/html5/mobile-web.png",
    },
    {
      name: "Cross-Platform Development",
      subtitle: "High-performing hybrid mobile apps",
      description:
        "Get the best web flexibility and reliability through our substantial React Native framework for high-performing hybrid mobile apps. Leverage existing web codebases for substantial reuse across platforms.",
      image: "/images/html5/cross-platform.png",
    },
    {
      name: "Web Tool Integration",
      subtitle: "Integrating leading web APIs into your HTML5 apps",
      description:
        "Simplify access to essential functionalities your users want by integrating leading web APIs into your HTML5 web apps and sites. We effortlessly embed maps, chatbots, payments, social streams, real-time notifications, and more.",
      image: "/images/html5/web-tool-integration.png",
    },
  ],
};

const HTML5 = () => <TechPageLayout data={data} />;

export default HTML5;
