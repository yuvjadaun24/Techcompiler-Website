import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import infraServices from "../../../assets/infraservices.png";

const data: ServicePageData = {
  eyebrow: "INFRASTRUCTURE SERVICES",
  title: "Infrastructure Services",
  subtitle: "Cloud and on-premises infrastructure designed for 99.99% uptime — and built to scale when you need it.",
  description: "TechCompiler designs, provisions, and manages IT infrastructure for businesses running on AWS, Azure, and Google Cloud. We handle network architecture, security hardening, auto-scaling, and 24/7 monitoring — so your engineering teams can ship product instead of managing servers. Our infrastructure practice has delivered 60+ projects across SaaS platforms, financial services firms, and high-traffic consumer applications.",
  stats: [
    { value: "60+", label: "Infrastructure Projects" },
    { value: "99.99%", label: "Uptime Achieved" },
    { value: "24/7", label: "Support Availability" },
  ],
  heroImage: infraServices,

  overviewTitle: "What are Infrastructure Services?",
  overviewParagraphs: [
    "IT infrastructure is the combination of hardware, software, networks, and facilities that an organisation uses to run its technology operations. When it's designed well, it's invisible — applications load instantly, data is secure, and teams can work without IT becoming a bottleneck. When it's poorly designed, it consumes engineering time, causes outages, and blocks product development.",
    "Our infrastructure services cover the full stack: cloud provisioning and cost optimisation on AWS, Azure, and GCP; network design and security hardening; CI/CD pipelines and container orchestration; and 24/7 monitoring and incident response. We work alongside your internal team or take full ownership, depending on what you need.",
  ],
  overviewList: [
    { label: "Computer Hardware", text: "This includes servers, storage systems, workstations, and other physical devices that process, store, and transmit data." },
    { label: "Operating Systems", text: "Operating systems manage hardware resources and provide the runtime platform on which applications and services run." },
    { label: "Networks", text: "Wired and wireless networks, including LANs, WANs, and internet connectivity, facilitate data communication and resource sharing." },
    { label: "Virtualization", text: "Technologies like virtualization allow for efficient resource utilization and scalability by creating virtual instances of hardware, operating systems, and applications." },
    { label: "Data Centers and Facilities", text: "Physical spaces designed to house and support IT infrastructure resources, ensuring proper power, cooling, and security." },
    { label: "Software Packages", text: "Various software tools and applications, ranging from productivity suites to enterprise software, that help organizations perform their operations." },
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Enabling digital agility and operational stability since '18.",
  services: [
    { name: "Cloud Hosting", subtitle: "Reliable and scalable cloud environments", description: "We provide secure, scalable cloud hosting solutions across AWS, Azure, and GCP to ensure your applications stay online, always.", image: "/images/infra-cloud.png" },
    { name: "DevOps", subtitle: "Automation and continuous delivery", description: "From CI/CD pipelines to infrastructure as code, our DevOps services accelerate your deployment cycles with maximum reliability.", image: "/images/infra-devops.png" },
    { name: "Monitoring", subtitle: "Proactive performance and health checks", description: "We monitor infrastructure in real-time, ensuring peak performance, minimal downtime, and instant issue resolution.", image: "/images/infra-monitoring.png" },
    { name: "Security", subtitle: "Protection at every layer", description: "Our infrastructure security services safeguard your digital assets with firewalls, threat detection, and compliance readiness.", image: "/images/infra-security.png" },
  ],

  whyTitle: "Why Infrastructure Services Matter",
  whyCards: [
    { title: "Uptime You Can Rely On", desc: "We build infrastructure with high availability in mind so your systems stay up and your business keeps running." },
    { title: "Automated and Efficient", desc: "From provisioning to deployment, automation drives efficiency, minimizes errors, and speeds up time to market." },
    { title: "Built for Growth", desc: "Scale confidently with modular, cloud-native setups that grow alongside your business." },
    { title: "Defense-in-Depth Security", desc: "Layered protection against modern threats ensures your infrastructure and data are always protected." },
  ],

  workflowTitle: "Our Proven Workflow",
  workflowSteps: [
    { step: "Assessment & Discovery", desc: "We analyze your existing systems and business requirements to identify infrastructure needs." },
    { step: "Planning & Architecture", desc: "Designing a resilient and scalable infrastructure strategy tailored to your business goals." },
    { step: "Implementation", desc: "Deploying cloud, on-premise, or hybrid environments using automation and best practices." },
    { step: "Monitoring & Optimization", desc: "24/7 monitoring and proactive improvements to maintain peak performance and reliability." },
    { step: "Support & Scaling", desc: "Continual enhancements, security patches, and resource scaling based on demand." },
  ],

  techTitle: "Our Infra Tech Stack",
  techItems: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus", "Grafana", "Jenkins", "GitHub Actions", "Cloudflare"],

  whyUsTitle: "Why Work With Us?",
  whyUsCards: [
    { title: "We Build for Stability", desc: "Our infrastructures are designed for maximum uptime, seamless performance, and long-term growth." },
    { title: "Security at the Core", desc: "From cloud environments to server configurations, we embed security at every level of your infrastructure." },
  ],
};

const InfraServices = () => <ServicePageLayout data={data} />;

export default InfraServices;