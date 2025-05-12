import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DotNetCoreImg from "@/assets/Technologies Icon/DotNetCoreImg.png";

const dotNetCoreServices = [
    {
        name: "Software Development",
        subtitle: "Cross-platform, cloud-enabled software solutions",
        description:
            "We build cross-platform, cloud-enabled software leveraging .NET Core’s modular architecture. Our secure, containerized solutions seamlessly integrate with extensive line-of-business systems, while our agile approach focuses on rapid delivery and continuous integration. With multiple partnership channels and collaboration options, leverage hyper-scale capabilities for flexible software solutions that drive efficiency and business growth.",
        image: "/images/dotnetcore/software-development.png"
    },
    {
        name: "Web Application Development",
        subtitle: "Dynamic, progressive web applications",
        description:
            "We craft dynamic, progressive web applications with ASP.NET Core for seamless experiences across devices and platforms. Leveraging powerful APIs and real-time capabilities, we deliver intuitive, app-like responsiveness with offline accessibility. Optimizations for search, social, SEO, and performance ensure maximum value and outreach.",
        image: "/images/dotnetcore/web-application-development.png"
    },
    {
        name: "E-commerce Web Development",
        subtitle: "Secure, scalable e-commerce solutions",
        description:
            "With headless commerce support, we build secure, scalable stores on .NET Core. Our AI-powered platforms offer exceptional shopping with recommendations, personalized promotions, and warehouse integration. Deep analytics, flexible payment integrations, and logistics transitions enable data-driven expansion.",
        image: "/images/dotnetcore/ecommerce-web-development.png"
    },
    {
        name: "ASP.NET Core Migration Factory",
        subtitle: "Upgrade legacy systems to high-performing frameworks",
        description:
            "We upgrade legacy systems to high-performing ASP.NET Core frameworks using proven migration factory models and agile techniques. Systematic analysis, zero-downtime transitions, and optimization for modern deployment channels improve applications strategically.",
        image: "/images/dotnetcore/migration-factory.png"
    },
    {
        name: "Custom .NET Core Development",
        subtitle: "Tailored business applications",
        description:
            "Dedicated .NET Core developers craft customized business applications aligned to your strategic needs, delivering unmatched ROI through flexible onshore and offshore engagement. Specialized domain models and prebuilt modules allow for rapid customization.",
        image: "/images/dotnetcore/custom-development.png"
    },
    {
        name: "Maintenance & Support",
        subtitle: "24/7 application support",
        description:
            "With 24/7 application support, we ensure optimal .NET Core application uptime through the latest upgrades and security patches to guarantee uninterrupted value. Proactive monitoring enables the diagnosis of issues before they impact users.",
        image: "/images/dotnetcore/maintenance-support.png"
    },
    {
        name: "Third-Party Integration",
        subtitle: "Simplified API integrations",
        description:
            "Simplified API integrations with diverse platforms like CRMs and ERPs enhance .NET Core application capabilities. This enables consolidating business data for holistic insights and seamless workflows.",
        image: "/images/dotnetcore/third-party-integration.png"
    },
    {
        name: "Web API Development",
        subtitle: "Versatile, enterprise-grade RESTful APIs",
        description:
            "Quickly build versatile, enterprise-grade .NET Core RESTful web APIs that seamlessly orchestrate across systems and applications for amplified productivity. Enable external access securely to core functionalities and critical data by activating API endpoints.",
        image: "/images/dotnetcore/web-api-development.png"
    },
    {
        name: "Enterprise App Development",
        subtitle: "Tailored line-of-business applications",
        description:
            "Innovate faster with tailored line-of-business apps developed on secure .NET Core frameworks. This improves data insights and workforce productivity through task automation and real-time information access.",
        image: "/images/dotnetcore/enterprise-app-development.png"
    }
];

