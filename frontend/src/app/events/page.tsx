import Layout from '@/components/Layout';

export default function EventsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Upcoming Events</h1>
        <p className="text-lg text-gray-700">
          Stay tuned for exciting workshops, talks, and competitions! Full event details will be posted here soon.
        </p>
        {/* Placeholder for event listings */}
      </div>
    </Layout>
  );
}
