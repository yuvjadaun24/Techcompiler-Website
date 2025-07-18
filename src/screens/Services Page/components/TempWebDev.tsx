import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import appServices from "../../../assets/app-services.png";

const TempWebDev = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "Branding",
      subtitle: "Defining your unique identity",
      description: "Our branding services help create a strong, memorable identity that resonates with your audience, ensuring your brand stands out in a crowded market.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Design",
      subtitle: "Creating intuitive and stunning visuals",
      description: "We design sleek and engaging interfaces that combine aesthetics with usability to elevate your product’s experience.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Development",
      subtitle: "Building scalable solutions",
      description: "From frontend to backend, we craft fast, secure, and responsive web applications tailored to your goals.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Motion",
      subtitle: "Adding life to your brand",
      description: "With captivating animations and transitions, we help your digital presence come alive in meaningful ways.",
      image: "/images/branding-sample.png",
    },
  ];

  return (
    <div className="bg-white text-black px-4 sm:px-8 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between mb-12 gap-8 md:gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
        <div className="md:w-2/3">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Application Services</h1>
          <h3 className="text-lg font-bold mb-4 text-gray-400">Transforming ideas into reality with our futuristic applications development</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Elevate your business to new heights with TechCompiler's advanced application development services. Our skilled team harnesses the power of cutting-edge artificial intelligence to craft tailored solutions that cater to your unique requirements. From initial consultation to seamless migration, meticulous implementation, and ongoing support, we meticulously optimize every facet of your custom application for unparalleled success. With a steadfast commitment to addressing your business challenges, we synergize creativity and technical prowess to deliver solutions that catalyze growth and surpass expectations. Collaborate with TechCompiler and embark on a transformative digital odyssey that propels your business to the forefront of innovation.
          </p>
        </div>
        <div className="md:w-1/3 text-sm space-y-6 flex flex-col justify-start md:justify-evenly">
          <p className="text-lg font-bold text-gray-600">45+ <br /><span className="text-sm font-thin text-gray-800">Satisfied Clients</span></p>
          <p className="text-lg font-bold text-gray-600">100%<br /><span className="text-sm font-thin text-gray-800">Delivery Rate</span></p>
          <p className="text-lg font-bold text-gray-600">190+<br /><span className="text-sm font-thin text-gray-800">Projects Completed</span></p>
          <button
            onClick={() => navigate("/Contact-Us")}
            className="bg-zinc-800 text-center w-48 rounded-2xl h-14 relative text-white text-sm font-light group"
            type="button"
          >
            <div
              className="bg-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14"
                  stroke="#000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 5l7 7-7 7"
                  stroke="#000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="translate-x-2">Get In Touch</p>
          </button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-12">
        <img
          src={appServices}
          alt="Delivery hero"
          className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,_157,_165,_0.2)] transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Overview Section */}
      <div className="mb-16 opacity-1 translate-y-6 animate-fade-up animation-delay-300">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
          What is an application development service?
        </h2>
        <p className="text-gray-700 text-base leading-7">
          Application improvement offerings discuss with the complete manner of conceptualizing, designing, constructing, checking out, and deploying software programs tailor-made to satisfy specific business needs. These services are provided by skilled professionals who leverage their expertise in software engineering, programming languages, and development methodologies to create robust and scalable applications.
        </p>
        <p className="text-gray-700 text-base leading-7 mt-4">
          The software improvement procedure normally starts with a detailed evaluation of the customer's requirements, business objectives, and target audience. This preliminary phase includes gathering information, figuring out pain points, and defining the desired capability and functions. Once the necessities are defined, the development team proceeds with the design phase, creating wireframes, user interface mockups, and architectural blueprints.
        </p>
      </div>

      {/* Image Grid + Accordion */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Services we provide
          </h2>
          <p className="text-sm text-gray-600 max-w-md">
            Empowering brands to grow and share their stories since '18.
          </p>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full md:w-[80%]">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`service-${index}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="py-8 px-2 sm:px-4 flex justify-between items-center group transition-all duration-500 hover:text-grey-700">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-medium text-black group-hover:text-grey-600 transition-all duration-300">
                      {service.name}
                    </span>
                    <span className="text-3xl sm:text-4xl text-black transition-transform duration-300 group-data-[state=open]:rotate-45 group-hover:text-grey-500">
                      +
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="px-2 sm:px-4 pb-8 transition-opacity duration-700 ease-in-out">
                    <div className="flex flex-col md:flex-row gap-6 mt-4 items-center">
                      <img
                        src={service.image}
                        alt={`${service.name} preview`}
                        className="w-full md:w-[300px] h-auto object-contain rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                      />
                      <div className="text-center md:text-left">
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

      {/* Better Styled Section: Why Application Services Matter */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why Application Services Matter</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Tailored Business Solutions",
              desc: "We don’t offer cookie-cutter apps. Every product is built specifically for your business model and goals.",
            },
            {
              title: "Speed, Security, Scale",
              desc: "Optimized performance, top-tier data security, and room to grow — all built into every layer of your app.",
            },
            {
              title: "Intelligent Interfaces",
              desc: "We merge clean UI with AI to make smart, adaptive applications that users love to interact with.",
            },
            {
              title: "Future-Proof Tech",
              desc: "We use scalable stacks and modular architecture, so your application keeps up with tomorrow’s needs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Timeline for Workflow */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 animate-fade-up text-center">
          Our Proven Workflow
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 relative px-4 md:px-0">
          <div className="absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:bottom-10 left-5 w-1 bg-zinc-200 md:w-0.5 md:h-auto md:absolute z-0"></div>

          {[
            {
              step: "Discovery & Planning",
              desc: "We begin by understanding your business objectives and outlining the technical architecture needed.",
            },
            {
              step: "Design & Prototyping",
              desc: "Crafting intuitive user interfaces with wireframes and interactive mockups for feedback-driven iteration.",
            },
            {
              step: "Agile Development",
              desc: "We execute in sprints using scalable, modular code and constant integration to ensure on-time delivery.",
            },
            {
              step: "Testing & QA",
              desc: "Comprehensive manual and automated testing ensures your app is bug-free, fast, and production-ready.",
            },
            {
              step: "Launch & Support",
              desc: "We deploy, monitor performance, and offer continuous improvements based on real user feedback.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6 md:w-1/5 w-full z-10 transition-transform duration-300 hover:scale-[1.02]"
            >
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

      {/* Elevated Tech Stack Display */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Our Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "Spring Boot",
            "Tailwind CSS",
            "MongoDB",
            "MySQL",
            "Firebase",
            "Figma",
            "AWS",
            "Framer Motion",
            "RESTful APIs",
          ].map((tech, i) => (
            <div
              key={i}
              className="bg-zinc-50 rounded-xl p-4 text-center font-medium shadow hover:scale-105 transition-transform"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Strong Closing: Why Work With Us */}
      <div className="mb-28">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 animate-fade-up">Why Work With Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-black mb-2">We Think Like Partners</h4>
            <p className="text-sm leading-relaxed">
              Collaboration is key. We align closely with your team and vision to ensure every sprint adds value.
            </p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-black mb-2">Design x Engineering</h4>
            <p className="text-sm leading-relaxed">
              Our process is where design and development go hand-in-hand, delivering experiences that look and perform beautifully.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TempWebDev;
