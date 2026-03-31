import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import WooCommerceImg from "@/assets/Technologies Icon/WooCommerceImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "WooCommerce Development Services",
  subtitle: "Flexible ecommerce solutions with WooCommerce",
  description:
    "Our expert WooCommerce developers create cutting-edge ecommerce solutions tailored to your specific business needs. Leveraging years of WooCommerce experience, our developers implement proven architectural patterns and industry best practices to craft high-performing online stores.",
  stats: [
    { value: "100", label: "Projects Completed" },
    { value: "50", label: "Happy Clients" },
    { value: "10", label: "Years of Experience" },
  ],
  heroImage: WooCommerceImg,
  overviewSections: [
    {
      title: "What is WooCommerce development?",
      paragraphs: [
        "WooCommerce is a powerful, open-source ecommerce plugin for WordPress that transforms any WordPress site into a fully-featured online store. It offers exceptional flexibility and customization options, making it a top choice for businesses of all sizes looking to sell products or services online.",
        "Our WooCommerce development team builds tailored ecommerce solutions that leverage WooCommerce's extensive feature set. From custom themes to complex payment integrations and inventory management systems, we deliver complete online commerce experiences.",
      ],
    },
    {
      title: "What sets our WooCommerce development process apart",
      paragraphs: [
        "Our WooCommerce development process is distinguished by our commitment to understanding your business model and customer journey. We design and build solutions optimized for conversion, performance, and ease of management.",
        "We follow established WooCommerce best practices while applying custom solutions where needed, ensuring your store is not only functional and attractive but also secure, maintainable, and scalable as your business grows.",
      ],
    },
    {
      title: "Building successful online stores with TechCompiler's WooCommerce expertise",
      paragraphs: [
        "Our team combines deep WooCommerce knowledge with ecommerce strategy expertise to create stores that not only look great but drive sales. We optimize every aspect of the customer experience from discovery to checkout.",
      ],
    },
  ],
  servicesHeading: "Explore our WooCommerce development services",
  services: [
    {
      name: "Custom WooCommerce Development",
      subtitle: "Tailored ecommerce solutions for your brand",
      description:
        "We build custom WooCommerce stores precisely tailored to your product catalog, business processes, and customer experience goals. Our developers create unique features and functionalities that go beyond out-of-the-box WooCommerce.",
      image: "/images/woocommerce/custom.png",
    },
    {
      name: "WooCommerce Theme Development",
      subtitle: "Stunning, conversion-optimized store designs",
      description:
        "Our designers and developers create custom WooCommerce themes that reflect your brand identity and are optimized for conversions. We build responsive, fast-loading themes that provide exceptional shopping experiences.",
      image: "/images/woocommerce/theme.png",
    },
    {
      name: "WooCommerce Plugin Development",
      subtitle: "Custom extensions to enhance your store",
      description:
        "We develop custom WooCommerce plugins and extensions to add specialized functionality to your store. Whether you need custom payment gateways, shipping calculators, or product configurators, we build it.",
      image: "/images/woocommerce/plugin.png",
    },
    {
      name: "WooCommerce Integration Services",
      subtitle: "Seamless connections with third-party systems",
      description:
        "We integrate your WooCommerce store with ERP systems, CRM platforms, accounting software, marketing tools, and fulfillment services to create a seamless, efficient ecommerce operation.",
      image: "/images/woocommerce/integration.png",
    },
    {
      name: "WooCommerce Migration Services",
      subtitle: "Migrate your store to WooCommerce",
      description:
        "Our WooCommerce migration specialists help you move your existing online store to WooCommerce from other platforms. We ensure complete data migration including products, customers, and order history.",
      image: "/images/woocommerce/migration.png",
    },
    {
      name: "WooCommerce Maintenance and Support",
      subtitle: "Keep your store running at peak performance",
      description:
        "We provide comprehensive WooCommerce maintenance and support services including regular updates, security monitoring, performance optimization, and technical support to ensure your store remains reliable.",
      image: "/images/woocommerce/maintenance.png",
    },
  ],
};

const WooCommerce = () => <TechPageLayout data={data} />;

export default WooCommerce;
