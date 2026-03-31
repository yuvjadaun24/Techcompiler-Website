import TechPageLayout, { TechPageData } from "@/components/technologies/TechPageLayout";
import CSS3Img from "@/assets/Technologies Icon/CSS3Img.png";

const data: TechPageData = {
  eyebrow: "Technology",
  title: "CSS3 Development Services",
  subtitle: "Building engaging websites with CSS3",
  description:
    "Bring designs to life with responsive CSS styling for exceptional user experiences. Leveraging animations, gradients, grid systems, and more to engage customers across devices, we build complex layouts rapidly that leave lasting impressions. We integrate CSS frameworks like Bootstrap to design modernized UIs without compromising legacy browser support.",
  stats: [
    { value: "85", label: "CSS3 Projects" },
    { value: "98%", label: "Positive Feedback" },
    { value: "4.9?", label: "Average Rating" },
  ],
  heroImage: CSS3Img,
  overviewSections: [
    {
      title: "What is CSS3 development?",
      paragraphs: [
        "CSS3 development refers to leveraging the latest styling capabilities to create visually appealing, responsive website designs that engage users across devices. Seasoned CSS3 developers craft experiences with movement, depth, and color that capture attention and drive actions.",
        "At TechCompiler, we utilize preprocessors like SASS for cleaner and more maintainable code. Frameworks like Bootstrap provide templates, grids, and UI elements to speed up development. We focus on performance gains through optimal selectors, efficient properties, and WebP image formats.",
      ],
    },
    {
      title: "CSS3 development services to building engaging websites",
      paragraphs: [
        "We house CSS3 experts who blend technical prowess with creative vision to deliver high-impact websites. Our refined process balances innovation with pragmatism, fusing visually delightful designs with secure code. Our CSS framework usage assures consistent UIs with standardized components.",
        "We work with a profound performance mindset and build highly interactive sites. Our CSS3 mastery has elevated global brands with iconic styles and lightning load times, with a focus on ROI via measurable conversions and sales.",
      ],
    },
    {
      title: "Unveiling how our development process works",
      paragraphs: [
        "We believe in collaborating with our clients at every step to swiftly translate designs to responsive code. Our team does continuous performance profiling and testing to ensure smooth UIs and web functionality. Our streamlined process parlays CSS3's capabilities into business success through exceptional experiences.",
      ],
    },
  ],
  servicesHeading: "Explore our range of CSS3 development services",
  services: [
    {
      name: "Custom CSS3 Development",
      subtitle: "Building engaging websites with CSS3",
      description:
        "Bring designs to life with responsive CSS styling for exceptional user experiences. Leveraging animations, gradients, grid systems, and more to engage customers across devices, we build complex layouts rapidly that leave lasting impressions.",
      image: "/images/css3/custom.png",
    },
    {
      name: "CSS3 UI/UX Development",
      subtitle: "Intuitive, user-centric interfaces that enhance engagement",
      description:
        "Our CSS3 developers craft experiences with movement, depth, and color that capture attention and drive actions. We focus on performance gains through optimal selectors, efficient properties, and WebP image formats.",
      image: "/images/css3/uiux.png",
    },
    {
      name: "Responsive Website Development",
      subtitle: "Dynamic web apps optimized for modern needs",
      description:
        "Get responsive websites conveying quality experiences across devices. Our CSS3 expertise fluidly adjusts layouts and content tailoring sites to every viewport, leveraging mobile-first strategies.",
      image: "/images/css3/web.png",
    },
    {
      name: "CSS3 Animation Development",
      subtitle: "Engaging animations that enhance storytelling",
      description:
        "Engage users from the outset with animated elements built on CSS3 techniques like transforms and keyframe animations. We animate new content dynamically, boosting brand storytelling through movement designed around your style guide.",
      image: "/images/css3/animation.png",
    },
    {
      name: "High-End Website Development",
      subtitle: "Exceptional branding experiences with full-spectrum design",
      description:
        "Go beyond the basics with high-end sites, combining ambitious vision with bulletproof execution. Our team crafts exceptional branding experiences with full-spectrum visual design.",
      image: "/images/css3/highend.png",
    },
    {
      name: "CSS3 Framework Integration",
      subtitle: "Streamlined development with modern frameworks",
      description:
        "We integrate CSS frameworks like Bootstrap to design modernized UIs without compromising legacy browser support. Our CSS framework usage assures consistent UIs with standardized components.",
      image: "/images/css3/framework.png",
    },
    {
      name: "CSS3 Maintenance Services",
      subtitle: "Ongoing support for your CSS3 applications",
      description:
        "We provide ongoing support for your CSS3 applications, ensuring smooth UIs and web functionality. Our team does continuous performance profiling and testing to ensure your site remains high-performing.",
      image: "/images/css3/maintenance.png",
    },
  ],
};

const CSS3 = () => <TechPageLayout data={data} />;

export default CSS3;
