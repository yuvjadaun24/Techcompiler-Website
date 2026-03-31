import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "IT CONSULTING",
  title: "IT Consulting",
  subtitle: "Empowering business decisions through expert IT guidance",
  description: "In a world where technology evolves rapidly, IT Consulting ensures your organization makes informed, future-ready decisions. We partner with businesses to align technology strategy with goals, assess current systems, and implement transformative solutions. Our consultants bring industry knowledge and technical expertise to help you overcome operational challenges, reduce risk, and achieve measurable results.",
  stats: [
    { value: "25+", label: "Industries Consulted" },
    { value: "95%", label: "Client Satisfaction Rate" },
    { value: "4.8/5", label: "Average ROI Impact" },
  ],

  overviewTitle: "What is IT Consulting?",
  overviewParagraphs: [
    "IT Consulting involves advising businesses on how to best use technology to achieve their objectives. It encompasses everything from strategic planning and vendor selection to infrastructure audits and solution design.",
    "Our consultants work closely with your team to understand your business, evaluate your technology landscape, and recommend actionable strategies that enhance agility, reduce costs, and fuel growth.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Get tailored, actionable advice for solving complex business and technology challenges.",
  services: [
    { name: "Digital Strategy", subtitle: "Align technology with business goals", description: "We help define your digital roadmap, ensuring your IT investments directly contribute to growth, innovation, and efficiency.", image: "/images/consulting-strategy.png" },
    { name: "Technology Advisory", subtitle: "Navigate the tech landscape with confidence", description: "Our consultants provide unbiased insights and recommendations for choosing the right technologies, platforms, and tools.", image: "/images/consulting-advisory.png" },
    { name: "IT Infrastructure Assessment", subtitle: "Diagnose and improve IT environments", description: "We analyze your existing IT infrastructure and recommend enhancements to boost performance, reliability, and scalability.", image: "/images/consulting-infrastructure.png" },
    { name: "Risk & Compliance Consulting", subtitle: "Stay secure and compliant", description: "We guide organizations in navigating regulations, managing cybersecurity threats, and ensuring data privacy across operations.", image: "/images/consulting-compliance.png" },
  ],

  whyTitle: "Why IT Consulting Matters",
  whyCards: [
    { title: "Strategic Alignment", desc: "Ensure your IT initiatives directly support long-term business goals." },
    { title: "Cost Optimization", desc: "Identify inefficiencies and opportunities for smarter tech investments." },
    { title: "Innovation Enablement", desc: "Unlock new business models and products through digital innovation." },
    { title: "Technology Foresight", desc: "Stay ahead with informed decisions based on emerging trends." },
  ],

  workflowTitle: "Our Consulting Approach",
  workflowSteps: [
    { step: "Discovery & Analysis", desc: "Understand your business, goals, and current tech landscape." },
    { step: "Strategic Planning", desc: "Define technology strategies aligned with long-term business success." },
    { step: "Roadmap Development", desc: "Create a detailed implementation roadmap for tech solutions." },
    { step: "Execution Support", desc: "Provide hands-on help during solution implementation, if needed." },
    { step: "Continuous Optimization", desc: "Monitor, evaluate, and improve performance over time." },
  ],

  techTitle: "Industries We Serve",
  techItems: ["Finance", "Healthcare", "Retail", "Manufacturing", "Logistics", "Education", "Telecom", "Public Sector"],

  whyUsTitle: "Why Choose Us?",
  whyUsCards: [
    { title: "Vendor-Neutral Advice", desc: "We provide independent recommendations with your best interest at the core." },
    { title: "Results-Focused", desc: "Our success is measured by your transformation, efficiency, and outcomes." },
  ],
};

const ITConsulting = () => <ServicePageLayout data={data} />;

export default ITConsulting;