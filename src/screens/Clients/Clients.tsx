import { motion } from "framer-motion";
import { FadeIn } from "./../../components/animations/FadeIn";
import client1 from "@/assets/ClientLogos/client1.png";
import client2 from "@/assets/ClientLogos/client2.png";
import client3 from "@/assets/ClientLogos/client3.png";
import client4 from "@/assets/ClientLogos/client4.png";
import client5 from "@/assets/ClientLogos/client5.png";
import client6 from "@/assets/ClientLogos/client6.png";
import client7 from "@/assets/ClientLogos/client7.png";
import client8 from "@/assets/ClientLogos/client8.png";
import client9 from "@/assets/ClientLogos/client9.png";
import client10 from "@/assets/ClientLogos/client10.png";
import client11 from "@/assets/ClientLogos/client11.png";
import client12 from "@/assets/ClientLogos/client12.png";
import "@/screens/Clients/Clients.Css";

const Clients = () => {
    // Sample client logos (replace with your actual client logos)
    const clients = [
        { name: "Client 1", logo: client1 },
        { name: "Client 2", logo: client2 },
        { name: "Client 3", logo: client3 },
        { name: "Client 4", logo: client4 },
        { name: "Client 5", logo: client5 },
        { name: "Client 6", logo: client6 },
        { name: "Client 7", logo: client7 },
        { name: "Client 8", logo: client8 },
        { name: "Client 9", logo: client9 },
        { name: "Client 10", logo: client10 },
        { name: "Client 11", logo: client11 },
        { name: "Client 12", logo: client12 },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <FadeIn delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                        Trusted by Leading Brands
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    width={120}
                                    height={60}
                                    className="object-contain h-12 w-full opacity-80 hover:opacity-100 transition-opacity"
                                />

                            </motion.div>
                        ))}
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="group flex flex-row justify-between items-stretch w-full duration-500 relative mt-8 rounded-2xl bg-slate-50 hover:-translate-y-2 hover:shadow-xl shadow-gray-300 overflow-hidden">

                        {/* Content divs stacked vertically on the right */}
                        <div className=" flex flex-col justify-between p-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-gray-900">Become Our Client Today</h2>
                                <p className="text-gray-600 text-lg">
                                    Join our growing family of satisfied clients who trust us to deliver exceptional digital experiences.
                                    We combine innovative design with cutting-edge technology to elevate your brand.
                                </p>
                                <ul className="grid grid-cols-2 gap-2 mt-4">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Custom solutions</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Dedicated support</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Proven results</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Flexible engagement</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-black text-white rounded-full px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-300"
                                >
                                    Get In Touch
                                </motion.button>
                            </div>
                        </div>

                        {/* Container on the left */}
                        <div className="w-3/4 bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="pattern-container"></div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Clients;