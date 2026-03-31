import React from 'react';
import {
    LightBulbIcon,
    CodeBracketIcon,
    ArrowPathIcon,
    WrenchScrewdriverIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

import BigDataImg from '@/assets/BigDataAnalyticsImg.png';
import { useNavigate } from 'react-router-dom';
import SolutionCategoryLayout from '@/components/solutions/SolutionCategoryLayout';

const steps = [
    {
        title: 'Cleansing',
        text: 'We help you to resolve any inconsistencies or missing on massive data.',
        icon: LightBulbIcon,
    },
    {
        title: 'Enrichment',
        text: 'We analyze external sources or metadata to enhance the data capability for providing accurate and valuable analysis.',
        icon: CodeBracketIcon,
    },
    {
        title: 'Normalizing',
        text: 'We reduce the redundancy in data and removes duplicates.',
        icon: ArrowPathIcon,
    },
    {
        title: 'Transformation',
        text: 'We help you transform data from multiple sources by using complex business logic and algorithms.',
        icon: WrenchScrewdriverIcon,
    },
    {
        title: 'Merging',
        text: 'Our expert helps you in merging data from different streams providing a unified view of analytic engine.',
        icon: ShieldCheckIcon,
    },
];

let bigDataInnerLinks = [
    {
        text: "Yepme's e-Commerce Big Data Analytics",
        link: "/YepMe-Ecommerce"
    },
    {
        text: "Clickjoy's Lead Generation Platform Analytics",
        link: "/Clickjoy-BigDataAnalytics"
    },
    {
        text: "Socialscape's Marketing Initiatives Sentiment Analysis",
        link: "/Socialscape-BigDataAnalytics"
    },
    {
        text: "Soinsi's News & Articles Content Analysis",
        link: "/Soinsi-BigDataAnalytics"
    },
    {
        text: "Guavus Telecom Data Analytics",
        link: "/Guavus-BigDataAnalytics"
    }
];

const BigDataAnalytics: React.FC = () => {
    const navigate = useNavigate();
    return (
        <SolutionCategoryLayout pageNumber="01">
        <div className="bg-gray-50 text-gray-900">
            {/* Header Section */}
            <header className="max-w-6xl mx-auto p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-medium mb-4">
                    ETL Hadoop Driven Big Data Analytics
                </h1>
                <p className="text-base mb-8">
                    TechCompiler's Solution Architects have serviced a variety of companies and industries. We have successfully deployed production Hadoop clusters and solved a diverse range of business and technical problems. We provide hands-on expertise to address Business Problems and help companies transform and start thinking the Hadoop way.
                </p>
            </header>

            {/* Design Visual Placeholder */}
            <section className="max-w-6xl mx-auto p-4 sm:p-8 mb-2">
                <img
                    src={BigDataImg}
                    alt="Big Data Analytics Preview"
                    className="rounded-3xl w-full object-cover shadow-[0px_4px_100px_16px_rgba(149,157,165,0.2)] transition-transform duration-500 hover:scale-105"
                />
            </section>

            {/* Integrated 5-Step Service Flow Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our 5-Step Big Data Analytics Process</h2>
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

            {/* Big Data Analytics Process Section */}
            <section className="max-w-6xl mx-auto p-4 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                    Our Big Data experts help you with
                </h2>
                <p className="mb-4">
                    Our Big Data experts help you identify hidden patterns, unknown correlations, market trends, customer preferences and other useful business information in your large data sets. The analytical findings can lead to more effective marketing, new revenue opportunities, better customer service, improved operational efficiency, competitive advantages over rival organizations and other business benefits.
                </p>
                <p className="mb-8">
                    Deploying Hadoop is more than just installing jars as it requires configuring it to enterprise standards and preparing it for production. We have deployed dozens of clusters ranging from 2 machines to N number of machines. Our Solution Architects have the capability to deploy and configure Hadoop based on Hardware restrictions. Our services include deployment, full documentation of requirements, configurations, benchmarking and process to maintain and operate the cluster. We not only understand Hadoop but its full ecosystem including services like Hive, Pig, HDFS collector, Scheduler (Oozie), Cascading, Sqoop, Zookeeper, Hbase. We also install required plugins and administer these subsystems to provide end-to-end delivery.
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">How we do it?</h3>
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
                    <h2 className="text-4xl sm:text-5xl font-bold uppercase decoration-black decoration-4 mb-6">
                        What we have cooked!
                    </h2>
                    <p className="text-base sm:text-lg text-black leading-relaxed mb-8">
                        Explore how our Big Data Analytics expertise has delivered seamless, innovative, and impactful solutions for real-world challenges.
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
                        {bigDataInnerLinks.map((item, index) => (
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

export default BigDataAnalytics;
