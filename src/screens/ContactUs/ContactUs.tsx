import { motion } from "framer-motion";
const ContactUs = () => {
    return (
        <motion.div
            className="min-h-screen bg-[#f5f5f5] px-10 py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-medium leading-tight text-black">
                    Let’s build something great.
                </h1>
                <h2 className="text-5xl font-medium text-gray-400 -mt-2 mb-12">Get in touch</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-10 text-black">
                        <div>
                            <p className="text-sm">Email us</p>
                            <a href="mailto:hello@website.com" className="text-lg underline hover:text-gray-600 transition">
                                hello@website.com
                            </a>
                        </div>
                        <div>
                            <p className="text-sm">Location</p>
                            <p className="text-lg leading-6">
                                2464 Royal Ln. Mesa, <br />
                                New Jersey 45463
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-black">
                            <div>
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Company</label>
                                <input
                                    type="text"
                                    placeholder="Acme Inc."
                                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Email</label>
                                <input
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Project Budget</label>
                                <select
                                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-gray-400"
                                >
                                    <option>Select one...</option>
                                    <option>$1,000 - $5,000</option>
                                    <option>$5,000 - $10,000</option>
                                    <option>$10,000+</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 uppercase tracking-widest text-xs font-semibold">Message</label>
                                <textarea
                                    placeholder="Example Text"
                                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400"
                                />
                            </div>
                            <div className="sm:col-span-2 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-black text-white py-3 rounded-none hover:bg-gray-900 transition"
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