import isa1 from "@/assets/isa1.png"; // Assuming the new images are named accordingly
import isa2 from "@/assets/isa2.png";
import isa3 from "@/assets/isa3.png";
import isa4 from "@/assets/isa4.png";
import isa5 from "@/assets/isa5.jpeg";
import isa6 from "@/assets/isa6.jpeg";
import isa7 from "@/assets/isa7.jpeg";
import isa8 from "@/assets/isa8.jpeg";
import isa9 from "@/assets/isa9.jpeg";
import CaseStudyLayout from '@/components/solutions/CaseStudyLayout';

const IntegratedSoftwareApplications = () => {
    return (
        <CaseStudyLayout parentCategory="Mobile Application">
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Integrated Software Applications Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    ISA is a software service provider based in Colorado Springs, CO. Integrated Software Applications, Inc. was founded in 1997. Union Manager©, ISA's flagship product, was initially developed for IBEW Local 349 in Miami, Florida. Since then, ISA's software has been deployed to Local Union Business Offices, Apprenticeship Training Facilities, and Union Trust Fund Offices throughout the United States and Canada.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    This system provides support that encompasses every aspect of Apprenticeship Tracking. Designed with ease of use for gathering information and printing reports and letters, it offers the option to fully integrate with the Local, Trust Fund, & Test Manager Modules, as well as the EPR feature.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler's answer to this situation was an Integrated Software Application that provided Student Evaluations, OJT Work Process Hours, Certification Tracking, an Automated re-rate process using JATC-defined rules with letter generation, a Comprehensive applicant tracking and ranking process, and improved efficiency by ensuring that users get the related information they are looking for. TechCompiler migrated the system from "JAVA" to "Dot Net (MVC)", as well as developed Android and iOS applications.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>Client Applications - ASP.NET MVC, Team Foundation Server, Dot NET 4.5</li>
                    <li>Middleware - IIS 7, Xamarin</li>
                    <li>Application Management - C#, XCode 9.2, Web Services</li>
                    <li>Android - 25+</li>
                    <li>Database - MSSQL</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    This application integrates with the Local Payroll, Trust Fund, & Test Manager Modules, as well as the EPR feature application. This application has the following key features:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
                    <li>Grades, Attendance, and Class Scheduling</li>
                    <li>Job Referral and Employer Tracking</li>
                    <li>Reporting Capabilities</li>
                    <li>Dues are defined and recorded in the system, allowing the ability to impose charges if the member is late in paying dues</li>
                    <li>Standard and miscellaneous receipts are created and printed, and a complete history is maintained</li>
                    <li>Ability to track which contracts an employer has signed and the pay/dues rates by job class</li>
                    <li>Employer profile and history of jobs, members, and MPR's</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>

                {/* Grid for first 4 images: 2 per row on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Login Screen</h3>
                        <img src={isa1} alt="Login Screen" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">2. Dashboard</h3>
                        <img src={isa2} alt="Dashboard" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">3. Admin Panel</h3>
                        <img src={isa3} alt="Admin Panel" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">4. List Page</h3>
                        <img src={isa4} alt="List Page" className="mt-4 rounded-md w-full" />
                    </div>
                </div>

                {/* Grid for mobile views (5–9): 1–4 per row based on screen size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">5. Mobile View 1</h3>
                        <img src={isa5} alt="Mobile View 1" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">6. Mobile View 2</h3>
                        <img src={isa6} alt="Mobile View 2" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">7. Mobile View 3</h3>
                        <img src={isa7} alt="Mobile View 3" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">8. Mobile View 4</h3>
                        <img src={isa8} alt="Mobile View 4" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">9. Mobile View 5</h3>
                        <img src={isa9} alt="Mobile View 5" className="mt-4 rounded-md w-full" />
                    </div>
                </div>
            </section>

        </div>
        </CaseStudyLayout>
    );
};

export default IntegratedSoftwareApplications;
