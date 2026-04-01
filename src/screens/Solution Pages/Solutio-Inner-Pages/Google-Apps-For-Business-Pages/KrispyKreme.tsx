import krispy1 from "@/assets/kk1.png";
import krispy2 from "@/assets/kk2.png";
import krispy3 from "@/assets/kk3.png";
import CaseStudyLayout from '@/components/solutions/CaseStudyLayout';

const KrispyKreme = () => {
    return (
        <CaseStudyLayout parentCategory="Google Apps for Business">
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Krispy Kreme Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Krispy Kreme, Inc. is an American global doughnut company and coffeehouse chain based in Winston-Salem, North Carolina. Krispy Kreme founder Vernon Rudolph bought a yeast-raised recipe from a New Orleans chef, rented a building in what is now historic Old Salem in Winston-Salem, and began selling to local grocery stores.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Krispy Kreme wanted to give its fans a place to hang out and share a doughnut, coffee, and virtual conversation with friends they haven’t met yet.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler developed a Web Application using Google’s Hangouts live video conferencing technology to provide Krispy Kreme customers with an in-store experience that lets fans stopping in the shop for their favorite holiday treat send and receive holiday messages from other doughnut lovers at participating Krispy Kreme doughnut shops around the world.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>Enterprise Applications</li>
                    <li>Java frameworks (Spring, Spring MVC, JSF)</li>
                    <li>Enterprise Java Design Patterns</li>
                    <li>JPA / Hibernate</li>
                    <li>JSP, JSPX, Servlets, Custom Tags, JDBC, XML/XSL, and JUnit</li>
                    <li>Google Apps Engine</li>
                    <li>Cloud MySQL</li>
                    <li>JIRA bug tracking tool</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Joy Goes Around Holiday Hangouts is an interactive experience that utilizes Google Chromebook to connect up to fifteen in-store guests at Krispy Kreme shops in sixteen different countries via a two-minute live video chat on a customized Hangouts page. Playful on-screen prompts such as ‘wave your hand, show off your doughnut, or toast your coffee’ make the Holiday Hangouts experience even more enjoyable.
                </p>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
                <div className="flex flex-col gap-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Application Landing Page</h3>
                        <img src={krispy1} alt="Application Landing Page" className="mt-4 rounded-md w-full" />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">2. Add People to Hangout</h3>
                        <img src={krispy2} alt="Add People to Hangout" className="mt-4 rounded-md w-full" />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">3. Hangout Screen</h3>
                        <img src={krispy3} alt="Hangout Screen" className="mt-4 rounded-md w-full" />
                    </div>
                </div>
            </section>
        </div>
        </CaseStudyLayout>
    );
};

export default KrispyKreme;
