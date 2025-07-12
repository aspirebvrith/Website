import React from 'react';

export default function CodeOfConduct() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-12 text-center">
          Code of Conduct
        </h1>
        
        <div className="space-y-12 text-gray-300">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">A.S.P.I.R.E BVRITH</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              AI Society Promoting Innovation Research and Education
            </p>
            <p className="text-lg text-gray-400 mt-4 leading-relaxed">
              Building a respectful and inclusive community for AI innovation and learning
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <p className="leading-relaxed text-lg mb-6">
              A.S.P.I.R.E AI Club is committed to providing a harassment-free experience for everyone, 
              regardless of gender, gender identity and expression, age, sexual orientation, disability, 
              physical appearance, body size, race, ethnicity, religion, or technology choices.
            </p>
            <p className="leading-relaxed text-lg">
              We pledge to create an environment where all members can learn, collaborate, and innovate 
              without fear of discrimination or prejudice. Our community thrives on mutual respect, 
              open communication, and shared passion for artificial intelligence and technology.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Expected Behavior</h2>
            <p className="leading-relaxed text-lg mb-4">
              All community members are expected to demonstrate the following behaviors:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Be respectful and inclusive in speech and actions toward all community members</li>
              <li>Exercise empathy and kindness in all interactions and collaborations</li>
              <li>Give and gracefully accept constructive feedback for mutual growth</li>
              <li>Focus on what is best for the overall community and shared learning goals</li>
              <li>Show courtesy and respect towards every community member regardless of experience level</li>
              <li>Maintain professionalism in all club-related communications and activities</li>
              <li>Support fellow members in their learning journey and project endeavors</li>
              <li>Contribute positively to discussions and collaborative efforts</li>
              <li>Respect intellectual property and give proper attribution for work and ideas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Unacceptable Behavior</h2>
            <p className="leading-relaxed text-lg mb-4">
              The following behaviors are considered unacceptable and will not be tolerated:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Harassment, intimidation, or discrimination in any form or context</li>
              <li>Verbal or written abuse, threats, or inappropriate comments toward any member</li>
              <li>Disruptive behavior during events, meetings, or collaborative sessions</li>
              <li>Sharing of inappropriate content, materials, or offensive imagery</li>
              <li>Any form of unwelcome sexual attention, advances, or inappropriate behavior</li>
              <li>Plagiarism or misrepresentation of others' work as your own</li>
              <li>Deliberate spreading of misinformation or harmful content</li>
              <li>Trolling, insulting, or derogatory comments and personal attacks</li>
              <li>Publishing others' private information without explicit permission</li>
              <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Reporting Procedures</h2>
            <p className="leading-relaxed text-lg mb-4">
              If you experience or witness unacceptable behavior, please report it to the club organizers 
              immediately. All reports will be handled with complete discretion and confidentiality.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              You can report incidents through our official communication channels or by directly contacting 
              any founding team member. We are committed to addressing all concerns promptly and fairly.
            </p>
            <p className="leading-relaxed text-lg">
              When reporting, please provide as much detail as possible, including dates, times, locations, 
              and any witnesses. This information helps us investigate and address the situation effectively.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Enforcement and Consequences</h2>
            <p className="leading-relaxed text-lg mb-4">
              Unacceptable behavior will not be tolerated under any circumstances. Anyone asked to stop 
              unacceptable behavior is expected to comply immediately.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              Violation of this code may result in the following consequences, depending on the severity 
              and frequency of the violation:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>Verbal or written warning</li>
              <li>Temporary suspension from club activities</li>
              <li>Permanent exclusion from the club and its activities</li>
              <li>Reporting to relevant institutional authorities when appropriate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Scope</h2>
            <p className="leading-relaxed text-lg">
              This Code of Conduct applies to all club spaces, events, and activities, both online and offline. 
              It also applies when an individual is representing the club in public spaces, including social media, 
              conferences, and other professional or community events.
            </p>
          </section>
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
