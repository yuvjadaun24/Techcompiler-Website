import pwg1 from "@/assets/pwg1.png"; // Assuming the new images are named accordingly
import pwg2 from "@/assets/pwg2.png";

const PerfectWeddingGuide = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Perfect Wedding Guide Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Perfect Wedding Guide was created in 1991 to provide a single source of information to local brides and grooms planning a wedding. Growing even faster than the wedding industry, Perfect Wedding Guide has evolved into the nation's most comprehensive guide to wedding and honeymoon services. Not just another magazine ad, Perfect Wedding Guide provides a complete marketing program!
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Originally, Perfectweddingguide.com was created using ASP.NET 1.0 in 2004 without using layered architecture. The site did not support any SEO and any other modern search techniques. They did not have any mobile app or mobile-friendly version of the website until 2012. This impacted the growth of the business as the reach to potential customers was limited and the platform to offer more services was not scalable.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler designed and developed a SaaS-based architecture for perfectweddingguide.com. It enabled us to develop mobile-based apps for both Android and iOS. The entire website was re-developed in ASP.NET 4.5 / MVC, and SEO/mobile-friendly features were built in.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          The search feature within the website was made using Solr, providing the capability to search vendors/services on the basis of Latitude/Longitude or zip codes.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          All pages were linked to social media platforms like Facebook, Twitter, Pinterest, and Google+.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">Client Applications:</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>ASP.NET MVC</li>
          <li>Team Foundation Server</li>
          <li>.NET 4.5</li>
          <li>HTML5</li>
          <li>XAML</li>
          <li>jQuery</li>
          <li>IIS 7</li>
          <li>Solr</li>
          <li>C#</li>
          <li>SQL Server</li>
        </ul>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
            <img src={pwg1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">2. Login with Social Media</h3>
            <img src={pwg2} alt="Login with Social Media" className="mt-4 rounded-md w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerfectWeddingGuide;
