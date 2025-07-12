import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#1A1A1A] min-h-screen flex items-center justify-center px-6 md:px-20">
      {/* Main content with enhanced gradient box */}
      <div className="text-center max-w-7xl mx-auto fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 rounded-3xl p-8 md:p-12 lg:p-20 shadow-2xl border border-gray-600 relative overflow-hidden">
          {/* Gradient overlay for extra visual depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/10 to-pink-900/20 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              A.S.P.I.R.E
            </h1>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              AI Club BVRITH
            </h3>
            
            {/* Description */}
            <div className="space-y-6 max-w-5xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium">
                Welcome to the official portal for the A.S.P.I.R.E AI Club at BVRITH.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed">
                Discover events, explore our gallery, and learn more about our mission to inspire and empower the next generation of innovators.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-slide-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
