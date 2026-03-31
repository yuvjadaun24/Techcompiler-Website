import blogmint1 from "@/assets/blogmint1.png"; // Assuming the new images are named accordingly
import blogmint2 from "@/assets/blogmint2.png";
import CaseStudyLayout from '@/components/solutions/CaseStudyLayout';

const Blogmint = () => {
    return (
        <CaseStudyLayout parentCategory="Mobile Application">
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Blogmint Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Blogmint is India’s 1st automated platform that connects brands and bloggers. Blogmint is an initiative of TO THE NEW Ventures, a disruptive Internet products and solutions company creating and operating businesses targeted at social and mobile-first customers. TO THE NEW Ventures specializes in emerging markets, especially fast track Asia - China, India, and ASEAN. With over 10 internet product businesses in marketing, content, analytics, commerce, and digital video incubated and acquired in a short span of 2 years across 7 countries and over 600 people, the network effect is truly working.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Blogmint wanted a mobile application for cricket lovers where they can support and cheer their favorite teams in a LIVE cricket match.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler developed The Loudest Cheer (TLC) for cricket fans, which encourages fans to pick their team and then gives multiple events like good shot, quick four, and big wicket, etc. The app also asks fans to record their cheer in audio/video file and submit it to us via WhatsApp. There are multiple contests running for every match and exciting prizes to be won.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>Enterprise Applications</li>
                    <li>J2EE frameworks like Spring, Strut, and JSF</li>
                    <li>J2EE Design Patterns</li>
                    <li>Java Persistence API frameworks like Hibernate</li>
                    <li>Android SDK</li>
                    <li>MySQL</li>
                    <li>JSP, JSPX, Servlets, Custom Tags, JDBC, XML/XSL, and JUnit</li>
                    <li>JIRA bug tracking tool</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The app is an easy-to-use mobile platform to support and cheer their favorite teams in a LIVE cricket match. Whenever a T20 cricket match is live, the app encourages fans to pick their team and then gives multiple events like good shot, quick four, and big wicket, etc. The app also asks fans to record their cheer in audio/video file and submit it to us via WhatsApp.
                </p>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Play Bowling</h3>
                        <img src={blogmint1} alt="Play Bowling" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">2. Play Batting</h3>
                        <img src={blogmint2} alt="Play Batting" className="mt-4 rounded-md w-full" />
                    </div>
                </div>
            </section>

        </div>
        </CaseStudyLayout>
    );
};

export default Blogmint;
