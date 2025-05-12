import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TypeScriptImg from "@/assets/Technologies Icon/TypeScriptImg.png";

const tsServices = [
    {
        name: "Custom TypeScript Development",
        subtitle: "Build business-critical applications with TypeScript",
        description:
            "Leverage our expertise to construct robust web and mobile applications with TypeScript. We blend cutting-edge libraries with time-tested patterns for effective functionality. Utilizing TypeScript capabilities, we offer a balanced approach melding performance, security, and flexibility.",
        image: "/images/typescript/custom.png"
    },
    {
        name: "TypeScript UI/UX Development",
        subtitle: "Intuitive, user-centric interfaces that enhance engagement",
        description:
            "Our TypeScript developers design intuitive, user-centric interfaces that enhance engagement and drive action. We combine aesthetic design sensibilities with UX best practices to produce interfaces that look amazing and function effortlessly.",
        image: "/images/typescript/uiux.png"
    },
    {
        name: "TypeScript Web Development",
        subtitle: "Dynamic web apps optimized for modern needs",
        description:
            "Our TypeScript web development team builds dynamic web apps optimized for the modern internet age. By leveraging TypeScript's capabilities, we create seamless web experiences where content updates instantly without page refreshes, ensuring a smooth user experience.",
        image: "/images/typescript/web.png"
    },
    {
        name: "TypeScript Mobile App Development",
        subtitle: "Cross-platform mobile apps with native quality",
        description:
            "Enable mobile access to your web app's full functionality with our TypeScript mobile development services. Our experts build cross-platform apps compatible across iOS and Android, ensuring a native-quality experience with maximum code reuse.",
        image: "/images/typescript/mobile.png"
    },
    {
        name: "TypeScript Enterprise App Development",
        subtitle: "Scalable solutions for enterprise growth",
        description:
            "We develop full-fledged TypeScript enterprise solutions designed from scratch to scale with your rapid growth. Our TypeScript developers architect robust application structures and reusable components that simplify adding new features without breaking existing code.",
        image: "/images/typescript/enterprise.png"
    },
    {
        name: "TypeScript Migration and Porting Services",
        subtitle: "Modernize your legacy applications",
        description:
            "Migrate your JavaScript codebase to TypeScript for enhanced integrity, performance, and scalability without risk or downtime. Our migration approach methodically converts files and components while retaining full functionality.",
        image: "/images/typescript/migration.png"
    },
    {
        name: "TypeScript Consulting Services",
        subtitle: "Expert guidance for your TypeScript projects",
        description:
            "Our TypeScript consulting services analyze your tech infrastructure and workflows to chart an optimized roadmap leveraging TypeScript. We grasp objectives, pain points, and challenges across your stack, processes, and talent.",
        image: "/images/typescript/consulting.png"
    }
];

const TypeScript = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">TypeScript Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Build business-critical applications with TypeScript
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Leverage our expertise to construct robust web and mobile applications with TypeScript. We blend cutting-edge libraries with time-tested patterns for effective functionality. Utilizing TypeScript capabilities, we offer a balanced approach melding performance, security, and flexibility.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                85 <br />
                                <span className="text-sm font-thin text-gray-800">TypeScript Projects</span>
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
                            src={TypeScriptImg}
                            alt="TypeScript Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is TypeScript development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            TypeScript is a statically typed superset of JavaScript that compiles down to plain JavaScript. It adds features like static typing, interfaces, generics, and more while remaining compatible with JavaScript ecosystems. TypeScript development utilizes these additional features to create more scalable, maintainable, and error-resistant web and mobile applications. Static typing catches bugs early in the development process, enhancing stability. The code also runs natively across browsers and devices without needing transpilation.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            TypeScript follows ES6 standards and easily incorporates the latest JavaScript features. It can incrementally adopt TypeScript features or utilize them wholesale in large codebases. TypeScript apps blend cutting-edge functionality with bulletproof resilience and systemic integrity. Overall, TypeScript allows developers to create powerful solutions out of a future-proof language.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">TypeScript development services to build high-performing applications</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Techcompiler has honed TypeScript mastery through years of application development. Our experts architect systems utilizing industry best practices like dependency injection, modular programming, and abstraction to create evolvable code requiring minimal maintenance. We focus on language fundamentals, all while maximizing functionality. Our apps capture metrics, allowing data-driven refinements for better customer experiences.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We house TypeScript developers with proven expertise, curiosity, and commitment to quality. They receive continual training on emerging techniques and breakthroughs. We combine passion, rigor, and care to craft apps that solve complex business challenges with elegant solutions.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Unveiling how our development process works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We utilize an agile approach that ensures the development of high-quality TypeScript apps. Our process begins with collaboration to grasp objectives and challenges. We architect flexible solutions focused on your requirements so that they bring value to your business. We are committed to maintaining systemic integrity across rapid development cycles to deliver real user value quickly while upholding robustness for the long term. Our refined process compounds gains through swiftly building robust, scalable, and high-performing apps.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our range of TypeScript development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {tsServices.map((service, index) => (
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

export default TypeScript;