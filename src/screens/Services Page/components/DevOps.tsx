import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const DevOps = () => {
    const services = [
      {
        name: "CI/CD Pipelines",
        subtitle: "Accelerate deployment cycles",
        description:
          "Implement robust continuous integration and continuous delivery pipelines to automate builds, tests, and deployments for rapid, reliable releases.",
        image: "/images/ci-cd-devops.png",
      },
      {
        name: "Infrastructure as Code",
        subtitle: "Provision at scale with precision",
        description:
          "Manage infrastructure with code using tools like Terraform and CloudFormation to ensure consistency, speed, and version control across environments.",
        image: "/images/iac-devops.png",
      },
      {
        name: "Monitoring & Logging",
        subtitle: "Real-time visibility & diagnostics",
        description:
          "Enable proactive incident detection and root-cause analysis through integrated monitoring and logging tools like Prometheus, Grafana, and ELK.",
        image: "/images/monitoring-devops.png",
      },
      {
        name: "Containerization & Orchestration",
        subtitle: "Deploy anywhere, scale effortlessly",
        description:
          "Leverage Docker and Kubernetes to containerize applications and orchestrate deployments with high availability and fault tolerance.",
        image: "/images/container-devops.png",
      },
    ];
  
    return (
      <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">DevOps</h1>
            <h3 className="text-lg font-bold mb-4 text-gray-400">
              Speed, stability, and scalability — delivered continuously
            </h3>
            <p className="text-gray-700 text-sm">
              Our DevOps services integrate development and operations for seamless, high-speed delivery of robust software solutions. By automating processes, aligning teams, and embracing cloud-native technologies, we create a culture of agility and reliability. Whether you're building from scratch or optimizing legacy systems, we accelerate your delivery pipeline while improving system resilience, observability, and scalability. Empower your teams with tools, workflows, and infrastructure designed for continuous improvement and innovation.
            </p>
          </div>
          <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
            <p className="text-lg font-bold text-gray-600">100+ <br /><span className="text-sm font-thin text-gray-800">Successful Deployments</span></p>
            <p className="text-lg font-bold text-gray-600">95%<br /><span className="text-sm font-thin text-gray-800">Deployment Success Rate</span></p>
            <p className="text-lg font-bold text-gray-600">40%<br /><span className="text-sm font-thin text-gray-800">Faster Time-to-Market</span></p>
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
          <h2 className="text-2xl font-semibold text-black mb-4">What is DevOps?</h2>
          <p className="text-gray-700 text-base leading-7">
            DevOps is a cultural and technical movement that unifies software development and IT operations. It enables organizations to deliver high-quality software quickly and efficiently through automation, collaboration, and monitoring.
          </p>
          <p className="text-gray-700 text-base leading-7 mt-4">
            By integrating continuous integration, delivery, infrastructure automation, and feedback loops, DevOps reduces time-to-market, enhances product reliability, and fosters a collaborative development environment.
          </p>
        </div>
  
        {/* Accordion Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">Services we provide</h2>
            <p className="text-sm text-gray-600 max-w-md w-80">Automating delivery pipelines for faster, smarter releases.</p>
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
  
        {/* Why It Matters */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why DevOps Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Faster Releases",
                desc: "Accelerate deployment cycles with automation and continuous delivery.",
              },
              {
                title: "Improved Collaboration",
                desc: "Bridge gaps between development and operations for seamless workflows.",
              },
              {
                title: "Higher System Reliability",
                desc: "Detect issues early and resolve them swiftly with robust monitoring.",
              },
              {
                title: "Scalability & Resilience",
                desc: "Deploy systems that scale easily and recover quickly from failures.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 animate-fade-up text-center">Our DevOps Workflow</h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
            <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-full z-0"></div>
            {[
              { step: "Plan & Assess", desc: "Understand business goals and assess current development and operations practices." },
              { step: "Toolchain Setup", desc: "Integrate tools for CI/CD, version control, testing, and infrastructure automation." },
              { step: "Pipeline Automation", desc: "Automate the build, test, and deployment cycles with minimal manual intervention." },
              { step: "Monitoring & Feedback", desc: "Implement observability tools to capture performance and feedback in real time." },
              { step: "Iterate & Optimize", desc: "Continuously improve based on feedback, incident analysis, and performance metrics." },
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Our DevOps Toolchain</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
            {[
              "Docker",
              "Kubernetes",
              "Jenkins",
              "GitLab CI",
              "Terraform",
              "Ansible",
              "Prometheus",
              "Grafana",
              "ELK Stack",
              "AWS",
              "Azure DevOps",
              "GitHub Actions",
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
              <h4 className="text-xl font-semibold text-black mb-2">Automation Experts</h4>
              <p className="text-sm leading-relaxed">We specialize in automating manual processes and delivering reliable infrastructure pipelines.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-black mb-2">Culture-Driven Approach</h4>
              <p className="text-sm leading-relaxed">Our DevOps strategies focus on team empowerment, collaboration, and rapid feedback loops.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DevOps;
  