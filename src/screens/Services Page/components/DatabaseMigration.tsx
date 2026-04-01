import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const data: ServicePageData = {
  eyebrow: "DATABASE MIGRATION",
  title: "Database Migration Services",
  subtitle: "Risk-managed database migrations with zero unplanned downtime and verifiable data integrity.",
  description: "TechCompiler has migrated complex production databases across Oracle, SQL Server, PostgreSQL, Amazon RDS, and Snowflake — including in regulated environments where data loss is non-negotiable. Our three-phase process (validate, migrate, verify) keeps your application running throughout the cutover window, and every migration includes a pre-approved rollback plan before work begins.",
  stats: [
    { value: "99.9%", label: "Data Integrity Retention" },
    { value: "Zero", label: "Unplanned Downtime" },
    { value: "2x", label: "Faster Query Performance" },
  ],

  overviewTitle: "What is Database Migration?",
  overviewParagraphs: [
    "Database migration is the process of moving data from one storage system, platform, or schema to another. Common scenarios include moving an on-premises SQL Server database to Amazon RDS, consolidating multiple databases after a company acquisition, or upgrading from a legacy Oracle schema to PostgreSQL to reduce licensing costs.",
    "The risk in any migration is data loss, schema incompatibility, and application downtime during the cutover. Our structured approach addresses all three: we run a full schema analysis and compatibility check, build automated validation scripts to compare row counts and checksums before and after transfer, and schedule the actual cutover in a low-traffic window with a tested rollback procedure ready to execute.",
  ],

  servicesHeading: "Services we provide",
  servicesSubline: "From strategy to execution, we offer full-cycle database migration services.",
  services: [
    { name: "Cloud Migration", subtitle: "Move to the cloud with confidence", description: "Seamlessly migrate your databases to cloud platforms like AWS, Azure, or Google Cloud with minimal disruption and maximum security.", image: "/images/migration-cloud.png" },
    { name: "Legacy System Modernization", subtitle: "Upgrade without losing critical data", description: "We help you transition from outdated systems to modern database platforms while maintaining data integrity and application compatibility.", image: "/images/migration-legacy.png" },
    { name: "Cross-Platform Migration", subtitle: "From one DBMS to another\u2014seamlessly", description: "Our experts specialize in migrating databases across platforms (e.g., SQL Server to PostgreSQL) with zero data loss and performance tuning.", image: "/images/migration-crossplatform.png" },
    { name: "Data Validation & Optimization", subtitle: "Ensure accuracy and improve performance", description: "We validate data consistency post-migration and apply optimization techniques to enhance query performance and scalability.", image: "/images/migration-optimization.png" },
  ],

  whyTitle: "Why Database Migration Matters",
  whyCards: [
    { title: "Business Agility", desc: "Enable fast adaptation by modernizing and optimizing your data systems." },
    { title: "Scalability", desc: "Prepare your infrastructure to handle future growth with ease." },
    { title: "Improved Security", desc: "Move to secure platforms with enhanced data protection protocols." },
    { title: "Cost Efficiency", desc: "Reduce licensing and maintenance costs with optimized solutions." },
  ],

  workflowTitle: "Our Migration Process",
  workflowSteps: [
    { step: "Assessment & Planning", desc: "Analyze current systems and define a detailed migration roadmap." },
    { step: "Schema Conversion", desc: "Transform schema and structure for compatibility with target systems." },
    { step: "Data Migration", desc: "Execute data transfer securely with validation at every stage." },
    { step: "Testing & QA", desc: "Perform functional, performance, and integrity testing post-migration." },
    { step: "Optimization & Support", desc: "Fine-tune performance and offer ongoing monitoring and support." },
  ],

  techTitle: "Technologies We Support",
  techItems: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "SQL Server", "Amazon RDS", "Azure SQL", "Google Cloud SQL", "Snowflake", "DynamoDB", "Firebase", "MariaDB"],

  whyUsTitle: "Why Partner With Us?",
  whyUsCards: [
    { title: "End-to-End Expertise", desc: "From legacy assessment to post-migration support, we offer a complete suite of services." },
    { title: "Proven Track Record", desc: "With successful migrations across industries, we ensure a smooth, risk-free transition." },
  ],
};

const DatabaseMigration = () => <ServicePageLayout data={data} />;

export default DatabaseMigration;