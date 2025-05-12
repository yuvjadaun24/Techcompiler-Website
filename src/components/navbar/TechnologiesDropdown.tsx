import frontend from "@/assets/Technologies Icon/front-development.png";
import backend from "@/assets/Technologies Icon/developer.png";
import mobile from "@/assets/Technologies Icon/reservation-smartphone (1) 1.png";
import db from "@/assets/Technologies Icon/big-data 1.png";
import devops from "@/assets/Technologies Icon/devops.png";
import ecommerce from "@/assets/Technologies Icon/marketplace-alt 1.png";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface prop {
    setTechnologiesDropdownOpen: (value: boolean) => void
}
const TechnologiesDropdown: FC<prop> = ({ setTechnologiesDropdownOpen }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white shadow-[0px_50px_69px_-10px_rgba(0,0,0,0.1)] border-t border-gray-200 animate-dropdown-open flex flex-row justify-between">
            <div className="p-6 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 gap-y-8">

                    {/* ROW 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* FRONTEND */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <img src={frontend} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                                <h3 className="text-sm font-semibold">Frontend</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600 ml-6">
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Angular-JS") }}>Angular JS</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/React-JS") }}>React JS</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Vue-JS") }}>Vue.Js</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/JavaScript") }}>JavaScript</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/TypeScript") }}>TypeScript</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/CSS-3") }}>CSS3</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/HTML-5") }}>HTML5</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                            </ul>
                        </div>

                        {/* BACKEND */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <img src={backend} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                                <h3 className="text-sm font-semibold">Backend</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600 ml-6">
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Dot-Net") }}>.NET</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Dot-Net-Core") }}>.NET Core</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/PHP") }}>PHP</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Java") }}>JAVA</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Node-JS") }}>Node.Js</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                            </ul>
                        </div>

                        {/* MOBILE */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <img src={mobile} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                                <h3 className="text-sm font-semibold">Mobile</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600 ml-6">
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/IOS") }}>iOS</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Android") }}>Android</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/React-Native") }}>React Native</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                            </ul>
                        </div>
                    </div>

                    {/* ROW 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* DATABASE */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <img src={db} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                                <h3 className="text-sm font-semibold">Database</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600 ml-6">
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">MySQL</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">PostgreSQL</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">MongoDB</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">SQL Server</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                            </ul>
                        </div>

                        {/* DEVOPS */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <img src={devops} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                                <h3 className="text-sm font-semibold">DevOps</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600 ml-6">
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">Docker</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">Kubernetes</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">Jenkins</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">CI/CD</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                            </ul>
                        </div>

                        {/* E-COMMERCE */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <img src={ecommerce} className="h-[26px] border-b-2 border-blue-300 pb-1" />
                                <h3 className="text-sm font-semibold">E-Commerce</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600 ml-6">
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Woo-Commerce") }}>WooCommerce</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300" onClick={() => { setTechnologiesDropdownOpen(false); navigate("/Technologies/Magento") }}>Magento</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                                <li className="relative group cursor-pointer w-fit"><span className="group-hover:text-gray-800 transition-colors duration-300">Shopify</span><span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-2/5 bg-slate-200 p-10 gap-3 flex flex-col justify-end">
                <h1 className="text-2xl font-semibold">Our Offerings</h1>
                <p className="text-sm">Enabling agencies to focus on what they do best by providing a wide range of specialized services.</p>
                <div className="animate-fadeIn w-[50%]" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                    <a href="/contact" className="button w-inline-block">
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

export default TechnologiesDropdown;
