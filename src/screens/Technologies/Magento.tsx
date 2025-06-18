import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MagentoImg from "@/assets/Technologies Icon/MagentoImg.png";

const magentoServices = [
    {
        name: "Custom Magento Development",
        subtitle: "Build innovative Magento experiences completely customized for your brand",
        description:
            "We build innovative Magento experiences completely customized for your brand, offerings, and objectives - from tailored functionality to immersive personalization. Our developers fully leverage Magento’s enterprise-grade power and flexibility to reflect your uniqueness while driving engagement and conversions.",
        image: "/images/magento/custom-development.png"
    },
    {
        name: "Magento E-commerce Development",
        subtitle: "Create ecommerce ecosystems purpose-built to scale your business",
        description:
            "We create ecommerce ecosystems purpose-built to scale your business, combining Magento’s robust feature set with our proven methodology. Custom development optimizes your entire operation - intuitive browsing, frictionless transactions, operational efficiency - readying you for industry leadership.",
        image: "/images/magento/ecommerce-development.png"
    },
    {
        name: "Magento Cloud Hosting",
        subtitle: "Maximize Magento reliability and performance on the cloud",
        description:
            "Our specialized hosting maximizes Magento reliability and performance on the cloud. Lightning page loads, seamless scalability amid traffic spikes, always-on security and transparent updates enable you to focus resources on accelerating your commerce.",
        image: "/images/magento/cloud-hosting.png"
    },
    {
        name: "Intuitive Magento UI/UX Design",
        subtitle: "Blend stunning visual design with usability rigor",
        description:
            "We blend stunning visual design with usability rigor and conversion-focused insights, captivating shoppers across each touchpoint. Differentiate through excellence in Magento user experience.",
        image: "/images/magento/ui-ux-design.png"
    },
    {
        name: "Seamless Third Party Integration",
        subtitle: "Boost Magento’s capabilities with surrounding martech and ops solutions",
        description:
            "We architect and actualize the connections that boost Magento’s capabilities, uniting it with surrounding martech and ops solutions. The result: cohesion powering optimization across departments and channels.",
        image: "/images/magento/third-party-integration.png"
    },
    {
        name: "Theme and Extension Development",
        subtitle: "Elevate Magento's aesthetics, features, and functionality",
        description:
            "Elevate Magento's aesthetics, features, and functionality through our precisely tailored themes and extensions built for your workflows and ambitions. Stand apart while scaling easily.",
        image: "/images/magento/theme-extension-development.png"
    },
    {
        name: "Magento App Development",
        subtitle: "Engage mobile-first consumers with cross-platform Magento apps",
        description:
            "Engage mobile-first consumers with cross-platform Magento apps providing signature user experiences on the go. Consistency with your brand, site and back-end accelerates commerce adoption.",
        image: "/images/magento/app-development.png"
    },
    {
        name: "Upgrade and Migration Processes",
        subtitle: "Effortlessly transition to the latest Magento innovations",
        description:
            "Our proven methodology ensures you effortlessly transition to the latest Magento innovations or migrate from other platforms without business disruption, leveraging all capabilities from day one.",
        image: "/images/magento/upgrade-migration.png"
    }
];

const Magento = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">Magento Development Services</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                Accelerate omnichannel commerce with Magento experts
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Reach, engage, and transact with shoppers everywhere through seamless Magento implementations purpose-built for your brand. Our specialized team deeply understands both Magento’s robust ecommerce capabilities and the customized experiences today’s consumers expect. We architect and actualize solutions that speak to your products, customers, and ambitions - innovative yet on-brand, consistent yet tailored across touchpoints. Bringing strategic vision and proven methodology grounded in real-world success, we create digitally integrated ecosystems primed for expansion.
                            </p>
                        </div>

                        <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                            <p className="text-lg font-bold text-gray-600">
                                200 <br />
                                <span className="text-gray-400">Projects Completed</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                150 <br />
                                <span className="text-gray-400">Happy Clients</span>
                            </p>
                            <p className="text-lg font-bold text-gray-600">
                                12 <br />
                                <span className="text-gray-400">Years of Experience</span>
                            </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <img
                            src={MagentoImg}
                            alt="Android Development Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <h2 className="text-xl font-medium mb-4">What is Magento development?</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Magento development refers to the process of building, customizing, or enhancing ecommerce experiences using the Magento platform. As a feature-rich, open-source ecommerce solution, it offers robust tools for creating enterprise-grade online stores, shopping cart flows, product catalogues, promotions capabilities, and more. Magento development leverages these tools through solutions tailored specifically to a brand's business needs, target audiences, and omnichannel commerce ambitions. It encompasses consultative planning around ideal features and functionalities followed by technical implementation across web and mobile sites, apps, portals, and other touchpoints. Expert Magento developers help unlock the platform’s versatility through highly customized storefronts, seamless shopping journeys, intuitive CMS solutions, reliable performance, tight security, and scalability to accommodate future growth.
                    </p>

                    <h2 className="text-xl font-medium mb-4">What sets our development process apart from others</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        What sets our Magento development process apart from others is our unwavering commitment to excellence, attention to detail, and client-centric approach. From the initial consultation to post-launch support, we prioritize open communication, collaboration, and transparency, ensuring that your vision guides every step of the journey. Our team of experienced Magento developers possesses deep expertise in the platform, enabling us to leverage its full potential and deliver customized solutions tailored to your unique business needs.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We follow a structured and agile development methodology, combining creativity with technical proficiency to create visually stunning and highly functional Magento websites and ecommerce solutions. Moreover, our dedication to quality assurance and rigorous testing procedures guarantees that your website performs flawlessly across all devices and platforms. With our Magento development process, you can rest assured that your online presence will stand out from the competition, driving growth and success for your business.
                    </p>

                    <h2 className="text-xl font-medium mb-4">Explore our Magento development services</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {magentoServices.map((service, index) => (
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

export default Magento;