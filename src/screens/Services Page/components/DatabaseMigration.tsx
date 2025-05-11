import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const DatabaseMigration = () => {
    const services = [
        {
            name: "Cloud Migration",
            subtitle: "Move to the cloud with confidence",
            description:
                "Seamlessly migrate your databases to cloud platforms like AWS, Azure, or Google Cloud with minimal disruption and maximum security.",
            image: "/images/migration-cloud.png",
        },
        {
            name: "Legacy System Modernization",
            subtitle: "Upgrade without losing critical data",
            description:
                "We help you transition from outdated systems to modern database platforms while maintaining data integrity and application compatibility.",
            image: "/images/migration-legacy.png",
        },
        {
            name: "Cross-Platform Migration",
            subtitle: "From one DBMS to another—seamlessly",
            description:
                "Our experts specialize in migrating databases across platforms (e.g., SQL Server to PostgreSQL) with zero data loss and performance tuning.",
            image: "/images/migration-crossplatform.png",
        },
        {
            name: "Data Validation & Optimization",
            subtitle: "Ensure accuracy and improve performance",
            description:
                "We validate data consistency post-migration and apply optimization techniques to enhance query performance and scalability.",
            image: "/images/migration-optimization.png",
        },
    ];

    return (
        <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-4">Database Migration Services</h1>
                    <h3 className="text-lg font-bold mb-4 text-gray-400">
                        Unleash business growth by migrating digital assets
                    </h3>
                    <p className="text-gray-700 text-sm">
                        In today's rapidly evolving digital landscape, organizations must adapt swiftly to remain competitive. Database migration services empower businesses to seamlessly transition their data ecosystems to unlock new possibilities. Our expert team meticulously plans and executes migrations, ensuring data integrity, minimizing downtime, and mitigating risks. Whether upgrading to cutting-edge technologies, consolidating disparate systems, or embracing cloud computing, our tailored solutions optimize performance, enhance scalability, and fortify security.
                    </p>
                </div>
                <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
                    <p className="text-lg font-bold text-gray-600">99.9%<br /><span className="text-sm font-thin text-gray-800">Data Integrity Retention</span></p>
                    <p className="text-lg font-bold text-gray-600">Zero<br /><span className="text-sm font-thin text-gray-800">Unplanned Downtime</span></p>
                    <p className="text-lg font-bold text-gray-600">2x<br /><span className="text-sm font-thin text-gray-800">Faster Query Performance</span></p>
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
                    What is Database Migration?
                </h2>
                <p className="text-gray-700 text-base leading-7">
                    Database migration is the process of transferring data between storage types, formats, or systems. It often includes moving to a new database platform or cloud service to increase efficiency and scalability.
                </p>
                <p className="text-gray-700 text-base leading-7 mt-4">
                    Our structured approach to migration ensures accuracy, reduces risks, and minimizes downtime—so your business keeps moving while your data evolves.
                </p>
            </div>

            {/* Accordion Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black">
                        Services we provide
                    </h2>
                    <p className="text-sm text-gray-600 max-w-md w-80">
                        From strategy to execution, we offer full-cycle database migration services.
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
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why Database Migration Matters</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Business Agility",
                            desc: "Enable fast adaptation by modernizing and optimizing your data systems.",
                        },
                        {
                            title: "Scalability",
                            desc: "Prepare your infrastructure to handle future growth with ease.",
                        },
                        {
                            title: "Improved Security",
                            desc: "Move to secure platforms with enhanced data protection protocols.",
                        },
                        {
                            title: "Cost Efficiency",
                            desc: "Reduce licensing and maintenance costs with optimized solutions.",
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
                    Our Migration Process
                </h2>
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
                    <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-full z-0"></div>
                    {[
                        {
                            step: "Assessment & Planning",
                            desc: "Analyze current systems and define a detailed migration roadmap.",
                        },
                        {
                            step: "Schema Conversion",
                            desc: "Transform schema and structure for compatibility with target systems.",
                        },
                        {
                            step: "Data Migration",
                            desc: "Execute data transfer securely with validation at every stage.",
                        },
                        {
                            step: "Testing & QA",
                            desc: "Perform functional, performance, and integrity testing post-migration.",
                        },
                        {
                            step: "Optimization & Support",
                            desc: "Fine-tune performance and offer ongoing monitoring and support.",
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

            {/* Tech Stack */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Technologies We Support</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
                    {[
                        "MySQL",
                        "PostgreSQL",
                        "Oracle",
                        "MongoDB",
                        "SQL Server",
                        "Amazon RDS",
                        "Azure SQL",
                        "Google Cloud SQL",
                        "Snowflake",
                        "DynamoDB",
                        "Firebase",
                        "MariaDB",
                    ].map((tech, i) => (
                        <div key={i} className="bg-zinc-50 rounded-xl p-4 text-center font-medium shadow hover:scale-105 transition-transform">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

            {/* Closing */}
            <div className="mb-28">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 animate-fade-up">Why Partner With Us?</h2>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-semibold text-black mb-2">End-to-End Expertise</h4>
                        <p className="text-sm leading-relaxed">
                            From legacy assessment to post-migration support, we offer a complete suite of services.
                        </p>
                    </div>
                    <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-semibold text-black mb-2">Proven Track Record</h4>
                        <p className="text-sm leading-relaxed">
                            With successful migrations across industries, we ensure a smooth, risk-free transition.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatabaseMigration;
