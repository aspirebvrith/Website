import React, { useEffect } from 'react';

export default function RulesRegulations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#1A1A1A] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-12 text-center">
          Rules & Regulations
        </h1>
        
        <div className="space-y-12 text-gray-300">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">A.S.P.I.R.E BVRITH</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              AI Society Promoting Innovation Research and Education
            </p>
            <p className="text-lg text-gray-400 mt-4 leading-relaxed">
              Guidelines for membership, participation, and community engagement
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Membership Commitment</h2>
            <p className="leading-relaxed text-lg mb-4">
              Club membership is voluntary and reflects commitment to the club's mission, initiatives, and community values.
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Members are encouraged to actively participate in club activities and its continued growth and development.</li>
              <li>Members who are unable to remain actively involved should notify the founding team in advance.</li>
              <li>Membership requires dedication to learning, collaboration, and contributing to the AI community.</li>
              <li>All members are expected to uphold the values and reputation of A.S.P.I.R.E in all interactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Communication and Responsiveness</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Members must respond to official club communications (announcements, polls, task updates) within 24 hours.</li>
              <li>Failure to respond or continued non-responsiveness will not be considered acceptable.</li>
              <li>All concerns or periods of inactivity must be communicated to the founding team in a timely manner.</li>
              <li>Members should maintain professional communication standards in all club-related interactions.</li>
              <li>Regular participation in club communication channels is expected and encouraged.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Meetings and Attendance</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Attendance at all general body meetings, team discussions, and official events is mandatory unless a valid reason is submitted in advance.</li>
              <li>Members are expected to be punctual and present throughout the duration of meetings and events.</li>
              <li>Repeated absences without notice are unacceptable and may result in membership review.</li>
              <li>Active participation and engagement during meetings is expected from all members.</li>
              <li>Members should come prepared for meetings and contribute meaningfully to discussions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Scope of Responsibilities</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>All members begin on equal footing with no designated leadership positions.</li>
              <li>Leadership roles will be assigned based on demonstrated performance, accountability, and engagement.</li>
              <li>Members are expected to take initiative and contribute to club projects and activities.</li>
              <li>Responsibility assignments will be based on merit, commitment, and proven capabilities.</li>
              <li>All members have the opportunity to grow into leadership roles through consistent contribution.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Task Ownership and Deadlines</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Members are expected to complete assigned tasks with due quality and within specified timelines.</li>
              <li>Repeated failure to meet deadlines or deliver quality work without valid reason may result in removal from projects or the club.</li>
              <li>All task assignments should be acknowledged and progress updates provided regularly.</li>
              <li>Members should communicate immediately if they anticipate difficulty meeting deadlines.</li>
              <li>Quality standards must be maintained for all deliverables and contributions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Conduct and Professionalism</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>All members must maintain respectful and professional behavior toward fellow members.</li>
              <li>Discrimination, harassment, or unprofessional conduct of any form will not be tolerated.</li>
              <li>Members are expected to contribute positively to the team environment and uphold the values of the club.</li>
              <li>Constructive feedback and criticism should be given and received with professionalism.</li>
              <li>Personal conflicts should be resolved through appropriate channels with founding team mediation if necessary.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Academic Balance and Time Management</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Members are expected to manage their time effectively, balancing academic and club responsibilities.</li>
              <li>If at any point a member is unable to handle both, they are encouraged to step back temporarily or switch to volunteering roles.</li>
              <li>Academic performance should not be compromised due to club activities.</li>
              <li>Members should communicate academic pressures to ensure appropriate support and adjustments.</li>
              <li>The club supports members in finding the right balance between academics and extracurricular involvement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Performance Monitoring and Feedback</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>The founding team will periodically assess individual contributions, quality of work, and participation.</li>
              <li>Constructive feedback will be shared regularly and is to be received and applied with professionalism.</li>
              <li>Continued lack of improvement may result in reassignment or membership revocation.</li>
              <li>Performance reviews will be conducted fairly and transparently with clear criteria.</li>
              <li>Members have the right to discuss feedback and seek clarification on expectations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Inactivity and Voluntary Withdrawal</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Members who are consistently inactive or unresponsive will be considered for removal.</li>
              <li>Members may choose to withdraw voluntarily at any time by informing the founding team.</li>
              <li>Former members may reapply when they are ready to commit, subject to review and club capacity.</li>
              <li>Withdrawal procedures should be followed to ensure proper transition of responsibilities.</li>
              <li>The club maintains an alumni network for former members who wish to stay connected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Volunteering Opportunities</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Volunteering does not guarantee leadership roles, but may lead to membership based on performance.</li>
              <li>Volunteers are expected to maintain the same standards of commitment and professionalism as members.</li>
              <li>Volunteer contributions are valued and recognized within the club community.</li>
              <li>Opportunities for volunteers to transition to full membership are available based on engagement and performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Amendments to the Rules</h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>These rules may be updated periodically to reflect the evolving needs of the club.</li>
              <li>All members will be notified of changes and expected to adhere to the updated guidelines.</li>
              <li>Significant changes will be discussed with the membership before implementation.</li>
              <li>Members may provide input and suggestions for rule modifications through proper channels.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Final Note</h2>
            <div className="bg-gray-800 p-6 rounded-xl">
              <p className="leading-relaxed text-lg font-medium mb-4">
                A.S.P.I.R.E is a collaborative space that thrives on initiative, integrity, and impact. 
                Every member plays a crucial role in shaping the club. We look forward to working together 
                as a strong, responsible, and inspired team.
              </p>
              <p className="leading-relaxed text-lg font-semibold text-white">
                Let's commit ourselves to learning, contributing, and growing together.
              </p>
            </div>
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
