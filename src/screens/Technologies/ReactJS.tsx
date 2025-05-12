import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ReactJSImg from "@/assets/Technologies Icon/ReactJSImg.png";

const reactServices = [
    {
        name: "Custom ReactJS Development",
        subtitle: "Tailored React applications for your business needs",
        description:
            "Our expert React developers specialize in building fully customized React applications designed specifically for your business needs. Our development process starts with taking the time to understand your industry, audience, and goals and translate those into an intuitive, high-performing user interface. Regardless of your niche or requirements, our ReactJS experts can develop a robust custom solution to take your operations to the next level.",
        image: "/images/react/custom.png"
    },
    {
        name: "React UI/UX Development",
        subtitle: "Stunning, user-centric interfaces that drive action",
        description:
            "User experience is paramount for any application. Our creative React developers craft stunning, user-centric interfaces that capture attention and drive action. We combine aesthetic design sensibilities with UX best practices to produce interfaces that look amazing and function effortlessly. Our UI/UX process emphasizes extensive user research, prototyping, and testing to uncover pain points and optimize workflows.",
        image: "/images/react/uiux.png"
    },
    {
        name: "React Web Development",
        subtitle: "Fast, dynamic web apps optimized for modern needs",
        description:
            "Our React web development team builds fast, dynamic web apps optimized for the modern internet age. By leveraging React's efficient rendering through virtual DOM, we create seamless web experiences where content updates instantly without page refreshes. This speed, paired with reusable React UI components, enables rapid development cycles to continuously improve apps over time.",
        image: "/images/react/web.png"
    },
    {
        name: "React Mobile App Development",
        subtitle: "Cross-platform mobile apps with native quality",
        description:
            "Enable mobile access to your web app's full functionality with our React mobile development services. Our experts build cross-platform React Native apps compatible across iOS and Android with maximum code reuse. With over 60% code reuse from the web, we create stunning native-quality mobile apps that are aesthetically pleasing and intuitive in nature.",
        image: "/images/react/mobile.png"
    },
    {
        name: "React JS Enterprise App Development",
        subtitle: "Scalable solutions for enterprise growth",
        description:
            "We develop full-fledged React enterprise solutions designed from scratch to scale with your rapid growth. Our React developers architect robust application structures and reusable components that simplify adding new features without breaking existing code. We also build custom integrations to tie React architecture directly to your databases, internal APIs, and microservices.",
        image: "/images/react/enterprise.png"
    },
    {
        name: "React Migration and Porting Services",
        subtitle: "Modernize your legacy applications",
        description:
            "Evolve legacy applications with our React migration services. Our specialists seamlessly transition apps from Angular, Vue, jQuery, or other frameworks to modern React architecture for lightning speed and scalability. We refactor old codebases into reusable React components for efficient data flows and optimize performance from front to back.",
        image: "/images/react/migration.png"
    },
    {
        name: "ReactJS Consulting Services",
        subtitle: "Expert guidance for your React projects",
        description:
            "We offer expert ReactJS consulting services covering your app's planning, architecture, integrations, and more. Our React specialists assess your current landscape and provide candid recommendations to maximize business impact. We help craft strategic React roadmaps aligned to your long-term objectives. Moreover, we advise on React best practices across UI/UX design, DevOps pipelines, state management, testing, and beyond to set your web project up for excellence.",
        image: "/images/react/consulting.png"
    }
];

const ReactJSDevelopment = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">React JS</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                React JS Development Services
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Build customizable, dynamic, and high-performing applications from scratch. Leverage TechCompiler's ReactJS capabilities to design and develop feature-packed website/mobile applications. Blending functionality with aesthetically pleasing visuals, we create bespoke digital assets that give your business a competitive advantage.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                85 <br />
                                <span className="text-sm font-thin text-gray-800">React Projects</span>
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
                            src={ReactJSImg}
                            alt="React JS Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is ReactJS development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            React.js is a front-end library that has gained immense popularity among developers for building modern web and mobile applications. Industry leaders like Netflix, Facebook, and Instagram have used this revolutionary framework to develop their iconic business platforms. According to Stack Overflow's 2023 survey, React is the most popular front-end framework in the development landscape.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            ReactJS programming aims to simplify the complex process of developing fast, scalable, and intuitive user interfaces of mobile/web applications. Combining the speed and efficiency of Javascript, React allows developers to create applications in a more organized manner. The data-binding and component-based nature of the React framework makes it easier to build full-fledged, robust applications.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">
                            ReactJS development services to build dynamic and innovative web applications
                        </h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            As a leading ReactJS development company, we specialize in crafting modern web applications utilizing the power of React. With features like reusable UI components, efficient one-way data binding, and server-side rendering, React allows for the development of high-performing applications.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our seasoned developers leverage the latest ECMAScript standards and architectural patterns like Flux and Redux to build robust, interactive apps optimized for both web and mobile. We implement best practices in component architecture, data storage, routing, and more to deliver the ultimate user experience.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Choose us as your React partner if you want to build intuitive, feature-packed applications with top-notch user interfaces. Having worked with many clients on a global scale, we can help you turn your vision into reality.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">
                            Let TechCompiler's React.js capabilities bring you new avenues of growth
                        </h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            As an industry-leading React JS development company, we don't just build business-critical applications; we develop new avenues of growth and success for businesses that want to improve their online presence and drive new opportunities to accelerate their growth.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Here are a few features of ReactJS</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Due to React JS' ultimate capabilities, we build dynamic and feature-packed applications. Here are a few features of this popular front-end framework:
                        </p>
                        <ul className="list-disc pl-5 mb-4 text-gray-700 text-sm leading-relaxed space-y-2">
                            <li><strong>Component Architecture:</strong> We utilize React's modular component architecture to build reusable UI elements that can be efficiently managed across projects.</li>
                            <li><strong>Virtual DOM:</strong> React's lightning-fast virtual DOM enables seamless rendering and minimal page loads. This results in excellent performance and seamless user experiences.</li>
                            <li><strong>Flux/Redux:</strong> Our ReactJS developers implement robust state management with architectures like Flux and Redux for consistent data flows.</li>
                            <li><strong>Customizable Solutions:</strong> We craft completely customizable React applications designed from the ground up to serve your industry requirements. Our solutions can integrate with various databases, third-party services, and more.</li>
                            <li><strong>Responsive and Mobile-Ready:</strong> Our futuristic ReactJS solutions come responsive out of the box, ready to scale seamlessly across all device sizes without extra development time.</li>
                            <li><strong>Testing and Maintenance:</strong> We implement rigorous integration, end-to-end, and unit testing protocols for every project.</li>
                        </ul>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our elite ReactJS developers have delivered custom solutions across a vast array of industries, from finance and eCommerce to healthcare and logistics. Whether you need a consumer-focused web app, scalable enterprise platform, or modern mobile solutions, we have the expertise to build it with ReactJS capabilities.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our wide range of ReactJS development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {reactServices.map((service, index) => (
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

export default ReactJSDevelopment;