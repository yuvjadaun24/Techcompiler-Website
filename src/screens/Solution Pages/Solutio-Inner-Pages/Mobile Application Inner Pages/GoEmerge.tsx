import emerge1 from "@/assets/emerge1.png"; // Assuming the new images are named accordingly
import emerge2 from "@/assets/emerge2.png";
import emerge3 from "@/assets/emerge3.png";
import CaseStudyLayout from '@/components/solutions/CaseStudyLayout';

const GoEmerge = () => {
    return (
        <CaseStudyLayout parentCategory="Mobile Application">
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">GoEmerge Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    GoEmerge provides Managed Services in the area of sales, marketing, and operations. GoEmerge teams are built on people who are "Data Smart" and understand the needs of today's data-hungry businesses. They provide an end-to-end solution so organizations don't have to go through significant business architecture changes to achieve the desired result.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    GoEmerge wanted to create an iOS App that will allow athletes to see activity data from various devices like Fitbit and Garmin Connect in one dashboard. Most athletes use multiple devices but have to use various apps and websites to see individual activity.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler designed and developed a SaaS-based architecture for the Aktiv8 App to develop an iOS-based app. The Aktiv8 dashboard displays workout information from Garmin Connect and Fitbit devices.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                    The Aktiv8 App provides backward compatibility and runs on any iOS version.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>ASP.NET MVC</li>
                    <li>Team Foundation Server</li>
                    <li>.NET</li>
                    <li>IIS</li>
                    <li>C#</li>
                    <li>Xcode</li>
                    <li>iOS SDK</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Looks</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Login with Social Media</h3>
                        <img src={emerge1} alt="Login with Social Media" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">2. Score</h3>
                        <img src={emerge2} alt="Score" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full md:col-span-1 sm:col-span-2">
                        <h3 className="font-light text-lg text-gray-800">3. Status</h3>
                        <img src={emerge3} alt="Status" className="mt-4 rounded-md w-full" />
                    </div>
                </div>
            </section>

        </div>
        </CaseStudyLayout>
    );
};

export default GoEmerge;
