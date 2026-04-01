import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "BUSINESS INTELLIGENCE",
  title: "Business Intelligence Services",
  subtitle: "Centralised data, clear dashboards, and analytics your operations team can run without a data scientist.",
  description: "TechCompiler builds business intelligence infrastructure that gives finance, operations, and product teams direct access to the numbers that matter — without routing every question through an analyst. We've delivered 75+ BI projects across retail, logistics, and financial services, covering data warehouse design, ETL pipeline engineering, and Power BI and Tableau dashboard development.",
  stats: [
    { value: "75+", label: "BI Projects Delivered" },
    { value: "92%", label: "Faster Insights for Clients" },
    { value: "100%", label: "Data-Driven Strategy" },
  ],

  overviewTitle: "What is Business Intelligence?",
  overviewParagraphs: [
    "Business Intelligence is the practice of collecting data from across your organisation — sales systems, ERP, CRM, web analytics, operational databases — consolidating it in one place, and presenting it in a format that non-technical decision makers can use without help. The technology is secondary; the hard work is modelling your data correctly so that numbers in a dashboard mean the same thing to everyone who reads them.",
    "Key components of our BI offerings include:",
  ],
  overviewList: [
    { label: "Data Integration", text: "Aggregating data from various systems into one unified source." },
    { label: "ETL Processes", text: "Extracting, transforming, and loading data for accuracy and consistency." },
    { label: "Analytics Engines", text: "Powerful engines that derive insights using statistical and AI-based analysis." },
    { label: "Dashboarding & Reporting", text: "Visual interfaces to make insights digestible and decisions immediate." },
    { label: "Collaboration Tools", text: "Shared dashboards and storytelling tools to engage stakeholders effectively." },
    { label: "Governance & Security", text: "Ensuring sensitive data is properly managed and shared with the right users." },
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Turning raw data into clear, actionable business outcomes.",
  services: [
    { name: "Data Warehousing", subtitle: "Centralized data storage & retrieval", description: "Our BI solutions start with robust data warehousing, ensuring all your data is clean, accessible, and ready for insightful analysis.", image: "/images/bi-datawarehouse.png" },
    { name: "Data Visualization", subtitle: "Interactive dashboards & reports", description: "We transform complex data into intuitive dashboards using tools like Power BI, Tableau, and Looker to enable faster decision-making.", image: "/images/bi-visualization.png" },
    { name: "Predictive Analytics", subtitle: "Forecast trends & behavior", description: "We use historical data and machine learning models to forecast future outcomes, surface leading indicators, and support confident strategic decisions.", image: "/images/bi-predictive.png" },
    { name: "Self-Service BI", subtitle: "Empowering business users", description: "We enable your teams with self-service BI capabilities, eliminating bottlenecks and democratizing access to key data insights.", image: "/images/bi-selfservice.png" },
  ],

  whyTitle: "Why Business Intelligence Matters",
  whyCards: [
    { title: "Faster Decision-Making", desc: "Quickly uncover insights from vast datasets and respond rapidly to market changes." },
    { title: "Increased Operational Efficiency", desc: "Identify inefficiencies and streamline processes based on hard data." },
    { title: "Data-Backed Strategy", desc: "Make confident decisions backed by evidence rather than guesswork." },
    { title: "Improved Customer Understanding", desc: "Analyze customer behavior and preferences to enhance engagement and satisfaction." },
  ],

  workflowTitle: "Our Proven Workflow",
  workflowSteps: [
    { step: "Data Discovery", desc: "Understanding your existing data sources, structures, and reporting needs." },
    { step: "Data Modeling", desc: "Designing the architecture for clean, reliable, and meaningful data relationships." },
    { step: "Visualization Setup", desc: "Creating intuitive dashboards and reports tailored to end-users." },
    { step: "Insight Delivery", desc: "Deploying solutions with training to ensure adoption and clarity." },
    { step: "Optimization & Support", desc: "Ongoing refinement and support to keep your BI ecosystem running smoothly." },
  ],

  techTitle: "Our BI Tech Stack",
  techItems: ["Power BI", "Tableau", "Looker", "Google Data Studio", "Snowflake", "Microsoft SQL Server", "BigQuery", "Python (Pandas)", "R", "Excel", "Domo", "QlikView"],

  whyUsTitle: "Why Work With Us?",
  whyUsCards: [
    { title: "Outcome-Focused Approach", desc: "Our BI strategies focus on delivering real business value and actionable insights, not just data." },
    { title: "Domain Expertise", desc: "With expertise across industries, we tailor solutions that match your unique business challenges and KPIs." },
  ],
};

const BusinessIntelligence = () => <ServicePageLayout data={data} />;

export default BusinessIntelligence;