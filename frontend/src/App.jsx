import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function Navbar() {
  const { pathname } = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];
  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 bg-black border-b border-white/10">
      <span className="text-2xl font-black tracking-widest text-white">A.S.P.I.R.E</span>
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={
                "uppercase font-semibold px-3 py-1 rounded transition " +
                (pathname === item.path
                  ? "bg-white text-black shadow"
                  : "text-white hover:bg-white hover:text-black")
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full mt-16 py-6 bg-black border-t border-white/10 text-center text-sm text-gray-400">
      <span>
        &copy; {new Date().getFullYear()} A.S.P.I.R.E BVRITH &mdash; Designed with passion.
      </span>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-1 px-4 sm:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
