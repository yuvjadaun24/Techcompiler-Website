import pwg1 from "@/assets/pwg-1.png"; // Assuming the new images are named accordingly
import pwg2 from "@/assets/pwg-2.png";
import pwg3 from "@/assets/pwg-3.png";
import CaseStudyLayout from '@/components/solutions/CaseStudyLayout';

const WeddingGuide = () => {
    return (
        <CaseStudyLayout parentCategory="Mobile Application">
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Perfect Wedding Guide Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Perfect Wedding Guide was created in 1991 to provide a single source of information to local brides and grooms planning a wedding. Growing even faster than the wedding industry, Perfect Wedding Guide has evolved into the nation's most comprehensive guide to wedding and honeymoon services. Not just another magazine ad, Perfect Wedding Guide provides a complete marketing program!
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Originally, Perfectweddingguide.com was created using ASP.NET 1.0 in 2004 without using layered architecture. The site did not support any SEO and any other modern search techniques. They did not have any mobile app or mobile-friendly version of the website until 2012. This impacted the growth of the business as the reach to potential customers was limited and the platform to offer more services was not scalable.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler designed and developed a SaaS-based architecture for perfectweddingguide.com in ASP.NET 4.5 / MVC to make it SEO/mobile-friendly. It enabled us to develop mobile-based apps for both Android and iOS for PWG.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>Android SDK</li>
                    <li>iOS 6.0</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Looks</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Login with Facebook</h3>
                        <img src={pwg1} alt="Login with Facebook" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">2. Search Vendors</h3>
                        <img src={pwg2} alt="Search Vendors" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full md:col-span-1 sm:col-span-2">
                        <h3 className="font-light text-lg text-gray-800">3. Bridal Show</h3>
                        <img src={pwg3} alt="Bridal Show" className="mt-4 rounded-md w-full" />
                    </div>
                </div>
            </section>

        </div>
        </CaseStudyLayout>
    );
};

export default WeddingGuide;
