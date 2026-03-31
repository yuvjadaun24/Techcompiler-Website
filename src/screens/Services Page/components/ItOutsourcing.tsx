import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "IT OUTSOURCING",
  title: "IT Outsourcing",
  subtitle: "Elevate your business with seamless IT outsourcing",
  description: "In this digital landscape, companies are seeking agility, expertise, and cost-efficiency. Our IT outsourcing services provide a strategic solution, empowering you to focus on your core competencies even as we handle your technology needs. With our highly skilled professionals, cutting-edge technologies, and a consumer-centric method, we deliver tailored solutions that drive innovation, optimize processes, and enhance your value. From software program development to cybersecurity, cloud computing to data analytics, our complete services make certain seamless integration and maximum price. Leverage our industry expertise and global talent pool to stay ahead of the curve, reduce operational costs, and unlock new growth opportunities.",
  stats: [
    { value: "50%", label: "Operational Cost Savings" },
    { value: "24/7", label: "Global IT Support" },
    { value: "2x", label: "Faster Time-to-Market" },
  ],

  overviewTitle: "What is IT Outsourcing?",
  overviewParagraphs: [
    "IT outsourcing is the practice of hiring external service providers to handle your technology operations. Whether it's development, infrastructure, security, or support, we take over the heavy lifting while you stay focused on business growth.",
    "Our outsourcing model combines technical expertise, global delivery, and innovative tools to maximize value, minimize risk, and deliver measurable outcomes.",
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