import yepme1 from "@/assets/yepme1.png"; // Assuming the new images are named accordingly
import yepme2 from "@/assets/yepme2.png";

const YepmeEcommerce = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Yepme E-commerce Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Yepme is an online shopping company headquartered in Gurgaon, Haryana, India. It was established in April 2011. The company specializes in the online retailing of men’s and women's garments and accessories. In August 2011, the company positioned itself as a fully-fledged private label fashion brand.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Originally, yepme.com was created using ASP.NET 2.0 in 2010 without using layered architecture. The site did not support any SEO and any other modern search techniques. They did not have a mobile-friendly version of the website until 2010. This impacted the growth of the business as the reach to potential customers was limited and the platform to offer more services was not scalable.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Tech Compiler designed and developed a SaaS-based architecture for yepme.com. It enabled us to develop mobile-based apps for both Android and iOS. The entire website was re-developed in ASP.NET 4.0 / MVC, and SEO/mobile-friendly features were built in.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler has created an e-commerce website for Yepme which provides all the e-commerce functionality: Search Box, Featured Products, Related Products, Newsletter Subscription, Product Zoom, Categories, Payment Gateway, Return Policy, etc.
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
          <li>.NET 4.0</li>
          <li>HTML5</li>
          <li>XAML</li>
          <li>jQuery</li>
          <li>IIS 7</li>
          <li>C#</li>
          <li>SQL Server</li>
        </ul>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
            <img src={yepme1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">2. Items</h3>
            <img src={yepme2} alt="Items" className="mt-4 rounded-md w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default YepmeEcommerce;
