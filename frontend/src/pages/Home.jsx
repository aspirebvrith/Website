import React from 'react';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">A.S.P.I.R.E BVRITH</h1>
      <p className="text-xl max-w-2xl text-gray-200 mb-8">Welcome to the official portal for the A.S.P.I.R.E AI Club at BVRITH. Discover events, explore our gallery, and learn more about our mission to inspire and empower the next generation of innovators.</p>
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        <a href="/gallery" className="px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition">Visit Gallery</a>
        <a href="/about" className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition">About Us</a>
      </div>
    </section>
  );
}
