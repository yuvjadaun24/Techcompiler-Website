import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import infraServices from "../../../assets/infraservices.png";

const InfraServices = () => {
  const services = [
    {
      name: "Cloud Hosting",
      subtitle: "Reliable and scalable cloud environments",
      description:
        "We provide secure, scalable cloud hosting solutions across AWS, Azure, and GCP to ensure your applications stay online, always.",
      image: "/images/infra-cloud.png",
    },
    {
      name: "DevOps",
      subtitle: "Automation and continuous delivery",
      description:
        "From CI/CD pipelines to infrastructure as code, our DevOps services accelerate your deployment cycles with maximum reliability.",
      image: "/images/infra-devops.png",
    },
    {
      name: "Monitoring",
      subtitle: "Proactive performance and health checks",
      description:
        "We monitor infrastructure in real-time, ensuring peak performance, minimal downtime, and instant issue resolution.",
      image: "/images/infra-monitoring.png",
    },
    {
      name: "Security",
      subtitle: "Protection at every layer",
      description:
        "Our infrastructure security services safeguard your digital assets with firewalls, threat detection, and compliance readiness.",
      image: "/images/infra-security.png",
    },
  ];

  return (
    <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Infrastructure Services</h1>
          <h3 className="text-lg font-bold mb-4 text-gray-400">
            Powering business excellence with robust IT infrastructure
          </h3>
          <p className="text-gray-700 text-sm">
            Harness the power of the latest IT infrastructure solutions tailored to your business needs. Our complete services encompass strategic plans, implementation, and ongoing support, ensuring your corporation operates at peak performance. With contemporary technology, expert guidance, and a dedication to excellence, we empower you to achieve seamless operations, scalability, and a competitive edge in the digital landscape.
          </p>
        </div>
        <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
          <p className="text-lg font-bold text-gray-600">60+ <br /><span className="text-sm font-thin text-gray-800">Infrastructure Projects</span></p>
          <p className="text-lg font-bold text-gray-600">99.99%<br /><span className="text-sm font-thin text-gray-800">Uptime Achieved</span></p>
          <p className="text-lg font-bold text-gray-600">24/7<br /><span className="text-sm font-thin text-gray-800">Support Availability</span></p>
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
        <img
            src={infraServices}
            alt="Infrastructure Services"
            className="rounded-3xl w-5/7 object-cover shadow-[0px_4px_100px_16px_rgba(149,_157,_165,_0.2)] transition-transform duration-500 hover:scale-105"
          />
      </div>

      {/* Overview Section */}
      <div className="mb-16 opacity-1 translate-y-6 animate-fade-up animation-delay-300">
        <h2 className="text-2xl font-semibold text-black mb-4">
          What are Infrastructure Services?
        </h2>
        <p className="text-gray-700 text-base leading-7">
          IT infrastructure refers back to the mixed set of hardware, software, networks, facilities, and related equipment utilized to develop, test, deliver, manipulate, and help IT services and packages. It serves as the backbone that allows organizations to function effectively and successfully in the evolving digital landscape.
        </p>
        <p className="text-gray-700 text-base leading-7 mt-4">
          Our IT infrastructure typically consists of several key components:
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>Computer Hardware:</strong> This includes servers, storage systems, workstations, and other physical devices that process, store, and transmit data.
            </li>
            <li>
              <strong>Operating Systems:</strong> These software program structures manage the hardware resources and provide a basis for current packages and services.
            </li>
            <li>
              <strong>Networks:</strong> Wired and wireless networks, including LANs, WANs, and internet connectivity, facilitate data communication and resource sharing.
            </li>
            <li>
              <strong>Virtualization:</strong> Technologies like virtualization allow for efficient resource utilization and scalability by creating virtual instances of hardware, operating systems, and applications.
            </li>
            <li>
              <strong>Data Centers and Facilities:</strong> Physical spaces designed to house and support IT infrastructure resources, ensuring proper power, cooling, and security.
            </li>
            <li>
              <strong>Software Packages:</strong> Various software tools and applications, ranging from productivity suites to enterprise software, that help organizations perform their operations.
            </li>
          </ul>
        </p>

      </div>

      {/* Image Grid + Accordion */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Services we provide
          </h2>
          <p className="text-sm text-gray-600 max-w-md w-80">
            Enabling digital agility and operational stability since '18.
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

      {/* Why Infra Matters */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why Infrastructure Services Matter</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Uptime You Can Rely On",
              desc: "We build infrastructure with high availability in mind so your systems stay up and your business keeps running.",
            },
            {
              title: "Automated and Efficient",
              desc: "From provisioning to deployment, automation drives efficiency, minimizes errors, and speeds up time to market.",
            },
            {
              title: "Built for Growth",
              desc: "Scale confidently with modular, cloud-native setups that grow alongside your business.",
            },
            {
              title: "Defense-in-Depth Security",
              desc: "Layered protection against modern threats ensures your infrastructure and data are always protected.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Timeline */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 animate-fade-up text-center">Our Proven Workflow</h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
          <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-full z-0"></div>
          {[
            {
              step: "Assessment & Discovery",
              desc: "We analyze your existing systems and business requirements to identify infrastructure needs.",
            },
            {
              step: "Planning & Architecture",
              desc: "Designing a resilient and scalable infrastructure strategy tailored to your business goals.",
            },
            {
              step: "Implementation",
              desc: "Deploying cloud, on-premise, or hybrid environments using automation and best practices.",
            },
            {
              step: "Monitoring & Optimization",
              desc: "24/7 monitoring and proactive improvements to maintain peak performance and reliability.",
            },
            {
              step: "Support & Scaling",
              desc: "Continual enhancements, security patches, and resource scaling based on demand.",
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
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Our Infra Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
          {[
            "AWS",
            "Azure",
            "Google Cloud",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Prometheus",
            "Grafana",
            "Jenkins",
            "GitHub Actions",
            "Cloudflare",
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
            <h4 className="text-xl font-semibold text-black mb-2">We Build for Stability</h4>
            <p className="text-sm leading-relaxed">
              Our infrastructures are designed for maximum uptime, seamless performance, and long-term growth.
            </p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-black mb-2">Security at the Core</h4>
            <p className="text-sm leading-relaxed">
              From cloud environments to server configurations, we embed security at every level of your infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfraServices;
