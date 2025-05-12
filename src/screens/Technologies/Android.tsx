import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AndroidImg from "@/assets/Technologies Icon/AndroidImg.png";

const androidServices = [
    {
        name: "Custom Android App Development",
        subtitle: "Craft innovative Android apps to elevate your brand",
        description:
            "Elevate your brand connection, visibility, and revenues by partnering with us to build innovative Android applications. Leveraging best-in-class UI/UX design principles, future-ready architecture, and the power of mobile, we craft solutions that impress and engage your audiences. With a laser focus on understanding your personalization needs, our pixel-perfect Android apps tell your brand’s story to the world and delight users every day through digital interactions amplified for performance, scalability, and business impact.",
        image: "/images/android/custom.png"
    },
    {
        name: "iWatch App Development",
        subtitle: "Extend your Android ecosystem conveniently to users' wrists",
        description:
            "Extend your Android ecosystem conveniently to users' wrists with our smartwatch app development. We enable timely notifications, convenient app controls, and quick access to key information through wrist-based interactions. Boost efficiency by integrating smartwatch capabilities across your Android apps for more accessible, convenient user experiences.",
        image: "/images/android/iwatch.png"
    },
    {
        name: "Android TV App Development",
        subtitle: "Engage users on the big screen with our custom Android TV app experiences",
        description:
            "Engage users on the big screen with our custom Android TV app experiences. Leverage Android's platform to deliver premium entertainment, immersive content, and interactive capabilities tailored for Android TV. With rich multimedia integration and next-gen, gesture-based gaming logic, we help redefine digital entertainment possibilities through customized Android TV apps.",
        image: "/images/android/android-tv.png"
    },
    {
        name: "Android Tablet App Development",
        subtitle: "Transform workflows, enhance productivity, and boost enterprise mobility",
        description:
            "Transform workflows, enhance productivity, and boost enterprise mobility - all through the power of the Android tablet ecosystem. Our Android tablet app development leverages tablets' advanced capabilities and larger screens for more creative, optimized user experiences. With stylus support and drag-and-drop integration, we help you unlock your business’s full potential across Android tablet devices.",
        image: "/images/android/tablet.png"
    },
    {
        name: "Integration and Migration",
        subtitle: "Ensure smooth transitions and seamless functionality across Android environments",
        description:
            "Ensure smooth transitions and seamless functionality across Android environments with our proven integration and migration services. We skillfully integrate Android apps with diverse third-party systems while conducting rigorous testing to guarantee optimal post-migration performance. Trust us for safe, efficient migrations and integrations.",
        image: "/images/android/integration-migration.png"
    },
    {
        name: "Enterprise Android Apps",
        subtitle: "Empower your workforce through feature-rich native Android apps tailored for business needs",
        description:
            "Empower your workforce through feature-rich native Android apps tailored for business needs. Enable productivity, mobile access to business-critical systems, timely collaboration, and secure communication all on the go with our enterprise Android solutions. With robust data security and slick UX included, leverage custom Android to boost workforce efficiency.",
        image: "/images/android/enterprise.png"
    }
];

