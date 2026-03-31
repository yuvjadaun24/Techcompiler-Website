import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "DIGITAL TRANSFORMATION",
  title: "Digital Transformation",
  subtitle: "Unleash strategic transformations with digital dominance",
  description: "In today's rapidly evolving digital landscape, businesses must embrace transformative strategies to stay ahead of the curve. Our comprehensive digital transformation services empower organizations to unlock new realms of innovation, agility, and customer-centricity. Through a meticulously crafted approach, we revolutionize processes, integrate cutting-edge technologies, and cultivate a digital-first mindset across all facets of operations. Our seasoned experts navigate the intricate complexities, delivering tailored solutions that propel businesses toward unprecedented growth and market dominance. From streamlining workflows to harnessing data-driven insights, we architect future-proof digital ecosystems that foster operational excellence, enhance customer engagement, and drive sustainable competitive advantages.",
  stats: [
    { value: "50+", label: "Digital Success Stories" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "250+", label: "Projects Delivered" },
  ],

  overviewTitle: "What is digital transformation?",
  overviewParagraphs: [
    "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It involves reimagining processes, encouraging a digital culture, and making strategic use of technology to adapt and grow in an evolving landscape.",
    "Whether it's adopting automation, modernizing legacy systems, migrating to the cloud, or leveraging AI-driven insights, digital transformation ensures you're equipped to respond faster to market demands and deliver enhanced customer experiences.",
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