const DotNetCore = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">.NET Core Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Unleash the power of .NET Core to build reliable and scalable solutions
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Elevate your business with our comprehensive .NET Core development services. Our experienced team harnesses the latest technologies and best practices to ensure that your projects are completed on time, within budget, and to the highest standards of quality. Trust us to bring your vision to life and propel your business forward with innovative .NET Core solutions that drive growth and success.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                75 <br />
                                <span className="text-sm font-thin text-gray-800">.NET Core Projects</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                97%<br />
                                <span className="text-sm font-thin text-gray-800">Positive Feedback</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                4.8★<br />
                                <span className="text-sm font-thin text-gray-800">Average Rating</span>
                            </p>
                            <button
                                className="bg-zinc-800 w-48 h-14 rounded-2xl text-white text-sm font-light relative group"
                                type="button">
                                <div className="bg-white rounded-xl h-12 w-1/4 absolute left-1 top-[4px] flex items-center justify-center z-10 group-hover:w-[184px] duration-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path d="M5 12h14" stroke="#000" strokeWidth="1" />
                                        <path d="M13 5l7 7-7 7" stroke="#000" strokeWidth="1" />
                                    </svg>
                                </div>
                                <p className="translate-x-2">Get In Touch</p>
                            </button>
                        </div>
                    </div>

                    <div className="mb-12">
                        <img
                            src={DotNetCoreImg}
                            alt=".NET Core Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is .NET Core development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            .NET Core represents the future of open-source app development – optimized for modern workflows. Re-architected by Microsoft, .NET Core enables building cross-platform apps on Windows, Linux, and macOS using modular, lightweight architectures. It supports containers, DevOps, and cloud deployment out-of-the-box.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Built for speed and efficiency, .NET Core applications leverage capabilities like improved performance, reduced resource usage, and side-by-side version support. The unified API surface simplifies cross-platform portability while C# and F# deliver maintainable, enterprise-grade code. With a cloud-first approach, .NET Core empowers innovation across platforms and providers like AWS, Azure, and Google Cloud.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process sets us apart from others</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our .NET Core application delivery process emphasizes transparency, collaboration, and technical excellence at all stages. We ensure close client alignment through continuous communication, translating business objectives into optimized technical implementations. Our streamlined workflows integrate proven agile methodologies to enable rapid iterations and seamless adaptations.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Leveraging the latest .NET Core advancements, we build securely scalable and highly performant systems. Strict version control, code reviews, and monitoring guarantee resilient and easily maintainable applications. With a focus on quality assurance and continuous delivery, we exceed expectations – both functional and non-functional.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Make TechCompiler your partner for .Net Core development</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Power up your digital initiatives and harness the full potential of .Net Core by partnering with TechCompiler. With over a decade of experience building high-performing .Net Core applications, our experts specialize in leveraging its speed and scalability to deliver business results.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            By understanding your specific requirements, we architect and develop flexible .Net Core solutions tailored to your needs. Our development methodology uses the asynchronous event-driven architecture for building secure, responsive, real-time apps that users love. Whether you need a lightning-fast eCommerce API backend, a scalable chat application, or a progressive web app with social integration, we can help build it.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            With capabilities spanning across architecture design, UI/UX optimization, DevOps integration, and robust testing, we drive end-to-end delivery of solutions. Our transparent engagement models and proven expertise across industries make us the right partner for all your .Net Core needs. Our solutions blend innovation with business vision to amplify growth.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our .NET Core development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {dotNetCoreServices.map((service, index) => (
                                <AccordionItem key={index} value={`service-${index}`} className="border-b border-gray-200">
                                    <AccordionTrigger className="py-8 px-2 sm:px-4 flex justify-between items-center group transition-all duration-500 hover:text-grey-700">
                                        <span className="text-2sm sm:text-xl md:text-2xl font-medium text-black group-hover:text-grey-600 transition-all duration-300">
                                            {service.name}
                                        </span>
                                        <span className="text-4xl text-black transition-transform duration-300 group-data-[state=open]:rotate-45 group-hover:text-grey-500">
                                            +
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-2 sm:px-4 pb-8 transition-opacity duration-700 ease-in-out">
                                        <div className="flex flex-col md:flex-row gap-6 mt-4">
                                            <img src={service.image} alt={`${service.name} preview`} className="w-[300px] h-auto object-contain rounded-lg shadow-md transition-transform duration-500 hover:scale-105" />
                                            <div>
                                                <h3 className="text-base font-medium text-gray-700">{service.subtitle}</h3>
                                                <p className="text-base text-black mt-2 leading-relaxed">{service.description}</p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DotNetCore;