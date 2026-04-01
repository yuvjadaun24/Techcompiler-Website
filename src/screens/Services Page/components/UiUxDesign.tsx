import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import UiUxDesign from "./../../../assets/uiuxdesign.png";

const data: ServicePageData = {
  eyebrow: "UI/UX DESIGN",
  title: "UI/UX Designing",
  subtitle: "Research-led design that reduces friction, increases conversions, and ships production-ready.",
  description: "TechCompiler's design team runs UX discovery, information architecture, wireframing, and usability testing before a pixel of final UI is produced. The result: interfaces that pass accessibility audits, render cleanly across devices, and improve the conversion and retention metrics our clients track. We've completed 65 design projects across SaaS platforms, e-commerce experiences, and enterprise internal tools.",
  stats: [
    { value: "65", label: "Design Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9\u2605", label: "Average Rating" },
  ],
  heroImage: UiUxDesign,

  overviewTitle: "How we approach design",
  overviewParagraphs: [
    "UI/UX design is the practice of building digital interfaces that are clear, efficient, and accessible. The UX layer defines how a product works — the flows, the hierarchy, the task paths. The UI layer determines how it looks — typography, colour, spacing, and component states. At TechCompiler both happen in the same team, which means fewer handoff gaps and faster iteration.",
    "We don't start in Figma. We start with a research phase: stakeholder interviews, competitive analysis, and user journey mapping. That work surfaces the real friction points — the ones that cause users to abandon a flow or contact support. The visual design phase then solves for those specifically, not just general aesthetics.",
  ],

  servicesHeading: "Design Services We Offer",
  servicesSubline: "End-to-end UX and UI for products people actually want to use.",
  services: [
    { name: "UX Research & Discovery", subtitle: "Understand users before you build for them", description: "We run stakeholder interviews, competitive audits, and user journey mapping to surface the real friction points in your product — before a single screen is designed.", image: "/images/branding-sample.png" },
    { name: "Wireframing & Prototyping", subtitle: "Test flows before committing to final design", description: "Low-fidelity wireframes and clickable Figma prototypes let you validate navigation, user flows, and feature logic with real users — catching problems at the cheapest moment in the process.", image: "/images/branding-sample.png" },
    { name: "UI Design System", subtitle: "One source of truth for every component", description: "We build scalable design systems with documented components, token-based colour and typography, and Figma-to-code handoff specs that development teams can actually implement consistently.", image: "/images/branding-sample.png" },
    { name: "Usability Testing & Iteration", subtitle: "Validation from real users, not internal assumptions", description: "Moderated and unmoderated usability sessions on final designs, with written findings and prioritised recommendations — so your next iteration is based on evidence, not opinion.", image: "/images/branding-sample.png" },
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
    { step: "Research & Discovery", desc: "Understanding user needs and business goals to define the core problem and design challenge." },
    { step: "Wireframing & Prototyping", desc: "Sketching out low to high fidelity layouts and building interactive prototypes for testing." },
    { step: "Visual Design", desc: "Crafting UI elements, typography, color systems, and layouts that align with your brand." },
    { step: "Usability Testing", desc: "Validating interface effectiveness through real-user feedback and iterative improvements." },
    { step: "Delivery & Handoff", desc: "Exporting final assets and specifications for smooth developer handoff and implementation." },
  ],

  techTitle: "",
  techItems: [],

  whyUsTitle: "Why Work With Us?",
  whyUsCards: [
    { title: "We Design with Purpose", desc: "Every pixel is intentional. We design to drive results and engagement — not just to impress." },
    { title: "Pixel-Perfect Execution", desc: "We collaborate closely with development teams to ensure designs translate beautifully into real products." },
  ],
};

const UiUxDesigning = () => <ServicePageLayout data={data} />;

export default UiUxDesigning;