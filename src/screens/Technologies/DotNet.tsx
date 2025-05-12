import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DotNetImg from "@/assets/Technologies Icon/DotNetImg.png";

const dotNetServices = [
    {
        name: "Custom .NET Development",
        subtitle: "Delivering reliable, scalable, process-oriented solutions with .NET services",
        description:
            "Unlock the full potential of your digital endeavors with our comprehensive .NET development solutions. Crafted by seasoned professionals, our services guarantee robust, scalable, and efficient solutions tailored to your unique needs.",
        image: "/images/dotnet/custom.png"
    },
    {
        name: "Web App Development",
        subtitle: "Dynamic and interactive web applications",
        description:
            "Our web app development services harness the power of .NET to create dynamic and interactive web applications that engage users and drive business outcomes. Leveraging the latest technologies and industry best practices, we craft scalable and responsive web solutions tailored to your unique requirements.",
        image: "/images/dotnet/web-app-development.png"
    },
    {
        name: "3rd Party Integrations",
        subtitle: "Seamless integration for enhanced productivity",
        description:
            "Streamline your business processes and enhance productivity with our expert 3rd party integration services. We specialize in seamlessly integrating third-party systems and services into your .NET applications, allowing for efficient data exchange, automation, and enhanced functionality.",
        image: "/images/dotnet/third-party-integrations.png"
    },
    {
        name: "Cloud App Development",
        subtitle: "Flexible and scalable cloud solutions",
        description:
            "Embrace the flexibility and scalability of cloud computing with our cloud app development services. Our .NET experts leverage cloud-native technologies to build highly scalable and resilient applications that can adapt to your evolving business needs.",
        image: "/images/dotnet/cloud-app-development.png"
    },
    {
        name: "ASP .NET Core Migration",
        subtitle: "Future-proof your applications",
        description:
            "Stay ahead of the curve and future-proof your applications with our ASP .NET Core migration services. Whether you're looking to migrate legacy ASP .NET applications to the modern ASP .NET Core framework or upgrade to the latest version of ASP .NET Core, our experienced team can help.",
        image: "/images/dotnet/aspnet-core-migration.png"
    },
    {
        name: "Application Maintenance",
        subtitle: "Comprehensive support for your .NET applications",
        description:
            "We strengthen the security and performance of your .NET applications with our comprehensive application maintenance services. Our team of experienced .NET developers provides ample support and maintenance to ensure that your applications run efficiently.",
        image: "/images/dotnet/application-maintenance.png"
    },
    {
        name: "Web API Development",
        subtitle: "Unlock the power of data with robust APIs",
        description:
            "Unlock the power of data and enable seamless communication between your applications with our Web API development services. Our .NET experts specialize in designing and developing robust and scalable Web APIs using ASP .NET Core.",
        image: "/images/dotnet/web-api-development.png"
    }
];

const DotNet = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">.NET Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Delivering reliable, scalable, process-oriented solutions with .NET services
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Unlock the full potential of your digital endeavors with our comprehensive .NET development solutions. Crafted by seasoned professionals, our services guarantee robust, scalable, and efficient solutions tailored to your unique needs. From mission-critical applications to intuitive portals and powerful BI tools to interactive chatbots and dynamic CRM systems, we cover a wide spectrum of development needs. Embrace innovation and reliability as we empower your projects to thrive in today's competitive landscape.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                85 <br />
                                <span className="text-sm font-thin text-gray-800">.NET Projects</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                98%<br />
                                <span className="text-sm font-thin text-gray-800">Positive Feedback</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                4.9★<br />
                                <span className="text-sm font-thin text-gray-800">Average Rating</span>
                            </p>
                            <button
                                className="bg-zinc-800 w-48 h-14 rounded-2xl text-white text-sm font-light relative group"
                                type="button"
                            >
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
                            src={DotNetImg}
                            alt=".NET Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is .NET development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            .NET development refers to the creation of software applications using the .NET framework, a powerful, open-source platform developed by Microsoft. It provides developers with a versatile and cross-platform environment for building a wide range of applications, including web applications, APIs, microservices, desktop applications, and more. .NET offers numerous advantages, including high performance, scalability, and support for modern development practices like containerization and cloud-native architectures.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We begin with a comprehensive analysis of your project requirements and objectives. Our skilled team of .NET specialists then collaborates closely with you to define a tailored development roadmap. Through iterative prototyping and agile methodologies, we ensure flexibility and transparency at every stage of the process. We prioritize modular development, enabling scalable and maintainable solutions. Rigorous testing and quality assurance protocols guarantee the reliability and performance of the final product. With clear communication channels and regular updates, we keep you informed and involved throughout the development journey. Experience the seamless execution of your vision with our meticulous .NET development process.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Let TechCompiler be your .Net development partner</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            TechCompiler has years of experience building robust and scalable .NET applications. Our expert developers are well-versed in the latest .NET and .NET Core technologies to deliver solutions tailored to your business needs. We follow agile methodologies and industry best practices for .NET app development and provide ongoing maintenance. With capabilities ranging across web, mobile, cloud, and microservices, we can handle projects of any scale or complexity. Our focus is always on understanding requirements, ensuring smooth collaboration, and providing on-time delivery.
                            <br />
                            <br />
                            Let TechCompiler leverage the power of .NET to develop the custom solution your business demands. Contact us today to transform your idea into reality.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our .NET development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {dotNetServices.map((service, index) => (
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

export default DotNet;