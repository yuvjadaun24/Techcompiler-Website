import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import MagentoImg from "@/assets/Technologies Icon/MagentoImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "Magento Development Services",
  subtitle: "Accelerate omnichannel commerce with Magento experts",
  description:
    "Reach, engage, and transact with shoppers everywhere through seamless Magento implementations purpose-built for your brand. Our specialized team deeply understands both Magento's robust ecommerce capabilities and the customized experiences today's consumers expect. We architect and actualize solutions that speak to your products, customers, and ambitions.",
  stats: [
    { value: "200", label: "Projects Completed" },
    { value: "150", label: "Happy Clients" },
    { value: "12", label: "Years of Experience" },
  ],
  heroImage: MagentoImg,
  overviewSections: [
    {
      title: "What is Magento development?",
      paragraphs: [
        "Magento development refers to the process of building, customizing, or enhancing ecommerce experiences using the Magento platform. As a feature-rich, open-source ecommerce solution, it offers robust tools for creating enterprise-grade online stores, shopping cart flows, product catalogues, promotions capabilities, and more.",
      ],
    },
    {
      title: "What sets our development process apart from others",
      paragraphs: [
        "What sets our Magento development process apart from others is our unwavering commitment to excellence, attention to detail, and client-centric approach. From the initial consultation to post-launch support, we prioritize open communication, collaboration, and transparency, ensuring that your vision guides every step of the journey.",
        "We follow a structured and agile development methodology, combining creativity with technical proficiency to create visually stunning and highly functional Magento websites and ecommerce solutions. Our dedication to quality assurance and rigorous testing procedures guarantees that your website performs flawlessly across all devices.",
      ],
    },
  ],
  servicesHeading: "Explore our Magento development services",
  services: [
    {
      name: "Custom Magento Development",
      subtitle: "Build innovative Magento experiences completely customized for your brand",
      description:
        "We build innovative Magento experiences completely customized for your brand, offerings, and objectives — from tailored functionality to immersive personalization. Our developers fully leverage Magento's enterprise-grade power and flexibility.",
      image: "/images/magento/custom-development.png",
    },
    {
      name: "Magento E-commerce Development",
      subtitle: "Create ecommerce ecosystems purpose-built to scale your business",
      description:
        "We create ecommerce ecosystems purpose-built to scale your business, combining Magento's robust feature set with our proven methodology. Custom development optimizes your entire operation for intuitive browsing, frictionless transactions, and operational efficiency.",
      image: "/images/magento/ecommerce-development.png",
    },
    {
      name: "Magento Cloud Hosting",
      subtitle: "Maximize Magento reliability and performance on the cloud",
      description:
        "Our specialized hosting maximizes Magento reliability and performance on the cloud. Lightning page loads, seamless scalability amid traffic spikes, always-on security and transparent updates enable you to focus resources on accelerating your commerce.",
      image: "/images/magento/cloud-hosting.png",
    },
    {
      name: "Intuitive Magento UI/UX Design",
      subtitle: "Blend stunning visual design with usability rigor",
      description:
        "We blend stunning visual design with usability rigor and conversion-focused insights, captivating shoppers across each touchpoint. Differentiate through excellence in Magento user experience.",
      image: "/images/magento/ui-ux-design.png",
    },
    {
      name: "Seamless Third Party Integration",
      subtitle: "Boost Magento capabilities with surrounding martech and ops solutions",
      description:
        "We architect and actualize the connections that boost Magento's capabilities, uniting it with surrounding martech and ops solutions. The result is cohesion powering optimization across departments and channels.",
      image: "/images/magento/third-party-integration.png",
    },
    {
      name: "Theme and Extension Development",
      subtitle: "Elevate Magento aesthetics, features, and functionality",
      description:
        "Elevate Magento's aesthetics, features, and functionality through our precisely tailored themes and extensions built for your workflows and ambitions. Stand apart while scaling easily.",
      image: "/images/magento/theme-extension-development.png",
    },
    {
      name: "Magento App Development",
      subtitle: "Engage mobile-first consumers with cross-platform Magento apps",
      description:
        "Engage mobile-first consumers with cross-platform Magento apps providing signature user experiences on the go. Consistency with your brand, site and back-end accelerates commerce adoption.",
      image: "/images/magento/app-development.png",
    },
    {
      name: "Upgrade and Migration Processes",
      subtitle: "Effortlessly transition to the latest Magento innovations",
      description:
        "Our proven methodology ensures you effortlessly transition to the latest Magento innovations or migrate from other platforms without business disruption, leveraging all capabilities from day one.",
      image: "/images/magento/upgrade-migration.png",
    },
  ],
};

const Magento = () => <TechPageLayout data={data} />;

export default Magento;
