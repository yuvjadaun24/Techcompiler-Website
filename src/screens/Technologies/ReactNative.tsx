import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ReactNativeImg from "@/assets/Technologies Icon/ReactNativeImg.png";

const reactNativeServices = [
    {
        name: "React Native Application Development",
        subtitle: "Build dynamic, cross-platform apps with React Native",
        description:
            "Our React Native developers have delivered custom mobile apps across diverse industries by leveraging extensive libraries of reusable UI components, APIs, and modules that enable rapid development.",
        image: "/images/react-native/custom.png"
    },
    {
        name: "React Native iOS and Android",
        subtitle: "Platform-specific React Native apps with native capabilities",
        description:
            "We build platform-specific React Native apps with native capabilities, controls, flows, and interfaces - customized to leverage the unique strengths of each operating system.",
        image: "/images/react-native/ios-android.png"
    },
    {
        name: "Integration and Migration",
        subtitle: "Seamless integration and migration to React Native",
        description:
            "Our team seamlessly integrates React Native apps with existing infrastructure through customizable hooks and adapters. We can also help you migrate legacy apps to React Native codebases.",
        image: "/images/react-native/integration-migration.png"
    },
    {
        name: "React Native Consulting",
        subtitle: "Expert consulting for your React Native projects",
        description:
            "Our technology strategists provide actionable consulting for product decision-making, platform evaluation, app scoping, prototyping, architecture reviews, and technology recommendations.",
        image: "/images/react-native/consulting.png"
    },
    {
        name: "UI/UX",
        subtitle: "Intuitive and appealing visual interfaces",
        description:
            "Our designers deliver intuitive, appealing visual interfaces that align with platform guidelines while UX research and testing validate experiences. From creating pixel-perfect designs to ensuring seamless user interactions, we prioritize user satisfaction and engagement, resulting in captivating mobile experiences that leave a lasting impression on your audience.",
        image: "/images/react-native/uiux.png"
    },
    {
        name: "Support and Maintenance",
        subtitle: "Ongoing support and maintenance for your apps",
        description:
            "We offer ongoing support via monitoring, updates, complex issue resolution, and assistance. Through our regular maintenance, we ensure apps don't decline over time. Our dedicated support team is available round-the-clock to address any issues promptly.",
        image: "/images/react-native/support.png"
    }
];

const ReactNative = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">React Native Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Build dynamic, cross-platform apps with React Native
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Streamline your mobile development with React Native. Our specialized team leverages its robust framework to craft high-performance iOS and Android apps that feel entirely native. With React Native, you get stunning mobile apps purpose-built for your needs - consistently branded, intuitively designed, and rapidly iterated - in a fraction of native development time and cost. Whether you are looking to test an MVP or scale to enterprise adoption, we guide you from conceptualization to smooth deployment, delivering the engaging and satisfying mobile experiences today's users demand.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                80 <br />
                                <span className="text-sm font-thin text-gray-800">React Native Projects</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                95%<br />
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
                            src={ReactNativeImg}
                            alt="React Native Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <h2 className="text-xl font-medium mb-4">What is React Native development?</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        React Native is an open-source framework for building native mobile applications using JavaScript and React. It allows developers to build iOS and Android apps with the same JavaScript codebase. By abstracting application logic into reusable native components, React Native brings the power of React into mobile development while still providing the performance and feel of a truly native app.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Some key advantages of React Native include faster development from code reusability across platforms, simplified debugging and testing from JavaScript and React familiarity, and excellent performance from native-rendered UI components. With access to every underlying native platform API alongside a vast library of community-contributed components, React Native is a robust toolset for delivering innovative mobile experiences on both iOS and Android with maximum code reuse and minimal platform friction.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Our development process leverages the strengths of React Native to build and iterate mobile apps rapidly. We begin with consulting to frame objectives and use cases, identifying technical needs, and scoping feasible features. Next, our architects design a flexible component architecture optimized for React Native capabilities like native modularity and code reuse across iOS and Android.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Our developers collaborate to build a working prototype app with core flows implemented. With each build, we refine app architecture, evolve UIs, add logical capabilities, and integrate native device APIs for a smooth, intuitive experience. Constant end-user validation shapes each iteration, while rigorous testing ensures functionality, performance, and security. This agile build-measure-refine loop continues until the app vision becomes reality. The result: higher quality mobile apps developed faster at lower cost.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Partner with TechCompiler for all your React Native development requirements</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Unlock the full potential of cross-platform app development with our React Native development capabilities. Our experienced team of developers specializes in leveraging the power of React Native to craft high-quality, feature-rich mobile applications that run seamlessly on both iOS and Android devices.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        At TechCompiler, we understand the importance of delivering projects on time and within budget. That's why we follow a streamlined development process, starting from initial concept to final deployment, ensuring transparency, collaboration, and efficient communication every step of the way.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Whether you're looking to develop your first mobile app or want to expand your digital presence, we have the required expertise as well as resources to bring your vision to life. By focusing on innovation, scalability, and user experience, we ensure that you exceed to deliver solutions that drive business growth and success.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Partner with TechCompiler today and stay stress-free for all your React Native development needs.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Explore our React Native development services</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        As an industry leader in React Native development, we offer a full range of services to build, enhance, and support cross-platform mobile apps with React Native's flexible framework. Our expertise covers the complete app development lifecycle, from conceptualization and UX design through development, deployment, and maintenance.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Core capabilities</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Native iOS and Android app building, migration of existing apps to React Native, platform-specific optimizations, seamless integration with APIs and backends, and long-term support plans are part of our core capabilities.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        With robust services flawed by experience, best practices, and proven methodology, we empower enterprises to reap React Native's advantages of code reuse, rapid development, and excellent user experiences.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                        {reactNativeServices.map((service, index) => (
                            <AccordionItem key={index} value={`service-${index}`} className="border-b border-gray-200">
                                <AccordionTrigger className="py-8 px-2 sm:px-4 flex justify-between items-center group transition-all duration-500 hover:text-grey-700">
                                    <span className="text-sm sm:text-xl md:text-2xl font-medium text-black group-hover:text-grey-600 transition-all duration-300">
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
            </section>
        </div>
    );
};

export default ReactNative;