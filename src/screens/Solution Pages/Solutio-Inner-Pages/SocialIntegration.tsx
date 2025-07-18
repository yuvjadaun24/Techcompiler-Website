import React from 'react';
import {
    LightBulbIcon,
    CodeBracketIcon,
    ArrowPathIcon,
    WrenchScrewdriverIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import SocialIntegrationImg from '@/assets/SocialIntegration.png';

const steps = [
    {
        title: 'Facebook',
        text: 'Our Experts help you to integrate Facebook graph APIs to your application.',
        icon: LightBulbIcon,
    },
    {
        title: 'Twitter',
        text: 'Our Experts help you to integrate Twitter REST APIs to your application.',
        icon: CodeBracketIcon,
    },
    {
        title: 'LinkedIn',
        text: 'Our Experts help you to integrate LinkedIn REST APIs to your application.',
        icon: ArrowPathIcon,
    },
    {
        title: 'Pinterest',
        text: 'Our Experts help you to integrate Pinterest REST APIs to your application.',
        icon: WrenchScrewdriverIcon,
    },
    {
        title: 'Google Plus',
        text: 'Our Experts help you to integrate Google Plus REST APIs to your application.',
        icon: ShieldCheckIcon,
    },
];

let socialIntegrationInnerLinks = [
    {
        text: 'Active8 - iPhone Fitness Application',
        link: "/GoEmerge-Application"
    },
    {
        text: "Georgia - Health IQ Test Application",
        link: "/Georgia-Department-of-Economic-Development"
    },
    {
        text: "KLM Clear for Boarding Application",
        link: "/KLM-Clear-for-Boarding"
    },
    {
        text: "Yepme's Online Brand E-commerce Application",
        link: "/YepMe-Ecommerce"
    },
    {
        text: "Perfect Wedding Guide's Online Platform",
        link: "/Perfect-Wedding-Guide"
    }
];

const SocialIntegration: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-50 text-gray-900">
            {/* Header Section */}
            <header className="max-w-6xl mx-auto p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-medium mb-4">
                    Integrate Social API to your app.
                </h1>
                <p className="text-base mb-4">
                    Our Social Media API integration experts help and identify your business requirements to integrate to social APIs. Be it standard OAuth2 authentication and authorization or more complex sharing and collaboration, our experts help you integrate Social APIs with your business.
                </p>
                <p className="text-base mb-8">
                    Our expertise in Facebook graph APIs, Twitter APIs, Pinterest integration, and Google Plus integration will cater your business's need to go social.
                </p>
            </header>

            {/* Design Visual Placeholder */}
            <section className="max-w-6xl mx-auto p-4 sm:p-8 mb-2">
                <img
                    src={SocialIntegrationImg}
                    alt="Social Integration Preview"
                    className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                />
            </section>

            {/* Integrated 5-Step Service Flow Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our 5-Step Social API Integration Process</h2>
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

            {/* Social API Integration Process Section */}
            <section className="max-w-6xl mx-auto p-4 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
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
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col lg:flex-row justify-between items-start gap-12">
                {/* Left Section */}
                <div className="max-w-xl w-full">
                    <h2 className="text-4xl sm:text-5xl font-extrabold uppercase underline decoration-black decoration-4 mb-6">
                        What we have cooked!
                    </h2>
                    <p className="text-base sm:text-lg text-black leading-relaxed mb-8">
                        Explore how our Social API integration expertise has delivered seamless, innovative, and impactful solutions for real-world challenges.
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
                        {socialIntegrationInnerLinks.map((item, index) => (
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
    );
};

export default SocialIntegration;
