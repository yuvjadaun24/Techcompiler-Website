import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import VueJSImg from "@/assets/Technologies Icon/VueJSImg.png";

const vueServices = [
    {
        name: "Vue.JS Consultation",
        subtitle: "Strategic planning for your Vue projects",
        description: "Our Vue.js architects provide complete application planning and strategic advisory services. We begin by assessing your current landscape and then offer targeted recommendations on technology, architecture, integration needs, and development roadmaps to meet long-term business goals. We advise on best practices around state management, DevOps pipelines, design systems, API integrations, advanced customization, and more.",
        image: "/images/vue/consultation.png"
    },
    {
        name: "Vue.JS Storefront Development",
        subtitle: "High-conversion eCommerce experiences",
        description: "We build responsive Vue native applications that are optimized for conversion across devices. This includes crafting intuitive catalogs and product pages, frictionless checkout flows, and smart promotional modules. We build animated UI components and modular custom capabilities tailored to your operational needs.",
        image: "/images/vue/storefront.png"
    },
    {
        name: "Vue.JS Component Development",
        subtitle: "Reusable component libraries for efficiency",
        description: "Our Vue engineers build reusable component libraries aligning with your brand and design system requirements, enabling efficient scaffolds across projects. We create intuitive UI, data display, API integration, state management, and specialized interactive components tailored to your needs.",
        image: "/images/vue/components.png"
    },
    {
        name: "Vue.JS Migration",
        subtitle: "Modernize your Vue applications",
        description: "We safely upgrade or re-platform legacy Vue 1 codebases to Vue 2 and Vue 3, leveraging automated tools combined with manual validation to transition while maintaining full functionality. Our process covers dependency and syntax refactoring and backward compatibility to ensure performance tuning.",
        image: "/images/vue/migration.png"
    },
    {
        name: "Data Analysis Tools",
        subtitle: "Advanced data visualization solutions",
        description: "With advanced data visualization, drilling, manipulation, and AI-enabled predictive features built natively in Vue, our analytics tools uncover real-time insights for smarter decisions across sales, marketing, operations, and more. In addition to this, we build custom data solutions aligned to your KPIs.",
        image: "/images/vue/data.png"
    },
    {
        name: "Interactive Dashboards",
        subtitle: "Real-time monitoring solutions",
        description: "Our Vue developers build next-generation monitoring dashboards fueled by dynamic filtering, expanding UI capabilities, cross-integrations with internal databases and APIs, and real-time updated metrics across user locations.",
        image: "/images/vue/dashboards.png"
    },
    {
        name: "Social and Interactive Apps",
        subtitle: "Engaging social platforms",
        description: "We create innovative social platforms in Vue. By optimizing for engagement via features like activity streams, content sharing, instant messaging, push notifications, and UX enhancements, we create complex social applications that are dynamic and intuitive in nature.",
        image: "/images/vue/social.png"
    }
];

const VueJS = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">Vue.JS</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Vue.JS Development Services
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Build innovative, performance-centric user experiences using the VueJS framework. Leveraging the capabilities of the VueJS framework, we build feature-rich UI solutions that offer exceptional digital experiences to end users. With our rigorous development approach aligned to industry best practices, we architect future-proof Vue javascript-based solutions ready to elevate your web presence today and for years to come.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                72 <br />
                                <span className="text-sm font-thin text-gray-800">Vue Projects</span>
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
                            src={VueJSImg}
                            alt="Vue.JS Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is Vue.JS Development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. Vue distinguishes itself with an adoptable architecture focused on declarative rendering and component composition. Its core library focuses exclusively on the view layer and is easy to integrate with other libraries or existing projects.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Vue enables developers to build dynamic web interfaces in a crisp, maintainable way, utilizing techniques like reusable components, two-way data binding, virtual DOM, and scoped CSS. Some key advantages of Vue over other frameworks are lightning-fast speed, simplicity, versatility, and approachability. Harnessing the power of the Vue framework, we craft highly responsive web experiences on both web and mobile.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">
                            Vue.JS Development services to build visually pleasing and functional web/mobile applications
                        </h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            If you are looking for top-notch Vue.js development services, let TechCompiler's be your partner in building mighty applications at comparatively low prices. As an early adopter of Vue, our specialists are well-versed in this front-end framework, so you can count on us to develop functionally-rich digital products.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We understand how fast technology evolves, so we constantly educate ourselves on emerging techniques and integrate Vue effectively to materialize your vision into a well-crafted digital asset.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Additionally, our rigorous development methodologies ensure each project realizes its maximum potential. From UX design to DevOps, we utilize an integrated approach covering all aspects of front-end development to drive outcomes. Our strict quality assurance protocols around extensive unit testing, security audits, and manual validation ensure all development solutions perform to the highest standards.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">
                            Create next-gen digital products using TechCompiler's Vue development capabilities
                        </h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            TechCompiler is a leading provider of Vue JS development services to build digital products with seamless user interfaces, reduced loading times, and superior structure to gain a competitive edge in the digital landscape. Our Vue.js developers start their development process by understanding the client's expectations and delivering custom solutions tailored to their business requirements. We provide full-spectrum consulting, design, and development services for large enterprises and startups.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Here are a few benefits of undertaking our Vue services</h2>
                        <ul className="list-disc pl-5 mb-4 text-gray-700 text-sm leading-relaxed space-y-2">
                            <li><strong>Single-file Vue components:</strong> Streamlined development with organized single-file components that combine template, script, and style.</li>
                            <li><strong>Rigorous testing:</strong> Comprehensive unit, integration, and end-to-end testing protocols for every project.</li>
                            <li><strong>Nuxt.js expertise:</strong> Server-side rendering and static site generation capabilities with Nuxt framework.</li>
                            <li><strong>Vue ecosystem:</strong> Integration of supportive libraries like Vuex, Vue Router, and Apollo for state management and routing.</li>
                            <li><strong>Responsive design:</strong> Web experiences that adapt seamlessly across all device sizes and platforms.</li>
                            <li><strong>Continuous support:</strong> Ongoing maintenance, updates, and performance optimization post-launch.</li>
                        </ul>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We make the most out of the Vue technology and its supporting libraries to build solutions across various industries, including media, healthcare sites, logistics platforms, and EdTech solutions to eCommerce stores. Our Vue team upholds strong communication every step of the way to ensure we deliver the perfect custom solution for long-term success.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We commence working on the Vue project by first analyzing the project's requirements and then creating tailored workflows to understand how we can bring the desired results. Once we know the requirements, we do thorough planning to define the project scope and technical requirements. We then design the component architecture, dividing the application into reusable pieces.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our seasoned developers start with building core components for state management, routing, APIs, etc. Additional features are iteratively developed once the core development is done.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            We don't stop after crafting top-notch digital products, as we emphasize testing throughout the build process. Right from unit testing components in isolation to end-to-end testing user journeys, we ensure the quality is maintained throughout the process. We also optimize and fine-tune performance before final deployment.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore our range of Vue development services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {vueServices.map((service, index) => (
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

export default VueJS;