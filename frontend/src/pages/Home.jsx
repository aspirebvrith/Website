import React from "react";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen flex items-center justify-center px-6 md:px-20">
      {/* Main content */}
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-8 leading-tight">
          A.S.P.I.R.E
        </h1>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-8">
          AI Club BVRITH
        </h3>
        
        {/* Description */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Welcome to the official portal for the A.S.P.I.R.E AI Club at BVRITH.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Discover events, explore our gallery, and learn more about our mission to inspire and empower the next generation of innovators.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
            >
              Learn More About Us
            </button>
            <button 
              onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              Have Questions?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
