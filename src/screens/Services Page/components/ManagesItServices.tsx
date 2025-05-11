import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  // import digitalImage from "../../../assets/digital-transformation.png";
  
  const ManagedITServices = () => {
    const services = [
      {
        name: "24/7 Monitoring",
        subtitle: "Keep systems running around the clock",
        description:
          "We proactively monitor your systems and networks to detect and resolve issues before they impact operations.",
        image: "/images/managed-monitoring.png",
      },
      {
        name: "Helpdesk Support",
        subtitle: "Reliable tech support for your team",
        description:
          "Our responsive support team ensures your users get prompt assistance with technical issues, reducing downtime.",
        image: "/images/managed-helpdesk.png",
      },
      {
        name: "Network Administration",
        subtitle: "Secure and efficient connectivity",
        description:
          "We manage and optimize your network infrastructure to ensure secure, reliable, and fast communication across your organization.",
        image: "/images/managed-network.png",
      },
      {
        name: "Data Backup & Recovery",
        subtitle: "Protect your critical business data",
        description:
          "We implement robust backup solutions and disaster recovery strategies to safeguard your information and maintain business continuity.",
        image: "/images/managed-backup.png",
      },
    ];
  
    return (
      <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Managed IT Services</h1>
            <h3 className="text-lg font-bold mb-4 text-gray-400">
              Elevate your digital prowess with managed IT services
            </h3>
            <p className="text-gray-700 text-sm">
              Navigating the ever-evolving digital landscape can be daunting, but with our managed IT services, you can focus on driving your core business while we handle the complexities of technology. Our team of certified experts proactively monitors, maintains, and optimizes your IT infrastructure, ensuring seamless operations, enhanced cybersecurity, and cost-effective solutions. From cloud computing and data management to network administration and helpdesk support, we provide comprehensive services tailored to your unique needs. By partnering with you, we can help you mitigate risks, all while unlocking the full potential of technology.
            </p>
          </div>
          <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
            <p className="text-lg font-bold text-gray-600">99.9% <br /><span className="text-sm font-thin text-gray-800">System Uptime Ensured</span></p>
            <p className="text-lg font-bold text-gray-600">24/7<br /><span className="text-sm font-thin text-gray-800">Monitoring & Support</span></p>
            <p className="text-lg font-bold text-gray-600">40%<br /><span className="text-sm font-thin text-gray-800">Cost Reduction in IT Ops</span></p>
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
            What are Managed IT Services?
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Managed IT services involve outsourcing your IT management responsibilities to experts who proactively monitor, maintain, and support your infrastructure. This includes everything from network and server management to cybersecurity and user support.
          </p>
          <p className="text-gray-700 text-base leading-7 mt-4">
            Our goal is to ensure your technology works for you—boosting efficiency, reducing costs, and minimizing risks—so you can concentrate on what matters most: growing your business.
          </p>
        </div>
  
        {/* Accordion Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Services we provide
            </h2>
            <p className="text-sm text-gray-600 max-w-md w-80">
              Comprehensive, proactive support for your entire IT ecosystem.
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why Managed IT Services Matter</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Reduced Downtime",
                desc: "Proactive monitoring ensures issues are resolved before they cause disruptions.",
              },
              {
                title: "Predictable Costs",
                desc: "Flat-rate pricing helps you plan IT expenses with no surprise costs.",
              },
              {
                title: "Stronger Security",
                desc: "Stay protected from cyber threats with regular updates and monitoring.",
              },
              {
                title: "Expert Guidance",
                desc: "Access to certified professionals without the cost of full-time staff.",
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
                step: "Assessment & Planning",
                desc: "Understand your IT environment and develop a tailored support strategy.",
              },
              {
                step: "Onboarding & Setup",
                desc: "Deploy monitoring tools and align service levels with your needs.",
              },
              {
                step: "Ongoing Management",
                desc: "Continuously manage, maintain, and update systems and applications.",
              },
              {
                step: "Proactive Support",
                desc: "Address potential issues before they affect your operations.",
              },
              {
                step: "Reporting & Optimization",
                desc: "Provide performance reports and suggest improvements regularly.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Our Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
            {[
              "Microsoft 365",
              "VMware",
              "AWS",
              "Azure",
              "Cisco",
              "Fortinet",
              "SolarWinds",
              "ServiceNow",
              "Zabbix",
              "ManageEngine",
              "Datto",
              "Veeam",
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
              <h4 className="text-xl font-semibold text-black mb-2">Proactive & Predictive</h4>
              <p className="text-sm leading-relaxed">
                We fix problems before they become issues, using predictive analytics and real-time monitoring.
              </p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black mb-2">Tailored Service</h4>
              <p className="text-sm leading-relaxed">
                We adapt to your needs—scaling our services and tools to fit your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ManagedITServices;
  