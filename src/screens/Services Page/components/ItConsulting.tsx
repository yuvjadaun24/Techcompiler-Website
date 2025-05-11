import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const ITConsulting = () => {
    const services = [
      {
        name: "Digital Strategy",
        subtitle: "Align technology with business goals",
        description:
          "We help define your digital roadmap, ensuring your IT investments directly contribute to growth, innovation, and efficiency.",
        image: "/images/consulting-strategy.png",
      },
      {
        name: "Technology Advisory",
        subtitle: "Navigate the tech landscape with confidence",
        description:
          "Our consultants provide unbiased insights and recommendations for choosing the right technologies, platforms, and tools.",
        image: "/images/consulting-advisory.png",
      },
      {
        name: "IT Infrastructure Assessment",
        subtitle: "Diagnose and improve IT environments",
        description:
          "We analyze your existing IT infrastructure and recommend enhancements to boost performance, reliability, and scalability.",
        image: "/images/consulting-infrastructure.png",
      },
      {
        name: "Risk & Compliance Consulting",
        subtitle: "Stay secure and compliant",
        description:
          "We guide organizations in navigating regulations, managing cybersecurity threats, and ensuring data privacy across operations.",
        image: "/images/consulting-compliance.png",
      },
    ];
  
    return (
      <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">IT Consulting</h1>
            <h3 className="text-lg font-bold mb-4 text-gray-400">
              Empowering business decisions through expert IT guidance
            </h3>
            <p className="text-gray-700 text-sm">
              In a world where technology evolves rapidly, IT Consulting ensures your organization makes informed, future-ready decisions. We partner with businesses to align technology strategy with goals, assess current systems, and implement transformative solutions. Our consultants bring industry knowledge and technical expertise to help you overcome operational challenges, reduce risk, and achieve measurable results.
            </p>
          </div>
          <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
            <p className="text-lg font-bold text-gray-600">25+<br /><span className="text-sm font-thin text-gray-800">Industries Consulted</span></p>
            <p className="text-lg font-bold text-gray-600">95%<br /><span className="text-sm font-thin text-gray-800">Client Satisfaction Rate</span></p>
            <p className="text-lg font-bold text-gray-600">4.8/5<br /><span className="text-sm font-thin text-gray-800">Average ROI Impact</span></p>
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
            What is IT Consulting?
          </h2>
          <p className="text-gray-700 text-base leading-7">
            IT Consulting involves advising businesses on how to best use technology to achieve their objectives. It encompasses everything from strategic planning and vendor selection to infrastructure audits and solution design.
          </p>
          <p className="text-gray-700 text-base leading-7 mt-4">
            Our consultants work closely with your team to understand your business, evaluate your technology landscape, and recommend actionable strategies that enhance agility, reduce costs, and fuel growth.
          </p>
        </div>
  
        {/* Accordion Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Services we provide
            </h2>
            <p className="text-sm text-gray-600 max-w-md w-80">
              Get tailored, actionable advice for solving complex business and technology challenges.
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why IT Consulting Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Strategic Alignment",
                desc: "Ensure your IT initiatives directly support long-term business goals.",
              },
              {
                title: "Cost Optimization",
                desc: "Identify inefficiencies and opportunities for smarter tech investments.",
              },
              {
                title: "Innovation Enablement",
                desc: "Unlock new business models and products through digital innovation.",
              },
              {
                title: "Technology Foresight",
                desc: "Stay ahead with informed decisions based on emerging trends.",
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
            Our Consulting Approach
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
            <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-full z-0"></div>
            {[
              {
                step: "Discovery & Analysis",
                desc: "Understand your business, goals, and current tech landscape.",
              },
              {
                step: "Strategic Planning",
                desc: "Define technology strategies aligned with long-term business success.",
              },
              {
                step: "Roadmap Development",
                desc: "Create a detailed implementation roadmap for tech solutions.",
              },
              {
                step: "Execution Support",
                desc: "Provide hands-on help during solution implementation, if needed.",
              },
              {
                step: "Continuous Optimization",
                desc: "Monitor, evaluate, and improve performance over time.",
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
              "Healthcare",
              "Retail",
              "Manufacturing",
              "Logistics",
              "Education",
              "Telecom",
              "Public Sector",
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
              <h4 className="text-xl font-semibold text-black mb-2">Vendor-Neutral Advice</h4>
              <p className="text-sm leading-relaxed">
                We provide independent recommendations with your best interest at the core.
              </p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black mb-2">Results-Focused</h4>
              <p className="text-sm leading-relaxed">
                Our success is measured by your transformation, efficiency, and outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ITConsulting;
  