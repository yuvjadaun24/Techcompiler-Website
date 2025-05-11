import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import UiUxDesign from "./../../../assets/uiuxdesign.png";

const UiUxDesigning = () => {
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
            subtitle: "Creating intuitive and stunning visuals",
            description:
                "We design sleek and engaging interfaces that combine aesthetics with usability to elevate your product’s experience.",
            image: "/images/branding-sample.png",
        },
        {
            name: "Development",
            subtitle: "Building scalable solutions",
            description:
                "From frontend to backend, we craft fast, secure, and responsive web applications tailored to your goals.",
            image: "/images/branding-sample.png",
        },
        {
            name: "Motion",
            subtitle: "Adding life to your brand",
            description:
                "With captivating animations and transitions, we help your digital presence come alive in meaningful ways.",
            image: "/images/branding-sample.png",
        },
    ];

    const workflowSteps = [
        {
            step: "Research & Discovery",
            desc: "We start by understanding user needs and business goals to define the core problem.",
        },
        {
            step: "Wireframing & Prototyping",
            desc: "Sketching out low to high fidelity layouts and building interactive prototypes for testing.",
        },
        {
            step: "Visual Design",
            desc: "Crafting UI elements, typography, color systems, and layouts that align with your brand.",
        },
        {
            step: "Usability Testing",
            desc: "Validating interface effectiveness through real-user feedback and iterative improvements.",
        },
        {
            step: "Delivery & Handoff",
            desc: "Exporting final assets and specifications for smooth developer handoff and implementation.",
        },
    ];

    // const techStack = [
    //     "Figma",
    //     "Adobe XD",
    //     "Sketch",
    //     "Framer",
    //     "Photoshop",
    //     "Illustrator",
    //     "HTML5",
    //     "CSS3",
    //     "Tailwind CSS",
    //     "Framer Motion",
    //     "React.js",
    //     "Zeplin",
    // ];

    return (
        <div className="bg-white text-black px-4 md:px-16 py-12 max-w-6xl mx-auto animate-fadeIn">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-4">UI/UX Designing</h1>
                    <h3 className="text-lg font-bold mb-4 text-gray-400">
                        Elevate your brand with modern UI/UX design
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Our UI/UX design services deliver intuitive, aesthetically pleasing interfaces that captivate users and enhance their interactions with your digital products. We are well-versed in the latest design concepts and user research, which makes it easier for us to create user-friendly experiences that are pleasing to the eyes of users. Our group of skilled designers meticulously crafts each detail, from format and typography to shade schemes and iconography; we always make sure a cohesive and attractive experience across as and platforms. With a deep understanding of user behavior and industry best practices, we optimize your procedure, accessibility, and conversion rates, driving business growth and customer satisfaction.
                    </p>
                </div>

                <div className="md:w-1/3 space-y-4 text-sm flex flex-col justify-evenly">
                    <p className="text-lg font-bold text-gray-600">
                        65 <br />
                        <span className="text-sm font-thin text-gray-800">Design Projects</span>
                    </p>
                    <p className="text-lg font-bold text-gray-600">
                        98%<br />
                        <span className="text-sm font-thin text-gray-800">Positive Feedback</span>
                    </p>
                    <p className="text-lg font-bold text-gray-600">
                        4.9★<br />
                        <span className="text-sm font-thin text-gray-800">Average Rating</span>
                    </p>
                    <button
                        className="bg-zinc-800 w-48 h-14 rounded-2xl text-white text-sm font-light relative group"
                        type="button"
                    >
                        <div className="bg-white rounded-xl h-12 w-1/4 absolute left-1 top-[4px] flex items-center justify-center z-10 group-hover:w-[184px] duration-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path d="M5 12h14" stroke="#000" strokeWidth="1" />
                                <path d="M13 5l7 7-7 7" stroke="#000" strokeWidth="1" />
                            </svg>
                        </div>
                        <p className="translate-x-2">Get In Touch</p>
                    </button>
                </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
                <img
                    src={UiUxDesign}
                    alt="UI UX Designing Preview"
                    className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Overview Section */}
            <div className="mb-16 animate-fade-up animation-delay-300">
                <h2 className="text-2xl font-semibold mb-4">What is UI/UX design?</h2>
                <p className="text-gray-700 text-base leading-7">
                    UI/UX design, or User Interface/User Experience design, is the practice of creating digital merchandise that is not only visually appealing but also highly functional, intuitive, and user-friendly. It encompasses the complete manner of designing and growing digital interfaces, from preliminary research and concept creation to prototyping, testing, and implementation.
                </p>
                <p className="text-gray-700 text-base leading-7 mt-4">
                    At its core, UI design focuses on the visible elements that customers engage with, including buttons, menus, icons, and overall format. It involves creating an aesthetically pleasing and consistent interface that adheres to established design principles and brand guidelines.
                </p>
            </div>

            {/* Accordion Services Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold">Design Services We Offer</h2>
                    <p className="text-sm text-gray-600 max-w-md w-80">
                        Helping brands create impactful and user-first digital experiences since 2018.
                    </p>
                </div>

                <div className="w-full flex justify-end">
                    <div className="w-[80%]">
                        <Accordion type="single" collapsible>
                            {services.map((service, index) => (
                                <AccordionItem key={index} value={`service-${index}`} className="border-b">
                                    <AccordionTrigger className="py-8 flex justify-between items-center group">
                                        <span className="text-3xl md:text-6xl font-medium text-black group-hover:text-gray-600 transition-all">
                                            {service.name}
                                        </span>
                                        <span className="text-4xl text-black transition-transform group-data-[state=open]:rotate-45">
                                            +
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-8">
                                        <div className="flex flex-col md:flex-row gap-6 mt-4">
                                            <img
                                                src={service.image}
                                                alt={`${service.name} preview`}
                                                className="w-[300px] object-contain rounded-lg shadow-md hover:scale-105 transition-transform"
                                            />
                                            <div>
                                                <h3 className="text-base font-medium text-gray-700">{service.subtitle}</h3>
                                                <p className="text-base text-black mt-2 leading-relaxed">{service.description}</p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* Why UI/UX Design Matters */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-up">Why UI/UX Design Matters</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "User-Centered Focus",
                            desc: "Design decisions driven by user behavior and expectations.",
                        },
                        {
                            title: "Consistency & Branding",
                            desc: "Interfaces that align with brand identity and messaging.",
                        },
                        {
                            title: "Increased Conversions",
                            desc: "Good design reduces friction and boosts engagement.",
                        },
                        {
                            title: "Enhanced Accessibility",
                            desc: "Design that works for everyone, regardless of ability.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Workflow */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
                    Our Design Workflow
                </h2>
                <div className="flex flex-col md:flex-row gap-6 relative px-4">
                    <div className="absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-1 bg-zinc-200 hidden md:block"></div>
                    {workflowSteps.map((step, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6 md:w-1/5 z-10 hover:scale-[1.02] transition-transform"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm text-gray-400 font-medium">Step {idx + 1}</span>
                                <div className="w-6 h-6 bg-zinc-800 text-white rounded-full text-xs flex items-center justify-center font-bold">
                                    {idx + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{step.step}</h3>
                            <p className="text-sm text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tech Stack */}
            {/* <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-up">Tools & Technologies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-sm text-gray-700">
                    {techStack.map((tech, i) => (
                        <div
                            key={i}
                            className="bg-zinc-50 rounded-xl p-4 text-center font-medium shadow hover:scale-105 transition-transform"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Final Section */}
            <div className="mb-28">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-fade-up">Why Work With Us?</h2>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                        <h4 className="text-xl font-semibold text-black mb-2">We Design with Purpose</h4>
                        <p className="text-sm leading-relaxed">
                            Every pixel is intentional. We design not just to impress, but to drive results and engagement.
                        </p>
                    </div>
                    <div className="bg-zinc-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                        <h4 className="text-xl font-semibold text-black mb-2">Pixel-Perfect Execution</h4>
                        <p className="text-sm leading-relaxed">
                            We collaborate closely with development teams to ensure designs translate beautifully into real products.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UiUxDesigning;
