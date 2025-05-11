import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const DataAnalytics = () => {
    const services = [
        {
            name: "Data Strategy & Governance",
            subtitle: "Build a foundation for data-driven success",
            description:
                "We help organizations define their data vision, implement governance frameworks, and ensure compliance, accuracy, and consistency across data sources.",
            image: "/images/data-strategy.png",
        },
        {
            name: "Business Intelligence",
            subtitle: "Unlock actionable insights from data",
            description:
                "We design and develop dashboards and reports that help decision-makers monitor performance, track KPIs, and make informed decisions.",
            image: "/images/business-intelligence.png",
        },
        {
            name: "Advanced Analytics",
            subtitle: "Predict, optimize, and innovate",
            description:
                "Use statistical modeling, machine learning, and AI to uncover trends, forecast outcomes, and optimize operations.",
            image: "/images/advanced-analytics.png",
        },
        {
            name: "Data Engineering",
            subtitle: "Turn raw data into a valuable asset",
            description:
                "We build modern data pipelines and architectures that ensure clean, real-time, and reliable access to your data across platforms.",
            image: "/images/data-engineering.png",
        },
    ];

    return (
        <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-4">Data Analytics</h1>
                    <h3 className="text-lg font-bold mb-4 text-gray-400">
                        Transform data into decisions, and decisions into impact
                    </h3>
                    <p className="text-gray-700 text-sm">
                        In today's digital world, data is your most powerful asset. Our Data Analytics services empower organizations to collect, process, and interpret data to drive smarter business strategies. From foundational data infrastructure to predictive analytics, we help turn raw numbers into business value—enhancing operations, customer experiences, and growth.
                    </p>
                </div>
                <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
                    <p className="text-lg font-bold text-gray-600">50TB+<br /><span className="text-sm font-thin text-gray-800">Data Processed Monthly</span></p>
                    <p className="text-lg font-bold text-gray-600">99.9%<br /><span className="text-sm font-thin text-gray-800">Data Accuracy Rate</span></p>
                    <p className="text-lg font-bold text-gray-600">5x<br /><span className="text-sm font-thin text-gray-800">Faster Decision Making</span></p>
                    <button className="bg-zinc-800 text-center w-48 rounded-2xl h-14 relative text-white text-sm font-light group" type="button">
                        <div className="bg-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24">
                                <path d="M5 12h14M13 5l7 7-7 7" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="translate-x-2">Get In Touch</p>
                    </button>
                </div>
            </div>

            {/* Overview */}
            <div className="mb-16 opacity-1 translate-y-6 animate-fade-up animation-delay-300">
                <h2 className="text-2xl font-semibold text-black mb-4">
                    What is Data Analytics?
                </h2>
                <p className="text-gray-700 text-base leading-7">
                    Data Analytics is the science of examining raw data to uncover trends, draw conclusions, and support decision-making. It covers a range of techniques from simple reporting and visualization to predictive modeling and machine learning.
                </p>
                <p className="text-gray-700 text-base leading-7 mt-4">
                    Whether you're aiming to reduce costs, improve customer experiences, or innovate new products, data analytics offers the clarity and foresight needed to succeed in a competitive market.
                </p>
            </div>

            {/* Accordion Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black">
                        Services we provide
                    </h2>
                    <p className="text-sm text-gray-600 max-w-md w-80">
                        Leverage data at every level—from strategy and governance to AI-powered insights.
                    </p>
                </div>

                <div className="w-full flex justify-end">
                    <div className="w-[80%]">
                        <Accordion type="single" collapsible className="w-full">
                            {services.map((service, index) => (
                                <AccordionItem key={index} value={`service-${index}`} className="border-b border-gray-200">
                                    <AccordionTrigger className="py-8 px-2 sm:px-4 flex justify-between items-center group transition-all duration-500 hover:text-grey-700">
                                        <span className="text-3xl sm:text-4xl md:text-6xl font-medium text-black group-hover:text-grey-600 transition-all duration-300">
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
                                                <h3 className="text-base font-medium text-gray-700">
                                                    {service.subtitle}
                                                </h3>
                                                <p className="text-base text-black mt-2 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* Why It Matters */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why Data Analytics Matters</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Smarter Decisions",
                            desc: "Make choices backed by data instead of guesswork.",
                        },
                        {
                            title: "Improved Customer Experiences",
                            desc: "Understand customer behavior to deliver personalized service.",
                        },
                        {
                            title: "Operational Efficiency",
                            desc: "Spot inefficiencies, reduce waste, and optimize processes.",
                        },
                        {
                            title: "Innovation & Growth",
                            desc: "Identify new market opportunities and product ideas.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Workflow */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 animate-fade-up text-center">
                    Our Data Analytics Process
                </h2>
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
                    <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-full z-0"></div>
                    {[
                        {
                            step: "Data Discovery",
                            desc: "Understand available data, sources, and business goals.",
                        },
                        {
                            step: "Data Preparation",
                            desc: "Cleanse, structure, and unify data across platforms.",
                        },
                        {
                            step: "Analysis & Modeling",
                            desc: "Apply statistical techniques and algorithms to extract insights.",
                        },
                        {
                            step: "Visualization & Reporting",
                            desc: "Create dashboards and reports that reveal trends clearly.",
                        },
                        {
                            step: "Insights Activation",
                            desc: "Embed findings into business processes and strategies.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="relative bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6 md:w-1/5 w-full z-10 transition-transform duration-300 hover:scale-[1.02]">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400 font-medium">
                                    Step {idx + 1}
                                </span>
                                <div className="w-6 h-6 rounded-full bg-zinc-800 text-white text-xs flex items-center justify-center font-bold">
                                    {idx + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-black mb-2">
                                {item.step}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Industries */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Industries We Serve</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
                    {[
                        "Finance",
                        "Retail",
                        "Healthcare",
                        "eCommerce",
                        "Supply Chain",
                        "Education",
                        "Media",
                        "Energy",
                    ].map((sector, i) => (
                        <div key={i} className="bg-zinc-50 rounded-xl p-4 text-center font-medium shadow hover:scale-105 transition-transform">
                            {sector}
                        </div>
                    ))}
                </div>
            </div>

            {/* Closing */}
            <div className="mb-28">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 animate-fade-up">Why Choose Us?</h2>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-semibold text-black mb-2">Domain Expertise</h4>
                        <p className="text-sm leading-relaxed">
                            Our analysts understand both technology and your business, ensuring relevant and actionable insights.
                        </p>
                    </div>
                    <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-semibold text-black mb-2">End-to-End Capability</h4>
                        <p className="text-sm leading-relaxed">
                            From data pipelines to predictive dashboards—we deliver complete analytics ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalytics;
