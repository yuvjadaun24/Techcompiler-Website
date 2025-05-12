import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { FadeIn } from "../../../../components/animations/FadeIn";
import { ParallaxImage } from "../../../../components/animations/ParallaxImage";
import "./Main.css";
import { motion} from "framer-motion";

export const MainByAnima = (): JSX.Element => {
  // Portfolio projects data
  const portfolioProjects = [
    {
      name: "Outshift",
      category: "Branding/UI Design",
      backgroundImage:
        "/67d02a29b38588fe0a411ef1-outshift-thumbnail-min-p-2000-jpg.png",
    },
    {
      name: "Pureat",
      category: "Branding/UI Design",
      backgroundImage:
        "/67d0196a35781c2d19cde014-pureat-thumbnail-min-p-2000-jpg.png",
    },
    {
      name: "Anaro",
      category: "Branding/UI Design",
      backgroundImage:
        "/67d02ace7e0f85d807df2538-anaro-thumbnail-min-p-2000-jpg.png",
    },
    {
      name: "TheoFolio",
      category: "Branding/UI Design",
      backgroundImage:
        "/67d02af1896a5352c3de9053-theo-thumbnail-min-p-2000-jpg.png",
    },
  ];

  // Services data
  const services = [
    {
      name: "Branding",
      subtitle: "Defining your unique identity",
      description:
        "Our branding services help create a strong, memorable identity that resonates with your audience, ensuring your brand stands out in a crowded market.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Design",
      subtitle: "Defining your unique identity",
      description:
        "Our branding services help create a strong, memorable identity that resonates with your audience, ensuring your brand stands out in a crowded market.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Development",
      subtitle: "Defining your unique identity",
      description:
        "Our branding services help create a strong, memorable identity that resonates with your audience, ensuring your brand stands out in a crowded market.",
      image: "/images/branding-sample.png",
    },
    {
      name: "Motion",
      subtitle: "Defining your unique identity",
      description:
        "Our branding services help create a strong, memorable identity that resonates with your audience, ensuring your brand stands out in a crowded market.",
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
      src: "/clip-path-group.png",
      alt: "Client logo",
      width: "127px",
      height: "6",
      name: "Product Engineering"
    },
    {
      src: "/clip-path-group-1.png",
      alt: "Client logo",
      width: "16",
      height: "39px",
      name: "Mobile Solutions"
    },
    {
      src: "/clip-path-group-2.png",
      alt: "Client logo",
      width: "69px",
      height: "27px",
      name: "Big Data Analytics"
    },
    {
      src: "/67cf8bb0523b7ab5b4150a3f-group-201000004849-svg.svg",
      alt: "Client logo",
      width: "113px",
      height: "21px",
      name: "Google Apps For Businesses"
    },
    {
      src: "/clip-path-group-3.png",
      alt: "Client logo",
      width: "72px",
      height: "39px",
      name: "Social Integration"
    },
  ];

  return (
    <div className="flex flex-col w-full items-start">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center px-8 py-12">
        <div className="flex flex-col max-w-screen-xl w-full items-start pt-0 pb-20 px-0">
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-[124px] w-full">
            <div className="flex flex-col w-full md:w-1/2 lg:w-[632px] items-start justify-center gap-6 self-stretch">
              <FadeIn>
                <Badge
                  variant="outline"
                  className="bg-white flex items-center gap-[7.04px] px-[8.8px] py-[5.6px]"
                >
                  <div className="w-[4.8px] h-[4.8px] bg-[#44e246] rounded-[4.8px]" />
                  <span className="font-normal text-black text-xs leading-[15.6px]">
                    Available from May&apos;25
                  </span>
                </Badge>
              </FadeIn>

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
                src="/67ce9ed56c8e587d30496fa6-2f67ceb73b686dbb71573fca2f-18069235-uhd.png"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full flex flex-col items-center px-8 py-0 bg-[#f4f4f4]">
        <div className="flex flex-col max-w-screen-lg w-full items-start px-0 py-20">
          <div className="flex flex-col items-center gap-6 w-full">
            <FadeIn>
              <h2 className="font-normal text-black text-base leading-[20.8px]">
                Our Optimal Silutions
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
              {clientLogos.map((logo, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card
                    className="flex items-center justify-center px-2 py-16 bg-white rounded-[6.08px]"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-0 h-10 gap-6">
                      <img
                        className="w-auto h-auto"
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

      {/* Portfolio Section */}
      <section className="w-full flex flex-col items-center px-8 py-0">
        <div className="flex flex-col max-w-screen-xl w-full items-start px-0 py-20">
          <div className="flex flex-col items-center gap-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {portfolioProjects.map((project, index) => (
                <FadeIn key={index} delay={index * 0.2}>
                  <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col w-full h-[442px] items-start cursor-pointer"
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
              <Button className="bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors">
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
            Services we provide
          </h2>
          <p className="text-sm text-gray-600 max-w-md w-80">
            Empowering brands to grow and share their stories since '18.
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
                        <p className="text-base text-black mt-2 leading-relaxed">
                          {service.description}
                        </p>
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