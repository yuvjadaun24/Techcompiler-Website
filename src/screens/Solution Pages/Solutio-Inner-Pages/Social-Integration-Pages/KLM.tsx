import klm1 from "@/assets/klm2.jpg";
import klm2 from "@/assets/klm4.jpg";
import klm3 from "@/assets/klm6.jpg";

const KLM = () => {
    return (
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">KLM Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    KLM is the flag carrier airline of the Netherlands headquartered in Amstelveen with its hub at nearby Amsterdam Airport Schiphol. The name KLM is an abbreviation of its full legal name, Koninklijke Luchtvaart Maatschappij N.V. (Royal Dutch Airlines). KLM operates scheduled passenger and cargo services to more than 130 destinations worldwide.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    KLM wanted to launch an app to manage the “Cleared for Boarding” promotion where prizes were to be given to users for connecting to the KLM promotion site by using Facebook/Twitter logins and sharing this link with their friends.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler designed a responsive application for KLM where users could connect using their social profiles and be contenders for the prize. The users who shared the maximum number of links became eligible for a prize via a lucky draw.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>PHP 5.3.5</li>
                    <li>MySQL</li>
                    <li>Apache 2.2</li>
                    <li>JavaScript, Ajax, jQuery</li>
                    <li>Operating System: Windows/Linux</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Users share branded content (Facebook shares and Tweets) to unlock the prizes. A different cumulative number of shares/re-tweets are required for each prize. When the number of shares needed to unlock a prize is reached, the list stops, and whoever is “cleared for boarding” wins the corresponding item.
                </p>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>

                <div className="flex flex-col gap-8 w-full">
                    {/* Full-width Image 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
                        <img src={klm1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
                    </div>

                    {/* Row with klm2 and klm3 */}
                    <div className="flex flex-col md:flex-row gap-8 w-full">
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full md:w-1/2">
                            <h3 className="font-light text-lg text-gray-800">2. Mobile – Login with Social Media</h3>
                            <img src={klm2} alt="Mobile – Login with Social Media" className="mt-4 rounded-md w-full" />
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full md:w-1/2">
                            <h3 className="font-light text-lg text-gray-800">3. Mobile – Winner Screen</h3>
                            <img src={klm3} alt="Mobile – Winner Screen" className="mt-4 rounded-md w-full" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default KLM;
