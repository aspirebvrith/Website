import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const teamImages = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/46.jpg',
    'https://randomuser.me/api/portraits/women/47.jpg',
    'https://randomuser.me/api/portraits/men/48.jpg',
    'https://randomuser.me/api/portraits/women/49.jpg',
    'https://randomuser.me/api/portraits/men/50.jpg',
    'https://randomuser.me/api/portraits/women/51.jpg',
    'https://randomuser.me/api/portraits/men/52.jpg',
    'https://randomuser.me/api/portraits/women/53.jpg',
    'https://randomuser.me/api/portraits/men/54.jpg',
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-white/10 py-12 mt-24 text-sm">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-semibold">The Organizing Team</h3>
        <p className="text-[#C5C5C5] mt-1">
          & special thanks to all staff <span className="text-pink-500">❤️</span>
        </p>
      </div>

      <div className="overflow-hidden group relative h-20">
        <div className="absolute flex gap-6 animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
          {[...teamImages, ...teamImages].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="team member"
              className="w-16 h-16 rounded-full object-cover"
            />
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#C5C5C5] px-4 text-sm">
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-semibold text-white">DeerHacks © 2025</span>
          <span>2024</span>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
          <a href="#" className="hover:text-white">Code of Conduct</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
        <div className="flex items-center gap-1">
          <span>✨ by</span>
          <a href="#" className="text-white hover:underline">Kosuri Lakshmi Indu</a>
        </div>
      </div>
    </footer>
  );
}
