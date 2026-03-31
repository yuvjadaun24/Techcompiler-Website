import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "MANAGED IT SERVICES",
  title: "Managed IT Services",
  subtitle: "Elevate your digital prowess with managed IT services",
  description: "Navigating the ever-evolving digital landscape can be daunting, but with our managed IT services, you can focus on driving your core business while we handle the complexities of technology. Our team of certified experts proactively monitors, maintains, and optimizes your IT infrastructure, ensuring seamless operations, enhanced cybersecurity, and cost-effective solutions. From cloud computing and data management to network administration and helpdesk support, we provide comprehensive services tailored to your unique needs. By partnering with you, we can help you mitigate risks, all while unlocking the full potential of technology.",
  stats: [
    { value: "99.9%", label: "System Uptime Ensured" },
    { value: "24/7", label: "Monitoring & Support" },
    { value: "40%", label: "Cost Reduction in IT Ops" },
  ],

  overviewTitle: "What are Managed IT Services?",
  overviewParagraphs: [
    "Managed IT services involve outsourcing your IT management responsibilities to experts who proactively monitor, maintain, and support your infrastructure. This includes everything from network and server management to cybersecurity and user support.",
    "Our goal is to ensure your technology works for you\u2014boosting efficiency, reducing costs, and minimizing risks\u2014so you can concentrate on what matters most: growing your business.",
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