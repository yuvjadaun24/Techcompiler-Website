import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "DEVOPS",
  title: "DevOps",
  subtitle: "Speed, stability, and scalability \u2014 delivered continuously",
  description: "Our DevOps services integrate development and operations for seamless, high-speed delivery of robust software solutions. By automating processes, aligning teams, and embracing cloud-native technologies, we create a culture of agility and reliability. Whether you're building from scratch or optimizing legacy systems, we accelerate your delivery pipeline while improving system resilience, observability, and scalability. Empower your teams with tools, workflows, and infrastructure designed for continuous improvement and innovation.",
  stats: [
    { value: "100+", label: "Successful Deployments" },
    { value: "95%", label: "Deployment Success Rate" },
    { value: "40%", label: "Faster Time-to-Market" },
  ],

  overviewTitle: "What is DevOps?",
  overviewParagraphs: [
    "DevOps is a cultural and technical movement that unifies software development and IT operations. It enables organizations to deliver high-quality software quickly and efficiently through automation, collaboration, and monitoring.",
    "By integrating continuous integration, delivery, infrastructure automation, and feedback loops, DevOps reduces time-to-market, enhances product reliability, and fosters a collaborative development environment.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Automating delivery pipelines for faster, smarter releases.",
  services: [
    { name: "CI/CD Pipelines", subtitle: "Accelerate deployment cycles", description: "Implement robust continuous integration and continuous delivery pipelines to automate builds, tests, and deployments for rapid, reliable releases.", image: "/images/ci-cd-devops.png" },
    { name: "Infrastructure as Code", subtitle: "Provision at scale with precision", description: "Manage infrastructure with code using tools like Terraform and CloudFormation to ensure consistency, speed, and version control across environments.", image: "/images/iac-devops.png" },
    { name: "Monitoring & Logging", subtitle: "Real-time visibility & diagnostics", description: "Enable proactive incident detection and root-cause analysis through integrated monitoring and logging tools like Prometheus, Grafana, and ELK.", image: "/images/monitoring-devops.png" },
    { name: "Containerization & Orchestration", subtitle: "Deploy anywhere, scale effortlessly", description: "Leverage Docker and Kubernetes to containerize applications and orchestrate deployments with high availability and fault tolerance.", image: "/images/container-devops.png" },
  ],

  whyTitle: "Why DevOps Matters",
  whyCards: [
    { title: "Faster Releases", desc: "Accelerate deployment cycles with automation and continuous delivery." },
    { title: "Improved Collaboration", desc: "Bridge gaps between development and operations for seamless workflows." },
    { title: "Higher System Reliability", desc: "Detect issues early and resolve them swiftly with robust monitoring." },
    { title: "Scalability & Resilience", desc: "Deploy systems that scale easily and recover quickly from failures." },
  ],

  workflowTitle: "Our DevOps Workflow",
  workflowSteps: [
    { step: "Plan & Assess", desc: "Understand business goals and assess current development and operations practices." },
    { step: "Toolchain Setup", desc: "Integrate tools for CI/CD, version control, testing, and infrastructure automation." },
    { step: "Pipeline Automation", desc: "Automate the build, test, and deployment cycles with minimal manual intervention." },
    { step: "Monitoring & Feedback", desc: "Implement observability tools to capture performance and feedback in real time." },
    { step: "Iterate & Optimize", desc: "Continuously improve based on feedback, incident analysis, and performance metrics." },
  ],

  techTitle: "Our DevOps Toolchain",
  techItems: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack", "AWS", "Azure DevOps", "GitHub Actions"],

  whyUsTitle: "Why Choose Us?",
  whyUsCards: [
    { title: "Automation Experts", desc: "We specialize in automating manual processes and delivering reliable infrastructure pipelines." },
    { title: "Culture-Driven Approach", desc: "Our DevOps strategies focus on team empowerment, collaboration, and rapid feedback loops." },
  ],
};

const DevOps = () => <ServicePageLayout data={data} />;

export default DevOps;