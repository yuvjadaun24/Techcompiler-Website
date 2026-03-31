import onix1 from "@/assets/oam1.png";
import onix2 from "@/assets/oam2.png";
import onix3 from "@/assets/oam3.png";
import CaseStudyLayout from '@/components/solutions/CaseStudyLayout';

const Onix = () => {
  return (
    <CaseStudyLayout parentCategory="Google Apps for Business">
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Onix Application Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Onix, located in Lakewood, Ohio, provides industry-leading solutions in information technology. Onix specializes in technologies and services that help optimize IT infrastructure for secure, manageable, and reliable data. Since 1992, Onix Networking has been a leading provider of world-class IT solutions and services to a broad range of corporate and government customers worldwide.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Onix wanted to build a GWT-based application to help Google administrators and users of a domain to create, update, and delete users, as well as assign them to organizations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler built a GWT-based Java application deployed at Google App Engine using the following APIs:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
          <li>Admin SDK</li>
          <li>Calendar API v3</li>
          <li>Drive API v2</li>
          <li>Gmail API v1</li>
          <li>Google OAuth2 API</li>
          <li>Contacts API</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          This app also allows admins to assign a user with administrative privileges to read calendars, Google Sites, Google Drive, groups, and shared contacts across the domain. Authentication and authorization were implemented using both OAuth 2.0 and impersonation.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>Java/J2EE</li>
          <li>Google Data Store</li>
          <li>Various Google APIs and SDKs</li>
          <li>Google App Engine (GAE)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Users share branded content (Facebook shares and Tweets) to unlock the prizes. A different cumulative number of shares/re-tweets are required for each prize. When the number of shares needed to unlock a prize is reached, the list stops, and whoever is “cleared for boarding” wins the corresponding item.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
            <img src={onix1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">2. Create User</h3>
            <img src={onix2} alt="Create User" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">3. Manage User Articles</h3>
            <img src={onix3} alt="Manage User Articles" className="mt-4 rounded-md w-full" />
          </div>
        </div>
      </section>
    </div>
    </CaseStudyLayout>
  );
};

export default Onix;
