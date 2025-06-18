import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WooCommerceImg from "@/assets/Technologies Icon/WooCommerceImg.png";

const wooCommerceServices = [
    {
        name: "WooCommerce Store Design and Development",
        subtitle: "Build beautifully converting online stores with WooCommerce",
        description:
            "We build beautifully converting online stores with WooCommerce, matching your brand experience from concept visualization through development, testing, and launch. Our design process begins with a deep analysis of your niche, customers, products, and growth goals to inform intuitive, high-converting designs. Development then brings vision to life as a responsively flawless, completely branded storefront aligned to your processes.",
        image: "/images/woocommerce/store-design.png"
    },
    {
        name: "WooCommerce Theme Customization",
        subtitle: "Extensively customized, pixel-perfect WooCommerce storefronts",
        description:
            "Beyond out-of-the-box themes, our experts deliver extensively customized, pixel-perfect WooCommerce storefronts that align with your niche, products, and processes. No shortfalls of pre-made templates – we tweak every template aspect imaginable, from content blocks to style sheets, unleashing the flexible power of WooCommerce.",
        image: "/images/woocommerce/theme-customization.png"
    },
    {
        name: "WooCommerce API Development",
        subtitle: "Connect WooCommerce to other applications and services",
        description:
            "Our API developers help connect WooCommerce to other applications, external services, customized integrations, and headless storefronts. We build secure, scalable APIs to unlock data, implement special features, enable headless architectures, integrate logistics/procurement flows, and futureproof expanding ambitions.",
        image: "/images/woocommerce/api-development.png"
    },
    {
        name: "WooCommerce Extension Development",
        subtitle: "Craft bespoke extensions with unique capabilities",
        description:
            "We craft bespoke extensions with unique capabilities missing from off-the-shelf add-ons - optimized for your workflows. Identifying pain points around inventory, productivity, or automation, we conceptualize and create the exact tailored extension you require – streamlining operations today while easily scaling for tomorrow.",
        image: "/images/woocommerce/extension-development.png"
    },
    {
        name: "WooCommerce Payment and Shipping Solutions",
        subtitle: "Seamlessly integrate payment gateways and shipping methods",
        description:
            "We seamlessly integrate payment gateways globally preferred for your target markets alongside optimized shipping methods. Any payment service or carrier can be connected through WooCommerce – our experts identify the optimal combinations and rigorously test them for transparent, trustworthy buyer journeys free of friction.",
        image: "/images/woocommerce/payment-shipping.png"
    },
    {
        name: "PSD Conversion to WooCommerce",
        subtitle: "Transform your design mockups into responsive WooCommerce stores",
        description:
            "Transform your design mockups into responsive, high-converting WooCommerce stores brought to life just as you envisioned. Our developers expertly hand-code slick PSDs into WooCommerce stores that impress across devices. We realize pixel perfection aligns with your brand guide, injects best practice UX and conversion insights, and codes cleanly for easy modifications.",
        image: "/images/woocommerce/psd-conversion.png"
    }
];

const WooCommerce = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">WooCommerce Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Elevate your online store with expert WooCommerce development services
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                WooCommerce lets you leverage WordPress’ ease and flexibility to create full-featured online stores. Our specialized WooCommerce developers help you tap into its robust e-commerce capabilities for greater sales and growth. We deliver solutions customized to your products, customers, and processes so you can showcase your brand effectively, engage shoppers intuitively, and manage orders smoothly. With deeper WooCommerce usage insights and best practice implementation, we enhance everything from immersive shopping experiences to simplified inventory and shipping.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                100  <br />
                                <span className="text-gray-400">Projects Completed</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                50 <br />
                                <span className="text-gray-400">Happy Clients</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                10 <br />
                                <span className="text-gray-400">Years of Experience</span>
                            </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <img
                            src={WooCommerceImg}
                            alt="Android Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <h2 className="text-xl font-medium mb-4">What is WooCommerce development?</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        WooCommerce development refers to building, customizing, and enhancing online stores powered by the WooCommerce open-source e-commerce platform. WooCommerce is a plugin that turns any WordPress site into a full-fledged shopping destination with cart flows, payment integration, taxation, and shipping capabilities. WooCommerce development encompasses tailored solutions around selection display, shopper journeys, branding, promotions, customer experiences, order processing, and analytics across web, mobile, and other touchpoints. Expert WooCommerce developers help unleash the platform’s versatility to create unique, high-converting online stores aligned to specific business needs - from small shops to large enterprises across industries. Robust development optimizes stores for growth now and into the future.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Unveiling how our development process works</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        To craft exceptional online shopping experiences for our clients, we commence by comprehensively understanding your business goals, target audience, and specific requirements. Next, our expert team delves into strategic planning, mapping out the structure and features of your WooCommerce store to ensure alignment with your objectives.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Once the blueprint is in place, we embark on the development phase, leveraging our technical prowess to customize themes, integrate essential plugins, and optimize performance for seamless user navigation. Throughout this stage, we prioritize open communication and collaboration, ensuring that your feedback and insights shape the final product.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        After rigorous testing and quality assurance checks, we facilitate the smooth deployment of your WooCommerce store, guiding you through the setup process and providing training as needed. Post-launch, our commitment continues with ongoing support and maintenance services, ensuring your online store remains secure, updated, and optimized for success in the ever-evolving e-commerce landscape.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Partner with TechCompiler for all your WooCommerce development requirements</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        TechCompiler has been the go-to WooCommerce expert for Fortune 500 companies and ambitious startups alike since the platform’s inception. When you require reliable custom e-commerce development and optimization leveraging everything WooCommerce offers, our specialized team delivers - no need to settle for cookie-cutter templates. We become an extension of your business, taking time to understand your specific objectives, buyers, processes, and growth trajectories before recommending and implementing solutions purpose-built for your current and future needs.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Partnering with us means tapping into WooCommerce’s full power with technical skill, creative insight, and strategic foresight guiding every step.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Explore our WooCommerce development services</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {wooCommerceServices.map((service, index) => (
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

export default WooCommerce;