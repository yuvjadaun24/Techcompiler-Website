import gdec1 from "@/assets/georgia1.png";
import gdec2 from "@/assets/georgia2.png";
import gdec3 from "@/assets/georgia4.png";

const GeorgiaEconomicDevelopment = () => {
    return (
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Georgia Department of Economic Development Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    The Georgia Department of Economic Development (GDEcD) is a department of the State of Georgia (United States). The department plans, manages, and mobilizes state resources to attract new business investment to Georgia, drive the expansion of existing industry and small business, locate new markets for Georgia products, inspire tourists to visit Georgia, and promote the state as a top destination for arts events and film, music, and digital entertainment projects.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Georgia wanted to create a fun and interactive means of educating citizens about the Health IT assets that Georgia has to offer. Participants should take the quiz on any desktop or mobile device of their preference, as well as share scores on their favorite social media channels.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler designed a user-friendly responsive web application which provided a Health IQ Test to cater to GDEcD's vision. Participants were able to take the Health IQ Test on any desktop or mobile device of their preference, as well as share scores on their favorite social media channels like Facebook, Twitter, and Google+.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>Enterprise Applications</li>
                    <li>J2EE frameworks like Spring, Strut, and JSF</li>
                    <li>J2EE Design Patterns</li>
                    <li>Java Persistence API frameworks like Hibernate</li>
                    <li>JSP, JSPX, Servlets, Custom Tags, JDBC, XML/XSL, and JUnit</li>
                    <li>Google Apps Engine</li>
                    <li>MySQL</li>
                    <li>JIRA bug tracking tool</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    This system is a responsive web application, allowing users to take the quiz on any desktop or mobile device of their preference, as well as share scores on their favorite social media channels like Facebook, Twitter, and Google+.
                </p>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>

                <div className="flex flex-col gap-8 w-full">
                    {/* Full-width first item */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
                        <img src={gdec1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
                    </div>

                    {/* gdec2 and gdec3 side-by-side */}
                    <div className="flex flex-col md:flex-row gap-8 w-full">
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full md:w-1/2">
                            <h3 className="font-light text-lg text-gray-800">2. Quiz</h3>
                            <img src={gdec2} alt="Quiz" className="mt-4 rounded-md w-full" />
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full md:w-1/2">
                            <h3 className="font-light text-lg text-gray-800">3. Share Result on Social Media</h3>
                            <img src={gdec3} alt="Share Result on Social Media" className="mt-4 rounded-md w-full" />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default GeorgiaEconomicDevelopment;
