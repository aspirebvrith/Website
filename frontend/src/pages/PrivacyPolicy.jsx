import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              A.S.P.I.R.E AI Club may collect the following information when you participate in our activities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information for event registration</li>
              <li>Academic information relevant to club activities</li>
              <li>Participation records for club events and workshops</li>
              <li>Feedback and survey responses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To communicate about club events and activities</li>
              <li>To improve our programs and services</li>
              <li>To maintain membership records</li>
              <li>To provide relevant educational resources</li>
              <li>To ensure club safety and security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. 
              Information may be shared only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>With your explicit consent</li>
              <li>As required by law or legal process</li>
              <li>To protect the rights and safety of club members</li>
              <li>With university officials as required for club operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, 
              please contact the club organizers at our regular meetings or through official 
              club communication channels.
            </p>
          </section>

          <div className="bg-gray-800 p-6 rounded-xl mt-8">
            <p className="text-sm text-gray-400">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br/>
              This privacy policy may be updated periodically. Members will be notified of significant changes.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
