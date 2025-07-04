import React from 'react';

export default function Gallery() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Gallery</h2>
      <p className="text-lg text-gray-300 mb-8">A showcase of our club's events, projects, and memories. (Coming soon!)</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Placeholder images */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-gray-900 rounded-lg aspect-[4/3] flex items-center justify-center border border-gray-700">
            <span className="text-gray-700 text-2xl">Image {i + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
