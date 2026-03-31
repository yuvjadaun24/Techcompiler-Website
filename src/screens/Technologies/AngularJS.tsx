import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import AngularJSImg from "@/assets/Technologies Icon/angularjs.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "Angular JS",
  subtitle: "AngularJS Development Services",
  description:
    "Expedite business growth with feature-packed, robust, and dynamic AngularJS applications. Make TechCompiler your AngularJS application development partner to build business-critical, cross-platform applications for websites and mobile devices. Our certified developers are well-versed in the AngularJS framework and its development cycles, so you can always count on us to realize your unique vision.",
  stats: [
    { value: "65", label: "Design Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: AngularJSImg,
  overviewSections: [
    {
      title: "What is AngularJS Development?",
      paragraphs: [
        "AngularJS, or Angular, is a popular, open-source framework developers use to create modern applications. This structural framework allows developers to build elegant and robust web/mobile applications. Developed by Google and maintained by seasoned developers, this typescript-based javascript framework allows businesses to build high-performing digital assets to propel innovation and growth.",
        "An angularJS application is composed of modules, controllers, services, filters, and directives. AngularJS development focuses on the model-view-controller (MVC) pattern, which separates application logic from the user interface. Key features include data binding, dependency injection, and directives that help extend HTML with custom attributes and elements.",
        "The goal of angularJS is to simplify both the development and testing of web apps compared to traditional JavaScript. Its emphasis on MVC architecture helps create structured code for dynamic web/mobile application projects.",
      ],
    },
    {
      title: "AngularJS Development Services to Build Next-Gen, High-Performing Applications",
      paragraphs: [
        "Having high-performing, robust, and dynamic web/mobile applications is imperative for businesses that want to grow and evolve. By leveraging our AngularJS development services, businesses can ensure that their new projects function effectively and look aesthetically pleasing.",
        "Our expert developers follow best practices around architecture, testing, and software design to deliver robust, future-ready Angular solutions that focus on reusability, speed, security, and flawless UI/UX.",
        "With over thousands of successful Angular projects delivered and counting, you can choose us as your technology partner to get a fully functional, new-age application that accelerates your business growth through delighted customers.",
      ],
    },
    {
      title: "Choose TechCompiler's AngularJS Capabilities to Elevate Digital Competencies",
      paragraphs: [
        "As a renowned Angular development company, we have hands-on experience, creative vision, and a toolkit of emerging tools and technology to create solutions that help your business stand out in the crowded digital landscape.",
        "Our strict adherence to delivery excellence, customer success, and staying at the forefront of the latest web technologies make us a go-to choice for businesses. Right from creating mockups to deploying the final product, we closely collaborate with our clients.",
      ],
    },
    {
      title: "Unveiling How the Development Process Works",
      paragraphs: [
        "Our seasoned professionals spend time upfront to grasp business workflows, analyze target audiences, identify pain points, and then architect the optimum Angular-based framework focused on user experience, speed, security, and scalability.",
        "Our solutions are not one-size-fits-all but designed thoughtfully based on what works optimally for each client. Additionally, we emphasize transparent communication and prompt support at each step to build trust.",
      ],
    },
  ],
  servicesHeading: "Explore Our Range of AngularJS Services",
  services: [
    {
      name: "AngularJS Consulting Services",
      subtitle: "Strategic guidance for your Angular projects",
      description:
        "When you are confused about your Angular projects and want expert consultation, consider TechCompiler's AngularJS Consulting Services. We offer 360-degree guidance on the best approaches, architecture, and roadmaps for your next-gen Angular web app.",
      image: "/images/angular/consulting.png",
    },
    {
      name: "Custom AngularJS Development",
      subtitle: "Tailored applications that match your business goals",
      description:
        "If you want a feature-packed application that has never been created, then you can use our Custom AngularJS Development services to tailor digital assets that meet your needs and specifications. Our seasoned developers always follow proven coding best practices.",
      image: "/images/angular/custom.png",
    },
    {
      name: "AngularJS API Development Services",
      subtitle: "Goal-oriented APIs to enhance your digital solutions",
      description:
        "As a leading Angular development service provider, we understand the importance of optimal performance on the success of a business, which is why we tailor goal-oriented APIs to expand the functionality of your business offerings.",
      image: "/images/angular/api.png",
    },
    {
      name: "AngularJS Migration Services",
      subtitle: "Seamless migration to the latest Angular version",
      description:
        "We offer AngularJS Migration Services that enable businesses to upgrade their legacy web app to the latest Angular version without hassles. Our team follows a secured approach to migrate your existing Angular app to higher versions.",
      image: "/images/angular/migration.png",
    },
    {
      name: "AngularJS UI/UX Solutions",
      subtitle: "Modern and intuitive interfaces for your apps",
      description:
        "If you want to revamp the look and feel of your application, then you can use our AngularJS UI/UX Solutions. From crafting intuitive and optimized interfaces to leveraging the latest UI libraries like Material Design, Bootstrap, and Angular Material.",
      image: "/images/angular/uiux.png",
    },
    {
      name: "MEAN Stack Development",
      subtitle: "End-to-end JavaScript stack for fast and scalable apps",
      description:
        "We excel in MEAN Stack Development, which combines front-end and back-end JavaScript-based platforms into one consolidated web stack for building fast and scalable solutions.",
      image: "/images/angular/meanstack.png",
    },
  ],
};

const AngularJSDevelopment = () => <TechPageLayout data={data} />;

export default AngularJSDevelopment;
