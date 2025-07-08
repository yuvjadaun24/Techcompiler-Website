import isa1 from "@/assets/isa1.png";
import isa2 from "@/assets/isa2.png";
import isa3 from "@/assets/isa3.png";
import isa4 from "@/assets/isa4.png";
import isa5 from "@/assets/isa5.jpeg";
import isa6 from "@/assets/isa6.jpeg";
import isa7 from "@/assets/isa7.jpeg";
import isa8 from "@/assets/isa8.jpeg";
import isa9 from "@/assets/isa9.jpeg";

const ISAApplication = () => {
    return (
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">ISA Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    ISA is a software service provider based in Colorado Springs, CO. Integrated Software Applications, Inc. was founded in 1997. Union Manager©, ISA's flagship product, was initially developed for IBEW Local 349 in Miami, Florida. Since then, ISA's software has been deployed to Local Union Business Offices, Apprenticeship Training Facilities, and Union Trust Fund Offices throughout the United States and Canada.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    This system provides support that encompasses every aspect of Apprenticeship Tracking. Designed with ease of use for gathering information and printing reports and letters. It offers the option to fully integrate with the Local, Trust Fund, & Test Manager Modules, as well as the EPR feature.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler's answer to this situation was Integrated Software Applications, which provided Student Evaluations/OJT Work Process Hours/Certification Tracking, an automated re-rate process using JATC-defined rules with letter generation, a comprehensive applicant tracking and ranking process, and improved efficiency by ensuring that users get the related information they are looking for. TechCompiler migrated the system from "JAVA" to "Dot Net (MVC)", along with Android and iOS applications.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">Client Applications:</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>ASP.NET MVC</li>
                    <li>Team Foundation Server</li>
                    <li>Dot NET 4.5</li>
                    <li>IIS 7</li>
                    <li>Xamarin</li>
                    <li>C#</li>
                    <li>XCode 9.2</li>
                    <li>Web Services</li>
                    <li>Android - 25+</li>
                    <li>MSSQL</li>
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
                    <li>Employer profile and history of jobs, members, and MPRs</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6 mt-5">How it Looks</h2>
                <div className="flex flex-col gap-8 w-full">
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
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800 mb-4">5. Mobile View</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <img src={isa5} alt="Mobile View" className="rounded-md w-full h-auto" />
                            <img src={isa6} alt="Mobile View" className="rounded-md w-full h-auto" />
                            <img src={isa7} alt="Mobile View" className="rounded-md w-full h-auto" />
                            <img src={isa8} alt="Mobile View" className="rounded-md w-full h-auto md:col-span-1" />
                            <img src={isa9} alt="Mobile View" className="rounded-md w-full h-auto md:col-span-1" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ISAApplication;
