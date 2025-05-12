// import React from "react";
// import { motion } from "framer-motion";
import AngularJS from "@/assets/Technologies Icon/angularjs.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const angularServices = [
    {
        name: "AngularJS Consulting Services",
        subtitle: "Strategic guidance for your Angular projects",
        description:
            "When you are confused about your Angular projects and want expert consultation, consider TechCompiler’s AngularJS Consulting Services. We offer 360-degree guidance on the best approaches, architecture, and roadmaps for your next-gen Angular web app. Our consultants are Angular experts with years of hands-on experience building complex web apps. We study your business objectives, workflows, and target users to provide strategic architecture focused on scalability and performance. We always ensure that we choose the right component library for rapid development and advise on the integration approach with existing systems.",
        image: "/images/angular/consulting.png"
    },
    {
        name: "Custom AngularJS Development",
        subtitle: "Tailored applications that match your business goals",
        description:
            "If you want a feature-packed application that has never been created, then you can use our Custom AngularJS Development services to tailor digital assets that meet your needs and specifications. Our seasoned developers always follow proven coding best practices to ensure your vision becomes reality. Strict processes around coding guidelines, code reviews, testing, and documentation further ensure high quality.",
        image: "/images/angular/custom.png"
    },
    {
        name: "AngularJS API Development Services",
        subtitle: "Goal-oriented APIs to enhance your digital solutions",
        description:
            "As a leading Angular development service provider, we understand the importance of optimal performance on the success of a business, which is why we tailor goal-oriented APIs to expand the functionality of your business offerings.",
        image: "/images/angular/api.png"
    },
    {
        name: "AngularJS Migration Services",
        subtitle: "Seamless migration to the latest Angular version",
        description:
            "We also offer AngularJS Migration Services that enable businesses to upgrade their legacy web app to the latest Angular version without hassles. Our team follows a secured approach to migrate your existing Angular app to higher versions so you can leverage all new capabilities and benefits of the framework without affecting any functionality or UX. Moreover, we always ensure that the migration process is fully documented.",
        image: "/images/angular/migration.png"
    },
    {
        name: "AngularJS UI/UX Solutions",
        subtitle: "Modern and intuitive interfaces for your apps",
        description:
            "If you want to revamp the look and feel of your application, then you can also use our AngularJS UI/UX Solutions. From crafting intuitive and optimized interfaces for any device and customer segment to leveraging the latest UI libraries like Material Design, Bootstrap, Angular Material, etc., we help build aesthetically pleasing applications. Our UX experts focus on understanding end-user perspectives to translate them into interfaces that engage and convert visitors seamlessly.",
        image: "/images/angular/uiux.png"
    },
    {
        name: "MEAN Stack Development",
        subtitle: "End-to-end JavaScript stack for fast and scalable apps",
        description:
            "We also excel in MEAN Stack Development, which combines front-end and back-end JavaScript-based platforms into one consolidated web stack for building fast and scalable solutions. Our well-experienced developers leverage different databases and frameworks to deliver great performance, code reuse, integrated development, and reduced time-to-market for your web projects.",
        image: "/images/angular/meanstack.png"
    }
];

const AngularJSDevelopment = () => {
    return (
        <div className="w-full">
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 hover:scale-[1.01] transition-all duration-700 ease-in-out">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">Angular JS</h1>
                            <h3 className="text-lg font-bold mb-4 text-gray-400">
                                AngularJS Development Services
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Expedite business growth with feature-packed, robust, and dynamic AngularJS applications. Make TechCompiler your AngularJS application development partner to build business-critical, cross-platform applications for websites and mobile devices. Our certified developers are well-versed in the AngularJS framework and its development cycles, so you can always count on us to realize your unique vision and requirements into robust applications.
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
                                type="button">
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

                    <div className="mb-12">
                        <img
                            src={AngularJS}
                            alt="UI UX Designing Preview"
                            className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">What is AngularJS Development?</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            AngularJS, or Angular, is a popular, open-source framework developers use to create modern applications. This structural framework allows developers to build elegant and robust web/mobile applications. Developed by Google and maintained by seasoned developers, this typescript-based javascript framework allows businesses to build high-performing digital assets to propel innovation and growth.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            An angularJS application is composed of modules, controllers, services, filters, and directives. AngularJS development focuses on the model-view-controller (MVC) pattern, which separates application logic from the user interface. Key features of AngularJS include data binding, which links JavaScript objects to HTML, dependency injection to promote reusability and testability, and directives that help extend HTML with custom attributes and elements.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            The goal of angularJS is to simplify both the development and testing of web apps compared to traditional JavaScript. Its emphasis on MVC architecture helps create structured code for dynamic web/ mobile application projects.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">
                            AngularJS Development Services to Build Next-Gen, High-Performing Applications
                        </h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Having high-performing, robust, and dynamic web/mobile applications is imperative for businesses that want to grow and evolve. By leveraging our AngularJS development services, businesses can ensure that their new projects function effectively and look aesthetically pleasing.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our expert developers follow best practices around architecture, testing, and software design to deliver robust, future-ready Angular solutions that focus on reusability, speed, security, and flawless UI/UX using the latest features of the framework.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            With over thousands of successful Angular projects delivered and counting, you can choose us as your technology partner to get a fully functional, new-age application that accelerates your business growth through delighted customers.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">
                            Choose TechCompiler’s AngularJS Capabilities to Elevate Digital Competencies
                        </h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            As a renowned Angular development company, we have hands-on experience, creative vision, and a toolkit of emerging tools and technology to create solutions that help your business stand out in the crowded digital landscape.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our strict adherence to delivery excellence, customer success, and staying at the forefront of the latest web technologies make us a go-to choice for businesses. Right from creating mockups to deploying the final product, we closely collaborate with our clients to ensure solutions best fit their objectives.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-xl font-medium mb-4">Unveiling How the Development Process Works</h2>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our seasoned professionals spend time upfront to grasp business workflows, analyze target audiences, identify pain points, and then architect the optimum Angular-based framework focused on user experience, speed, security, and scalability.
                        </p>
                        <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                            Our solutions are not one-size-fits-all but designed thoughtfully based on what works optimally for each client. Additionally, we emphasize transparent communication and prompt support at each step to build trust. Our consistent track record of on-time project deliveries, even for the most complex web apps, further establishes us as a reliable AngularJS partner.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Explore Our Range of AngularJS Services</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {angularServices.map((service, index) => (
                                <AccordionItem key={index} value={`service-${index}`} className="border-b border-gray-200">
                                    <AccordionTrigger className="py-8 px-2 sm:px-4 flex justify-between items-center group transition-all duration-500 hover:text-grey-700">
                                        <span className="text-2sm sm:text-xl md:text-2xl font-medium text-black group-hover:text-grey-600 transition-all duration-300">
                                            {service.name}
                                        </span>
                                        <span className="text-4xl text-black transition-transform duration-300 group-data-[state=open]:rotate-45 group-hover:text-grey-500">
                                            +
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-2 sm:px-4 pb-8 transition-opacity duration-700 ease-in-out">
                                        <div className="flex flex-col md:flex-row gap-6 mt-4">
                                            <img src={service.image} alt={`${service.name} preview`} className="w-[300px] h-auto object-contain rounded-lg shadow-md transition-transform duration-500 hover:scale-105" />
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
            </section>
        </div>
    );
};

export default AngularJSDevelopment;
