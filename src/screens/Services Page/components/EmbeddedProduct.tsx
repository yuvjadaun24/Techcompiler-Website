import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import embeddedServices from "../../../assets/embeddedservices.png";

const EmbeddedServices = () => {
    const services = [
        {
            name: "Firmware Development",
            subtitle: "Optimized, hardware-level programming",
            description:
                "Our team delivers robust and efficient firmware for microcontrollers and embedded systems, ensuring seamless integration with your hardware components.",
            image: "/images/embedded-firmware.png",
        },
        {
            name: "RTOS Integration",
            subtitle: "Real-time performance and multitasking",
            description:
                "We specialize in Real-Time Operating System integration to manage time-critical tasks in embedded devices with precision and reliability.",
            image: "/images/embedded-rtos.png",
        },
        {
            name: "IoT Device Development",
            subtitle: "Connected intelligence for the real world",
            description:
                "From smart sensors to edge devices, we design and develop IoT solutions that are scalable, secure, and production-ready.",
            image: "/images/embedded-iot.png",
        },
        {
            name: "Embedded UI Design",
            subtitle: "Intuitive interfaces for constrained systems",
            description:
                "We build lightweight, responsive UIs for embedded systems that enhance user experience without compromising on performance.",
            image: "/images/embedded-ui.png",
        },
    ];

    return (
        <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 transition-all duration-700 ease-in-out hover:scale-[1.01]">
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-4">Embedded Services</h1>
                    <h3 className="text-lg font-bold mb-4 text-gray-400">
                        Engineering smart, real-time embedded solutions
                    </h3>
                    <p className="text-gray-700 text-sm">
                        We specialize in developing customized embedded systems that power smart devices and critical hardware platforms. Our services span from firmware to UI for constrained environments, ensuring performance, efficiency, and real-time capability. Partner with us to innovate with intelligent, embedded technology tailored to your business vision.
                    </p>
                </div>
                <div className="md:w-1/3 text-sm space-y-4 flex flex-col justify-evenly">
                    <p className="text-lg font-bold text-gray-600">75+ <br /><span className="text-sm font-thin text-gray-800">Embedded Projects</span></p>
                    <p className="text-lg font-bold text-gray-600">15+<br /><span className="text-sm font-thin text-gray-800">Industries Served</span></p>
                    <p className="text-lg font-bold text-gray-600">10+<br /><span className="text-sm font-thin text-gray-800">Years of Experience</span></p>
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
                    src={embeddedServices}
                    alt="Embedded Services"
                    className="rounded-3xl w-5/7 object-cover shadow-[0px_4px_100px_16px_rgba(149,_157,_165,_0.2)] transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Overview Section */}
            <div className="mb-16 opacity-1 translate-y-6 animate-fade-up animation-delay-300">
                <h2 className="text-2xl font-semibold text-black mb-4">
                    What are Embedded Services?
                </h2>
                <p className="text-gray-700 text-base leading-7">
                    Embedded services involve designing and developing software and hardware systems that perform specific functions within larger electrical or mechanical systems. These systems are the brains behind modern electronics, operating with real-time constraints and optimized for performance.
                </p>
                <p className="text-gray-700 text-base leading-7 mt-4">
                    Our embedded solutions typically include:
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li><strong>Microcontrollers:</strong> Compact chips responsible for executing dedicated tasks in embedded applications.</li>
                        <li><strong>Firmware:</strong> Low-level programming that directly controls hardware operations with precision.</li>
                        <li><strong>Real-Time OS:</strong> Lightweight operating systems that enable concurrent task handling and time-critical operations.</li>
                        <li><strong>IoT Connectivity:</strong> Wireless modules and protocols like BLE, Zigbee, LoRa, and Wi-Fi for real-world communication.</li>
                        <li><strong>Custom Embedded Boards:</strong> Tailored PCBs with sensors, communication modules, and processors.</li>
                        <li><strong>Embedded UI:</strong> Streamlined interfaces for LCDs, touchscreens, or LED displays with minimal resource usage.</li>
                    </ul>
                </p>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black">
                        Services we provide
                    </h2>
                    <p className="text-sm text-gray-600 max-w-md w-80">
                        Engineering embedded innovation since '15.
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

            {/* Why Embedded Matters */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Why Embedded Systems Matter</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Real-Time Precision",
                            desc: "Embedded systems allow ultra-fast, deterministic responses, essential for time-sensitive applications.",
                        },
                        {
                            title: "Energy Efficiency",
                            desc: "Our systems are built to run with minimal power, perfect for battery-powered and portable devices.",
                        },
                        {
                            title: "Compact Innovation",
                            desc: "Deliver complex functionality in small form factors without compromising performance or reliability.",
                        },
                        {
                            title: "Hardware-Software Synergy",
                            desc: "We ensure tight integration between software and hardware to maximize performance and efficiency.",
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
                            step: "Requirements & Feasibility",
                            desc: "We begin with in-depth analysis of hardware specs and system goals to validate feasibility.",
                        },
                        {
                            step: "Architecture & Design",
                            desc: "We define system architecture, interfaces, and software stack to ensure scalable and modular solutions.",
                        },
                        {
                            step: "Development",
                            desc: "Firmware, drivers, and middleware are implemented using modern toolchains and debugging methods.",
                        },
                        {
                            step: "Testing & Validation",
                            desc: "We perform unit, integration, and hardware-in-loop testing to ensure full compliance and reliability.",
                        },
                        {
                            step: "Deployment & Maintenance",
                            desc: "Final rollout with OTA updates, performance monitoring, and support for lifecycle management.",
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
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-up">Our Embedded Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
                    {[
                        "C/C++",
                        "ARM Cortex",
                        "FreeRTOS",
                        "Zephyr",
                        "Embedded Linux",
                        "MQTT",
                        "BLE",
                        "LoRa",
                        "STM32",
                        "ESP32",
                        "Keil uVision",
                        "IAR Embedded Workbench",
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
                        <h4 className="text-xl font-semibold text-black mb-2">Hardware-First Expertise</h4>
                        <p className="text-sm leading-relaxed">
                            Our developers understand hardware intricacies and deliver tightly coupled embedded solutions.
                        </p>
                    </div>
                    <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-semibold text-black mb-2">Quality at Every Stage</h4>
                        <p className="text-sm leading-relaxed">
                            Rigorous testing, real-world validation, and performance tuning are integral to every project we deliver.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmbeddedServices;
