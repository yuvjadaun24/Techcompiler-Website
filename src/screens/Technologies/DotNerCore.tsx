import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import DotNetCoreImg from "@/assets/Technologies Icon/DotNetCoreImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: ".NET Core Development Services",
  subtitle: "Unleash the power of .NET Core to build reliable and scalable solutions",
  description:
    "Elevate your business with our comprehensive .NET Core development services. Our experienced team harnesses the latest technologies and best practices to ensure that your projects are completed on time, within budget, and to the highest standards of quality. Trust us to bring your vision to life and propel your business forward.",
  stats: [
    { value: "75", label: ".NET Core Projects" },
    { value: "97%", label: "Positive Feedback" },
    { value: "4.8?", label: "Average Rating" },
  ],
  heroImage: DotNetCoreImg,
  overviewSections: [
    {
      title: "What is .NET Core development?",
      paragraphs: [
        ".NET Core represents the future of open-source app development – optimized for modern workflows. Re-architected by Microsoft, .NET Core enables building cross-platform apps on Windows, Linux, and macOS using modular, lightweight architectures. It supports containers, DevOps, and cloud deployment out-of-the-box.",
        "Built for speed and efficiency, .NET Core applications leverage capabilities like improved performance, reduced resource usage, and side-by-side version support. The unified API surface simplifies cross-platform portability while C# and F# deliver maintainable, enterprise-grade code.",
      ],
    },
    {
      title: "Unveiling how our development process sets us apart from others",
      paragraphs: [
        "Our .NET Core application delivery process emphasizes transparency, collaboration, and technical excellence at all stages. We ensure close client alignment through continuous communication, translating business objectives into optimized technical implementations.",
        "Leveraging the latest .NET Core advancements, we build securely scalable and highly performant systems. Strict version control, code reviews, and monitoring guarantee resilient and easily maintainable applications.",
      ],
    },
    {
      title: "Make TechCompiler your partner for .NET Core development",
      paragraphs: [
        "Power up your digital initiatives and harness the full potential of .NET Core by partnering with TechCompiler. With over a decade of experience building high-performing .NET Core applications, our experts specialize in leveraging its speed and scalability to deliver business results.",
        "By understanding your specific requirements, we architect and develop flexible .NET Core solutions tailored to your needs. Whether you need a lightning-fast eCommerce API backend, a scalable chat application, or a progressive web app with social integration, we can help build it.",
        "With capabilities spanning across architecture design, UI/UX optimization, DevOps integration, and robust testing, we drive end-to-end delivery of solutions. Our transparent engagement models and proven expertise across industries make us the right partner for all your .NET Core needs.",
      ],
    },
  ],
  servicesHeading: "Explore our .NET Core development services",
  services: [
    {
      name: "Software Development",
      subtitle: "Cross-platform, cloud-enabled software solutions",
      description:
        "We build cross-platform, cloud-enabled software leveraging .NET Core's modular architecture. Our secure, containerized solutions seamlessly integrate with extensive line-of-business systems, while our agile approach focuses on rapid delivery and continuous integration.",
      image: "/images/dotnetcore/software-development.png",
    },
    {
      name: "Web Application Development",
      subtitle: "Dynamic, progressive web applications",
      description:
        "We craft dynamic, progressive web applications with ASP.NET Core for seamless experiences across devices and platforms. Leveraging powerful APIs and real-time capabilities, we deliver intuitive, app-like responsiveness with offline accessibility.",
      image: "/images/dotnetcore/web-application-development.png",
    },
    {
      name: "E-commerce Web Development",
      subtitle: "Secure, scalable e-commerce solutions",
      description:
        "With headless commerce support, we build secure, scalable stores on .NET Core. Our AI-powered platforms offer exceptional shopping with recommendations, personalized promotions, and warehouse integration.",
      image: "/images/dotnetcore/ecommerce-web-development.png",
    },
    {
      name: "ASP.NET Core Migration Factory",
      subtitle: "Upgrade legacy systems to high-performing frameworks",
      description:
        "We upgrade legacy systems to high-performing ASP.NET Core frameworks using proven migration factory models and agile techniques. Systematic analysis, zero-downtime transitions, and optimization for modern deployment channels improve applications strategically.",
      image: "/images/dotnetcore/migration-factory.png",
    },
    {
      name: "Custom .NET Core Development",
      subtitle: "Tailored business applications",
      description:
        "Dedicated .NET Core developers craft customized business applications aligned to your strategic needs, delivering unmatched ROI through flexible onshore and offshore engagement.",
      image: "/images/dotnetcore/custom-development.png",
    },
    {
      name: "Maintenance & Support",
      subtitle: "24/7 application support",
      description:
        "With 24/7 application support, we ensure optimal .NET Core application uptime through the latest upgrades and security patches to guarantee uninterrupted value. Proactive monitoring enables the diagnosis of issues before they impact users.",
      image: "/images/dotnetcore/maintenance-support.png",
    },
    {
      name: "Third-Party Integration",
      subtitle: "Simplified API integrations",
      description:
        "Simplified API integrations with diverse platforms like CRMs and ERPs enhance .NET Core application capabilities. This enables consolidating business data for holistic insights and seamless workflows.",
      image: "/images/dotnetcore/third-party-integration.png",
    },
    {
      name: "Web API Development",
      subtitle: "Versatile, enterprise-grade RESTful APIs",
      description:
        "Quickly build versatile, enterprise-grade .NET Core RESTful web APIs that seamlessly orchestrate across systems and applications for amplified productivity.",
      image: "/images/dotnetcore/web-api-development.png",
    },
    {
      name: "Enterprise App Development",
      subtitle: "Tailored line-of-business applications",
      description:
        "Innovate faster with tailored line-of-business apps developed on secure .NET Core frameworks. This improves data insights and workforce productivity through task automation and real-time information access.",
      image: "/images/dotnetcore/enterprise-app-development.png",
    },
  ],
};

const DotNetCore = () => <TechPageLayout data={data} />;

export default DotNetCore;
