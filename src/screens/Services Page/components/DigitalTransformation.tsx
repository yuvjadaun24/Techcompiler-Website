import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "DIGITAL TRANSFORMATION",
  title: "Digital Transformation",
  subtitle: "Structured modernisation that replaces operational bottlenecks with measurable, repeatable gains.",
  description: "TechCompiler's digital transformation practice helps mid-market and enterprise clients retire legacy systems, automate manual processes, and move to cloud-native infrastructure. Engagements begin with a two-week discovery sprint — producing a prioritised roadmap tied to your business KPIs, not a generic maturity model. We've delivered 50+ transformation programmes across retail, logistics, financial services, and public sector.",
  stats: [
    { value: "50+", label: "Digital Success Stories" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "250+", label: "Projects Delivered" },
  ],

  overviewTitle: "What is digital transformation?",
  overviewParagraphs: [
    "Digital transformation is the work of replacing inefficient manual or legacy processes with technology that runs faster, generates less error, and produces data you can act on. That definition sounds obvious, but the execution is where most programmes stall — because transformation touches people and processes, not just software.",
    "Our approach starts with a current-state audit and a clear model of what the business needs to be true 12 months from now. We then build a sequenced programme of technology changes — cloud migration, process automation, system integration, or data infrastructure — that can be delivered incrementally without shutting down day-to-day operations.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Reimagining business operations with digital-first strategies.",
  services: [
    { name: "Strategy", subtitle: "Blueprint for digital success", description: "We help define your transformation roadmap, aligning digital capabilities with business goals for a sustainable competitive edge.", image: "/images/strategy-digital.png" },
    { name: "Automation", subtitle: "Streamline and scale operations", description: "Using intelligent automation tools, we eliminate inefficiencies, reduce manual effort, and optimize performance across departments.", image: "/images/automation-digital.png" },
    { name: "Cloud", subtitle: "Scale with flexibility", description: "We migrate, manage, and optimize your infrastructure in the cloud, ensuring security, scalability, and speed-to-market.", image: "/images/cloud-digital.png" },
    { name: "AI & Analytics", subtitle: "Smarter decisions with data", description: "Harness the power of data with advanced analytics, machine learning, and real-time insights to guide your digital evolution.", image: "/images/ai-digital.png" },
  ],

  whyTitle: "Why Digital Transformation Matters",
  whyCards: [
    { title: "Enhanced Agility", desc: "Adapt swiftly to market shifts and evolving customer needs with a responsive digital backbone." },
    { title: "Customer-Centric Models", desc: "Put users at the heart of your strategy with insights-driven design and personalization." },
    { title: "Data-Driven Growth", desc: "Leverage real-time data to make informed, confident decisions and uncover new opportunities." },
    { title: "Future-Ready Operations", desc: "Digitally mature processes give your business the edge to thrive in any environment." },
  ],

  workflowTitle: "Our Proven Approach",
  workflowSteps: [
    { step: "Assess & Strategize", desc: "We evaluate your current state and design a customized transformation roadmap." },
    { step: "Tech Enablement", desc: "Integrate cutting-edge technologies to revamp legacy systems and boost capabilities." },
    { step: "Process Redesign", desc: "Streamline workflows for efficiency, automation, and agility at scale." },
    { step: "Rollout & Scale", desc: "Pilot innovations, track KPIs, and scale successful models across your organization." },
    { step: "Continuous Optimization", desc: "We measure, iterate, and improve your digital ecosystem for ongoing relevance." },
  ],

  techTitle: "Our Transformation Tech Stack",
  techItems: ["React.js", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Node.js", "Python", "Power BI", "Salesforce", "Firebase", "Figma"],

  whyUsTitle: "Why Choose Us?",
  whyUsCards: [
    { title: "Vision + Execution", desc: "We don't just consult \u2014 we deliver actionable, measurable outcomes for your transformation goals." },
    { title: "Industry Insight", desc: "With experience across sectors, we bring best practices and innovative ideas tailored to your domain." },
  ],
};

const DigitalTransformation = () => <ServicePageLayout data={data} />;

export default DigitalTransformation;