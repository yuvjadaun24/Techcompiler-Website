import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "DATA ANALYTICS",
  title: "Data Analytics",
  subtitle: "Transform data into decisions, and decisions into impact",
  description: "TechCompiler's data analytics practice helps businesses move from spreadsheet reporting to production-grade analytics infrastructure. We build the pipelines that clean, unify, and model your data, then deliver the dashboards and machine learning models that let operations and product teams act on it without waiting for an analyst. Our work covers data strategy, ETL engineering, statistical modelling, and real-time visualisation on Power BI, Tableau, and bespoke dashboards.",
  stats: [
    { value: "50TB+", label: "Data Processed Monthly" },
    { value: "99.9%", label: "Data Accuracy Rate" },
    { value: "5x", label: "Faster Decision Making" },
  ],

  overviewTitle: "What is Data Analytics?",
  overviewParagraphs: [
    "Data Analytics is the science of examining raw data to uncover trends, draw conclusions, and support decision-making. It covers a range of techniques from simple reporting and visualization to predictive modeling and machine learning.",
    "Whether you're aiming to reduce costs, improve customer experiences, or develop new products, data analytics provides the clarity and evidence to make those decisions with confidence.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "Leverage data at every level\u2014from strategy and governance to AI-powered insights.",
  services: [
    { name: "Data Strategy & Governance", subtitle: "Build a foundation for data-driven success", description: "We help organizations define their data vision, implement governance frameworks, and ensure compliance, accuracy, and consistency across data sources.", image: "/images/data-strategy.png" },
    { name: "Business Intelligence", subtitle: "Unlock actionable insights from data", description: "We design and develop dashboards and reports that help decision-makers monitor performance, track KPIs, and make informed decisions.", image: "/images/business-intelligence.png" },
    { name: "Advanced Analytics", subtitle: "Predict, optimize, and innovate", description: "Use statistical modeling, machine learning, and AI to uncover trends, forecast outcomes, and optimize operations.", image: "/images/advanced-analytics.png" },
    { name: "Data Engineering", subtitle: "Turn raw data into a valuable asset", description: "We build modern data pipelines and architectures that ensure clean, real-time, and reliable access to your data across platforms.", image: "/images/data-engineering.png" },
  ],

  whyTitle: "Why Data Analytics Matters",
  whyCards: [
    { title: "Smarter Decisions", desc: "Make choices backed by data instead of guesswork." },
    { title: "Improved Customer Experiences", desc: "Understand customer behavior to deliver personalized service." },
    { title: "Operational Efficiency", desc: "Spot inefficiencies, reduce waste, and optimize processes." },
    { title: "Innovation & Growth", desc: "Identify new market opportunities and product ideas." },
  ],

  workflowTitle: "Our Data Analytics Process",
  workflowSteps: [
    { step: "Data Discovery", desc: "Understand available data, sources, and business goals." },
    { step: "Data Preparation", desc: "Cleanse, structure, and unify data across platforms." },
    { step: "Analysis & Modeling", desc: "Apply statistical techniques and algorithms to extract insights." },
    { step: "Visualization & Reporting", desc: "Create dashboards and reports that reveal trends clearly." },
    { step: "Insights Activation", desc: "Embed findings into business processes and strategies." },
  ],

  techTitle: "Industries We Serve",
  techItems: ["Finance", "Retail", "Healthcare", "eCommerce", "Supply Chain", "Education", "Media", "Energy"],

  whyUsTitle: "Why Choose Us?",
  whyUsCards: [
    { title: "Domain Expertise", desc: "Our analysts understand both technology and your business, ensuring relevant and actionable insights." },
    { title: "End-to-End Capability", desc: "From data pipelines to predictive dashboards\u2014we deliver complete analytics ecosystems." },
  ],
};

const DataAnalytics = () => <ServicePageLayout data={data} />;

export default DataAnalytics;