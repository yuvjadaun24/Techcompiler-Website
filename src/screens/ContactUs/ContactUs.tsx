import { motion } from "framer-motion";
import { useState } from "react";
import usFlag from '../../assets/united-states.png';
import japanFlag from '../../assets/japan.png';
import indiaFlag from '../../assets/india.png';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        phone: "",
    });

    const [copied, setCopied] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "email") {
            if (!validateEmail(value)) {
                setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
            } else {
                setErrors((prev) => ({ ...prev, email: "" }));
            }
        }

        if (name === "phone") {
            if (!/^\d*$/.test(value)) {
                setErrors((prev) => ({ ...prev, phone: "Phone number must contain only digits." }));
            } else {
                setErrors((prev) => ({ ...prev, phone: "" }));
            }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!errors.email && !errors.phone) {
            console.log("Form submitted successfully:", formData);
            // You can add your form submission logic here
        } else {
            console.log("Form has errors. Please fix them.");
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-[#f5f5f5] px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-medium leading-tight text-black text-center sm:text-left">
                    Let’s build something great.
                </h1>
                <h2 className="text-4xl sm:text-5xl font-medium text-gray-400 -mt-2 mb-10 sm:mb-12 text-center sm:text-left">
                    Get in touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8 text-black lg:pr-8">
                        <div>
                            <p className="text-sm font-semibold">Email us</p>
                            <div className="flex items-center gap-2">
                                <a href="mailto:hr@techcompiler.com" className="text-base sm:text-lg underline hover:text-gray-600 transition">
                                    hr@techcompiler.com
                                </a>
                                <button
                                    type="button"
                                    aria-label="Copy email"
                                    className="p-1 rounded hover:bg-gray-200 transition relative"
                                    onClick={() => {
                                        navigator.clipboard.writeText('hr@techcompiler.com');
                                        setCopied(true);
                                        setTimeout(() => setCopied(false), 2000);
                                    }}
                                >
                                    {/* Simple copy SVG icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-600">
                                        <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
                                        <rect x="3" y="3" width="13" height="13" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
                                    </svg>
                                    {copied && (
                                        <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-black text-white text-xs rounded px-2 py-1 shadow transition-opacity duration-200 opacity-100 whitespace-nowrap z-10">
                                            Copied to your clipboard
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Location</p>
                            <div className="space-y-4 mt-1">
                                <div>
                                    <p className="font-medium text-base mb-1">North America</p>
                                    <div className="flex items-center gap-3">
                                        <img src={usFlag} alt="US Flag" className="w-8 h-8 rounded shadow" />
                                        <span className="text-sm sm:text-base leading-6">412 Linden Avenue, Rochester, NY 14625</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium text-base mb-1">Asia</p>
                                    <div className="flex items-center gap-3 mb-1">
                                        <img src={japanFlag} alt="Japan Flag" className="w-8 h-8 rounded shadow" />
                                        <span className="text-sm sm:text-base leading-6">2-8-6-405, Higashi Tabata Kita-ku, Tokyo Japan</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src={indiaFlag} alt="India Flag" className="w-8 h-8 rounded shadow" />
                                        <span className="text-sm sm:text-base leading-6">Gold Tower, Wave One, Sector 18 Noida UP India 201301</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-black">
                            <div>
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Acme Inc."
                                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@gmail.com"
                                    className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} py-2 focus:outline-none focus:border-black placeholder-gray-400`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(123) 456-7890"
                                    className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-gray-300'} py-2 focus:outline-none focus:border-black placeholder-gray-400`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                            {/* <div className="sm:col-span-2">
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Project Budget</label>
                                <select
                                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-gray-400"
                                >
                                    <option>Select one...</option>
                                    <option>$1,000 - $5,000</option>
                                    <option>$5,000 - $10,000</option>
                                    <option>$10,000+</option>
                                </select>
                            </div> */}
                            <div className="sm:col-span-2">
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-gray-400"
                                />
                            </div>
                            <div className="sm:col-span-2 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition shadow-lg disabled:opacity-50"
                                    disabled={!!errors.email || !!errors.phone}
                                >
                                    Submit
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUs;