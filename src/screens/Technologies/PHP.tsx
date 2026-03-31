import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import PHPImg from "@/assets/Technologies Icon/PHPImg.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "PHP Development Services",
  subtitle: "Powerful PHP solutions for modern web development",
  description:
    "Our expert PHP developers create cutting-edge web applications tailored to your specific business needs. Leveraging years of PHP experience, we implement proven architectural patterns and industry best practices to craft robust, scalable PHP-powered digital products.",
  stats: [
    { value: "85", label: "PHP Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: PHPImg,
  overviewSections: [
    {
      title: "What is PHP development?",
      paragraphs: [
        "PHP is a widely used server-side scripting language designed for web development. Its flexibility, simplicity, and wide range of frameworks make it a popular choice for building dynamic websites and web applications, from small blogs to large enterprise platforms.",
        "Our PHP development team builds robust web applications, content management systems, and e-commerce solutions. With expertise in frameworks like Laravel, Symfony, and CodeIgniter, we deliver powerful, maintainable PHP solutions.",
      ],
    },
    {
      title: "Harness PHP development services to craft innovative solutions",
      paragraphs: [
        "Our PHP team upholds the highest performance, security, and scalability standards to deliver long-lasting value. We leverage extensive testing, effective deployment strategies, and robust integrations for solutions built to thrive over time.",
        "PHP's mature ecosystem, extensive library support, and proven scalability make it ideal for powering everything from dynamic websites to complex enterprise applications.",
      ],
    },
    {
      title: "Partner with TechCompiler for exceptional PHP development",
      paragraphs: [
        "Partner with TechCompiler for PHP development and gain access to a team of dedicated developers who are passionate about delivering exceptional results. We combine technical expertise with a deep understanding of your business goals.",
        "Our experienced PHP developers are dedicated to delivering top-notch solutions that perfectly align with your business needs. We follow a collaborative approach, working closely with you at every stage.",
        "Our PHP developers are driven by a passion for excellence. We continuously update our knowledge, staying at the forefront of PHP advancements to ensure your projects benefit from the latest innovations and best practices.",
      ],
    },
  ],
  servicesHeading: "Explore our range of PHP development services",
  services: [
    {
      name: "Custom PHP Development",
      subtitle: "Bespoke PHP solutions for your unique needs",
      description:
        "We build bespoke PHP solutions tailored to your unique business requirements. Our developers leverage the full power of PHP to create scalable, high-performance applications that drive your business forward.",
      image: "/images/php/custom.png",
    },
    {
      name: "PHP Web Application Development",
      subtitle: "Dynamic and scalable web applications",
      description:
        "Our PHP web application development services help businesses build dynamic, feature-rich web platforms. We specialize in crafting interactive, data-driven applications that deliver exceptional user experiences.",
      image: "/images/php/web-applications.png",
    },
    {
      name: "PHP CMS Development",
      subtitle: "Custom content management solutions",
      description:
        "We develop powerful content management systems using PHP, enabling your team to easily manage and publish digital content. Our CMS solutions are intuitive, scalable, and customizable to your specific workflow.",
      image: "/images/php/cms.png",
    },
    {
      name: "PHP E-commerce Development",
      subtitle: "High-performing online store solutions",
      description:
        "Our PHP e-commerce development services help businesses create high-performing online stores. We build custom shopping cart systems, payment gateway integrations, and inventory management solutions.",
      image: "/images/php/ecommerce.png",
    },
    {
      name: "PHP API Development",
      subtitle: "Robust APIs for seamless integrations",
      description:
        "We design and develop robust RESTful APIs using PHP, enabling seamless communication between your web applications and third-party services. Our APIs are secure, well-documented, and built for performance.",
      image: "/images/php/api.png",
    },
    {
      name: "PHP Framework Development",
      subtitle: "Expert Laravel, Symfony, and CodeIgniter solutions",
      description:
        "Leverage the power of leading PHP frameworks with our expert development team. Whether you need a Laravel, Symfony, or CodeIgniter solution, we utilize the framework's full capabilities to build efficient applications.",
      image: "/images/php/framework.png",
    },
    {
      name: "PHP Migration Services",
      subtitle: "Upgrade and modernize your PHP applications",
      description:
        "Modernize your legacy PHP applications with our migration services. We help you upgrade outdated codebases, migrate to newer PHP versions, or transition to modern frameworks while preserving your existing business logic.",
      image: "/images/php/migration.png",
    },
    {
      name: "PHP Maintenance and Support",
      subtitle: "Ongoing care for your PHP applications",
      description:
        "Keep your PHP applications running smoothly with our comprehensive maintenance and support services. We provide regular updates, security patches, performance optimization, and bug fixes to ensure application reliability.",
      image: "/images/php/maintenance.png",
    },
  ],
};

const PHP = () => <TechPageLayout data={data} />;

export default PHP;
