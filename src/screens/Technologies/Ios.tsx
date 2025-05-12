import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import iOSImg from "@/assets/Technologies Icon/iOSImg.png";

const iOServices = [
    {
        name: "Custom iOS App Development",
        subtitle: "Transform your unique business needs into intuitive, user-friendly apps",
        description:
            "Our custom iOS app development transforms your unique business needs into intuitive, user-friendly apps. We specialize in crafting innovative experiences that impress and engage your customers. With market differentiation and seamless backend integration in mind, we build secure, scalable iOS environments tailored specifically to you.",
        image: "/images/ios/custom.png"
    },
    {
        name: "iWatch App Development",
        subtitle: "Extend your iOS ecosystem conveniently to users' wrists",
        description:
            "Extend your iOS ecosystem conveniently to users' wrists with our Apple Watch app development. We enable timely notifications, convenient app controls, and quick access to key information through wrist-based Apple Watch interactions. Boost efficiency by integrating Apple Watch capabilities across your iOS apps for more accessible, convenient user experiences.",
        image: "/images/ios/iwatch.png"
    },
    {
        name: "Apple TV App Development",
        subtitle: "Engage users on the big screen with our custom Apple TV app experiences",
        description:
            "Engage users on the big screen with our custom Apple TV app experiences. Leverage Apple's tvOS platform to deliver premium entertainment, immersive content, and interactive capabilities tailored for Apple TV. With rich multimedia integration and next-gen, gesture-based gaming logic, we help redefine digital entertainment possibilities through customized Apple TV apps.",
        image: "/images/ios/apple-tv.png"
    },
    {
        name: "iPad App Development",
        subtitle: "Transform workflows, enhance productivity, and boost enterprise mobility",
        description:
            "Transform workflows, enhance productivity, and boost enterprise mobility - all through the power of the iPad ecosystem. Our iPad app development leverages tablets' advanced capabilities and larger screens for more creative, optimized iPad user experiences. With Apple Pencil and drag-and-drop integration, we help you unlock your business’s full potential across iPad devices.",
        image: "/images/ios/ipad.png"
    },
    {
        name: "Integration and Migration",
        subtitle: "Ensure smooth transitions and seamless functionality across iOS environments",
        description:
            "Ensure smooth transitions and seamless functionality across iOS environments with our proven integration and migration services. We skillfully integrate iOS apps with diverse third-party systems while conducting rigorous testing to guarantee optimal post-migration performance. Trust us for safe, efficient migrations and integrations.",
        image: "/images/ios/integration-migration.png"
    },
    {
        name: "Enterprise iOS Apps",
        subtitle: "Empower your workforce through feature-rich native iOS apps tailored for business needs",
        description:
            "Empower your workforce through feature-rich native iOS apps tailored for business needs. Enable productivity, mobile access to business-critical systems, timely collaboration, and secure communication all on the go with our enterprise iOS solutions. With robust data security and slick UX included, leverage custom iOS to boost workforce efficiency.",
        image: "/images/ios/enterprise.png"
    }
];

const Ios = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">iOS Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Craft Exquisite iOS Apps to impress your audience
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Elevate your brand identity with our top-notch iOS application development services. Our team specializes in creating feature-rich, interactive, and innovative iOS applications that leave a lasting impression on your audience, driving engagement and loyalty to your brand.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                75 <br />
                                <span className="text-sm font-thin text-gray-800">iOS Projects</span>
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
                            src={iOSImg}
                            alt="TypeScript Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <h2 className="text-xl font-medium mb-4">What is iOS application development?</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        iOS application development involves creating immersive, intuitive software experiences optimized specifically for Apple products like iPhone, iPad, and iPod Touch. It requires expertise across Apple's robust frameworks like SwiftUI, Xcode, and SDK alongside core competencies in Objective-C and Swift programming.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        The iOS platform provides developers with advanced capabilities to build responsive, cutting-edge solutions through powerful frameworks like Core Animation, Core Data, Core Location, and more. ARKit, CoreML, and innovative sensor integrations also enable groundbreaking app possibilities.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Ultimately, iOS development is the strategic fusion of technical skills and design vision to deliver seamless user experiences that leverage iOS technologies. It means understanding Apple’s strict interface guidelines and keeping the end-user at the top of mind. iOS developers must craft apps that feel native to Apple devices, with lightning-fast performance and accessibility across product ecosystems. The result is elevated brand engagement through products users love.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Unveiling our iOS application development process</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Our holistic iOS app development process starts with gaining in-depth insight into your business objectives, target audience needs, and success metrics. This shapes a strategic roadmap aligning technical capabilities with user expectations.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We conceptualize innovative solutions through wireframes and interactive prototypes validated by user feedback. Agile app development integrates continuous client collaboration, while our robust architecture focuses on flexible, future-proof, and highly secure designs.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Rigorous testing across every device and scenario ensures a polished, bug-free product ready for App Store deployment. We also provide ongoing maintenance and support, continuously optimizing and enhancing your app to evolve with user needs and iOS advancements.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        The result is a streamlined process built on transparency, user-centricity, and seamless collaboration. This allows us to translate ideas into tangible iOS solutions that users love and businesses rely on.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Partner with TechCompiler for all your iOS application development requirements</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Partner with TechCompiler for all your iOS application development needs and unlock the full potential of your business in the digital realm. With our comprehensive expertise and unwavering dedication to excellence, we provide tailored solutions that align perfectly with your objectives and requirements. Our team of skilled developers combines technical proficiency with creative innovation to craft iOS applications that not only meet but exceed expectations.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We prioritize collaboration and transparency, ensuring that you are involved in every step of the development process, from initial planning to final deployment. With a proven track record of delivering successful projects and a commitment to delivering exceptional results, TechCompiler is your trusted partner for iOS application development.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Join forces with us today and embark on a journey of digital transformation that will elevate your brand and drive your business forward in the competitive landscape of the App Store.
                    </p>

                    <h2 className="text-xl font-medium mb-4">What makes our iOS development services apart from others</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        What sets our iOS development services apart is our unwavering commitment to innovation, quality, and customer satisfaction. We pride ourselves on blending technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Our team is dedicated to pushing the boundaries of what's possible, constantly exploring new technologies and approaches to ensure our clients receive cutting-edge solutions that drive tangible results for their businesses. Moreover, we prioritize quality at every stage of the development process, from planning and design to deployment and maintenance, ensuring that our apps are robust, reliable, and user-friendly.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Our iOS app development service offerings</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Empower your business and amplify brand value by partnering with us to build innovative iOS applications tailored to your goals across devices. With best-in-class UI/UX design principles, robust enterprise architecture, and a user-centric approach, we craft solutions that impress and engage your customers. Our broad spectrum of offerings is crafted to drive efficiency through mobility.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                        {iOServices.map((service, index) => (
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

export default Ios;