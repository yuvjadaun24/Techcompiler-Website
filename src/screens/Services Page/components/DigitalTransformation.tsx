import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
//   import digitalImage from "../../../assets/digital-transformation.png";
  
  const DigitalTransformation = () => {
    const services = [
      {
        name: "Strategy",
        subtitle: "Blueprint for digital success",
        description:
          "We help define your transformation roadmap, aligning digital capabilities with business goals for a sustainable competitive edge.",
        image: "/images/strategy-digital.png",
      },
      {
        name: "Automation",
        subtitle: "Streamline and scale operations",
        description:
          "Using intelligent automation tools, we eliminate inefficiencies, reduce manual effort, and optimize performance across departments.",
        image: "/images/automation-digital.png",
      },
      {
        name: "Cloud",
        subtitle: "Scale with flexibility",
        description:
          "We migrate, manage, and optimize your infrastructure in the cloud, ensuring security, scalability, and speed-to-market.",
        image: "/images/cloud-digital.png",
      },
      {
        name: "AI & Analytics",
        subtitle: "Smarter decisions with data",
        description:
          "Harness the power of data with advanced analytics, machine learning, and real-time insights to guide your digital evolution.",
        image: "/images/ai-digital.png",
      },
    ];
  
    return (
      <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Digital Transformation</h1>
            <h3 className="text-lg font-bold mb-4 text-gray-400">Unleash strategic transformations with digital dominance</h3>
            <p className="text-gray-700 text-sm">
              In today's rapidly evolving digital landscape, businesses must embrace transformative strategies to stay ahead of the curve. Our comprehensive digital transformation services empower organizations to unlock new realms of innovation, agility, and customer-centricity. Through a meticulously crafted approach, we revolutionize processes, integrate cutting-edge technologies, and cultivate a digital-first mindset across all facets of operations. Our seasoned experts navigate the intricate complexities, delivering tailored solutions that propel businesses toward unprecedented growth and market dominance. From streamlining workflows to harnessing data-driven insights, we architect future-proof digital ecosystems that foster operational excellence, enhance customer engagement, and drive sustainable competitive advantages.
            </p>
          </div>
          <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
            <p className="text-lg font-bold text-gray-600">50+ <br /><span className="text-sm font-thin text-gray-800">Digital Success Stories</span></p>
            <p className="text-lg font-bold text-gray-600">98%<br /><span className="text-sm font-thin text-gray-800">Client Retention Rate</span></p>
            <p className="text-lg font-bold text-gray-600">250+<br /><span className="text-sm font-thin text-gray-800">Projects Delivered</span></p>
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
  
        {/* Image */}
        <div className="mb-12">
          {/* <img
            src={digitalImage}
            alt="Digital Transformation Visual"
            className="rounded-3xl w-5/7 object-cover shadow-[0px_4px_100px_16px_rgba(149,_157,_165,_0.2)] transition-transform duration-500 hover:scale-105"
          /> */}
        </div>
  
        {/* Overview */}
        <div className="mb-16 opacity-1 translate-y-6 animate-fade-up animation-delay-300">
          <h2 className="text-2xl font-semibold text-black mb-4">
            What is digital transformation?
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It involves reimagining processes, encouraging a digital culture, and making strategic use of technology to adapt and grow in an evolving landscape.
          </p>
          <p className="text-gray-700 text-base leading-7 mt-4">
            Whether it's adopting automation, modernizing legacy systems, migrating to the cloud, or leveraging AI-driven insights, digital transformation ensures you're equipped to respond faster to market demands and deliver enhanced customer experiences.
          </p>
        </div>
  
        {/* Accordion Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Services we provide
            </h2>
            <p className="text-sm text-gray-600 max-w-md w-80">
              Reimagining business operations with digital-first strategies.
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why Digital Transformation Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Enhanced Agility",
                desc: "Adapt swiftly to market shifts and evolving customer needs with a responsive digital backbone.",
              },
              {
                title: "Customer-Centric Models",
                desc: "Put users at the heart of your strategy with insights-driven design and personalization.",
              },
              {
                title: "Data-Driven Growth",
                desc: "Leverage real-time data to make informed, confident decisions and uncover new opportunities.",
              },
              {
                title: "Future-Ready Operations",
                desc: "Digitally mature processes give your business the edge to thrive in any environment.",
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
            Our Proven Approach
          </h2>
  
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
            <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-full z-0"></div>
  
            {[
              {
                step: "Assess & Strategize",
                desc: "We evaluate your current state and design a customized transformation roadmap.",
              },
              {
                step: "Tech Enablement",
                desc: "Integrate cutting-edge technologies to revamp legacy systems and boost capabilities.",
              },
              {
                step: "Process Redesign",
                desc: "Streamline workflows for efficiency, automation, and agility at scale.",
              },
              {
                step: "Rollout & Scale",
                desc: "Pilot innovations, track KPIs, and scale successful models across your organization.",
              },
              {
                step: "Continuous Optimization",
                desc: "We measure, iterate, and improve your digital ecosystem for ongoing relevance.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Our Transformation Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
            {[
              "React.js",
              "AWS",
              "Azure",
              "Google Cloud",
              "Docker",
              "Kubernetes",
              "Node.js",
              "Python",
              "Power BI",
              "Salesforce",
              "Firebase",
              "Figma",
            ].map((tech, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-4 text-center font-medium shadow hover:scale-105 transition-transform">
                {tech}
              </div>
            ))}
          </div>
        </div>
  
        {/* Closing */}
        <div className="mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 animate-fade-up">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black mb-2">Vision + Execution</h4>
              <p className="text-sm leading-relaxed">
                We don’t just consult — we deliver actionable, measurable outcomes for your transformation goals.
              </p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black mb-2">Industry Insight</h4>
              <p className="text-sm leading-relaxed">
                With experience across sectors, we bring best practices and innovative ideas tailored to your domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DigitalTransformation;
  