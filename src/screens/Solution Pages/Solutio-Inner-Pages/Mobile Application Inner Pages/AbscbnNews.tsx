import tfc1 from "@/assets/tfc1.png"; // Assuming the new images are named accordingly
import tfc2 from "@/assets/tfc2.png";
import tfc3 from "@/assets/tfc3.png";

const AbscbnNews = () => {
    return (
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">ABS-CBN News Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    ABS-CBN News and Current Affairs, also known as ABS-CBN News, is the news division of Philippine media conglomerate ABS-CBN Corporation. The organization is responsible for the daily news and information gathering of its news programs. Its current slogan is Malasakit sa Isa't-Isa (Tagalog for Devotion to Others). According to the SWS media trust survey, ABS-CBN News & Current Affairs topped the list among Philippines news and broadcast organizations, garnering 68% of the public trust.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    ABS-CBN wanted a video-on-demand and live broadcast service featuring television programs and video content from their channel ABS-CBN. They wanted to enable viewers exclusive access to ABS-CBN's latest news, entertainment & movies on laptops, personal computers, or mobile devices.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler developed the TFC.tv app which extends the site user's entitlements on mobile. We brought together Filipinos on the internet to watch, share, and talk about homegrown Filipino content they enjoy and love.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
                    <li><strong>ON DEMAND</strong> – All shows are archived.</li>
                    <li><strong>CONVENIENT</strong> – TFC.TV's online content is available anytime, every day.</li>
                    <li><strong>AUTHENTIC QUALITY</strong> – 100% original program uploads with excellent audio/video quality.</li>
                </ul>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>Xcode, Native C</li>
                    <li>Cloud MySQL</li>
                    <li>JIRA bug tracking tool</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Video-on-demand and live broadcast service featuring television programs and video content from the Philippines' leading channel ABS-CBN. It provides exclusive access to ABS-CBN's latest news, entertainment & movies that can be viewed using your laptop, personal computer, or mobile devices. TFC.tv serves Filipinos worldwide by making movies, news, and entertainment programs available on demand whenever and wherever they want it.
                </p>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
                        <img src={tfc1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">2. Most Loved Shows</h3>
                        <img src={tfc2} alt="Most Loved Shows" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full md:col-span-1 sm:col-span-2">
                        <h3 className="font-light text-lg text-gray-800">3. Menu</h3>
                        <img src={tfc3} alt="Menu" className="mt-4 rounded-md w-full" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AbscbnNews;
