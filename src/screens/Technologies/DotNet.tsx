import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import DotNetImg from "@/assets/Technologies Icon/DotNetImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: ".NET Development Services",
  subtitle: "Delivering reliable, scalable, process-oriented solutions with .NET services",
  description:
    "Unlock the full potential of your digital endeavors with our comprehensive .NET development solutions. Crafted by seasoned professionals, our services guarantee robust, scalable, and efficient solutions tailored to your unique needs. From mission-critical applications to intuitive portals and powerful BI tools to interactive chatbots and dynamic CRM systems, we cover a wide spectrum of development needs.",
  stats: [
    { value: "85", label: ".NET Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: DotNetImg,
  overviewSections: [
    {
      title: "What is .NET development?",
      paragraphs: [
        ".NET development refers to the creation of software applications using the .NET framework, a powerful, open-source platform developed by Microsoft. It provides developers with a versatile and cross-platform environment for building a wide range of applications, including web applications, APIs, microservices, desktop applications, and more. .NET offers numerous advantages, including high performance, scalability, and support for modern development practices like containerization and cloud-native architectures.",
      ],
    },
    {
      title: "Unveiling how our development process works",
      paragraphs: [
        "We begin with a comprehensive analysis of your project requirements and objectives. Our skilled team of .NET specialists then collaborates closely with you to define a tailored development roadmap. Through iterative prototyping and agile methodologies, we ensure flexibility and transparency at every stage. We prioritize modular development, enabling scalable and maintainable solutions. Rigorous testing and quality assurance protocols guarantee the reliability and performance of the final product.",
      ],
    },
    {
      title: "Let TechCompiler be your .NET development partner",
      paragraphs: [
        "TechCompiler has years of experience building robust and scalable .NET applications. Our expert developers are well-versed in the latest .NET and .NET Core technologies to deliver solutions tailored to your business needs. We follow agile methodologies and industry best practices for .NET app development and provide ongoing maintenance.",
        "Let TechCompiler leverage the power of .NET to develop the custom solution your business demands. Contact us today to transform your idea into reality.",
      ],
    },
  ],
  servicesHeading: "Explore our .NET development services",
  services: [
    {
      name: "Custom .NET Development",
      subtitle: "Delivering reliable, scalable, process-oriented solutions",
      description:
        "Unlock the full potential of your digital endeavors with our comprehensive .NET development solutions. Crafted by seasoned professionals, our services guarantee robust, scalable, and efficient solutions tailored to your unique needs.",
      image: "/images/dotnet/custom.png",
    },
    {
      name: "Web App Development",
      subtitle: "Dynamic and interactive web applications",
      description:
        "Our web app development services harness the power of .NET to create dynamic and interactive web applications that engage users and drive business outcomes. Leveraging the latest technologies and industry best practices, we craft scalable and responsive web solutions.",
      image: "/images/dotnet/web-app-development.png",
    },
    {
      name: "3rd Party Integrations",
      subtitle: "Seamless integration for enhanced productivity",
      description:
        "Streamline your business processes and enhance productivity with our expert 3rd party integration services. We specialize in seamlessly integrating third-party systems and services into your .NET applications.",
      image: "/images/dotnet/third-party-integrations.png",
    },
    {
      name: "Cloud App Development",
      subtitle: "Flexible and scalable cloud solutions",
      description:
        "Embrace the flexibility and scalability of cloud computing with our cloud app development services. Our .NET experts leverage cloud-native technologies to build highly scalable and resilient applications.",
      image: "/images/dotnet/cloud-app-development.png",
    },
    {
      name: "ASP .NET Core Migration",
      subtitle: "Future-proof your applications",
      description:
        "Stay ahead of the curve and future-proof your applications with our ASP .NET Core migration services. Whether you are migrating legacy ASP .NET applications or upgrading to the latest version, our experienced team can help.",
      image: "/images/dotnet/aspnet-core-migration.png",
    },
    {
      name: "Application Maintenance",
      subtitle: "Comprehensive support for your .NET applications",
      description:
        "We strengthen the security and performance of your .NET applications with our comprehensive application maintenance services. Our team of experienced .NET developers provides ample support and maintenance.",
      image: "/images/dotnet/application-maintenance.png",
    },
    {
      name: "Web API Development",
      subtitle: "Unlock the power of data with robust APIs",
      description:
        "Unlock the power of data and enable seamless communication between your applications with our Web API development services. Our .NET experts specialize in designing and developing robust and scalable Web APIs.",
      image: "/images/dotnet/web-api-development.png",
    },
  ],
};

const DotNet = () => <TechPageLayout data={data} />;

export default DotNet;
