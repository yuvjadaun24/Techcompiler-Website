import Emerge1 from "@/assets/Project-Images/Emerge-1.jpg";
import Emerge2 from "@/assets/Project-Images/Emerge-2.png";
import Emerge3 from "@/assets/Project-Images/Emerge-3.png";
import Emerge4 from "@/assets/Project-Images/Emerge-4.png";

const Emerge360 = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">
        Emerge 360 — AI-Powered Business Intelligence Platform
      </h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Emerge Growth Solutions is a forward-thinking business advisory and managed services firm helping organizations
          across industries unlock their full potential. Committed to data-driven decision-making, Emerge partners with
          businesses to deliver measurable growth through innovation, advanced analytics, and strategic execution.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Emerge Growth Solutions needed a unified platform to consolidate their suite of managed services and deliver
          real-time business insights to clients. Their existing toolset was fragmented — analytics, reporting, and
          client dashboards lived across disconnected systems, making it difficult to provide a seamless experience. The
          lack of a centralized, intelligent platform limited their ability to scale services and demonstrate ROI to
          clients effectively.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          TechCompiler architected and developed Emerge 360, a comprehensive AI-powered insights platform built to serve
          as the operational backbone for Emerge's managed services offering. The platform features intelligent
          dashboards, predictive analytics engines, and automated reporting workflows — all designed to surface
          actionable insights in real time.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          The solution integrates advanced machine learning models to identify growth opportunities, flag performance
          anomalies, and generate client-specific recommendations. A clean, role-based interface ensures each
          stakeholder — from C-suite executives to operational teams — sees the data most relevant to them.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Key features delivered include: AI-driven KPI tracking, customizable reporting dashboards, client portfolio
          management, automated alerts and recommendations, multi-tenant architecture, and secure client data isolation.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-8">Platform Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={Emerge1} alt="Emerge 360 Dashboard" className="rounded-lg shadow-lg w-full h-auto" />
          <img src={Emerge2} alt="Emerge 360 Analytics" className="rounded-lg shadow-lg w-full h-auto" />
          <img src={Emerge3} alt="Emerge 360 Insights" className="rounded-lg shadow-lg w-full h-auto" />
          <img src={Emerge4} alt="Emerge 360 Reporting" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>

        <div className="space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">Client Applications:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>React.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">Backend &amp; Infrastructure:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>Python (FastAPI)</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
              <li>AWS (EC2, S3, Lambda)</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">AI/ML:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>TensorFlow</li>
              <li>Scikit-learn</li>
              <li>OpenAI API</li>
              <li>LangChain</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">DevOps:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>GitHub Actions</li>
              <li>Terraform</li>
              <li>Datadog</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emerge360;
