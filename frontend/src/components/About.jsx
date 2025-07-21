import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger feature animations
          setTimeout(() => setVisibleFeatures(prev => [...prev, 0]), 200);
          setTimeout(() => setVisibleFeatures(prev => [...prev, 1]), 400);
          setTimeout(() => setVisibleFeatures(prev => [...prev, 2]), 600);
          setTimeout(() => setVisibleFeatures(prev => [...prev, 3]), 800);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Innovation Workshops",
      description: "Hands-on AI and ML workshops"
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Community Building",
      description: "Connect with like-minded innovators"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Hackathons",
      description: "Competitive coding and innovation"
    },
    {
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      title: "Research Projects",
      description: "Cutting-edge AI research initiatives"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-[#1A1A1A] py-20 px-6 md:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About A.S.P.I.R.E
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className={`transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                A.S.P.I.R.E is BVRITH's premier Artificial Intelligence and innovation club, dedicated to fostering curiosity, collaboration, and creativity among students.
              </p>
            </div>
            
            <div className={`transition-all duration-800 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through hands-on workshops, hackathons, and peer-driven projects, we build a vibrant community where aspiring engineers can learn, build, and inspire.
              </p>
            </div>
          </div>
          
          {/* Right content - Features */}
          <div className="space-y-4 ml-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-4 p-4 ml-8 transition-all duration-600 ${
                  visibleFeatures.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
