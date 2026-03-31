import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import embeddedServices from "../../../assets/embeddedservices.png";

const data: ServicePageData = {
  eyebrow: "EMBEDDED SERVICES",
  title: "Embedded Services",
  subtitle: "Engineering smart, real-time embedded solutions",
  description: "We specialize in developing customized embedded systems that power smart devices and critical hardware platforms. Our services span from firmware to UI for constrained environments, ensuring performance, efficiency, and real-time capability. Partner with us to innovate with intelligent, embedded technology tailored to your business vision.",
  stats: [
    { value: "75+", label: "Embedded Projects" },
    { value: "15+", label: "Industries Served" },
    { value: "10+", label: "Years of Experience" },
  ],
  heroImage: embeddedServices,

  overviewTitle: "What are Embedded Services?",
  overviewParagraphs: [
    "Embedded services involve designing and developing software and hardware systems that perform specific functions within larger electrical or mechanical systems. These systems are the brains behind modern electronics, operating with real-time constraints and optimized for performance.",
    "Our embedded solutions typically include:",
  ],
  overviewList: [
    { label: "Microcontrollers", text: "Compact chips responsible for executing dedicated tasks in embedded applications." },
    { label: "Firmware", text: "Low-level programming that directly controls hardware operations with precision." },
    { label: "Real-Time OS", text: "Lightweight operating systems that enable concurrent task handling and time-critical operations." },
    { label: "IoT Connectivity", text: "Wireless modules and protocols like BLE, Zigbee, LoRa, and Wi-Fi for real-world communication." },
    { label: "Custom Embedded Boards", text: "Tailored PCBs with sensors, communication modules, and processors." },
    { label: "Embedded UI", text: "Streamlined interfaces for LCDs, touchscreens, or LED displays with minimal resource usage." },
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Engineering embedded innovation since '15.",
  services: [
    { name: "Firmware Development", subtitle: "Optimized, hardware-level programming", description: "Our team delivers robust and efficient firmware for microcontrollers and embedded systems, ensuring seamless integration with your hardware components.", image: "/images/embedded-firmware.png" },
    { name: "RTOS Integration", subtitle: "Real-time performance and multitasking", description: "We specialize in Real-Time Operating System integration to manage time-critical tasks in embedded devices with precision and reliability.", image: "/images/embedded-rtos.png" },
    { name: "IoT Device Development", subtitle: "Connected intelligence for the real world", description: "From smart sensors to edge devices, we design and develop IoT solutions that are scalable, secure, and production-ready.", image: "/images/embedded-iot.png" },
    { name: "Embedded UI Design", subtitle: "Intuitive interfaces for constrained systems", description: "We build lightweight, responsive UIs for embedded systems that enhance user experience without compromising on performance.", image: "/images/embedded-ui.png" },
  ],

  whyTitle: "Why Embedded Systems Matter",
  whyCards: [
    { title: "Real-Time Precision", desc: "Embedded systems allow ultra-fast, deterministic responses, essential for time-sensitive applications." },
    { title: "Energy Efficiency", desc: "Our systems are built to run with minimal power, perfect for battery-powered and portable devices." },
    { title: "Compact Innovation", desc: "Deliver complex functionality in small form factors without compromising performance or reliability." },
    { title: "Hardware-Software Synergy", desc: "We ensure tight integration between software and hardware to maximize performance and efficiency." },
  ],

  workflowTitle: "Our Proven Workflow",
  workflowSteps: [
    { step: "Requirements & Feasibility", desc: "We begin with in-depth analysis of hardware specs and system goals to validate feasibility." },
    { step: "Architecture & Design", desc: "We define system architecture, interfaces, and software stack to ensure scalable and modular solutions." },
    { step: "Development", desc: "Firmware, drivers, and middleware are implemented using modern toolchains and debugging methods." },
    { step: "Testing & Validation", desc: "We perform unit, integration, and hardware-in-loop testing to ensure full compliance and reliability." },
    { step: "Deployment & Maintenance", desc: "Final rollout with OTA updates, performance monitoring, and support for lifecycle management." },
  ],

  techTitle: "Our Embedded Tech Stack",
  techItems: ["C/C++", "ARM Cortex", "FreeRTOS", "Zephyr", "Embedded Linux", "MQTT", "BLE", "LoRa", "STM32", "ESP32", "Keil uVision", "IAR Embedded Workbench"],

  whyUsTitle: "Why Work With Us?",
  whyUsCards: [
    { title: "Hardware-First Expertise", desc: "Our developers understand hardware intricacies and deliver tightly coupled embedded solutions." },
    { title: "Quality at Every Stage", desc: "Rigorous testing, real-world validation, and performance tuning are integral to every project we deliver." },
  ],
};

const EmbeddedServices = () => <ServicePageLayout data={data} />;

export default EmbeddedServices;