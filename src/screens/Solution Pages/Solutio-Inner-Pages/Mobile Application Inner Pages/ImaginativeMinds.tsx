import imag1 from "@/assets/imag1.png"; // Assuming the new images are named accordingly
import imag2 from "@/assets/imag2.png";
import imag3 from "@/assets/imag3.png";
import CaseStudyLayout from '@/components/solutions/CaseStudyLayout';

const ImaginativeMinds = () => {
  return (
    <CaseStudyLayout parentCategory="Mobile Application">
    <div className="container mx-auto p-8 rounded-lg">
      <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Imaginative Minds Application Migration</h1>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Imaginative Minds Ltd is a professional services publisher for education, specializing in products that raise standards of school leadership and teaching and learning using critical and creative thinking. They provide online expertise in the form of magazines, articles, web information, books, training, and assessment tools. Imaginative Minds' customers are schools and teachers from around the world. It is a spin-out company from Questions Publishing Ltd, and is led by Howard Sharron, who founded both Questions Publishing and Imaginative Minds.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Imaginative Minds’ core mission is to provide support to teachers and leaders wishing to develop innovative strategies that will instill high-level critical thinking abilities and creative and technical skills in children.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Imaginative Minds wanted an iPad and web-based application that could provide a clean, simple interface with touch-screen interaction to help schools in assessing, mentoring, and improving teaching standards and learning within British schools.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          TechCompiler designed “i-WIGT,” which is an iPad and web-based application provided to any authorized observer for assessing a teacher. It helped schools create lesson observations quickly and effortlessly on iPad, identify core areas evident in effective teaching and learning, and refine observation by year group (from EY to Year 11), key stage, subject, and class ability level.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our system was flexible enough to provide the following benefits:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
          <li>Create Real-Time observations</li>
          <li>Exceeding national criteria</li>
          <li>Instant Feedback</li>
          <li>Continual Professional Development</li>
          <li>Standards and learning within your school</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-lg">
          i-WIGT is based on national and international research data of best practices in the teaching and learning domain. The framework has been developed in schools over decades. The highly successful print version is currently being used in 1000+ schools in the UK.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>Enterprise Applications</li>
          <li>Xcode, Objective-C</li>
          <li>J2EE frameworks like Spring, Strut, and JSF</li>
          <li>J2EE Design Patterns</li>
          <li>Java Persistence API frameworks like Hibernate and TopLink</li>
          <li>MySQL, SQLite</li>
          <li>JIRA bug tracking tool</li>
        </ul>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Create lesson observations quickly and effortlessly on your iPad. Identify core areas evident in effective teaching and learning. The i-WIGT matrix describes what teaching looks like against national criteria drawn from Ofsted (Office for Standards in Education, Children's Services and Skills) and the Teachers Standards. It is in two parts:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
          <li>Learning – what pupils will be doing?</li>
          <li>Teaching - what teachers will be doing?</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Simply use your iPad’s touch screen to select each statement as ‘Met’, ‘Not Met’, or ‘Exceeded’. It collates observation data to produce a performance discussion report. This neatly summarizes where a teacher has excelled and any areas where they need to develop.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-light text-gray-800 mb-6">How it Looks</h2>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
            <img src={imag1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">2. Create Observation</h3>
            <img src={imag2} alt="Create Observation" className="mt-4 rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
            <h3 className="font-light text-lg text-gray-800">3. i-WIGT Matrix</h3>
            <img src={imag3} alt="i-WIGT Matrix" className="mt-4 rounded-md w-full" />
          </div>
        </div>
      </section>
    </div>
    </CaseStudyLayout>
  );
};

export default ImaginativeMinds;
