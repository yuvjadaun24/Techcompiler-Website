import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "IT OUTSOURCING",
  title: "IT Outsourcing",
  subtitle: "Extend your engineering capacity with specialists who integrate into your workflow from day one.",
  description: "TechCompiler provides dedicated development teams, staff augmentation, and project-based delivery for clients across North America, Europe, and Asia-Pacific. Engagements start in weeks, not months — our teams adopt your tools, your sprint cadence, and your code standards. Clients typically reduce time-to-market by 2× and cut IT operational costs by up to 50% versus equivalent in-house hiring.",
  stats: [
    { value: "50%", label: "Operational Cost Savings" },
    { value: "24/7", label: "Global IT Support" },
    { value: "2x", label: "Faster Time-to-Market" },
  ],

  overviewTitle: "What is IT Outsourcing?",
  overviewParagraphs: [
    "IT outsourcing means engaging an external team to own part of your technology workload — whether that's a complete product build, a specific function like DevOps or QA, or individual engineers who join your existing squad. The business case is straightforward: specialist capability, faster capacity scaling, and lower overhead than full-time hiring in high-cost markets.",
    "TechCompiler's outsourcing model is built around integration, not isolation. Our developers join your Slack, commit to your repository, attend your standups, and are measured against your KPIs — not a separate set of internal SLA metrics. The result is output that looks and feels like it came from your own team.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Comprehensive outsourcing solutions tailored for your enterprise.",
  services: [
    { name: "Software Development", subtitle: "Custom solutions that scale with your business", description: "We deliver high-quality, scalable software tailored to your business needs using agile methodologies and global talent.", image: "/images/outsourcing-software.png" },
    { name: "Cybersecurity", subtitle: "Secure your systems with advanced protection", description: "Our cybersecurity experts implement robust measures to protect your data and infrastructure from evolving digital threats.", image: "/images/outsourcing-cybersecurity.png" },
    { name: "Cloud Services", subtitle: "Agility and flexibility through the cloud", description: "We help you migrate, manage, and optimize cloud solutions for better scalability and reduced infrastructure costs.", image: "/images/outsourcing-cloud.png" },
    { name: "Data Analytics", subtitle: "Turn data into actionable insights", description: "Our data analysts and engineers extract valuable insights from your data to support smarter decisions and strategies.", image: "/images/outsourcing-data.png" },
  ],

  whyTitle: "Why IT Outsourcing Matters",
  whyCards: [
    { title: "Access to Global Talent", desc: "Leverage diverse skills and expertise from across the globe." },
    { title: "Reduced Costs", desc: "Save on hiring, training, and infrastructure investments." },
    { title: "Accelerated Delivery", desc: "Speed up development cycles and time-to-market." },
    { title: "Focus on Core Business", desc: "Leave the tech heavy lifting to us while you grow your business." },
  ],

  workflowTitle: "Our Approach to IT Outsourcing",
  workflowSteps: [
    { step: "Requirement Discovery", desc: "Understand your business needs and define outsourcing goals." },
    { step: "Team Allocation", desc: "Assemble a skilled team suited to your project and culture." },
    { step: "Solution Design", desc: "Define architecture, processes, and technologies required." },
    { step: "Delivery & QA", desc: "Execute and monitor deliverables, ensuring quality and timelines." },
    { step: "Ongoing Support", desc: "Provide continuous optimization and long-term collaboration." },
  ],

  techTitle: "Technologies We Work With",
  techItems: ["JavaScript", "React", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Firebase", "Salesforce"],

  whyUsTitle: "Why Partner With Us?",
  whyUsCards: [
    { title: "Scalable Engagement Models", desc: "Whether you need a full team or a few developers, we adapt to your needs and budget." },
    { title: "Domain Expertise", desc: "From fintech to healthcare, we bring industry-specific knowledge to every project." },
  ],
};

const ITOutsourcing = () => <ServicePageLayout data={data} />;

export default ITOutsourcing;