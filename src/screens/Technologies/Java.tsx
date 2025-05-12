import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JavaImg from "@/assets/Technologies Icon/JavaImg.png";

const javaServices = [
    {
        name: "Java Web Development Services",
        subtitle: "Dynamic web solutions powered by Java",
        description:
            "At Tech Compiler, we leverage Java's flexibility and the robust Spring framework to engineer dynamic web solutions. Our seasoned Java developers adeptly navigate Java web architecture, delivering bespoke platforms that are not only scalable and secure but also optimized for superior user experience and seamless functionality.",
        image: "/images/java/web-development.png"
    },
    {
        name: "Java Mobile App Development Services",
        subtitle: "Feature-rich mobile applications",
        description:
            "Experience the power of Java in the palm of your hand with Tech Compiler's mobile app development expertise. Our proficient team crafts intuitive, feature-rich mobile applications using Java, ensuring swift performance and seamless integration across platforms.",
        image: "/images/java/mobile-app-development.png"
    },
    {
        name: "Java API Development Services",
        subtitle: "High-performing APIs tailored to your needs",
        description:
            "Tech Compiler excels in crafting lightweight, high-performing APIs tailored to your specific needs. Leveraging frameworks like Spring MVC and RESTEasy, our Java developers architect robust API solutions that seamlessly integrate with third-party applications.",
        image: "/images/java/api-development.png"
    },
    {
        name: "Java Integration and Migration",
        subtitle: "Seamless transition to Java",
        description:
            "Seamlessly transition your existing business applications to Java with Tech Compiler's integration and migration services. Our expert team handles the intricacies of migration, ensuring minimal downtime and maximum data integrity.",
        image: "/images/java/integration-migration.png"
    },
    {
        name: "Java Game Development Services",
        subtitle: "Immersive gaming experiences",
        description:
            "Unleash your creativity with Tech Compiler's Java game development expertise. Our seasoned programmers bring your gaming ideas to life, leveraging Java's robust features to create immersive and engaging experiences across platforms.",
        image: "/images/java/game-development.png"
    },
    {
        name: "Java J2EE Development Services",
        subtitle: "Robust and secure J2EE products",
        description:
            "Harness the power of J2EE with Tech Compiler's comprehensive development services. Our experienced team utilizes top-tier Java web development practices to build robust, secure J2EE products tailored to your business needs.",
        image: "/images/java/j2ee-development.png"
    },
    {
        name: "Java Cloud Development Services",
        subtitle: "Microservice-based architectures",
        description:
            "Embrace the future of computing with Tech Compiler's cloud development expertise. Our Java developers harness the Spring Boot and Spring Cloud frameworks to create microservice-based architectures that scale effortlessly in the cloud.",
        image: "/images/java/cloud-development.png"
    },
    {
        name: "Java Maintenance and Support",
        subtitle: "Comprehensive support for your Java applications",
        description:
            "Ensure the smooth operation of your Java applications with Tech Compiler's maintenance and support services. Our skilled engineers provide comprehensive support, from setting up and deploying applications to adding new features and functionalities.",
        image: "/images/java/maintenance-support.png"
    }
];

const Java = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">Java Development Services</h1>
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
                            src={JavaImg}
                            alt="Java Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is Java development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Java development refers to the process of making software applications using the Java programming language and associated tools and technologies. Developed in the mid-1990s, Java has become one of the most popular and widely used programming languages globally. Known for its platform independence, robustness, and security features, Java is extensively used for building a wide range of applications, including web and mobile programs, enterprise software, desktop applications, and embedded systems.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Java development involves writing code in the Java programming language, which follows the object-oriented programming paradigm. Developers utilize Java's extensive libraries, frameworks, and tools to streamline the development process and build efficient and scalable applications. Key components of Java development include writing code, compiling it into bytecode, using the Java compiler, and running it on the Java Virtual Machine (JVM), which ensures compatibility across different platforms.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Embark on your Java development journey with us as we unveil our meticulous process designed to bring your vision to life. It all starts with an intensive evaluation of your project requirements and goals. Our team of Java professionals collaborates closely with you to craft a tailored development roadmap that aligns perfectly with your objectives.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Utilizing agile methodologies and iterative prototyping, we ensure flexibility and transparency at every turn. From the initial stages of development to the final product delivery, we prioritize modular development, laying the foundation for scalable and maintainable solutions that evolve with your business.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Make TechCompiler your trusted Java development partner</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Let TechCompiler be your trusted partner in Java development. With our expertise and experience in Java technology, we can help you bring your ideas to life and achieve your business objectives. Our team of skilled Java developers is committed to delivering high-quality, scalable, and secure solutions tailored to your unique needs.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We understand the importance of staying ahead in today's competitive market. That's why we leverage the latest tools, frameworks, and best practices in Java development to ensure that your applications are cutting-edge and future-proof.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            From web applications to enterprise solutions, we have the capabilities to handle projects of any size and complexity. Whether you need to build a robust e-commerce platform, a sophisticated backend system, or a scalable mobile application, we have the expertise to turn your vision into reality.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            From web applications to enterprise solutions, we have the capabilities to handle projects of any size and complexity. Whether you need to build a robust e-commerce platform, a sophisticated backend system, or a scalable mobile application, we have the expertise to turn your vision into reality.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our Java development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {javaServices.map((service, index) => (
                                <AccordionItem key={index} value={`service-${index}`} className="border-b border-gray-200">
                                    <AccordionTrigger className="py-8 px-2 sm:px-4 flex justify-between items-center group transition-all duration-500 hover:text-grey-700">
                                        <span className="text -2sm sm:text-xl md:text-2xl font-medium text-black group-hover:text-grey-600 transition-all duration-300">
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

export default Java;