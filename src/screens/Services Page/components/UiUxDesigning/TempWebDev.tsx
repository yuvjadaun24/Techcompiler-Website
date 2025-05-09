import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import './services.css'

const TempWebDev = () => {
  const services = [
    {
      name: "Branding",
      subtitle: "Defining your unique identity",
      description:
        "Our branding services help create a strong, memorable identity that resonates with your audience, ensuring your brand stands out in a crowded market.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Design",
      subtitle: "Creating intuitive and stunning visuals",
      description:
        "We design sleek and engaging interfaces that combine aesthetics with usability to elevate your product’s experience.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Development",
      subtitle: "Building scalable solutions",
      description:
        "From frontend to backend, we craft fast, secure, and responsive web applications tailored to your goals.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Motion",
      subtitle: "Adding life to your brand",
      description:
        "With captivating animations and transitions, we help your digital presence come alive in meaningful ways.",
      image: "/images/branding-sample.png",
    },
  ];

  return (
    <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Application Services</h1>
          <h3 className="text-lg font-bold mb-4 text-gray-400">Transforming ideas into reality with our futuristic applications development</h3>
          <p className="text-gray-700 text-sm">
            Elevate your business to new heights with TechCompiler's advanced application development services. Our skilled team harnesses the power of cutting-edge artificial intelligence to craft tailored solutions that cater to your unique requirements. From initial consultation to seamless migration, meticulous implementation, and ongoing support, we meticulously optimize every facet of your custom application for unparalleled success. With a steadfast commitment to addressing your business challenges, we synergize creativity and technical prowess to deliver solutions that catalyze growth and surpass expectations. Collaborate with TechCompiler and embark on a transformative digital odyssey that propels your business to the forefront of innovation.
          </p>
        </div>
        <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
          <p className="text-lg font-bold text-gray-600">45 <br /><span className="text-sm font-thin text-gray-800">Satisfiead Clients</span></p>
          <p className="text-lg font-bold text-gray-600">100%<br /><span className="text-sm font-thin text-gray-800">Delivery Rate</span></p>
          <p className="text-lg font-bold text-gray-600">190+<br /><span className="text-sm font-thin text-gray-800">Google</span></p>
          <button
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
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Delivery hero"
          className="rounded-xl w-full object-cover shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Overview Section */}
      <div className="mb-16 opacity-1 translate-y-6 animate-fade-up animation-delay-300">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Pureat is redefining food delivery with a focus on fresh, high-quality meals made from natural ingredients.
        </h2>
        <p className="text-gray-700 text-base leading-7">
          We started by crafting a strong visual identity, designing a modern yet organic logo, warm typography, and a fresh, inviting color palette. For the app design, we focused on a seamless ordering experience. Clean layouts, intuitive navigation, and smooth interactions make browsing and checking out effortless.
        </p>
        <p className="text-gray-700 text-base leading-7 mt-4">
          The interface is optimized to enhance user engagement while keeping the focus on Pureat’s delicious, healthy offerings. The result is a brand and app that make healthy eating accessible, convenient, and enjoyable.
        </p>
      </div>

      {/* Image Grid + Accordion */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Services we provide
          </h2>
          <p className="text-sm text-gray-600 max-w-md w-80">
            Empowering brands to grow and share their stories since '18.
          </p>
        </div>

        <div className="w-full flex justify-end">
          <div className="w-[80%]">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`service-${index}`}
                  className="border-b border-gray-200"
                >
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
                      <img
                        src={service.image}
                        alt={`${service.name} preview`}
                        className="w-[300px] h-auto object-contain rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                      />
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
    </div>
  );
};

export default TempWebDev;
