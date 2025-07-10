import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../../../components/ui/accordion";
// import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { FadeIn } from "../../../../components/animations/FadeIn";
import { ParallaxImage } from "../../../../components/animations/ParallaxImage";
// import HeroImage from '@/assets/IMG-20220905-WA0008 (1).jpg'
import "./Main.css";
import { motion } from "framer-motion";
import ProdEng from "@/assets/ProdEng.png";
import MobileSol from "@/assets/MobileSol.png"
import BigData from "@/assets/BigData.png"
import GoogleApps from "@/assets/GoogleApps.png"
import SocialIntegration from "@/assets/SocialIntegration.png"
import { useNavigate } from "react-router-dom";

export const MainByAnima = (): JSX.Element => {
  // Portfolio projects data
  const navigate = useNavigate();
  const portfolioProjects = [
    {
      name: "YepMe E-Commerce",
      category: "Product Engineering",
      backgroundImage: "https://via.placeholder.com/600x400",
      url: "/YepMe-Ecommerce",
    },
    {
      name: "GoEmerge Application",
      category: "Mobile Application",
      backgroundImage: "https://via.placeholder.com/600x400",
      url: "/GoEmerge-Application",
    },
    {
      name: "JLL Presentation",
      category: "Product Engineering",
      backgroundImage: "https://via.placeholder.com/600x400",
      url: "/Jll-Presentation",
    },
    {
      name: "Shoppers Drug Mart",
      category: "Product Engineering",
      backgroundImage: "https://via.placeholder.com/600x400",
      url: "/Shopper-Drug-Mart",
    },
  ];

  // Services data
  const services = [
    {
      name: "Who we are?",
      subtitle: "Defining your unique identity",
      description: [
        "Our offerings span application development, technology consulting, custom software, and testing services. By providing valuable insights from analytics, advanced technology, and premium consulting services, we drive optimal outcomes. We assist clients in making informed decisions through impactful recommendations grounded in research and expertise.",
        "At TechCompiler, we lead the charge in leveraging technology and innovation to transform businesses and lives. As custom enterprise software solutions developers, we turn ideas into reality.",
      ],
      image: "/images/branding-sample.png",
    },
    {
      name: "Our core values",
      subtitle: "Defining your unique identity",
      description: [
          "At TechCompiler, our core values contribute significantly to our office culture and drive excellence in everything we do—from working passionately, and hiring new teammates to our interactions with our colleagues, partners, and customers. These values include the following:",
          "Quality in everything we do.",
          "Open communication with everyone.",
          "An environment where great people work together to contribute to the overall direction of the company.",
          "Honesty, respect, and humility with each other, our partners and our customers.",
          "Mindset to continually think ahead, while ensuring backwards compatibility.",
        ],
      image: "/images/branding-sample.png",
    },
    {
      name: "Why choose us?",
      subtitle: "Defining your unique identity",
      description: [
        "With quality service at the forefront of our business, TechCompiler has rich domain knowledge, technological excellence, and proven success managing complex projects. This enables us to address any challenge our clients face.",
        "Our professionals have diverse platform skills and industry backgrounds. Meanwhile, our project leaders employ robust methods to ensure flawless execution. By integrating our consultants with clients’ staff, we promote skill transfer and unified vision.",
      ],
      image: "/images/branding-sample.png",
    },
    {
      name: "What we do best?",
      subtitle: "Defining your unique identity",
      description: [
        "We start by identifying strengths and gaps in your existing custom business applications and operations to gain an understanding of your enterprise, market sector, and competitors, as we make it our priority to truly understand your business goals and challenges before making recommendations for custom software solutions.",
        "We kick off every new client relationship by having in-depth conversations to comprehend your unique situation, objectives, and pain points. Only once we feel we have a solid grasp of the context do we shift our focus to potential technology development solutions. Leveraging our decades of combined experience across industries, we conduct thorough research into your market landscape, competitors, and customers. We analyze where opportunities may exist to save costs, boost efficiency, increase sales, or otherwise propel your business forward with enterprise application solutions.",
        "We explore various custom software options, weighing the pros and cons of each to determine the best course of action that moves you toward your goals while fitting within your budget. With creativity and care, we integrate the optimal blend of services, software development, and strategy tailored specifically to drive your organization's next phase of growth. Our attentive approach consistently uncovers unexpected ways for our clients to accomplish more with custom technology solutions.",
      ],
      image: "/images/branding-sample.png",
    },

  ];

  // Statistics data
  const statistics = [
    { label: "Client satisfaction", value: "99%" },
    { label: "Industries served", value: "15+" },
    { label: "Projects completed", value: "100+" },
  ];

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We dive deep into your brand, goals, and audience to understand your vision.",
      icon: "/67d29ecfd7bf82db4bbb6fd9-group-201000004925-svg.svg",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We craft bold, strategic visuals that align with your brand's identity.",
      icon: "/67d29ed0a2221b34971ec6b2-group-201000004926-svg.svg",
    },
    {
      number: "03",
      title: "Refine",
      description:
        "We fine-tune every detail, ensuring the perfect balance of creativity",
      icon: "/67d29ecf84b51ee8386d47de-group-201000004924-svg.svg",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "We launch your new identity, providing the assets and guidance for lasting impact",
      icon: "/67d29ecfac89b1f40a8f8365-group-201000004923-svg.svg",
    },
  ];

  // Client logos data
  const clientLogos = [
    {
      src: ProdEng,
      alt: "Client logo",
      width: "40px",
      height: "40px",
      name: "Product Engineering",
      url: "/Product-Engineering",
    },
    {
      src: MobileSol,
      alt: "Client logo",
      width: "40px",
      height: "40px",
      name: "Mobile Solutions",
      url: "/Mobile-Applications",
    },
    {
      src: BigData,
      alt: "Client logo",
      width: "40px",
      height: "40px",
      name: "Big Data Analytics",
      url: "/Big-Data-Analytics",
    },
    {
      src: GoogleApps,
      alt: "Client logo",
      width: "40px",
      height: "40px",
      name: "Google Apps For Businesses",
      url: "/Google-Apps-for-Business",
    },
    {
      src: SocialIntegration,
      alt: "Client logo",
      width: "40px",
      height: "40px",
      name: "Social Integration",
      url: "/Social-Integration",
    },
  ];

  const handleScrollToSolutions = () => {
    const section = document.getElementById("optimal-solutions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full items-start">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center px-8 py-12">
        <div className="flex flex-col max-w-screen-xl w-full items-start pt-0 pb-20 px-0">
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-[124px] w-full">
            <div className="flex flex-col w-full md:w-1/2 lg:w-[632px] items-start justify-center gap-6 self-stretch">
              {/* <FadeIn>
                <Badge
                  variant="outline"
                  className="bg-white flex items-center gap-[7.04px] px-[8.8px] py-[5.6px]"
                >
                  <div className="w-[4.8px] h-[4.8px] bg-[#44e246] rounded-[4.8px]" />
                  <span className="font-normal text-black text-xs leading-[15.6px]">
                    Available from May&apos;25
                  </span>
                </Badge>
              </FadeIn> */}

              <FadeIn delay={0.2}>
                <div className="w-full">
                  <h1 className="font-medium text-[64px] tracking-[-3.00px] leading-[64px]">
                    <span className="text-black tracking-[-1.92px]">
                      Creating bold digital
                      <br />
                      experiences that
                      <br />
                    </span>
                    <span className="text-[#8d8d8d] tracking-[-1.92px]">
                      redefine
                    </span>
                    <span className="text-black tracking-[-1.92px]">&nbsp;</span>
                    <span className="text-[#8d8d8d] tracking-[-1.92px]">
                      brands
                    </span>
                  </h1>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="max-w-sm w-full">
                  <p className="font-normal text-black text-base leading-[20.8px]">
                    We create bold, unforgettable digital experiences
                    <br />
                    that captivate and inspire. Disruptive by design,
                    <br />
                    driven by results.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div
                  className="animate-fadeIn"
                  style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
                >
                  <a href="/contact" className="button w-inline-block">
                    <div className="button-text-wrap">
                      <div className="button-text">Get in touch</div>
                      <div className="button-text absolute">Get in touch</div>
                    </div>
                  </a>
                </div>
              </FadeIn>

            </div>

            <div className="w-full md:w-1/2 lg:w-[524px] h-[672px]">
              <ParallaxImage
                src={"/HeroImage.jpg"}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section
        id="optimal-solutions"
        className="w-full flex flex-col items-center px-8 py-0 bg-[#f4f4f4]"
      >
        <div className="flex flex-col max-w-screen-lg w-full items-start px-0 py-20">
          <div className="flex flex-col items-center gap-6 w-full">
            <FadeIn>
              <h1 className="font-medium text-2xl text-black leading-[20.8px]">
                Our Optimal Solutions
              </h1>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
              {clientLogos.map((logo, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card
                    className="group relative flex items-center justify-center px-2 py-16 bg-white rounded-[6.08px] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0px_4px_49px_-34px_rgba(0,_0,_0,_0.1)] active:scale-95 cursor-pointer"
                    onClick={() => navigate(logo.url)}
                  >
                    {/* Top border (from left) */}
                    <span className="
          pointer-events-none absolute top-0 left-0 h-0.5 bg-slate-600
          w-0 group-hover:w-full transition-all duration-300
          rounded-tl-[6.08px]
        " />
                    {/* Right border (from top) */}
                    <span className="
          pointer-events-none absolute top-0 right-0 w-0.5 bg-slate-600
          h-0 group-hover:h-full transition-all duration-300
          rounded-tr-[6.08px]
          delay-150
        " />
                    {/* Bottom border (from right) */}
                    <span className="
          pointer-events-none absolute bottom-0 right-0 h-0.5 bg-slate-600
          w-0 group-hover:w-full transition-all duration-300
          rounded-br-[6.08px]
          delay-300
        " />
                    {/* Left border (from bottom) */}
                    <span className="
          pointer-events-none absolute bottom-0 left-0 w-0.5 bg-slate-600
          h-0 group-hover:h-full transition-all duration-300
          rounded-bl-[6.08px]
          delay-450
        " />
                    <CardContent className="flex flex-col items-center justify-center p-0 h-10 gap-6">
                      <img
                        className="w-auto h-auto transition-transform duration-200"
                        alt={logo.alt}
                        src={logo.src}
                        style={{ width: logo.width, height: logo.height }}
                      />
                      <p className="text-[#283841] font-light text-xs">
                        {logo.name}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="w-full flex flex-col items-center px-8 py-0">
        <div className="flex flex-col max-w-screen-xl w-full items-start px-0 py-20">
          <div className="flex flex-col items-center gap-12 w-full">
            <FadeIn>
              <h1 className="font-medium text-2xl text-black leading-[20.8px]">
                Our Work
              </h1>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {portfolioProjects.map((project, index) => (
                <FadeIn key={index} delay={index * 0.2}>
                  <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col w-full h-[442px] items-start cursor-pointer"
                    onClick={() => navigate(project.url)}
                  >
                    <div className="flex flex-col w-full items-start gap-3">
                      <div className="flex items-center justify-between w-full">
                        <h3 className="font-normal text-black text-[18.4px] leading-[23.9px]">
                          {project.name}
                        </h3>
                        <span className="font-normal text-black text-xs leading-[15.6px] opacity-70">
                          {project.category}
                        </span>
                      </div>
                      <ParallaxImage
                        src={project.backgroundImage}
                        className="w-full h-[400px]"
                      />
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <Button
                className="bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors"
                onClick={handleScrollToSolutions}
              >
                View all works
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Top Section: Title + Subtext */}
        <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
          About us
          </h2>
          <p className="text-sm text-gray-600 max-w-4xl w-100">
          At TechCompiler, we pioneer change through technology and innovation. As a global enterprise technology solutions provider headquartered in Rochester, NY, we empower organizations and professionals to adapt to the digital landscape. With deep technical expertise and industry experience, we unlock our clients’ full potential.
          </p>
        </div>
        {/* Accordion Section */}
        <div className="w-full flex justify-end">
          <div className="w-[80%]">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`service-${index}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="py-8 px-2 sm:px-4 flex justify-between items-center group">
                    <span className="text-3xl sm:text-4xl md:text-6xl font-medium text-black">
                      {service.name}
                    </span>
                    <span className="text-4xl text-black transition-transform group-data-[state=open]:rotate-45">
                      +
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="px-2 sm:px-4 pb-8">
                    <div className="flex flex-col md:flex-row gap-6 mt-4">
                      <img
                        src={service.image}
                        alt={`${service.name} preview`}
                        className="lg:w-[400] sm:w-[200px] h-auto object-contain"
                      />
                      <div>
                        <h3 className="text-base font-medium text-gray-700">
                          {service.subtitle}
                        </h3>
                        {Array.isArray(service.description) ? (
                          service.name === "Our core values" ? (
                            <>
                              <p className="text-base text-black mt-2 leading-relaxed">
                                {service.description[0]}
                              </p>
                              <ul className="list-disc list-inside text-base text-black mt-4 leading-relaxed space-y-2">
                                {service.description.slice(1).map((point, i) => (
                                  <li key={i}>{point}</li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            service.description.map((paragraph, i) => (
                              <p
                                key={i}
                                className="text-base text-black mt-2 leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))
                          )
                        ) : (
                          <p className="text-base text-black mt-2 leading-relaxed">
                            {service.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>


      {/* About Section */}
      <section className="w-full flex flex-col items-start gap-16 pt-36 pb-0">
        <div className="w-full h-[800px] flex items-center justify-center py-8 relative">
          <ParallaxImage
            src="/67d2415f18d8235742ab1f98-samantha-gades-gkjlln1t8hq-unsplash-min.png"
            className="absolute w-full h-[800px] top-0 left-0"
          />

          <div className="flex flex-col items-center justify-center px-8 py-0 relative w-full h-full">
            <div className="flex flex-col max-w-screen-xl w-full items-start justify-center h-full">
              <FadeIn>
                <Card className="max-w-[480px] w-full flex flex-col items-start justify-between p-4 bg-[#ffffff4c] rounded backdrop-blur-sm">
                  <CardContent className="flex flex-col items-start gap-6 p-0">
                    <div
                      className="w-[104px] h-[120.84px] rounded bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(/67d1062057f006731fe68023-image-small-avif.png)",
                      }}
                    />
                    <p className="font-normal text-black text-xl leading-[26px]">
                      We are a forward-thinking design
                      <br />
                      agency dedicated to crafting compelling
                      <br />
                      visual identities that bridge the gap
                      <br />
                      between brands and their audiences.
                    </p>
                  </CardContent>

                  <div className="relative mt-auto">
                    <span className="font-normal text-black text-base leading-[20.8px]">
                      Get to know us
                    </span>
                    <div className="w-[114px] h-0.5 absolute top-[25px] left-0 bg-black" />
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full flex flex-col items-center px-8 py-0">
          <div className="flex flex-col max-w-screen-xl w-full items-start">
            <div className="flex flex-col md:flex-row items-start justify-between w-full">
              <FadeIn>
                <h2 className="font-medium text-black text-[32px] tracking-[-1.50px] leading-8">
                  By the numbers
                </h2>
              </FadeIn>

              <div className="flex flex-col md:flex-row items-start justify-between w-full md:pl-8 gap-8">
                {statistics.map((stat, index) => (
                  <FadeIn key={index} delay={index * 0.2}>
                    <div className="flex flex-col items-start gap-3">
                      <span className="font-normal text-black text-base leading-[20.8px]">
                        {stat.label}
                      </span>
                      <span className="font-medium text-black text-8xl tracking-[-5.00px] leading-[86.4px]">
                        {stat.value}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full flex flex-col items-center pt-20 px-8">
        <div className="flex flex-col max-w-screen-xl w-full items-start px-0 py-20">
          <FadeIn>
            <Card className="w-full rounded-lg overflow-hidden relative">
              <CardContent className="p-14">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col gap-2.5">
                    <div
                      className="w-[100px] h-[127.4px] bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(/67d105d7771ad1d3b2fa503b-rectangle-2034625011-avif.png)",
                      }}
                    />
                    <div>
                      <h3 className="font-normal text-black text-xl leading-[26px]">
                        Patricia Smith
                      </h3>
                      <p className="font-normal text-black text-base leading-[20.8px]">
                        Founder &amp; CEO
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <img
                      className="w-40 h-[29.73px]"
                      alt="Company logo"
                      src="/67cf8bb0523b7ab5b4150a3f-group-201000004849-svg.svg"
                    />

                    <blockquote className="font-normal text-black text-[32px] tracking-[-1.50px] leading-[41.6px]">
                      &#34;I can&#39;t recommend Agencye enough! Their creative
                      team
                      <br />
                      took our branding to the next level, and their strategic
                      <br />
                      guidance was instrumental in our growth. They&#39;re not
                      just
                      <br />
                      an agency; they&#39;re a true partner in success.Their data-
                      <br />
                      driven approach has consistently driven ROI for our
                      <br />
                      marketing campaigns. We trust them implicitly.&#34;
                    </blockquote>
                  </div>
                </div>
              </CardContent>

              <div className="flex flex-col gap-4 absolute top-[433px] right-[32px]">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 bg-[#f4f4f4] rounded hover:bg-gray-200 transition-colors"
                >
                  <img
                    className="h-[16.25px] w-[19.2px]"
                    alt="Previous"
                    src="/67d131fbf4965edf0f016994-vector-svg.svg"
                  />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 bg-[#f4f4f4] rounded hover:bg-gray-200 transition-colors"
                >
                  <img
                    className="h-[16.25px] w-[19.2px] rotate-180"
                    alt="Next"
                    src="/67d131fbf4965edf0f016994-vector-svg-1.svg"
                  />
                </Button>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full flex flex-col items-center px-8 py-0">
        <div className="flex flex-col max-w-screen-xl w-full items-start px-0 py-20">
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-[308px] flex flex-col gap-4">
                <FadeIn>
                  <h2 className="font-medium text-black text-[32px] tracking-[-1.50px] leading-8">
                    Our process
                  </h2>
                  <p className="font-normal text-black text-base leading-[20.8px] pr-3.5">
                    Our process is clear, collaborative, and
                    <br />
                    built for impact - ensuring every step
                    <br />
                    brings your vision to life with bold and
                    <br />
                    strategic design
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {processSteps.map((step, index) => (
                  <FadeIn key={index} delay={index * 0.2}>
                    <Card
                      className="flex flex-col items-start justify-between p-10 pb-12 bg-white rounded-[6.08px]"
                    >
                      <CardContent className="p-0">
                        <img
                          className="w-auto h-auto"
                          alt={`Process step ${step.number}`}
                          src={step.icon}
                        />
                      </CardContent>

                      <div className="flex flex-col items-start gap-2 mt-16">
                        <span className="font-normal text-black text-base leading-[20.8px]">
                          {step.number}
                        </span>
                        <h3 className="font-medium text-black text-[64px] tracking-[-3.00px] leading-[60.8px] pb-3">
                          {step.title}
                        </h3>
                        <p className="font-normal text-black text-base leading-[20.8px]">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};