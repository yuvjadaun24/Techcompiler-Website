import web from "@/assets/web-development.svg";
import design from "@/assets/designing.svg";
import marketing from "@/assets/marketing.svg";
import mobile from "@/assets/mobile.svg";
import maintenance from "@/assets/maintenance.svg";

const ServicesDropdown = () => {
    return (
        <div className="bg-white shadow-[0px_50px_69px_-10px_rgba(0,0,0,0.1)] border-t border-gray-200 animate-dropdown-open flex flex-row justify-between">
            <div className="p-6 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {/* Web Development */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span><img src={web} className="h-[26px] border-b-2 border-blue-300 pb-1" /></span>
                            <h3 className="text-sm font-semibold">Web Development</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6">
                            <li>Templated Website Development</li>
                            <li>Custom Website Development</li>
                            <li>Ecommerce Store Development</li>
                            <li>SaaS Application Development</li>
                        </ul>
                    </div>

                    {/* Design */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span><img src={design} className="h-[26px] border-b-2 border-blue-300 pb-1" /></span>
                            <h3 className="text-sm font-semibold">Design</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6">
                            <li>UI/UX Design</li>
                            <li>Graphic Design</li>
                            <li>3D Rendering</li>
                        </ul>
                    </div>

                    {/* Marketing */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span><img src={marketing} className="h-[26px] border-b-2 border-blue-300 pb-1" /></span>
                            <h3 className="text-sm font-semibold">Marketing</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6">
                            <li>Technical SEO Optimization</li>
                            <li>Ad Creation (Search and Display)</li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mt-8">
                            <span>👤</span>
                            <h3 className="text-sm font-semibold">Hire Dedicated Resources</h3>
                        </div>
                    </div>

                    {/* Mobile App Development */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mt-8">
                            <span><img src={mobile} className="h-[26px] border-b-2 border-blue-300 pb-1" /></span>
                            <h3 className="text-sm font-semibold pb-1">Mobile Application Development</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 ml-6 mt-2">
                            <li>Native iOS and Android App Development</li>
                            <li>Cross-platform Mobile App Development</li>
                        </ul>
                    </div>

                    {/* Website Maintenance */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mt-8">
                            <span><img src={maintenance} className="h-[26px] border-b-2 border-blue-300 pb-1" /></span>
                            <h3 className="text-sm font-semibold">Website Maintenance</h3>
                        </div>
                    </div>

                    {/* Ad Hoc */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mt-8">
                            <span>🔁</span>
                            <h3 className="text-sm font-semibold">Ad Hoc</h3>
                        </div>
                    </div>

                    {/* Hosting */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mt-8">
                            <span>☁️</span>
                            <h3 className="text-sm font-semibold">Hosting</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/5 bg-slate-200 p-10 gap-3 flex flex-col justify-end">
                <h1 className="text-2xl font-semibold">Our Offerings</h1>
                <p className="text-s">Enabling agencies to focus on what they do best by providing a wide range of specialized services.</p>
                <div
                    className="animate-fadeIn w-[50%]"
                    style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
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

export default ServicesDropdown;
