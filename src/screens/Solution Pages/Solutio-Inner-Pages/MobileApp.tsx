import React from 'react';
import {
    LightBulbIcon,
    CodeBracketIcon,
    ArrowPathIcon,
    WrenchScrewdriverIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

import MobileApp from '@/assets/MobileAppDevImg.png';
import { useNavigate } from 'react-router-dom';
import SolutionCategoryLayout from '@/components/solutions/SolutionCategoryLayout';

const steps = [
    {
        title: 'Envision',
        text: 'Our multi-disciplinary teams help you convert your innovative mobile app ideas into reality.',
        icon: LightBulbIcon,
    },
    {
        title: 'Development',
        text: 'We provide mobile app development services across all platforms and technologies.',
        icon: CodeBracketIcon,
    },
    {
        title: 'Re-engineering',
        text: 'We emphasize innovation, flexibility, quality deliverables, and cost-effective re-engineering methodologies for mobile applications.',
        icon: ArrowPathIcon,
    },
    {
        title: 'Maintenance',
        text: 'We employ our vast knowledge base and experience to support the maintenance requirements of mobile apps.',
        icon: WrenchScrewdriverIcon,
    },
    {
        title: 'Quality Assurance',
        text: 'Quality Assurance activities are performed throughout the mobile app development life cycle, including product conception, design, implementation, operation, and maintenance.',
        icon: ShieldCheckIcon,
    },
];

let mobileAppInnerLinks = [
    {
        text: 'Active8 - iPhone Fitness Application',
        link: "/GoEmerge-Application"
    },
    {
        text: "PWG Mobile Application",
        link: "/PWG-Mobile"
    },
    {
        text: "i-WIGT - What is Good Teaching iPAD Application",
        link: "/IWIGT-iPad"
    },
    {
        text: "The Loudest Cheer - Application for Cricket Fans",
        link: "/Blogmint-Application"
    },
    {
        text: "ABS-CBN's TFC TV iPhone Application",
        link: "/Abscbn-News"
    },
    {
        text: "Newsbeen Android & iPhone Application",
        link: "/Teenbeen-Media"
    },
    {
        text: "Prune Android Application",
        link: "/Prune-Digital"
    },
    {
        text: "ISAWeb Android & iPhone Application",
        link: "/ISAWeb-Application"
    }
]

const MobileAppDev: React.FC = () => {
    const navigate = useNavigate();
    return (
        <SolutionCategoryLayout pageNumber="03">
        <div className="bg-gray-50 text-gray-900">
            {/* Header Section */}
            <header className="max-w-6xl mx-auto p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-medium mb-4">
                    Smart, Agile, Design driven Mobile App Development
                </h1>
                <p className="text-base mb-8">
                    We work with a wide range of software technology companies, including start-ups wanting to bring new solutions to the market, established companies seeking to stay ahead with new and enhanced offerings, and large technology conglomerates looking to optimize their portfolios.
                </p>
            </header>

            {/* Design Visual Placeholder */}
            <section className="max-w-6xl mx-auto p-4 sm:p-8 mb-2">
                <img
                    src={MobileApp}
                    alt="Mobile App Development Preview"
                    className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                />
            </section>

            {/* Integrated 5-Step Service Flow Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our 5-Step Mobile App Development Process</h2>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-10 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-white p-6 rounded-xl shadow-md w-full md:w-1/5 text-center group transition-all duration-300 hover:shadow-xl flex flex-col items-center"
                            >
                                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Icon className="h-7 w-7 text-slate-400" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600 flex-grow">{step.text}</p>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 right-[-32px] w-8 border-t-2 border-dashed border-gray-300"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Mobile App Development Process Section */}
            <section className="max-w-6xl mx-auto p-4 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                    Every business is going mobile.
                </h2>
                <p className="mb-4">
                    If you have an existing business which you want to be on mobile or if it is a new business which you need support at mobile, our architects and developers are here to serve you. We build both native apps running on iPads and iPhones as well as Android apps running on Android mobile and tabs. Building applications to be responsive to the real state of any device like desktop, mobile or tablet is our core expertise.
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">How we do it?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                    {[
                        'Understand your requirements.',
                        'Document your requirements and get your approval.',
                        'Understand your product roadmap.',
                        'Build a fully functional prototype or build mock up screens (as per your requirement).',
                        'Identify suitable architecture and technology.',
                        'Define software development roadmap and deliverables.',
                        'Follow applicable processes like agile with short sprints and regular builds.',
                        'Regular collaborative and interactive sessions.',
                        'Manual and automated testing.',
                        'User  Acceptance Testing (UAT).',
                        'Release and deployment.',
                        'Warranty.',
                        'Maintenance.',
                        'Enhancements and change requests.',
                    ].map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </section>

            {/* UI UX Design Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col lg:flex-row justify-between items-start gap-12">
                {/* Left Section */}
                <div className="max-w-xl w-full">
                    <h2 className="text-4xl sm:text-5xl font-extrabold uppercase underline decoration-black decoration-4 mb-6">
                        What we have cooked!
                    </h2>
                    <p className="text-base sm:text-lg text-black leading-relaxed mb-8">
                        Explore how our mobile app development expertise has delivered seamless, innovative, and impactful solutions for real-world challenges.
                    </p>
                    <div className="animate-fadeIn w-full sm:w-[50%]" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
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
                        {mobileAppInnerLinks.map((item, index) => (
                            <div
                                onClick={() => navigate(item.link)}
                                key={index}
                                className="flex items-center justify-between py-4 text-lg font-medium text-black hover:opacity-80 cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-400 font-mono w-6">{`0${index + 1}`}</span>
                                    <span>{item.text}</span>
                                </div>
                                <span className="text-black">↗</span>
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
        </SolutionCategoryLayout>
    );
};

export default MobileAppDev;
