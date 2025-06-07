import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to the A.S.P.I.R.E AI Club
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Advancing Students' Proficiency In Research and Experimentation in AI.
        </p>
        <div className="space-x-4">
          <a
            href="/events"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Upcoming Events
          </a>
          <a
            href="/join"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Join the Club
          </a>
        </div>
      </section>

      <section className="py-12 bg-white rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
          The A.S.P.I.R.E AI Club is dedicated to fostering a vibrant community of AI enthusiasts.
          We aim to provide resources, workshops, and collaborative projects to help members
          learn, grow, and innovate in the field of Artificial Intelligence.
        </p>
      </section>

      {/* Placeholder for more sections like Featured Projects, Latest News, etc. */}
    </Layout>
  );
}
