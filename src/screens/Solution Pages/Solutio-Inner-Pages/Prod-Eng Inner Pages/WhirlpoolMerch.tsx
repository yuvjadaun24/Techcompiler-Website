import wp1 from "@/assets/wp-1.png"
import wp2 from "@/assets/wp-2.png"
import wp3 from "@/assets/wp-3.png"

const WhirlpoolMerch = () => {
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

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
        <p className="text-gray-700 leading-relaxed text-lg">Enterprise Applications:</p>
        <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
          <li>J2EE frameworks like Spring, Strut, and JSF</li>
          <li>J2EE Design Patterns</li>
          <li>Java Persistence API frameworks like Hibernate</li>
          <li>JSP, JSPX, Servlets, Custom Tags, JDBC, XML/XSL, and JUnit</li>
          <li>Google Apps Engine</li>
          <li>Cloud MySQL</li>
          <li>JIRA bug tracking tool</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Works</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          This application allows a Business Owner to create their own workflow application, as long as it falls within the following constraints:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
          <li>Each workflow can have a maximum of 4 approval phases</li>
          <li>Each approval phase can contain 1 or more approvers</li>
          <li>Within each approval phase, approvals can only be set to ALL or ANY</li>
        </ul>
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
 