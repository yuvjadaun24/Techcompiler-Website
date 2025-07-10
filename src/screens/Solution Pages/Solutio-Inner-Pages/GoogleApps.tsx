import React from 'react';
import {
    LightBulbIcon,
    CodeBracketIcon,
    ArrowPathIcon,
    WrenchScrewdriverIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

// import prodimg from '@/assets/GoogleAppBusinessImg.png'; // Update the image path as necessary

const steps = [
    {
        title: 'Google Calendar',
        text: 'We help you to build applications around Google Calendar API and integrate it with your custom applications deployed at GAE or any other Server/Cloud Platform.',
        icon: LightBulbIcon,
    },
    {
        title: 'Google Drive',
        text: 'We help you to build applications around Google Drive API and integrate it with your custom applications deployed at GAE or any other Server/Cloud Platform.',
        icon: CodeBracketIcon,
    },
    {
        title: 'Gmail',
        text: 'We help you to build applications around Google Gmail API and integrate it with your custom applications deployed at GAE or any other Server/Cloud Platform.',
        icon: ArrowPathIcon,
    },
    {
        title: 'Google Admin SDK',
        text: 'We help you build custom applications suited to your organizational requirement using Google Admin SDK.',
        icon: WrenchScrewdriverIcon,
    },
    {
        title: 'Mail Migration',
        text: 'We help you to migrate your emails along with attachments from your email server to Gmail.',
        icon: ShieldCheckIcon,
    },
];

let googleAppInnerLinks = [
    {
        text: 'Whirlpool Merch Migration Application',
        link: "/Whirlpool-Merch"
    },
    {
        text: "Shopper DrugMart's Resource Management Application",
        link: "/Shopper-Drug-Mart"
    },
    {
        text: "Krispy Kreme Hangout Application",
        link: "/Krispy-Kreme-Hangout"
    },
    {
        text: "ATLAS Roofing's Stock Audit Report Management",
        link: "/ATLAS-Roofing-Stock-Audit"  
    },
    {
        text: "Onix Application Manager for Google Administrators",
        link: "/Onix-Application-Manager"
    }
];

const GoogleAppBusiness: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-900">
            {/* Header Section */}
            <header className="max-w-6xl mx-auto p-8">
                <h1 className="text-3xl font-medium mb-4">
                    Develop Google Apps for Business
                </h1>
                <p className="text-base mb-8">
                    TechCompiler's team of Solution Architects helps to identify your need for Google apps for business. If you are looking to migrate to Google apps or have existing solution on GAE, our experts will design and develop as per your business requirements.
                </p>
                <p className="text-base mb-8">
                    More and more businesses are moving to Google Apps, to utilize the power of Google's suite of messaging and productivity software. Our experts help you to migrate to Google apps or build Google apps to suit your business needs using a vast range of Google apps and API integrations. Be it an application to wrap around your organization structure, email migration or document collaboration, our experts help you to architect your solution.
                </p>
            </header>

            {/* Design Visual Placeholder */}
            <section className="max-w-6xl mx-auto p-8 mb-2">
                <img
                    // src={prodimg}
                    alt="Google Apps for Business Preview"
                    className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                />
            </section>

            {/* Integrated 5-Step Service Flow Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our 5-Step Google Apps Development Process</h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-white p-6 rounded-xl shadow-md w-full md:w-1/5 text-center group transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Icon className="h-7 w-7 text-slate-400" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.text}</p>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 right-[-32px] w-8 border-t-2 border-dashed border-gray-300"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Google Apps Development Process Section */}
            <section className="max-w-6xl mx-auto p-8">
                <h2 className="text-3xl font-semibold mb-4">
                    How we do it?
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                    {[
                        'Understand your requirements.',
                        'Document your requirements and get your approval.',
                        'Understand your product roadmap.',
                        'Build a fully functional prototype or build mock up screens (as per your requirement).',
                        'Identify suitable architecture and technology.',
                        'Define software development roadmap and deliverable.',
                        'Follow applicable processes like agile with short sprints and regular builds.',
                        'Regular collaborative and interactive sessions.',
                        'Manual and automated testing.',
                        'UAT.',
                        'Release and deployment.',
                        'Warranty.',
                        'Maintenance.',
                        'Enhancements and Change requests.',
                    ].map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </section>

            {/* UI UX Design Section */}
            <section className="max-w-7xl mx-auto px-6 py-16 flex lg:flex-row justify-between items-start gap-12">
                {/* Left Section */}
                <div className="max-w-xl">
                    <h2 className="text-5xl font-extrabold uppercase underline decoration-black decoration-4 mb-6">
                        What we have cooked!
                    </h2>
                    <p className="text-lg text-black leading-relaxed mb-8">
                        Explore how our Google Apps for Business expertise has delivered seamless, innovative, and impactful solutions for real-world challenges.
                    </p>
                    <div className="animate-fadeIn w-[50%]" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                        <a href="/contact" className="button w-inline-block">
                            <div className="button-text-wrap">
                                <div className="button-text">Get in touch</div>
                                <div className="button-text absolute">Get in touch</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full max-w-xl">
                    <ul className="divide-y divide-gray-200">
                        {googleAppInnerLinks.map((item, index) => (
                            <a
                                href={item.link}
                                key={index}
                                className="flex items-center justify-between py-4 text-lg font-medium text-black hover:opacity-80 cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-400 font-mono w-6">{`0${index + 1}`}</span>
                                    <span>{item.text}</span>
                                </div>
                                <span className="text-black">↗</span>
                            </a>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default GoogleAppBusiness;
