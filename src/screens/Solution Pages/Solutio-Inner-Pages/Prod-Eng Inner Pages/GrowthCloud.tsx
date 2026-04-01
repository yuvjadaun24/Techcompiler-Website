import GrowthCloud1 from "@/assets/Project-Images/GrowthCloud-1.png";
import GrowthCloud2 from "@/assets/Project-Images/GrowthCloud-2.png";
import GrowthCloud3 from "@/assets/Project-Images/GrowthCloud-3.png";
import GrowthCloud4 from "@/assets/Project-Images/GrowthCloud-4.png";
import GrowthCloud5 from "@/assets/Project-Images/GrowthCloud-5.png";

const GrowthCloud = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">
        GrowthCloud — AI-Powered Growth Operations Suite
      </h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          GrowthCloud is a SaaS startup delivering cloud-based productivity and growth management tools to small and
          mid-sized businesses. Their platform is designed to help agile teams plan smarter, collaborate faster, and
          scale operations without the overhead of enterprise-grade complexity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          GrowthCloud approached TechCompiler with an early-stage product vision but no technical foundation. They
          needed a scalable, multi-feature SaaS platform built from the ground up — one that could support sprint
          management, AI-assisted task prioritization, team collaboration, and cloud storage under a single unified
          interface. Time-to-market was critical, and the architecture had to be built for rapid feature iteration
          post-launch.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          TechCompiler led the end-to-end design and development of the GrowthCloud platform, delivering a fully
          integrated SaaS solution with a modular architecture that supports independent scaling of each product
          feature.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          The sprint management module enables teams to plan, track, and retrospect on development cycles with
          drag-and-drop boards, burndown charts, and AI-generated workload suggestions. The cloud storage layer was
          built with fine-grained permission controls and seamless file versioning. An embedded AI assistant helps
          teams surface blockers, auto-assign tasks based on capacity, and generate progress summaries.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Key features delivered include: Kanban and sprint boards, AI task recommendations, team capacity planning,
          integrated cloud file storage, real-time collaboration, third-party app integrations (Slack, GitHub, Google
          Workspace), and usage-based billing management.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-8">Platform Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img src={GrowthCloud1} alt="GrowthCloud Dashboard" className="rounded-lg shadow-lg w-full h-auto" />
          <img src={GrowthCloud2} alt="GrowthCloud Sprint Management" className="rounded-lg shadow-lg w-full h-auto" />
          <img src={GrowthCloud3} alt="GrowthCloud Collaboration" className="rounded-lg shadow-lg w-full h-auto" />
          <img src={GrowthCloud4} alt="GrowthCloud Tasks" className="rounded-lg shadow-lg w-full h-auto" />
          <img src={GrowthCloud5} alt="GrowthCloud Analytics" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>

        <div className="space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">Client Applications:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>Next.js</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Zustand</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">Backend &amp; Infrastructure:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>Node.js (NestJS)</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
              <li>AWS (S3, RDS, ECS)</li>
              <li>Stripe API</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">AI/ML:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>OpenAI API</li>
              <li>LangChain</li>
              <li>Custom NLP Pipelines</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">DevOps:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>GitHub Actions</li>
              <li>AWS CodePipeline</li>
              <li>Sentry</li>
              <li>CloudWatch</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrowthCloud;
