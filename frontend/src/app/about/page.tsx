import Layout from '@/components/Layout';

export default function AboutUsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About A.S.P.I.R.E AI Club</h1>
        <p className="text-lg text-gray-700 mb-4">
          Learn more about our mission, vision, and the team behind the A.S.P.I.R.E AI Club.
        </p>
        <p className="text-lg text-gray-700">
          Detailed information about our history, achievements, and how to get involved will be available here soon.
        </p>
        {/* Placeholder for team members, history, etc. */}
      </div>
    </Layout>
  );
}
