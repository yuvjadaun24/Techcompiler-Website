import React from 'react';
import {
    LightBulbIcon,
    CodeBracketIcon,
    ArrowPathIcon,
    WrenchScrewdriverIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

import prodimg from '@/assets/ProfEngImg.png'

const steps = [
    {
        title: 'Envision',
        text: 'Our multi-disciplinary teams help you convert your innovative ideas into reality.',
        icon: LightBulbIcon,
    },
    {
        title: 'Development',
        text: 'We provide development services across all platforms and technologies.',
        icon: CodeBracketIcon,
    },
    {
        title: 'Re-engineering',
        text: 'We emphasize on innovation, flexibility, quality deliverables, and cost-effective re-engineering methodologies.',
        icon: ArrowPathIcon,
    },
    {
        title: 'Maintenance',
        text: 'We employ our vast knowledge base and experience to support the maintenance requirements.',
        icon: WrenchScrewdriverIcon,
    },
    {
        title: 'Quality Assurance',
        text: 'Quality Assurance activities are performed throughout the project life cycle, including product conception, design, implementation, operation, and maintenance.',
        icon: ShieldCheckIcon,
    },
];

const ProdEng: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-900">
            {/* Header Section */}
            <header className="max-w-6xl mx-auto p-8">
                <h1 className="text-3xl font-medium mb-4">
                    Smart, Agile, Design driven Product Engineering
                </h1>
                <p className="text-base mb-8">
                    We work with a wide range of software technology companies, including start-ups wanting to bring new solutions to the market, established companies seeking to stay ahead with new and enhanced offerings, and large technology conglomerates looking to optimize their portfolios.
                </p>
            </header>

            {/* Design Visual Placeholder */}
            <section className="max-w-6xl mx-auto p-8 mb-2">
                <img
                    src={prodimg}
                    alt="Android Development Preview"
                    className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                />
            </section>

            {/* Integrated 5-Step Service Flow Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our 5-Step Product Engineering Process</h2>
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

            {/* Product Development Process Section */}
            <section className="max-w-6xl mx-auto p-8">
                <h2 className="text-3xl font-semibold mb-4">
                    Every idea deserves a great execution.
                </h2>
                <p className="mb-4">
                    Every business strives to keep itself in sync with the fast changing technologies and user experience. A new product idea is usually at a very high level in terms of business requirements which is not sufficient for building a world class product.
                </p>
                <p className="mb-8">
                    Our team converses with you to understand your business requirements. We come up with a wireframe and workflow to visualize your product idea, which becomes the foundation for further discussions to build a fully-fledged product.
                </p>
                <h3 className="text-2xl font-bold mb-4">How we do it?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                    {[
                        'Understand your requirements.',
                        'Document your requirements and get your approval.',
                        'Understand your product roadmap.',
                        'Build a fully functional prototype or mockup screens (as per your requirement).',
                        'Identify suitable architecture and technology.',
                        'Define software development roadmap and deliverables.',
                        'Follow applicable processes like agile with short sprints and regular builds.',
                        'Regular collaborative and interactive sessions.',
                        'Manual and automated testing.',
                        'User Acceptance Testing (UAT).',
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
            <section className="max-w-7xl mx-auto px-6 py-16 flex lg:flex-row justify-between items-start gap-12">
                {/* Left Section */}
                <div className="max-w-xl">
                    <h2 className="text-5xl font-extrabold uppercase underline decoration-black decoration-4 mb-6">
                        UI UX Design
                    </h2>
                    <p className="text-lg text-black leading-relaxed mb-8">
                        Our UI/UX design services ensure your users have a seamless, engaging, and memorable experience.
                    </p>
                    <button className="bg-[#3F21FF] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#341bcc] transition">
                        Contact Us <span className="text-sm">↗</span>
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full max-w-xl">
                    <h3 className="text-xl font-semibold uppercase text-black mb-6">
                        UI/UX Design Services
                    </h3>
                    <ul className="divide-y divide-gray-200">
                        {[
                            'User Research',
                            'Wireframe & Prototyping',
                            'Data-Driven Design',
                            'Mobile Fast & Responsive Design',
                            'Design System',
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between py-4 text-lg font-medium text-black hover:opacity-80 cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-400 font-mono w-6">{`0${index + 1}`}</span>
                                    <span>{item}</span>
                                </div>
                                <span className="text-black">↗</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ProdEng;
