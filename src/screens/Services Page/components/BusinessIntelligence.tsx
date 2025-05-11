import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
//   import biServices from "../../../assets/biservices.png";
  
  const BusinessIntelligence = () => {
    const services = [
      {
        name: "Data Warehousing",
        subtitle: "Centralized data storage & retrieval",
        description:
          "Our BI solutions start with robust data warehousing, ensuring all your data is clean, accessible, and ready for insightful analysis.",
        image: "/images/bi-datawarehouse.png",
      },
      {
        name: "Data Visualization",
        subtitle: "Interactive dashboards & reports",
        description:
          "We transform complex data into intuitive dashboards using tools like Power BI, Tableau, and Looker to enable faster decision-making.",
        image: "/images/bi-visualization.png",
      },
      {
        name: "Predictive Analytics",
        subtitle: "Forecast trends & behavior",
        description:
          "Utilize historical data to forecast future outcomes and make strategic decisions with confidence using machine learning and AI models.",
        image: "/images/bi-predictive.png",
      },
      {
        name: "Self-Service BI",
        subtitle: "Empowering business users",
        description:
          "We enable your teams with self-service BI capabilities, eliminating bottlenecks and democratizing access to key data insights.",
        image: "/images/bi-selfservice.png",
      },
    ];
  
    return (
      <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Business Intelligence Services</h1>
            <h3 className="text-lg font-bold mb-4 text-gray-400">
              Unveil profound insights using our business intelligence services
            </h3>
            <p className="text-gray-700 text-sm">
              Business intelligence services empower organizations by transforming raw data into actionable insights, driving informed decision-making and fueling growth strategies. Our comprehensive BI solutions harness the power of advanced analytics, data visualization, and reporting to provide a holistic view of your business landscape. Gain a competitive edge by uncovering hidden trends, optimizing operations, and identifying untapped opportunities. Elevate your organization's performance with our expert business intelligence services, unlocking the true potential of your data for sustained success.
            </p>
          </div>
          <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
            <p className="text-lg font-bold text-gray-600">75+ <br /><span className="text-sm font-thin text-gray-800">BI Projects Delivered</span></p>
            <p className="text-lg font-bold text-gray-600">92%<br /><span className="text-sm font-thin text-gray-800">Faster Insights for Clients</span></p>
            <p className="text-lg font-bold text-gray-600">100%<br /><span className="text-sm font-thin text-gray-800">Data-Driven Strategy</span></p>
            <button
              className="bg-zinc-800 text-center w-48 rounded-2xl h-14 relative text-white text-sm font-light group"
              type="button"
            >
              <div className="bg-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 5l7 7-7 7" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="translate-x-2">Get In Touch</p>
            </button>
          </div>
        </div>
  
        {/* Featured Image */}
        <div className="mb-12">
          {/* <img
            src={biServices}
            alt="Business Intelligence Services"
            className="rounded-3xl w-5/7 object-cover shadow-[0px_4px_100px_16px_rgba(149,_157,_165,_0.2)] transition-transform duration-500 hover:scale-105"
          /> */}
        </div>
  
        {/* Overview Section */}
        <div className="mb-16 opacity-1 translate-y-6 animate-fade-up animation-delay-300">
          <h2 className="text-2xl font-semibold text-black mb-4">
            What is Business Intelligence?
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Business Intelligence (BI) encompasses the tools, technologies, and strategies used to analyze and interpret data to support informed business decisions. It allows organizations to harness data from various sources, offering a clear picture of operations and opportunities.
          </p>
          <p className="text-gray-700 text-base leading-7 mt-4">
            Key components of our BI offerings include:
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>Data Integration:</strong> Aggregating data from various systems into one unified source.
              </li>
              <li>
                <strong>ETL Processes:</strong> Extracting, transforming, and loading data for accuracy and consistency.
              </li>
              <li>
                <strong>Analytics Engines:</strong> Powerful engines that derive insights using statistical and AI-based analysis.
              </li>
              <li>
                <strong>Dashboarding & Reporting:</strong> Visual interfaces to make insights digestible and decisions immediate.
              </li>
              <li>
                <strong>Collaboration Tools:</strong> Shared dashboards and storytelling tools to engage stakeholders effectively.
              </li>
              <li>
                <strong>Governance & Security:</strong> Ensuring sensitive data is properly managed and shared with the right users.
              </li>
            </ul>
          </p>
        </div>
  
        {/* Services Accordion */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Services we provide
            </h2>
            <p className="text-sm text-gray-600 max-w-md w-80">
              Turning raw data into clear, actionable business outcomes.
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
        </div>
  
        {/* Why BI Matters */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why Business Intelligence Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Faster Decision-Making",
                desc: "Quickly uncover insights from vast datasets and respond rapidly to market changes.",
              },
              {
                title: "Increased Operational Efficiency",
                desc: "Identify inefficiencies and streamline processes based on hard data.",
              },
              {
                title: "Data-Backed Strategy",
                desc: "Make confident decisions backed by evidence rather than guesswork.",
              },
              {
                title: "Improved Customer Understanding",
                desc: "Analyze customer behavior and preferences to enhance engagement and satisfaction.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 animate-fade-up text-center">Our Proven Workflow</h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
            <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-full z-0"></div>
            {[
              {
                step: "Data Discovery",
                desc: "Understanding your existing data sources, structures, and reporting needs.",
              },
              {
                step: "Data Modeling",
                desc: "Designing the architecture for clean, reliable, and meaningful data relationships.",
              },
              {
                step: "Visualization Setup",
                desc: "Creating intuitive dashboards and reports tailored to end-users.",
              },
              {
                step: "Insight Delivery",
                desc: "Deploying solutions with training to ensure adoption and clarity.",
              },
              {
                step: "Optimization & Support",
                desc: "Ongoing refinement and support to keep your BI ecosystem running smoothly.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6 md:w-1/5 w-full z-10 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400 font-medium">Step {idx + 1}</span>
                  <div className="w-6 h-6 rounded-full bg-zinc-800 text-white text-xs flex items-center justify-center font-bold">{idx + 1}</div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{item.step}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Our BI Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
            {[
              "Power BI",
              "Tableau",
              "Looker",
              "Google Data Studio",
              "Snowflake",
              "Microsoft SQL Server",
              "BigQuery",
              "Python (Pandas)",
              "R",
              "Excel",
              "Domo",
              "QlikView",
            ].map((tech, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-4 text-center font-medium shadow hover:scale-105 transition-transform">
                {tech}
              </div>
            ))}
          </div>
        </div>
  
        {/* Why Work With Us */}
        <div className="mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 animate-fade-up">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black mb-2">Outcome-Focused Approach</h4>
              <p className="text-sm leading-relaxed">
                Our BI strategies focus on delivering real business value and actionable insights, not just data.
              </p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black mb-2">Domain Expertise</h4>
              <p className="text-sm leading-relaxed">
                With expertise across industries, we tailor solutions that match your unique business challenges and KPIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BusinessIntelligence;
  