import wp1 from "@/assets/wp-1.png"
import wp2 from "@/assets/wp-2.png"
import wp3 from "@/assets/wp-3.png"
import { FaJava, FaBug, FaDatabase, FaFlask } from "react-icons/fa";
import {
  SiHibernate,
  SiGooglecloud,
  SiApachetomcat,
  SiXml,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

const ShoppersDrugMartMerch = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Shoppers Drug Mart Merch Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Shoppers Drug Mart Corporation is Canada's largest retail pharmacy chain, and has its headquarters in North York, Toronto, Ontario. It has more than 1,253 stores operating under the names Shoppers Drug Mart (SDM) in nine provinces and two territories. In addition to its retail formats, the company owns and operates several specialty services. This includes 62 Shoppers Home Health Care stores, which sell and service assisted-living devices, home-care products, and mobility and medical equipment; Shoppers Drug Mart Specialty Health Network, a provider of specialty drug distribution, pharmacy and comprehensive patient support services, and MediSystem Technologies Inc., a provider of pharmaceutical products and clinical services to long-term care facilities and retirement communities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          SDM did not have an effective demand and capacity management system in place, creating a situation where business budgets ballooned. The main factors which led to this situation were Threat to revenues, rapidly rising power and cooling costs, low utilization rates and declining service levels. Their custom old system was based on excel sheet macros which were outdated and non-scalable.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler’s answer to this situation was a Resource Demand and Capacity Management System which provided workflow processes to identify which resources are vital to the success of business, Ensuring that these resources are available as business needs them and Improving efficiency by ensuring that assets are not over-provisioned and then left lying idle. Our system was developed using JAVA/J2EE on Google Cloud.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">Enterprise Applications:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <div className="flex items-center gap-3">
            <FaJava className="text-2xl text-orange-500" />
            <span>J2EE frameworks: Spring, Struts, JSF</span>
          </div>

          <div className="flex items-center gap-3">
            <FaProjectDiagram className="text-2xl text-blue-500" />
            <span>J2EE Design Patterns</span>
          </div>

          <div className="flex items-center gap-3">
            <SiHibernate className="text-2xl text-green-600" />
            <span>Java Persistence API frameworks: Hibernate and TopLink</span>
          </div>

          <div className="flex items-center gap-3">
            <SiApachetomcat className="text-2xl text-red-500" />
            <span>JSP, JSPX, Servlets, Custom Tags, JDBC</span>
          </div>

          <div className="flex items-center gap-3">
            <SiXml className="text-2xl text-indigo-500" />
            <span>XML, XSL</span>
          </div>

          <div className="flex items-center gap-3">
            <FaFlask className="text-2xl text-purple-600" />
            <span>JUnit</span>
          </div>

          <div className="flex items-center gap-3">
            <SiGooglecloud className="text-2xl text-blue-400" />
            <span>Google App Engine</span>
          </div>

          <div className="flex items-center gap-3">
            <FaDatabase className="text-2xl text-teal-600" />
            <span>Cloud MySQL</span>
          </div>

          <div className="flex items-center gap-3">
            <FaBug className="text-2xl text-red-400" />
            <span>JIRA Bug Tracking Tool</span>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-10 text-left">How it Works</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-400 text-white text-2xl font-bold flex items-center justify-center shadow-md">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Manage Projects</h3>
            <p className="text-gray-600 max-w-xs text-base">
              This application allows a Business Owner to manage projects effectively.
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
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Add Resources to Projects</h3>
            <p className="text-gray-600 max-w-xs text-base">
              Users can add resources to projects as needed.
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
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Forecasting Resource Demands</h3>
            <p className="text-gray-600 max-w-xs text-base">
              The application allows for forecasting resource demands effectively.
            </p>
          </div>

        </div>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
            <img src={wp1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">2. Create Workflow</h3>
            <img src={wp2} alt="Create Workflow" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">3. Create Dynamic Form</h3>
            <img src={wp3} alt="Create Dynamic Form" className="mt-4 rounded-md w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppersDrugMartMerch;
