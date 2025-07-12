import React from 'react';

export default function Statistics() {
  const stats = [
    { number: '250+', label: 'Members' },
    { number: '3+', label: 'Events' },
    { number: '15+', label: 'Team' },
    { number: '5+', label: 'Projects' },
  ];

  return (
    <section className="bg-[#1A1A1A] py-8 text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-1">{stat.number}</h2>
            <p className="text-[#A3A3A3] text-base md:text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
