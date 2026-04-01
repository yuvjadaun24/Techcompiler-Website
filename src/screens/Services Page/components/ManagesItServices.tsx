import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "MANAGED IT SERVICES",
  title: "Managed IT Services",
  subtitle: "Proactive IT management that keeps your systems running and your engineering team focused on product.",
  description: "TechCompiler's Managed IT practice handles monitoring, patching, helpdesk support, and infrastructure maintenance for clients across North America and Asia-Pacific. We operate on a predictable monthly subscription — covering your entire IT estate so internal staff can concentrate on strategic work instead of reactive firefighting. Clients on our managed services programme average 99.9% system uptime and a 40% reduction in IT operational costs.",
  stats: [
    { value: "99.9%", label: "System Uptime Ensured" },
    { value: "24/7", label: "Monitoring & Support" },
    { value: "40%", label: "Cost Reduction in IT Ops" },
  ],

  overviewTitle: "What are Managed IT Services?",
  overviewParagraphs: [
    "Managed IT services means transferring day-to-day technology operations — monitoring, patching, helpdesk, backup, and security — to a specialist provider who owns the outcomes, not just the effort. For most businesses, this is more cost-effective than maintaining internal IT staff who spend the majority of their time on reactive support rather than strategic work.",
    "Our managed services are delivered on a fixed monthly fee that covers your full IT estate. You get a named account manager, documented SLAs with financial penalties for misses, and a quarterly business review that benchmarks your infrastructure health against the previous period.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Comprehensive, proactive support for your entire IT ecosystem.",
  services: [
    { name: "24/7 Monitoring", subtitle: "Keep systems running around the clock", description: "We proactively monitor your systems and networks to detect and resolve issues before they impact operations.", image: "/images/managed-monitoring.png" },
    { name: "Helpdesk Support", subtitle: "Reliable tech support for your team", description: "Our responsive support team ensures your users get prompt assistance with technical issues, reducing downtime.", image: "/images/managed-helpdesk.png" },
    { name: "Network Administration", subtitle: "Secure and efficient connectivity", description: "We manage and optimize your network infrastructure to ensure secure, reliable, and fast communication across your organization.", image: "/images/managed-network.png" },
    { name: "Data Backup & Recovery", subtitle: "Protect your critical business data", description: "We implement robust backup solutions and disaster recovery strategies to safeguard your information and maintain business continuity.", image: "/images/managed-backup.png" },
  ],

  whyTitle: "Why Managed IT Services Matter",
  whyCards: [
    { title: "Reduced Downtime", desc: "Proactive monitoring ensures issues are resolved before they cause disruptions." },
    { title: "Predictable Costs", desc: "Flat-rate pricing helps you plan IT expenses with no surprise costs." },
    { title: "Stronger Security", desc: "Stay protected from cyber threats with regular updates and monitoring." },
    { title: "Expert Guidance", desc: "Access to certified professionals without the cost of full-time staff." },
  ],

  workflowTitle: "Our Proven Approach",
  workflowSteps: [
    { step: "Assessment & Planning", desc: "Understand your IT environment and develop a tailored support strategy." },
    { step: "Onboarding & Setup", desc: "Deploy monitoring tools and align service levels with your needs." },
    { step: "Ongoing Management", desc: "Continuously manage, maintain, and update systems and applications." },
    { step: "Proactive Support", desc: "Address potential issues before they affect your operations." },
    { step: "Reporting & Optimization", desc: "Provide performance reports and suggest improvements regularly." },
  ],

  techTitle: "Our Tech Stack",
  techItems: ["Microsoft 365", "VMware", "AWS", "Azure", "Cisco", "Fortinet", "SolarWinds", "ServiceNow", "Zabbix", "ManageEngine", "Datto", "Veeam"],

  whyUsTitle: "Why Choose Us?",
  whyUsCards: [
    { title: "Proactive & Predictive", desc: "We fix problems before they become issues, using predictive analytics and real-time monitoring." },
    { title: "Tailored Service", desc: "We adapt to your needs\u2014scaling our services and tools to fit your business goals." },
  ],
};

const ManagedITServices = () => <ServicePageLayout data={data} />;

export default ManagedITServices;