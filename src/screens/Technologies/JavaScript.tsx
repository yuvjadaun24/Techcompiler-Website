import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JavaScriptImg from "@/assets/Technologies Icon/JavaScriptImg.png";

const jsServices = [
    {
        name: "Custom JavaScript Development",
        subtitle: "Building innovative solutions with JavaScript",
        description:
            "Our expert JavaScript developers create cutting-edge web and mobile applications tailored to your specific business needs. Leveraging years of JavaScript experience, our developers implement proven architectural patterns and industry best practices to craft intuitive JavaScript-powered digital products.",
        image: "/images/javascript/custom.png"
    },
    {
        name: "JavaScript UI/UX Development",
        subtitle: "Intuitive, user-centric interfaces that enhance engagement",
        description:
            "User  experience is crucial for any application. Our creative JavaScript developers design intuitive, user-centric interfaces that enhance engagement and drive action. We combine aesthetic design sensibilities with UX best practices to produce interfaces that look amazing and function effortlessly.",
        image: "/images/javascript/uiux.png"
    },
    {
        name: "JavaScript Web Development",
        subtitle: "Dynamic web apps optimized for modern needs",
        description:
            "Our JavaScript web development team builds dynamic web apps optimized for the modern internet age. By leveraging JavaScript's capabilities, we create seamless web experiences where content updates instantly without page refreshes, ensuring a smooth user experience.",
        image: "/images/javascript/web.png"
    },
    {
        name: "JavaScript Mobile App Development",
        subtitle: "Cross-platform mobile apps with native quality",
        description:
            "Enable mobile access to your web app's full functionality with our JavaScript mobile development services. Our experts build cross-platform apps compatible across iOS and Android, ensuring a native-quality experience with maximum code reuse.",
        image: "/images/javascript/mobile.png"
    },
    {
        name: "JavaScript Enterprise App Development",
        subtitle: "Scalable solutions for enterprise growth",
        description:
            "We develop full-fledged JavaScript enterprise solutions designed from scratch to scale with your rapid growth. Our JavaScript developers architect robust application structures and reusable components that simplify adding new features without breaking existing code.",
        image: "/images/javascript/enterprise.png"
    },
    {
        name: "JavaScript Migration and Porting Services",
        subtitle: "Modernize your legacy applications",
        description:
            "Evolve legacy applications with our JavaScript migration services. Our specialists seamlessly transition apps from other frameworks to modern JavaScript architecture for speed and scalability, optimizing performance from front to back.",
        image: "/images/javascript/migration.png"
    },
    {
        name: "JavaScript Consulting Services",
        subtitle: "Expert guidance for your JavaScript projects",
        description:
            "We offer expert JavaScript consulting services covering your app's planning, architecture, integrations, and more. Our JavaScript specialists assess your current landscape and provide candid recommendations to maximize business impact.",
        image: "/images/javascript/consulting.png"
    }
];

const JavaScript = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">JavaScript Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Building innovative solutions with JavaScript
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Our expert JavaScript developers create cutting-edge web and mobile applications tailored to your specific business needs. Leveraging years of JavaScript experience, our developers implement proven architectural patterns and industry best practices to craft intuitive JavaScript-powered digital products.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                85 <br />
                                <span className="text-sm font-thin text-gray-800">JavaScript Projects</span>
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
                            src={JavaScriptImg}
                            alt="JavaScript Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is JavaScript development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            JavaScript is a popular programming language that enables developers to build dynamic, cross-platform, and fully functional web/mobile applications. It is widely used in the development landscape because of its lightweight framework, making it easier to run on any device without needing a lot of processing power. In today's digital age, nearly all businesses utilize JavaScript to build feature-packed websites that provide dynamic experiences to their users.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Leveraging the JavaScript ecosystem, our team of developers creates everything from fast response interfaces to fully-featured applications. Using JavaScript's capabilities and expertise, we have helped thousands of businesses create powerful digital products.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">
                            Harness JavaScript development services to craft innovative solutions
                        </h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our JavaScript team upholds the highest performance, security, and scalability standards to deliver long-lasting value. We leverage extensive unit testing, effective deployment strategies, and robust CMS integrations for solutions built to thrive over time. As an award-winning company, we understand how high-performing digital products can deliver excellence, so we house a team of talented individuals passionate to create nothing but the best.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            With universal browser support, immense community adoption, and extensive tools for rapid development across the full stack, JavaScript is uniquely positioned as the ideal language for web and app creation now and for years to come.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Here are a few reasons developers consistently choose JS</h2>
                        <ul className="list-disc pl-5 mb-4 text-gray-700 text-sm leading-relaxed space-y-2">
                            <li><strong>Ubiquitous browser runtimes:</strong> JavaScript runs in all modern browsers, ensuring compatibility and accessibility.</li>
                            <li><strong>Massive open-source libraries:</strong> A vast ecosystem of libraries and frameworks accelerates development.</li>
                            <li><strong>Full stack capabilities:</strong> JavaScript can be used for both front-end and back-end development.</li>
                            <li><strong>Cloud native benefits:</strong> JavaScript applications can easily integrate with cloud services for scalability.</li>
                        </ul>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Crafting ground-breaking digital products using TechCompiler's JavaScript capabilities</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Leveraging our JavaScript capabilities, we are an expert in creating unique, scalable, and robust web, mobile, and desktop apps spanning industries, from media to finance, e-commerce to insurance, and logistics to healthcare, crafting the exact digital solution your business needs.
                        </p>
                    </div>

                    <div className="mb -16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process works:</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our specialists thoroughly analyze your business objectives, user needs, management priorities, and technical considerations to inform solution planning and design. We identify pain points, desired metrics, and outcomes.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            With requirements established, we architect human-centric solutions using modern JS capabilities for efficiency, resilience, and scale. Our architects blueprint modular components, data flow modeling, UX guardrails, and technical specification documents as the project's foundation.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our design team translates defined requirements into intuitive, aesthetic experiences realized in user journeys, wireframes, interactive prototypes, and visually stunning mockups optimized to accelerate user outcomes.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            With UX guardrails set, our expert development teams implement high-performance logic using modern JS frameworks like React, Angular, and Vue alongside cloud services tailored to project needs. We are also well-versed in building reusable libraries and rock-solid integrations.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Apart from development, we also ensure that every solution undergoes rigorous automated testing and manual validation before deployment. Our specialist DevOps engineers leverage leading CI/CD pipelines to enable rapid iteration.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We also provide support for continuous monitoring, maintenance, and feature upgrades to guarantee your solution's integrity and business impact over time.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our range of JavaScript development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {jsServices.map((service, index) => (
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

export default JavaScript;