import wp1 from "@/assets/wp-1.png"
import wp2 from "@/assets/wp-2.png"
import wp3 from "@/assets/wp-3.png"
import * as ReactIcons from "react-icons/fa";
import {
  SiHibernate,
  SiGooglecloud,
  SiApachetomcat,
  SiXml,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const WhirlpoolMerch = () => {
  const FaJava: any = ReactIcons.FaJava;
  const FaProjectDiagram: any = ReactIcons.FaProjectDiagram;
  const FaDatabase: any = ReactIcons.FaDatabase;
  const FaFlask: any = ReactIcons.FaFlask;

  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Whirlpool Merch Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          The Whirlpool Corporation is an American multinational manufacturer and marketer of home appliances, headquartered in Benton Charter Township, Michigan, United States. The Fortune 500 company has annual revenue of approximately $20 billion, 100,000 employees, and more than 70 manufacturing and technology research centers around the world.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Whirlpool’s growth led to the development of several small and complex systems at different times to manage various processes, workflows, and approval systems across departments like Finance, HR, Procurement, Admin, and Logistics. This complexity consumed manpower and led to mismanagement of information and approvals, maximizing costs due to manual errors and inefficiency.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler designed a user-friendly system that provides dynamic generation of workflows and forms. This system serves as a business process, during which documents, information, or tasks are passed from one participant to another for action (Approve/Reject), according to a set of procedural rules. Our system offers the following benefits:
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
          <span>Hibernate (JPA Framework)</span>
        </div>

        <div className="flex items-center gap-3">
          <SiApachetomcat className="text-2xl text-red-500" />
          <span>JSP, Servlets, Custom Tags, JDBC</span>
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
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Workflow Limit</h3>
            <p className="text-gray-600 max-w-xs text-base">
              Each workflow can have a <span className="font-medium text-gray-600">maximum of 4 approval phases</span>.
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
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Phase Composition</h3>
            <p className="text-gray-600 max-w-xs text-base">
              Each phase can include <span className="font-medium text-gray-600">one or more approvers</span>.
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
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Approval Mode</h3>
            <p className="text-gray-600 max-w-xs text-base">
              Approval logic per phase can be set to <span className="font-medium text-gray-600">ALL</span> or <span className="font-medium text-gray-600">ANY</span> approvers.
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

export default WhirlpoolMerch;
