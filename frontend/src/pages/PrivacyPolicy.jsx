import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#1A1A1A] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-12 text-center">
          Privacy Policy
        </h1>
        
        <div className="space-y-12 text-gray-300">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">A.S.P.I.R.E BVRITH</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              AI Society Promoting Innovation Research and Education
            </p>
            <p className="text-lg text-gray-400 mt-4 leading-relaxed">
              Protecting your privacy and data in our AI learning community
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="leading-relaxed text-lg mb-4">
              A.S.P.I.R.E AI Club may collect the following information when you participate in our activities:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Name and contact information (email address, phone number) for event registration</li>
              <li>Academic information relevant to club activities and project collaboration</li>
              <li>Participation records for club events, workshops, and meetings</li>
              <li>Feedback and survey responses to improve our programs</li>
              <li>Project contributions and research interests for matching with team members</li>
              <li>Communication preferences for club announcements and updates</li>
              <li>Attendance records for mandatory meetings and events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="leading-relaxed text-lg mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>To communicate about club events, activities, and important announcements</li>
              <li>To improve our programs and services based on member feedback</li>
              <li>To maintain accurate membership records and track participation</li>
              <li>To provide relevant educational resources and opportunities</li>
              <li>To ensure club safety and security during events and activities</li>
              <li>To facilitate collaboration and networking among members</li>
              <li>To match members with similar interests for project teams</li>
              <li>To comply with institutional policies and requirements</li>
              <li>To recognize and celebrate member achievements and contributions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Information Sharing and Disclosure</h2>
            <p className="leading-relaxed text-lg mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              Information may be shared only in the following circumstances:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>With your explicit written consent for specific purposes</li>
              <li>As required by law, legal process, or court orders</li>
              <li>To protect the rights, safety, and security of club members</li>
              <li>With university officials as required for club operations and compliance</li>
              <li>With event partners and sponsors for collaborative activities (with consent)</li>
              <li>In aggregated, anonymized form for research and statistical purposes</li>
              <li>With service providers who assist in club operations under strict confidentiality agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Data Security and Protection</h2>
            <p className="leading-relaxed text-lg mb-4">
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              These measures include:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>Secure storage of physical and digital records</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Regular review and update of security practices</li>
              <li>Training for team members on data protection best practices</li>
            </ul>
            <p className="leading-relaxed text-lg mt-4">
              However, no method of transmission over the internet or method of electronic storage is 100% secure. 
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Your Rights and Choices</h2>
            <p className="leading-relaxed text-lg mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Request access to your personal information we maintain</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your information (subject to legal and institutional requirements)</li>
              <li>Opt-out of non-essential communications at any time</li>
              <li>Withdraw consent for data processing where applicable</li>
              <li>Request a copy of your data in a portable format</li>
              <li>File a complaint about our data handling practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>
            <p className="leading-relaxed text-lg">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              for which it was collected, including any legal, accounting, or reporting requirements. 
              When information is no longer needed, we securely dispose of it in accordance with our 
              data retention policies and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <p className="leading-relaxed text-lg mb-4">
              If you have questions about this Privacy Policy, wish to exercise your rights, or have 
              concerns about our data practices, please contact the A.S.P.I.R.E founding team through 
              our official communication channels.
            </p>
            <p className="leading-relaxed text-lg">
              We are committed to addressing your concerns promptly and ensuring transparency in our 
              data handling practices. You can reach us at our regular meetings or through the club's 
              official email and social media channels.
            </p>
          </section>

          <div className="bg-gray-800 p-6 rounded-xl mt-12">
            <p className="text-sm text-gray-400">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br/>
              This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. 
              Members will be notified of significant changes through our official communication channels.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => window.history.back()}
            className="px-10 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
