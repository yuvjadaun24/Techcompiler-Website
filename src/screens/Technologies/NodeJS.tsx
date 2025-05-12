import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NodeJSImg from "@/assets/Technologies Icon/NodeJSImg.png";

const nodeJSServices = [
    {
        name: "Custom Node.js Development",
        subtitle: "Tailored applications to meet your unique business needs",
        description:
            "Our custom Node.js development services are crafted to create specialized applications that match your unique business requirements. By fully understanding your needs, our developers build flexible, feature-rich apps leveraging Node.js speed and scalability. We create simple prototypes to complex enterprise-grade solutions to drive efficiency. With robust architecture and seamless integration capabilities, our tailor-made apps provide the best competitive edge.",
        image: "/images/nodejs/custom.png"
    },
    {
        name: "Node.js Web Development",
        subtitle: "Progressive web apps with real-time capabilities",
        description:
            "Our stellar Node.js web development empowers you to build progressive web apps with real-time communication, social media integrations, and more. By harnessing Node.js speed and scalability, we create secure and responsive web platforms tailored to supercharge your operations. From eCommerce stores to custom social platforms, our solutions are designed to amplify performance.",
        image: "/images/nodejs/web-development.png"
    },
    {
        name: "Node.js Mobile Application Development",
        subtitle: "Lightning-fast native or cross-platform mobile apps",
        description:
            "Our Node.js mobile app development expertise helps build lightning-fast native or cross-platform mobile apps that users love. We create intuitive mobile solutions that boost engagement by optimizing data exchanges and maximizing efficiency. With pixel-perfect UI/UX design and robust backend integration, our mobile apps enable next-gen experiences that bolster brand value.",
        image: "/images/nodejs/mobile-development.png"
    },
    {
        name: "Node.js for Backend Development",
        subtitle: "Turbocharged application performance",
        description:
            "With years of backend development expertise, our Node.js backends turbocharge application performance and let you handle insane traffic smoothly. Our systems are built on Node.js, which helps improve speed and scalability to power real-time apps like messaging platforms and IoT ecosystems seamlessly. With air-tight security, our reliable backends drive innovation, helping to strengthen market leadership.",
        image: "/images/nodejs/backend-development.png"
    },
    {
        name: "Node.js API Development",
        subtitle: "Flexible, enterprise-grade APIs for integrations",
        description:
            "Our Node.js API development expertise helps craft flexible, enterprise-grade APIs for internal/external integrations. With robust architecture, they enable blistering fast real-time data exchanges critical for modern applications. Whether building public-facing APIs or internal microservices, our reliable solutions drive service orchestration for maximum business value.",
        image: "/images/nodejs/api-development.png"
    },
    {
        name: "Node.js Plugin Development",
        subtitle: "Customizable plugins to extend application capabilities",
        description:
            "With proven experience in plugin development, we build customizable Node.js plugins that seamlessly extend application capabilities on demand. By understanding specific business requirements, we create modular plugins optimized for performance, scalability, and seamless integration into existing infrastructure.",
        image: "/images/nodejs/plugin-development.png"
    },
    {
        name: "Node.js Consulting Services",
        subtitle: "Expert guidance to optimize your Node.js implementations",
        description:
            "Our Node.js consulting services provide technology assessment, architecture reviews, and actionable insights to optimize existing implementations. With performance tuning and scalability enhancements, we help you extract maximum ROI from Node.js investment through expert guidance.",
        image: "/images/nodejs/consulting.png"
    }
];

const NodeJS = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">Node.js Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Harness the power of Node.js to tailor applications with seamless overall performance
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Elevate your digital presence with our Node.js development services, meticulously crafted to deliver exceptional performance, scalability, and efficiency. Our team of expert developers focuses on leveraging Node.js to build lightning-speed, lightweight web applications that can easily handle heavy I/O inputs.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray- 600">
                                85 <br />
                                <span className="text-sm font-thin text-gray-800">Node.js Projects</span>
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
                            src={NodeJSImg}
                            alt="Node.js Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is Node.js development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Node.js is a popular open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It allows developers to use JavaScript for server-side scripting to construct scalable and high-performance backend services and web applications. The asynchronous, event-driven architecture of Node.js makes it lightweight, efficient, and ideal for real-time applications.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Key components of Node.js development consist of using non-blocking I/O operations for quick request processing, leveraging npm’s large array of open-source libraries and tools, and coding server-side web apps with Node’s core modules. Node.js is particularly applicable for building fast and scalable data-intensive applications like chat servers, streaming platforms, etc.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our Node.js development process starts with comprehensive discovery and planning, where we meticulously analyze your project needs and technical requirements. Following this, our expert architects craft a robust architecture plan, leveraging Node.js's event-driven, non-blocking I/O model to ensure scalability and responsiveness. Then, our seasoned developers bring your ideas to life using agile methodologies, iterating through development and testing phases to deliver top-notch quality.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Once development is complete, we set up your application for production environments, optimizing performance and ensuring seamless integration. Our commitment extends beyond deployment, as we provide ongoing support and maintenance to keep your application secure and up-to-date.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Partner with TechCompiler for all your Node.js development requirements</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Partner with TechCompiler for all your Node.js development requirements and unlock the full potential of this powerful technology for your business. Our team of experienced developers specializes in harnessing the capabilities of Node.js to deliver high-performing, scalable, and efficient solutions tailored to your specific needs. Whether you're looking to build lightweight web applications, real-time APIs, or data-intensive platforms, we have the expertise to bring your ideas to life.
                        </p>    
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            With a proven track record of success and a commitment to excellence, we ensure that your Node.js projects are completed on time, within budget, and to the highest standards of quality. Trust us as your strategic partner to navigate the complexities of Node.js development and confidently achieve your business objectives.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Join hands with TechCompiler and experience the difference of working with a trusted partner dedicated to your success.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our Node.js development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {nodeJSServices.map((service, index) => (
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

export default NodeJS;