import jll1 from "@/assets/jll1.png"; // Assuming the new images are named accordingly
import jll2 from "@/assets/jll2.png";
import jll3 from "@/assets/jll3.png";

const JLLPresentation = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">JLL Presentation Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          JLL (NYSE: JLL) is a professional services and investment management firm offering specialized real estate services to clients seeking increased value by owning, occupying, and investing in real estate. A Fortune 500 company with annual fee revenue of $4.7 billion and gross revenue of $5.4 billion, JLL has more than 230 corporate offices, operates in 80 countries, and has a global workforce of approximately 58,000. On behalf of its clients, the firm provides management and real estate outsourcing services for a property portfolio of 3.4 billion square feet, or 316 million square meters, and completed $118 billion in sales, acquisitions, and finance transactions in 2014. JLL is the brand name, and a registered trademark, of Jones Lang LaSalle Incorporated.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          To create PowerPoint presentations, users of JLL used MS PowerPoint installed on desktops/laptops. Sharing of presentations or slides required a copy of slides or presentations to be sent from machine to machine. Using standard templates required users to download them from various sources, and working together on a single presentation was impossible. Moreover, as presentations were not available at any single place, re-use was not possible.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler designed and developed a web-based environment to share PowerPoint slides, presentations, and templates where users could work concurrently on a single or multiple presentations. Many different categories and sub-categories were provided to filter the templates and available presentations created by others as per need. Users were given easy and time-saving options like selecting pre-made slides, front covers, dividers, headers, content for body, and footers to create their own PowerPoint presentations quickly.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
          <li>Create workflows with multiple approvers and phases</li>
          <li>Create runtime dynamic forms and attach them to workflows</li>
          <li>Collect specific data from end users for each workflow</li>
          <li>Each approval level has options to Approve, Reject, or request more information</li>
          <li>Ability to audit and trace workflows</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">Client Applications:</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>ASP.NET MVC</li>
          <li>Team Foundation Server</li>
          <li>.NET 4.5</li>
          <li>jQuery</li>
          <li>IIS 7</li>
          <li>C#</li>
          <li>Microsoft Office Components</li>
          <li>MySQL</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-10 text-left">How it Works</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-400 text-white text-2xl font-bold flex items-center justify-center shadow-md">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Manage Presentations</h3>
            <p className="text-gray-600 max-w-xs text-base">
              Users can manage presentations effectively in a collaborative environment.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block w-10 h-10">
            <svg className="w-full h-full text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-400 text-white text-2xl font-bold flex items-center justify-center shadow-md">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Select Templates</h3>
            <p className="text-gray-600 max-w-xs text-base">
              Users can select from a variety of templates to create presentations quickly.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block w-10 h-10">
            <svg className="w-full h-full text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-400 text-white text-2xl font-bold flex items-center justify-center shadow-md">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Collaborate in Real-Time</h3>
            <p className="text-gray-600 max-w-xs text-base">
              Users can work together on presentations in real-time.
            </p>
          </div>

        </div>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">1. Application Admin Dashboard</h3>
            <img src={jll1} alt="Application Admin Dashboard" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">2. Create Presentation</h3>
            <img src={jll2} alt="Create Presentation" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">3. Select Template</h3>
            <img src={jll3} alt="Select Template" className="mt-4 rounded-md w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JLLPresentation;
