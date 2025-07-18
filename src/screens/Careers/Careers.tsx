import { motion } from "framer-motion";
import { FadeIn } from './../../components/animations/FadeIn';
import { Mail } from 'lucide-react';

const CareersPage = () => {
  return (
    <motion.div
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Modernized */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Join Our Team</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for passionate and talented individuals to join our journey in building the future of technology.
            </p>
          </div>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn delay={0.2}>
          <div className="bg-gray-50 rounded-xl p-8 sm:p-12 border border-gray-200 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Got what it takes?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
              While we may not have specific openings listed right now, we are always on the lookout for exceptional talent. If you believe you'd be a great fit for our team, we'd love to hear from you.
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
              Send us your resume and a cover letter to:
            </p>
            <motion.a 
              href="mailto:hr@techcompiler.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <Mail className="h-5 w-5" />
              hr@techcompiler.com
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </motion.div>
  );
};

export default CareersPage;