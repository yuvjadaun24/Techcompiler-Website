import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import VueJSImg from "@/assets/Technologies Icon/VueJSImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "Vue.js Development Services",
  subtitle: "Progressive web applications with Vue.js",
  description:
    "Our expert Vue.js developers create cutting-edge web applications tailored to your specific business needs. Leveraging years of Vue.js experience, our developers implement proven architectural patterns and industry best practices to craft intuitive, high-performance Vue-powered digital products.",
  stats: [
    { value: "72", label: "Vue Projects" },
    { value: "97%", label: "Positive Feedback" },
    { value: "4.8?", label: "Average Rating" },
  ],
  heroImage: VueJSImg,
  overviewSections: [
    {
      title: "What is Vue.js development?",
      paragraphs: [
        "Vue.js is a progressive JavaScript framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. Its core library focuses on the view layer, making it easy to integrate with other libraries or existing projects.",
        "Our Vue.js development team builds dynamic web applications that combine Vue's simplicity with powerful capabilities. We leverage the Vue ecosystem including Vue Router, Vuex/Pinia, and Nuxt.js to deliver complete, production-ready solutions.",
      ],
    },
    {
      title: "Harness Vue.js development services to craft innovative solutions",
      paragraphs: [
        "Our Vue.js team upholds the highest performance, security, and scalability standards to deliver long-lasting value. We leverage comprehensive testing, effective deployment strategies, and robust third-party integrations.",
        "Vue.js combines an approachable learning curve with powerful capabilities for production applications, making it an excellent choice for projects ranging from simple interactive UIs to complex single-page applications.",
      ],
    },
    {
      title: "Crafting digital products using TechCompiler's Vue.js capabilities",
      paragraphs: [
        "Leveraging our Vue.js capabilities, we create unique, scalable, and robust web applications spanning industries, from media to finance, e-commerce to insurance, and logistics to healthcare.",
      ],
    },
    {
      title: "Our Vue.js development process",
      paragraphs: [
        "We begin with a thorough analysis of your business objectives and user needs, then architect a Vue.js solution tailored to your requirements. Our team delivers through iterative development cycles with regular client feedback and collaboration.",
      ],
    },
  ],
  featuresTitle: "Here are a few benefits of undertaking our Vue services",
  features: [
    { label: "Single-file components", text: "Vue's single-file components encapsulate template, logic, and styles for clean, maintainable code." },
    { label: "Rigorous testing", text: "We implement comprehensive testing strategies to ensure your Vue application is reliable and bug-free." },
    { label: "Nuxt.js integration", text: "Leverage Nuxt.js for server-side rendering, static site generation, and improved SEO." },
    { label: "Vue ecosystem", text: "Our team leverages the full Vue ecosystem including Vue Router, Pinia, and Vue DevTools." },
    { label: "Responsive design", text: "All Vue applications we build are fully responsive, delivering great experiences across all devices." },
    { label: "Continuous support", text: "We provide ongoing maintenance and support to keep your Vue application running optimally." },
  ],
  featuresSuffix:
    "We make the most out of the Vue technology and its supporting libraries to deliver digital products that exceed expectations and drive measurable business outcomes.",
  servicesHeading: "Explore our range of Vue development services",
  services: [
    {
      name: "Custom Vue.js Development",
      subtitle: "Bespoke Vue applications for your business",
      description:
        "We build custom Vue.js applications tailored to your unique business requirements. Our developers create scalable, high-performance applications using Vue's progressive architecture and modern JavaScript features.",
      image: "/images/vuejs/custom.png",
    },
    {
      name: "Vue.js UI/UX Development",
      subtitle: "Intuitive and beautiful Vue interfaces",
      description:
        "Our design and development team creates stunning Vue.js user interfaces that combine aesthetic excellence with usability. We build component libraries and design systems that ensure consistency across your application.",
      image: "/images/vuejs/uiux.png",
    },
    {
      name: "Vue.js Web Application Development",
      subtitle: "Dynamic SPAs and web platforms",
      description:
        "Our Vue.js web development services deliver dynamic single-page applications and web platforms. We leverage Vue's reactivity system and component architecture to build fast, maintainable web solutions.",
      image: "/images/vuejs/web.png",
    },
    {
      name: "Nuxt.js Development",
      subtitle: "SSR and SSG with Nuxt.js",
      description:
        "We build performant, SEO-friendly applications using Nuxt.js, Vue's powerful meta-framework. Our Nuxt.js solutions leverage server-side rendering and static site generation for optimal performance and discoverability.",
      image: "/images/vuejs/nuxt.png",
    },
    {
      name: "Vue.js Enterprise Development",
      subtitle: "Scalable enterprise Vue solutions",
      description:
        "We develop enterprise-grade Vue.js applications with robust architecture, state management, and integration capabilities. Our solutions are designed to scale with your organization and integrate with enterprise systems.",
      image: "/images/vuejs/enterprise.png",
    },
    {
      name: "Vue.js Migration Services",
      subtitle: "Modernize with Vue.js",
      description:
        "Our Vue.js migration specialists help you transition existing applications to Vue, whether migrating from older frameworks or upgrading from Vue 2 to Vue 3. We ensure a smooth transition with minimal disruption.",
      image: "/images/vuejs/migration.png",
    },
    {
      name: "Vue.js Consulting",
      subtitle: "Expert Vue.js architectural guidance",
      description:
        "Our Vue.js consultants provide expert guidance on architecture, best practices, performance optimization, and technical strategy. We help you make informed decisions to maximize your Vue.js investment.",
      image: "/images/vuejs/consulting.png",
    },
  ],
};

const VueJS = () => <TechPageLayout data={data} />;

export default VueJS;
