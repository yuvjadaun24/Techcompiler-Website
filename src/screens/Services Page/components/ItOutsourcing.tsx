import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  // import digitalImage from "../../../assets/digital-transformation.png";
  
  const ITOutsourcing = () => {
    const services = [
      {
        name: "Software Development",
        subtitle: "Custom solutions that scale with your business",
        description:
          "We deliver high-quality, scalable software tailored to your business needs using agile methodologies and global talent.",
        image: "/images/outsourcing-software.png",
      },
      {
        name: "Cybersecurity",
        subtitle: "Secure your systems with advanced protection",
        description:
          "Our cybersecurity experts implement robust measures to protect your data and infrastructure from evolving digital threats.",
        image: "/images/outsourcing-cybersecurity.png",
      },
      {
        name: "Cloud Services",
        subtitle: "Agility and flexibility through the cloud",
        description:
          "We help you migrate, manage, and optimize cloud solutions for better scalability and reduced infrastructure costs.",
        image: "/images/outsourcing-cloud.png",
      },
      {
        name: "Data Analytics",
        subtitle: "Turn data into actionable insights",
        description:
          "Our data analysts and engineers extract valuable insights from your data to support smarter decisions and strategies.",
        image: "/images/outsourcing-data.png",
      },
    ];
  
    return (
      <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">IT Outsourcing</h1>
            <h3 className="text-lg font-bold mb-4 text-gray-400">
              Elevate your business with seamless IT outsourcing
            </h3>
            <p className="text-gray-700 text-sm">
              In this digital landscape, companies are seeking agility, expertise, and cost-efficiency. Our IT outsourcing services provide a strategic solution, empowering you to focus on your core competencies even as we handle your technology needs. With our highly skilled professionals, cutting-edge technologies, and a consumer-centric method, we deliver tailored solutions that drive innovation, optimize processes, and enhance your value. From software program development to cybersecurity, cloud computing to data analytics, our complete services make certain seamless integration and maximum price. Leverage our industry expertise and global talent pool to stay ahead of the curve, reduce operational costs, and unlock new growth opportunities.
            </p>
          </div>
          <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
            <p className="text-lg font-bold text-gray-600">50%<br /><span className="text-sm font-thin text-gray-800">Operational Cost Savings</span></p>
            <p className="text-lg font-bold text-gray-600">24/7<br /><span className="text-sm font-thin text-gray-800">Global IT Support</span></p>
            <p className="text-lg font-bold text-gray-600">2x<br /><span className="text-sm font-thin text-gray-800">Faster Time-to-Market</span></p>
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
            What is IT Outsourcing?
          </h2>
          <p className="text-gray-700 text-base leading-7">
            IT outsourcing is the practice of hiring external service providers to handle your technology operations. Whether it’s development, infrastructure, security, or support, we take over the heavy lifting while you stay focused on business growth.
          </p>
          <p className="text-gray-700 text-base leading-7 mt-4">
            Our outsourcing model combines technical expertise, global delivery, and innovative tools to maximize value, minimize risk, and deliver measurable outcomes.
          </p>
        </div>
  
        {/* Accordion Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Services we provide
            </h2>
            <p className="text-sm text-gray-600 max-w-md w-80">
              Comprehensive outsourcing solutions tailored for your enterprise.
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why IT Outsourcing Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Access to Global Talent",
                desc: "Leverage diverse skills and expertise from across the globe.",
              },
              {
                title: "Reduced Costs",
                desc: "Save on hiring, training, and infrastructure investments.",
              },
              {
                title: "Accelerated Delivery",
                desc: "Speed up development cycles and time-to-market.",
              },
              {
                title: "Focus on Core Business",
                desc: "Leave the tech heavy lifting to us while you grow your business.",
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
            Our Approach to IT Outsourcing
          </h2>
  
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
            <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-full z-0"></div>
  
            {[
              {
                step: "Requirement Discovery",
                desc: "Understand your business needs and define outsourcing goals.",
              },
              {
                step: "Team Allocation",
                desc: "Assemble a skilled team suited to your project and culture.",
              },
              {
                step: "Solution Design",
                desc: "Define architecture, processes, and technologies required.",
              },
              {
                step: "Delivery & QA",
                desc: "Execute and monitor deliverables, ensuring quality and timelines.",
              },
              {
                step: "Ongoing Support",
                desc: "Provide continuous optimization and long-term collaboration.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Technologies We Work With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Python",
              "AWS",
              "Azure",
              "Docker",
              "Kubernetes",
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              "Salesforce",
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
              <h4 className="text-xl font-semibold text-black mb-2">Scalable Engagement Models</h4>
              <p className="text-sm leading-relaxed">
                Whether you need a full team or a few developers, we adapt to your needs and budget.
              </p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black mb-2">Domain Expertise</h4>
              <p className="text-sm leading-relaxed">
                From fintech to healthcare, we bring industry-specific knowledge to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ITOutsourcing;
  