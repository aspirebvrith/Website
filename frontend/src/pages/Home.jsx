import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-[#1A1A1A] min-h-screen flex items-center justify-center px-6 md:px-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-32 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-8 w-1 h-1 bg-white/40 rounded-full animate-ping delay-200"></div>
        <div className="absolute top-1/3 right-12 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping delay-800"></div>
      </div>

      {/* Main content with staggered animations */}
      <div className="text-center max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-tight">
            <span className="inline-block animate-fadeInUp text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-700">
              A
            </span>
            <span className="inline-block animate-fadeInUp delay-100 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text transition-all duration-700">
              .
            </span>
            <span className="inline-block animate-fadeInUp delay-200 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-700">
              S
            </span>
            <span className="inline-block animate-fadeInUp delay-300 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-700">
              .
            </span>
            <span className="inline-block animate-fadeInUp delay-400 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text transition-all duration-700">
              P
            </span>
            <span className="inline-block animate-fadeInUp delay-500 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-700">
              .
            </span>
            <span className="inline-block animate-fadeInUp delay-600 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-700">
              I
            </span>
            <span className="inline-block animate-fadeInUp delay-700 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text transition-all duration-700">
              .
            </span>
            <span className="inline-block animate-fadeInUp delay-800 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-700">
              R
            </span>
            <span className="inline-block animate-fadeInUp delay-900 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-700">
              .
            </span>
            <span className="inline-block animate-fadeInUp delay-1000 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text transition-all duration-700">
              E
            </span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-300 animate-slideInFromRight">
            AI Club BVRITH
          </h3>
        </div>
        
        {/* Animated scroll indicator */}
        <div className={`mt-16 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2 animate-pulse">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInFromRight {
          animation: slideInFromRight 1s ease-out forwards;
        }
        
        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 2s steps(60) forwards;
          animation-delay: 1.2s;
          width: 0;
        }
      `}</style>
    </div>
  );
}
