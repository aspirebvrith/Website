import React from 'react';

export default function About() {
  return (
    <section className="bg-[#1A1A1A] py-20 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            About A.S.P.I.R.E
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                A.S.P.I.R.E is BVRITH's premier Artificial Intelligence and innovation club, dedicated to fostering curiosity, collaboration, and creativity among students.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through hands-on workshops, hackathons, and peer-driven projects, we build a vibrant community where aspiring engineers can learn, build, and inspire.
              </p>
            </div>
          </div>
          
          {/* Right content - Features */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Innovation Workshops</h4>
                <p className="text-gray-400">Hands-on AI and ML workshops</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Community Building</h4>
                <p className="text-gray-400">Connect with like-minded innovators</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Hackathons</h4>
                <p className="text-gray-400">Competitive coding and innovation</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Research Projects</h4>
                <p className="text-gray-400">Cutting-edge AI research initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
