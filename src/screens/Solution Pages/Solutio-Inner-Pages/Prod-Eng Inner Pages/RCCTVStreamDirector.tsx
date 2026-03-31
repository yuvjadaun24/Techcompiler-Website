const RCCTVStreamDirector = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">
        RCC TV — Radiant Stream Director
      </h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          RCC TV is a digital media company specializing in broadcast technology and content delivery solutions for
          regional and national broadcasters. With a growing portfolio of streaming channels and media clients, RCC TV
          required a sophisticated platform to manage the increasing complexity of multi-network content distribution.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          RCC TV's existing media operations relied on a patchwork of legacy broadcast tools that were difficult to
          integrate, expensive to maintain, and incapable of supporting modern streaming workflows. Content scheduling
          was largely manual, local ad insertion was error-prone, and there was no centralized way to manage delivery
          across multiple networks and regions. As their client base grew, these limitations created operational
          bottlenecks that threatened both service quality and scalability.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          TechCompiler designed and developed the Radiant Stream Director — a powerful, web-based media operations
          platform purpose-built for RCC TV's content scheduling and distribution needs. The platform gives broadcast
          teams full control over their programming lineup, enabling them to schedule, preview, and push content across
          multiple networks from a single interface.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          A core highlight of the solution is its precision local insertion engine, which allows operators to
          seamlessly inject region-specific ads, announcements, or programming segments into live or scheduled streams
          — with frame-accurate timing. Tailored content delivery profiles can be configured per network, region, or
          audience segment, ensuring the right content reaches the right viewers at the right time.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Key features delivered include: drag-and-drop content scheduling, multi-network stream management, local ad
          and content insertion, live stream monitoring dashboard, content library with metadata tagging, role-based
          access for operators and administrators, and delivery analytics and playback reporting.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>

        <div className="space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">Client Applications:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>Vue.js</li>
              <li>Vuex</li>
              <li>HTML5 Video API</li>
              <li>WebSockets</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">Backend &amp; Infrastructure:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>Python (Django)</li>
              <li>FFmpeg</li>
              <li>HLS/DASH Streaming Protocols</li>
              <li>PostgreSQL</li>
              <li>AWS MediaLive</li>
              <li>AWS MediaPackage</li>
              <li>AWS CloudFront</li>
              <li>Redis</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium mb-3">DevOps:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>GitLab CI/CD</li>
              <li>Docker</li>
              <li>NGINX</li>
              <li>AWS CloudWatch</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RCCTVStreamDirector;
