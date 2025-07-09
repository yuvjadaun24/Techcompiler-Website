import prune1 from "@/assets/prune1.png"; // Assuming the new images are named accordingly
import prune2 from "@/assets/prune2.png";
import prune3 from "@/assets/prune3.png";
import prune4 from "@/assets/prune4.png";
import prune5 from "@/assets/prune5.png";
import prune6 from "@/assets/prune6.png";
import prune7 from "@/assets/prune7.png";
import prune8 from "@/assets/prune8.png";

const PruneDigital = () => {
    return (
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Prune Digital Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Prune Digital Consumer Solutions Pvt. Ltd. provides solutions to consumers regarding their current telecom operator as well as other operators. Doing this, Prune Digital helps consumers to keep their expenses in check by switching to the best plans or the better operator. It is also a marketplace for mobile handsets and mobile and utility recharges.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Prune Digital Consumer Solutions Pvt. Ltd. wanted to create an application which should be available on Android that will allow consumers to manage their mobile expenses. Prune Digital wants to show consumers their data usages, voice usages, SMS, and roaming usages.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler helped Prune Digital to develop an Android App which shows consumers all their expenses. Consumers can check their data usages and balance data, as well as the best available pre-paid and post-paid plans of current as well as all operators.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>PHP</li>
                    <li>Java Persistence API frameworks like Hibernate</li>
                    <li>Android SDK 25+, Gradle</li>
                    <li>MySQL</li>
                    <li>Trello</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Looks</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Application Registration</h3>
                        <img src={prune1} alt="Application Registration" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">2. Application Dashboard</h3>
                        <img src={prune2} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">3. Application Menu</h3>
                        <img src={prune3} alt="Application Menu" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">4. Best Plans Mobile Recharge</h3>
                        <img src={prune4} alt="Best Plans Mobile Recharge" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">5. Bill Payment</h3>
                        <img src={prune5} alt="Bill Payment" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">6. E-commerce</h3>
                        <img src={prune6} alt="E-commerce" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">7. Application Best Device Filter</h3>
                        <img src={prune7} alt="Application Best Device Filter" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">8. Application Order & Usage History</h3>
                        <img src={prune8} alt="Application Order & Usage History" className="mt-4 rounded-md w-full" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PruneDigital;
