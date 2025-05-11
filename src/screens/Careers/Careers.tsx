import { motion } from "framer-motion";
import { FadeIn } from './../../components/animations/FadeIn';

const CareersPage = () => {
  // Static job data (unchanged)
  const jobCategories = {
    'Software Development': [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        type: 'Full-time',
        location: 'Remote',
        department: 'Engineering',
        description: 'We are looking for an experienced React developer to join our team.'
      },
      // ... rest of your job data
    ],
    // ... other categories
  };

  // Static filter options (unchanged)
  const locations = ['All', 'Remote', 'San Francisco', 'New York', 'Austin'];
  const jobTypes = ['All', 'Full-time', 'Contract'];
  const departments = ['All', 'Engineering', 'Operations', 'Research', 'Security'];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Modernized */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us build the future of technology. Explore our current openings below.
            </p>
          </div>
        </FadeIn>

        {/* Filters - Modern Styling */}
        <FadeIn delay={0.2}>
          <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search Bar */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Search Positions
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search job titles or keywords"
                    className="w-full px-5 py-3 border-0 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
                    readOnly
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label htmlFor="location" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Location
                </label>
                <select
                  id="location"
                  className="w-full px-5 py-3 border-0 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-black focus:outline-none appearance-none"
                  disabled
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Job Type Filter */}
              <div>
                <label htmlFor="jobType" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Job Type
                </label>
                <select
                  id="jobType"
                  className="w-full px-5 py-3 border-0 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-black focus:outline-none appearance-none"
                  disabled
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Department Filter */}
            <div className="mt-6">
              <label htmlFor="department" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Department
              </label>
              <select
                id="department"
                className="w-full px-5 py-3 border-0 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-black focus:outline-none appearance-none"
                disabled
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </FadeIn>

        {/* Job Listings - Modern Cards */}
        <div className="space-y-16">
          {Object.entries(jobCategories).map(([category, jobs]) => (
            <FadeIn key={category} delay={0.3}>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {jobs.map(job => (
                    <motion.div
                      key={job.id}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-5">
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">{job.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                      >
                        Apply Now
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;