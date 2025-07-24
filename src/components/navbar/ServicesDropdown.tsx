import web from "@/assets/web-development.svg";
import design from "@/assets/designing.svg";
import marketing from "@/assets/marketing.svg";
import mobile from "@/assets/mobile.svg";
import { useNavigate } from "react-router-dom";

const ServicesDropdown = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white shadow-[0px_50px_69px_-10px_rgba(0,0,0,0.1)] border-t border-gray-200 animate-dropdown-open flex flex-row justify-between">
            <div className="p-6 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Web Development */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span><img src={web} className="h-[26px] border-b-2 border-blue-300 pb-1" /></span>
                            <h3 className="text-sm font-semibold">Web & Application Development</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6">
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/web-dev")}>Application Services</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/Full-Stack-Development")}>Full Stack Development</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </ul>
                    </div>

                    {/* IT Management */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span>
                                <img src={marketing} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                            </span>
                            <h3 className="text-sm font-semibold">Infrastructure & IT Management</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6">
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/Infrastructure-Services")}>Infrastructure Service</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/Managed-IT-Services")}>Managed IT Services</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/IT-Outsourcing")}>IT Outsourcing</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/DevOps")}>DevOps</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </ul>
                    </div>


                    {/* Design */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span><img src={design} className="h-[26px] border-b-2 border-blue-300 pb-1" /></span>
                            <h3 className="text-sm font-semibold">Design</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6">
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/UI-UX-Designing")}>UI/UX Design</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </ul>
                    </div>

                    {/* Data & Intelligence */}
                    <div>
                        <div className="flex items-center gap-2 mt-8">
                            <span>
                                <img src={mobile} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                            </span>
                            <h3 className="text-sm font-semibold pb-1">Data & Intelligence</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6 mt-2">
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/Business-Intelligence")}>Business Intelligence</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/Data-Analytics")}>Data Analytics</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/Database-Migration")}>Database Migration</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </ul>
                    </div>

                    {/* Embedded */}
                    <div>
                        <div className="flex items-center gap-2 mt-8">
                            <span>
                                <img src={mobile} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                            </span>
                            <h3 className="text-sm font-semibold pb-1">Embedded & Specialized Solutions</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6 mt-2">
                            <li className="relative group cursor-pointer w-fit">
                                <span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => navigate("/services/Embedded-Product")}>Embedded Product</span>
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
            <div className="w-2/5 bg-slate-200 p-10 gap-3 flex flex-col justify-end">
                <h1 className="text-2xl font-semibold">Our Offerings</h1>
                <p className="text-s">Enabling agencies to focus on what they do best by providing a wide range of specialized services.</p>
                <div
                    className="animate-fadeIn w-[50%]"
                    style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                    <a className="button w-inline-block"  onClick={() => navigate("/Contact-Us")}>
                        <div className="button-text-wrap">
                            <div className="button-text">Get in touch</div>
                            <div className="button-text absolute">Get in touch</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesDropdown;
