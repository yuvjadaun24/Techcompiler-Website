import sdm1 from "@/assets/sdm1.png";
import sdm2 from "@/assets/sdm2.png";
import sdm3 from "@/assets/sdm3.png";
const ShoppersDrugMart = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Shoppers Drug Mart Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Shoppers Drug Mart Corporation is Canada's largest retail pharmacy chain, and has its headquarters in North York, Toronto, Ontario. It has more than 1,253 stores operating under the names Shoppers Drug Mart (SDM) in nine provinces and two territories. In addition to its retail formats, the company owns and operates several specialty services. This includes 62 Shoppers Home Health Care stores, which sell and service assisted-living devices, home-care products, and mobility and medical equipment; Shoppers Drug Mart Specialty Health Network, a provider of specialty drug distribution, pharmacy and comprehensive patient support services, and MediSystem Technologies Inc., a provider of pharmaceutical products and clinical services to long-term care facilities and retirement communities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          SDM did not have an effective demand and capacity management system in place, creating a situation where business budgets ballooned. The main factors which led to this situation were threats to revenues, rapidly rising power and cooling costs, low utilization rates, and declining service levels. Their custom old system was based on Excel sheet macros which were outdated and non-scalable.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler’s answer to this situation was a Resource Demand and Capacity Management System which provided workflow processes to identify which resources are vital to the success of the business, ensuring that these resources are available as business needs them and improving efficiency by ensuring that assets are not over-provisioned and then left lying idle. Our system was developed using JAVA/J2EE on Google Cloud.
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
        <p className="text-gray-700 leading-relaxed text-lg mb-6">Enterprise Applications:</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>J2EE frameworks: Spring, Struts, JSF</li>
          <li>J2EE Design Patterns</li>
          <li>Java Persistence API frameworks like Hibernate and TopLink</li>
          <li>JSP, JSPX, Servlets, Custom Tags, JDBC, XML/XSL, EJB, JMS, JTA, and JUnit</li>
          <li>Google App Engine</li>
          <li>Cloud MySQL</li>
          <li>JIRA Bug Tracking Tool</li>
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
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Manage Projects</h3>
            <p className="text-gray-600 max-w-xs text-base">
              Each project can be managed effectively to ensure resource allocation.
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
              Resources can be added to projects based on demand and capacity.
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
              Forecasting helps in planning resource availability effectively.
            </p>
          </div>

        </div>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
            <img src={sdm1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">2. Create Workflow</h3>
            <img src={sdm2} alt="Create Workflow" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">3. Create Dynamic Form</h3>
            <img src={sdm3} alt="Create Dynamic Form" className="mt-4 rounded-md w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppersDrugMart;
