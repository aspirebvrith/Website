import { useEffect, useState } from 'react';

function Gallery() {
  const [visibleEvents, setVisibleEvents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Stagger the appearance of event blocks
    const timeouts = [];
    for (let i = 0; i < 6; i++) {
      timeouts.push(
        setTimeout(() => {
          setVisibleEvents(prev => [...prev, i]);
        }, i * 200)
      );
    }

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  const events = [
    {
      id: 1,
      title: "AI Workshop 2024",
      date: "March 15, 2024",
      description: "Introduction to Machine Learning fundamentals and hands-on coding session",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      category: "Workshop"
    },
    {
      id: 2,
      title: "Annual Hackathon",
      date: "February 22, 2024",
      description: "48-hour coding marathon focused on AI solutions for social good",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
      category: "Competition"
    },
    {
      id: 3,
      title: "Industry Panel Discussion",
      date: "January 30, 2024",
      description: "Tech leaders share insights on the future of artificial intelligence",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      category: "Panel"
    },
    {
      id: 4,
      title: "Deep Learning Bootcamp",
      date: "December 10, 2023",
      description: "Intensive 3-day program covering neural networks and deep learning",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      category: "Bootcamp"
    },
    {
      id: 5,
      title: "Research Symposium",
      date: "November 18, 2023",
      description: "Student presentations on cutting-edge AI research projects",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      category: "Research"
    },
    {
      id: 6,
      title: "Club Orientation",
      date: "September 5, 2023",
      description: "Welcome new members and introduction to club activities",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&h=300&fit=crop",
      category: "Social"
    }
  ];

  const categories = ["All", "Workshop", "Competition", "Panel", "Bootcamp", "Research", "Social"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Club Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
            Explore our journey of innovation, learning, and community building through memorable events and achievements.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black shadow-lg transform scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                visibleEvents.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: visibleEvents.includes(index) ? '0ms' : `${index * 100}ms`
              }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white text-black text-sm font-medium rounded-full">
                    {event.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    {event.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3 font-medium">
                  {event.date}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
                
                {/* View More Button */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <button className="text-white hover:text-gray-300 text-sm font-medium flex items-center space-x-2 transition-colors">
                    <span>View Details</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg">
              No events found for "{selectedCategory}" category.
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-gray-400">Numbers that tell our story</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Hackathons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
