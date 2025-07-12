import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./components/About";
import Statistics from "./components/Statistics";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CodeOfConduct from "./pages/CodeOfConduct";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RulesRegulations from "./pages/RulesRegulations";
import Countdown from "./pages/Countdown";
// import "./App.css"; // Only if you have custom styles

const navItems = [
  { name: "About", id: "about" },
  { name: "FAQ", id: "faq" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 bg-[#1A1A1A] backdrop-blur-md border-b border-white/10">
      <button 
        onClick={handleLogoClick}
        className="text-2xl font-black tracking-widest text-white hover:scale-105 transition-transform duration-300"
      >
        A.S.P.I.R.E
      </button>
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleScrollTo(item.id)}
              className="uppercase font-semibold px-4 py-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10 hover:scale-105 cursor-pointer"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Scroll to Top Button Component
function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
}

// Main Page Component for the home route
function MainPage() {
  return (
    <div className="bg-[#1A1A1A] font-sans">
      <main>
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen py-16">
          <About />
        </section>
        <section id="statistics" className="py-16">
          <Statistics />
        </section>
        <section id="faq" className="min-h-screen py-16">
          <FAQ />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-[#1A1A1A] font-sans min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/codeofconduct" element={<CodeOfConduct />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/rules" element={<RulesRegulations />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      </div>
    </Router>
  );
}