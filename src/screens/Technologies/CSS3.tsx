import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CSS3Img from "@/assets/Technologies Icon/CSS3Img.png";

const cssServices = [
    {
        name: "Custom CSS3 Development",
        subtitle: "Building engaging websites with CSS3",
        description:
            "Bring designs to life with responsive CSS styling for exceptional user experiences. Leveraging animations, gradients, grid systems, and more to engage customers across devices, we build complex layouts rapidly that leave lasting impressions. We integrate CSS frameworks like Bootstrap to design modernized UIs without compromising legacy browser support.",
        image: "/images/css3/custom.png"
    },
    {
        name: "CSS3 UI/UX Development",
        subtitle: "Intuitive, user-centric interfaces that enhance engagement",
        description:
            "Our CSS3 developers craft experiences with movement, depth, and color that capture attention and drive actions. We focus on performance gains through optimal selectors, efficient properties, and WebP image formats.",
        image: "/images/css3/uiux.png"
    },
    {
        name: "Responsive Website Development",
        subtitle: "Dynamic web apps optimized for modern needs",
        description:
            "Get responsive websites conveying quality experiences across devices. Our CSS3 expertise fluidly adjusts layouts and content tailoring sites to every viewport, leveraging mobile-first strategies and sleek transitions between breakpoints.",
        image: "/images/css3/web.png"
    },
    {
        name: "CSS3 Animation Development",
        subtitle: "Engaging animations that enhance storytelling",
        description:
            "Engage users from the outset with animated elements built on CSS3 techniques like transforms and keyframe animations. We animate new content dynamically, boosting brand storytelling through movement designed around your style guide.",
        image: "/images/css3/animation.png"
    },
    {
        name: "High-End Website Development",
        subtitle: "Exceptional branding experiences with full-spectrum design",
        description:
            "Go beyond the basics with high-end sites, combining ambitious vision with bulletproof execution. Our team crafts exceptional branding experiences with full-spectrum visual design, creating everything that impresses users.",
        image: "/images/css3/highend.png"
    },
    {
        name: "CSS3 Framework Integration",
        subtitle: "Streamlined development with modern frameworks",
        description:
            "We integrate CSS frameworks like Bootstrap to design modernized UIs without compromising legacy browser support. Our CSS framework usage assures consistent UIs with standardized components.",
        image: "/images/css3/framework.png"
    },
    {
        name: "CSS3 Maintenance Services",
        subtitle: "Ongoing support for your CSS3 applications",
        description:
            "We provide ongoing support for your CSS3 applications, ensuring smooth UIs and web functionality. Our team does continuous performance profiling and testing to ensure your site remains high-performing.",
        image: "/images/css3/maintenance.png"
    }
];

const CSS3 = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">CSS3 Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Building engaging websites with CSS3
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Bring designs to life with responsive CSS styling for exceptional user experiences. Leveraging animations, gradients, grid systems, and more to engage customers across devices, we build complex layouts rapidly that leave lasting impressions. We integrate CSS frameworks like Bootstrap to design modernized UIs without compromising legacy browser support.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                85 <br />
                                <span className="text-sm font-thin text-gray-800">CSS3 Projects</span>
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
                            src={CSS3Img}
                            alt="CSS3 Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is CSS3 development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            CSS3 development refers to leveraging the latest styling capabilities to create visually appealing, responsive website designs that engage users across devices. Seasoned CSS3 developers craft experiences with movement, depth, and color that capture attention and drive actions.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            At TechCompiler, we utilize preprocessors like SASS for cleaner and more maintainable code. Frameworks like Bootstrap provide templates, grids, and UI elements to speed up development. We focus on performance gains through optimal selectors, efficient properties, and WebP image formats. Overall, CSS3 empowers exceptional designs that make lasting impressions and drive measurable business success.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">CSS3 development services to building engaging websites</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We house CSS3 experts who blend technical prowess with creative vision to deliver high-impact websites. Our refined process balances innovation with pragmatism, fusing visually delightful designs with secure code. We create animations in a way that tells memorable brand stories. Our CSS framework usage assures consistent UIs with standardized components. Leveraging WebP images and code optimizations, we build exceptionally fast page loads and augment stylesheets with JavaScript interactivity for immersive viewing experiences.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We work with a profound performance mindset and build highly interactive sites that you can verify using tracking metrics like Lighthouse scores. We fix web vitals bottlenecks so nothing hinders user engagement. Our CSS3 mastery has elevated global brands with iconic styles and lightning load times. Yet our focus remains grounded on ROI via measurable conversions and sales. With proven expertise in building ambitious frontends at massive scales, you can trust us to partner with you to realize your boldest and most innovative UI vision.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We believe in collaborating with our clients at every step to swiftly translate designs to responsive code that transparently aligns with your expectations. We streamline feedback incorporation so that you get high-performing business-critical assets. Moreover, our team does continuous performance profiling and testing to ensure smooth UIs and web functionality. Our streamlined process parlays CSS3's capabilities into business success through exceptional experiences and conversions.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our range of CSS3 development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {cssServices.map((service, index) => (
                                <AccordionItem key={index} value={`service-${index}`} className="border-b border-gray-200">
                                    <AccordionTrigger className="py-8 px-2 sm:px-4 flex justify-between items-center group transition-all duration -500 hover:text-grey-700">
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

export default CSS3; 