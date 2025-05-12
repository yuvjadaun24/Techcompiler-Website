import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PHPImg from "@/assets/Technologies Icon/PHPImg.png";

const phpServices = [
    {
        name: "Custom Web Development",
        subtitle: "Tailored web solutions powered by PHP",
        description:
            "TechCompiler offers custom web development services powered by PHP, tailored to your unique requirements. From simple websites to complex web applications, we create solutions that keep up with your business goals and deliver exceptional user experiences.",
        image: "/images/php/custom-web-development.png"
    },
    {
        name: "Robust CMS Development",
        subtitle: "Streamlined content management systems",
        description:
            "We specialize in developing robust content management systems (CMS) using PHP that help manage and update your website hassle-free. Our custom CMS solutions are scalable, user-friendly, and designed to streamline your content management processes.",
        image: "/images/php/cms-development.png"
    },
    {
        name: "Intuitive CRM Development",
        subtitle: "Customizable customer relationship management systems",
        description:
            "Unlock the power of customer relationship management (CRM) with our intuitive PHP-based solutions. We develop CRM systems that are highly customizable, allowing you to manage customer interactions, track leads, and drive sales growth.",
        image: "/images/php/crm-development.png"
    },
    {
        name: "Enterprise Web Portals",
        subtitle: "Centralized hubs for your organization's information",
        description:
            "TechCompiler creates enterprise web portals using PHP that serve as centralized hubs for your organization's information and services. Our solutions are scalable, secure, and designed to enhance collaboration and productivity across your enterprise.",
        image: "/images/php/enterprise-portals.png"
    },
    {
        name: "e-Commerce Solutions",
        subtitle: "Robust online stores that drive sales",
        description:
            "We specialize in developing e-commerce solutions powered by PHP, enabling you to build robust online stores that drive sales and revenue. Our solutions are feature-rich, scalable, and tailored to meet the unique needs of your business as well as customers.",
        image: "/images/php/ecommerce-solutions.png"
    },
    {
        name: "Cloud Application Solutions",
        subtitle: "Scalable and reliable cloud-native applications",
        description:
            "Leverage the flexibility and scalability of cloud computing with our PHP-based cloud application solutions. We develop cloud-native applications that are scalable, reliable, and accessible from anywhere, empowering your business to thrive in the digital age.",
        image: "/images/php/cloud-applications.png"
    },
    {
        name: "Social Networking Solutions",
        subtitle: "Engagement-driven social networking platforms",
        description:
            "TechCompiler creates social networking solutions using PHP that foster engagement, connectivity, and community building. From social media platforms to niche networking sites, we develop solutions that deliver seamless user experiences and drive user engagement.",
        image: "/images/php/social-networking-solutions.png"
    },
    {
        name: "Robust Backend Solutions",
        subtitle: "High-performance backend systems",
        description:
            "We specialize in building robust backend solutions that power your web applications and services using PHP. Our solutions are optimized for high-performance, scalability, and security, providing a solid foundation for your digital initiatives.",
        image: "/images/php/backend-solutions.png"
    }
];

const PHP = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">PHP Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Unleash the potential of your business with PHP development services
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Leverage the prowess of PHP to elevate your digital presence. Our PHP development services enable you to address a full spectrum of business requirements with fast, flexible, and pragmatic web solutions. Whether you're looking to build dynamic websites, robust web applications, or scalable e-commerce platforms, our team of experienced PHP developers is equipped to deliver transformational results. With a focus on efficiency and innovation, we help you stay ahead of the curve in today's competitive landscape.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                85 <br />
                                <span className="text-sm font-thin text-gray-800">PHP Projects</span>
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
                            src={PHPImg}
                            alt="PHP Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is PHP development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            PHP development refers to the system of creating dynamic and interactive internet programs through the use of the PHP programming language. PHP (personal home page) is a server-aspect scripting language widely used for net development because of its versatility, ease of use, and full-size community help. PHP allows developers to construct a wide range of internet answers, including websites, content control systems (CMS), e-commerce structures, net applications, and more.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            At TechCompiler, we follow a streamlined PHP development process to build robust web solutions tailored to your unique needs. We start by understanding your requirements in-depth and defining the project scope. Next, our expert PHP developers create an optimized technical architecture and design blueprint aligning with specifications.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Make TechCompiler your PHP development partner</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Make TechCompiler your PHP development partner and unlock the full potential of your digital initiatives. With our proven expertise and dedication to excellence, we offer tailored PHP development solutions that drive tangible business results. Our skilled PHP developers specialize in crafting dynamic websites, robust web applications, and scalable e-commerce platforms that cater to your unique requirements.
                            <br />
                            <br />
                            At TechCompiler, we prioritize collaboration and communication, ensuring that your vision is brought to life with precision and efficiency. From concept to deployment, we work closely with you to understand your goals and deliver solutions that exceed expectations. Whether you're launching a new project or looking to enhance an existing one, our PHP development services are designed to elevate your digital presence and propel your business forward.
                            <br />
                            <br />
                            Partner with TechCompiler and experience the difference of having a trusted PHP development partner by your side. Together, we'll transform your ideas into reality and drive success in the ever-evolving digital landscape.
                            
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our PHP development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {phpServices.map((service, index) => (
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

export default PHP;