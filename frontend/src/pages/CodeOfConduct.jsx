import React from 'react';

export default function CodeOfConduct() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 text-center">
          Code of Conduct
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
            <p className="leading-relaxed">
              A.S.P.I.R.E AI Club is committed to providing a harassment-free experience for everyone, 
              regardless of gender, gender identity and expression, age, sexual orientation, disability, 
              physical appearance, body size, race, ethnicity, religion, or technology choices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Expected Behavior</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be respectful and inclusive in speech and actions</li>
              <li>Exercise empathy and kindness toward other community members</li>
              <li>Give and gracefully accept constructive feedback</li>
              <li>Focus on what is best for the overall community</li>
              <li>Show courtesy and respect towards every community member</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Unacceptable Behavior</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harassment, intimidation, or discrimination in any form</li>
              <li>Verbal or written abuse, threats, or inappropriate comments</li>
              <li>Disruptive behavior during events or meetings</li>
              <li>Sharing of inappropriate content or materials</li>
              <li>Any form of unwelcome sexual attention or advances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Reporting</h2>
            <p className="leading-relaxed">
              If you experience or witness unacceptable behavior, please report it to the club organizers 
              immediately. All reports will be handled with discretion and confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Consequences</h2>
            <p className="leading-relaxed">
              Unacceptable behavior will not be tolerated. Anyone asked to stop unacceptable behavior 
              is expected to comply immediately. Violation of this code may result in temporary or 
              permanent exclusion from club activities.
            </p>
          </section>
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
