import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HTML5Img from "@/assets/Technologies Icon/HTML5Img.png";

const htmlServices = [
    {
        name: "Custom HTML5 Development",
        subtitle: "Crafting exceptional digital experiences with HTML5",
        description:
            "Our HTML5 experts craft sites and apps, all while blending functionality with aesthetically pleasing interfaces. Choose our balanced HTML5 approach to build ambitious digital products with strong foundations.",
        image: "/images/html5/custom.png"
    },
    {
        name: "HTML5 Website Development",
        subtitle: "Specialized HTML5 web development for conversion success",
        description:
            "Get specialized HTML5 web development with our technical leadership positioning sites for conversion success and growth. We architect resilient systems to support towering ambitions with maintainability built-in.",
        image: "/images/html5/web-development.png"
    },
    {
        name: "HTML5 Website Design",
        subtitle: "Transforming creative visions into high-performing responsive code",
        description:
            "Great web design blends engineering and art into delightful digital experiences. Our HTML5 website design services transform creative visions into high-performing responsive code painstakingly optimized for every viewport.",
        image: "/images/html5/web-design.png"
    },
    {
        name: "Responsive Design",
        subtitle: "Tailoring flawless experiences across devices",
        description:
            "With shifting consumer behaviors across devices, responsive web design tailors flawless experiences. Our HTML5 responsive services harness CSS Flexbox and Grid for intelligent content reflowing between breakpoints and orientations without disruption.",
        image: "/images/html5/responsive-design.png"
    },
    {
        name: "Mobile Web Development",
        subtitle: "Building friendly interfaces for hypermobile customers",
        description:
            "Meet today’s hypermobile customers where they are with mobile sites built for multiple usage. Our HTML5 mobile web development builds friendly interfaces and interactive components while sustaining speed.",
        image: "/images/html5/mobile-web.png"
    },
    {
        name: "Cross-Platform Development",
        subtitle: "High-performing hybrid mobile apps with React Native",
        description:
            "Get the best web flexibility and reliability through our substantial React Native framework for high-performing hybrid mobile apps. Leverage existing web codebases for substantial reuse across platforms.",
        image: "/images/html5/cross-platform.png"
    },
    {
        name: "Web Tool Integration",
        subtitle: "Integrating leading web APIs into your HTML5 apps",
        description:
            "Simplify access to essential functionalities your users want by integrating leading web APIs into your HTML5 web apps and sites. We effortlessly embed maps, chatbots, payments, social streams, real-time notifications, and more.",
        image: "/images/html5/web-tool-integration.png"
    }
];

const HTML5 = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">HTML5 Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Crafting exceptional digital experiences with HTML5
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Our HTML5 experts craft sites and apps, all while blending functionality with aesthetically pleasing interfaces. Choose our balanced HTML5 approach to build ambitious digital products with strong foundations.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                85 <br />
                                <span className="text-sm font-thin text-gray-800">HTML5 Projects</span>
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
                            src={HTML5Img}
                            alt="HTML5 Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is HTML5 development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            HTML5 development refers to building websites, web applications, and mobile apps utilizing the latest markup capabilities for greater versatility. HTML5 introduced major improvements like new multimedia elements for responsive images, SVG graphics, and accessible video streams.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            It enabled offline storage, drag and drop, geolocation, and other advanced functionalities through JavaScript APIs. The markup evolved to incorporate complex data visualizations, 2D/3D animations, math equations, and web gl graphics for games.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">HTML5 development services to build dynamic websites and applications</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            With over a thousand complex HTML5 projects delivered, TechCompiler offers unmatched web development expertise honed from building ambitious yet resilient sites and apps at tremendous scales. We house renowned HTML5 specialists integrating emerging capabilities responsibly by applying industry best practices.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our refined process emphasizes performance optimizations so nothing hinders user engagement. We fix vital web issues rapidly to retain profound site integrity across iterations.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We collaborate early with stakeholders to grasp objectives and pain points. Then, we provide solutions that balance pragmatism and innovation. Our streamlined process actualizes HTML5’s potential through focused metrics guiding data-driven refinements toward delighting users.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our range of HTML5 development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {htmlServices.map((service, index) => (
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
                                                <h3 className="text-base font-medium text-gray- 700">{service.subtitle}</h3>
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

export default HTML5; 