import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import UiUxDesign from "./../../../assets/uiuxdesign.png";

const data: ServicePageData = {
  eyebrow: "UI/UX DESIGN",
  title: "UI/UX Designing",
  subtitle: "Elevate your brand with modern UI/UX design",
  description: "Our UI/UX design services deliver intuitive, aesthetically pleasing interfaces that captivate users and enhance their interactions with your digital products. We are well-versed in the latest design concepts and user research, which makes it easier for us to create user-friendly experiences that are pleasing to the eyes of users. Our group of skilled designers meticulously crafts each detail, from format and typography to shade schemes and iconography; we always make sure a coherent and attractive experience across as and platforms. With a deep understanding of user behavior and industry best practices, we optimize your procedure, accessibility, and conversion rates, driving business growth and customer satisfaction.",
  stats: [
    { value: "65", label: "Design Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9\u2605", label: "Average Rating" },
  ],
  heroImage: UiUxDesign,

  overviewTitle: "What is UI/UX design?",
  overviewParagraphs: [
    "UI/UX design, or User Interface/User Experience design, is the practice of creating digital merchandise that is not only visually appealing but also highly functional, intuitive, and user-friendly. It encompasses the complete manner of designing and developing digital interfaces, from preliminary research and concept creation to prototyping, testing, and implementation.",
    "At its core, UI design focuses on the visible elements that customers engage with, including buttons, menus, icons, and overall format. It involves creating an aesthetically pleasing and consistent interface that adheres to established design principles and brand guidelines.",
  ],

  servicesHeading: "Design Services We Offer",
  servicesSubline: "Helping brands create impactful and user-first digital experiences since 2018.",
  services: [
    { name: "Branding", subtitle: "Defining your unique identity", description: "Our branding services help create a strong, memorable identity that resonates with your audience, ensuring your brand stands out in a crowded market.", image: "/images/branding-sample.png" },
    { name: "Design", subtitle: "Creating intuitive and stunning visuals", description: "We design sleek and engaging interfaces that combine aesthetics with usability to elevate your product's experience.", image: "/images/branding-sample.png" },
    { name: "Development", subtitle: "Building scalable solutions", description: "From frontend to backend, we craft fast, secure, and responsive web applications tailored to your goals.", image: "/images/branding-sample.png" },
    { name: "Motion", subtitle: "Adding life to your brand", description: "With captivating animations and transitions, we help your digital presence come alive in meaningful ways.", image: "/images/branding-sample.png" },
  ],

  whyTitle: "Why UI/UX Design Matters",
  whyCards: [
    { title: "User-Centered Focus", desc: "Design decisions driven by user behavior and expectations." },
    { title: "Consistency & Branding", desc: "Interfaces that align with brand identity and messaging." },
    { title: "Increased Conversions", desc: "Good design reduces friction and boosts engagement." },
    { title: "Enhanced Accessibility", desc: "Design that works for everyone, regardless of ability." },
  ],

  workflowTitle: "Our Design Workflow",
  workflowSteps: [
    { step: "Research & Discovery", desc: "We start by understanding user needs and business goals to define the core problem." },
    { step: "Wireframing & Prototyping", desc: "Sketching out low to high fidelity layouts and building interactive prototypes for testing." },
    { step: "Visual Design", desc: "Crafting UI elements, typography, color systems, and layouts that align with your brand." },
    { step: "Usability Testing", desc: "Validating interface effectiveness through real-user feedback and iterative improvements." },
    { step: "Delivery & Handoff", desc: "Exporting final assets and specifications for smooth developer handoff and implementation." },
  ],

  techTitle: "",
  techItems: [],

  whyUsTitle: "Why Work With Us?",
  whyUsCards: [
    { title: "We Design with Purpose", desc: "Every pixel is intentional. We design not just to impress, but to drive results and engagement." },
    { title: "Pixel-Perfect Execution", desc: "We collaborate closely with development teams to ensure designs translate beautifully into real products." },
  ],
};

const UiUxDesigning = () => <ServicePageLayout data={data} />;

export default UiUxDesigning;