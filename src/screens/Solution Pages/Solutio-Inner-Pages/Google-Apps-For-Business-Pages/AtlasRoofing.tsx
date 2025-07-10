import atlas1 from "@/assets/atlas1.png"; // Assuming the new images are named accordingly
import atlas2 from "@/assets/atlas2.png";
import atlas3 from "@/assets/atlas3.png";

const AtlasRoofing = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Atlas Roofing Application Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          The Atlas Roofing Corporation is an innovative, customer-oriented manufacturer of residential and commercial building materials. Atlas has grown from a single roofing shingle manufacturing facility in 1982 into an industry leader with 19 plants in North America and worldwide product distribution.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Atlas Roofing Corporation’s growth led to the development of several small and complex systems at different times to manage different processes. Their legacy Stock Audit Report Management (SAR) System was one such system which consumed manpower and led to mismanagement of information and approvals, maximizing costs due to manual errors and inefficiency.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler designed a user-friendly system that provided the generation of Stock Audit Report Management System forms. This system is designed to serve as a business process, in whole or part, during which documents, information, or tasks are passed from Sales Representative to Regional Manager, Pricing Admin, Account Executive, and Vice President for action (Approve/Reject), according to a set of procedural rules. Our system is flexible enough to provide the following benefits:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
          <li>Create SAR with multiple Approvers region-wise.</li>
          <li>Each SAR will contain multiple Products with their Price and quantity.</li>
          <li>Regional Manager, Pricing Admin, and Vice President can make changes in SAR and Approve/Reject.</li>
          <li>Ability to audit Report.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>Enterprise Applications</li>
          <li>J2EE frameworks like Spring, Strut, and JSF</li>
          <li>J2EE Design Patterns</li>
          <li>Java Persistence API frameworks like Hibernate and TopLink</li>
          <li>JSP, JSPX, Servlets, Custom Tags, JDBC, XML/XSL, EJB, JMS, JTA, and JUnit</li>
          <li>Google Apps Engine</li>
          <li>GSQL and database design</li>
          <li>JIRA bug tracking tool</li>
        </ul>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Atlas Roofing SAR is a Stock Audit Report Management System. In this system, the SAR is created, rejected, and approved by users based on their authorities, and notification emails are sent to all related users. The Admin has the ability to add and remove these rights from individuals and adjust roles and percentages. Each user has the ability to save SAR bookmarks that can be used to quickly create new SARs at a later time.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
            <img src={atlas1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">2. SAR List</h3>
            <img src={atlas2} alt="SAR List" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">3. SAR Form</h3>
            <img src={atlas3} alt="SAR Form" className="mt-4 rounded-md w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AtlasRoofing;