const Android = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">Android Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Craft innovative Android apps to elevate your brand
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Elevate your brand connection, visibility, and revenues by partnering with us to build innovative Android applications. Leveraging best-in-class UI/UX design principles, future-ready architecture, and the power of mobile, we craft solutions that impress and engage your audiences. With a laser focus on understanding your personalization needs, our pixel-perfect Android apps tell your brand’s story to the world and delight users every day through digital interactions amplified for performance, scalability, and business impact.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                75 <br />
                                <span className="text-sm font-thin text-gray-800">Android Projects</span>
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
                            src={AndroidImg}
                            alt="Android Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <h2 className="text-xl font-medium mb-4">What is Android development?</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Android application development refers to the design, development, and deployment of application software for devices running Google’s Android OS. This encompasses smartphones, tablets, wearables, TVs, and other IoT ecosystems. Android developers use JDK programming languages like Java and Kotlin on Android Studio by integrating appropriate SDK frameworks and tools to build optimized UI/UX flows and robust backend processes. Development complexity varies from basic phone apps to advanced applications leveraging capabilities like machine learning, augmented reality, connectivity protocols, etc.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        With multiple screen sizes and versions to consider, extensive testing across real devices is critical before launch. Maintenance involves continuous upgrades, fixes, and enhancements tuned to usage patterns and new Android OS releases.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Unveiling our Android application development process</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We follow a meticulous approach to deliver high-quality apps that meet our clients' expectations. Our process begins with a thorough analysis of your requirements and objectives, followed by UI/UX design and prototyping to visualize the app's layout and functionality. We then proceed to custom Android app development, incorporating the latest technologies and best practices to ensure scalability, security, and performance.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Our dedicated QA and testing team rigorously tests the app for functionality, usability, and compatibility across different devices and OS versions. Once the app passes testing, we provide ongoing maintenance and support to keep it up-to-date and responsive to user feedback.
                    </p>

                    <h2 className="text-xl font-medium mb-4">What makes our Android development services apart from others</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        What sets our Android development services apart is our commitment to innovation, quality, and customer satisfaction. We combine technical expertise with creative thinking to deliver solutions that exceed expectations and drive tangible results for our clients. Our team stays updated with the latest trends and technologies in the Android ecosystem, allowing us to deliver cutting-edge apps that stand out in the crowded app market.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We prioritize collaboration and transparency, ensuring that our clients are involved in every step of the development process and their feedback is incorporated into the final product. With a proven track record of delivering successful projects and a dedication to delivering exceptional results, TechCompiler is your trusted partner for Android app development.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Partner with TechCompiler for all your Android application development needs</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Elevate your Android app experience with TechCompiler's comprehensive services tailored to meet your business needs. Our team specializes in delivering cutting-edge Android solutions that enhance user engagement and drive business growth.
                    </p>

                    <h2 className="text-xl font-medium mb-4">UI/UX and Prototyping</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Our skilled UI/UX designers and researchers create visually enticing, intuitive interfaces that captivate users through extensive testing and analysis. We identify pain points through user journeys to craft interfaces for maximum clarity and next-level experiences. We quickly build clickable prototypes replicating final designs to gather feedback for refinements early on to ensure targeted outcomes.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Custom Android App Development</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We develop end-to-end custom Android applications tailored to your specific business goals and requirements, resulting in solutions that deliver measurable outcomes. Our experts leverage the latest technologies like Machine Learning, IoT, AR, etc., along with proven frameworks like Flutter for building secure, scalable, and high-performing Android apps that your customers will love. We deliver with agility.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Android App QA and Testing</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Our dedicated QA specialists conduct rigorous functionality, usability, and performance testing across 400+ device variants to identify optimum user journeys. With manual and automated testing, we validate seamless UI flows, validate backend integrations, and ensure bug-free intuitive apps. We test fastidiously to address the fragmentation challenge with Android app testing for successful market outcomes.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Android App Maintenance and Support</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We provide ongoing maintenance, ensuring your Android app delivers consistent value with optimal uptime and performance using the latest upgrades and security patches. With regular monitoring, we identify issues proactively for rapid fixes along with constant improvements based on user feedback, new OS capabilities, etc., to future-proof your application.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Android App Modernization</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We help optimize your Android apps and modernize outdated capabilities by introducing intuitive material design interfaces, architectural/performance upgrades, new feature integrations, etc., to enable next-gen mobile experiences. With incremental upgrades aligned to budgets, we refresh apps, increasing customer lifetime value.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Android Consulting Services</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Our Android consulting services deliver actionable insights and expert recommendations to increase productivity by building bespoke mobility solutions tailored for scale, security, and innovation. We assess current application landscapes, devise mobile strategies leveraging emerging technologies, chalk out high-level roadmaps, and guide you in amplifying efficiency and customer delight through purposeful Android apps.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                        {androidServices.map((service, index) => (
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
                                        <img src={service.image} alt={`${service.name} preview`} className="w-[300px] h-auto object-contain rounded-lg shadow-md transition-transform duration-500 hover: scale-105" />
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

export default Android;