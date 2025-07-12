import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [targetDate, setTargetDate] = useState(new Date(Date.now() + 24 * 60 * 60 * 1000)); // Default to 24 hours from now
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [eventName, setEventName] = useState('Next AI Workshop');
  const [animatedNumbers, setAnimatedNumbers] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  // Function to calculate time left
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { days, hours, minutes, seconds };
    } else {
      setIsExpired(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  // Format number with leading zero and animate
  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  // Animate number changes
  const animateNumberChange = (oldNum, newNum, key) => {
    const oldStr = formatNumber(oldNum);
    const newStr = formatNumber(newNum);
    
    if (oldStr !== newStr) {
      // Create animation effect
      setAnimatedNumbers(prev => ({
        ...prev,
        [key]: newStr
      }));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      
      // Animate each number change
      animateNumberChange(timeLeft.days, newTimeLeft.days, 'days');
      animateNumberChange(timeLeft.hours, newTimeLeft.hours, 'hours');
      animateNumberChange(timeLeft.minutes, newTimeLeft.minutes, 'minutes');
      animateNumberChange(timeLeft.seconds, newTimeLeft.seconds, 'seconds');
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  // Initialize animated numbers
  useEffect(() => {
    setAnimatedNumbers({
      days: formatNumber(timeLeft.days),
      hours: formatNumber(timeLeft.hours),
      minutes: formatNumber(timeLeft.minutes),
      seconds: formatNumber(timeLeft.seconds)
    });
  }, []);

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setTargetDate(newDate);
    setIsExpired(false);
  };

  const TimeUnit = ({ value, label, isAnimating }) => (
    <div className="text-center">
      <div className={`relative overflow-hidden bg-white text-black rounded-2xl p-6 md:p-8 shadow-2xl transform transition-all duration-500 ${isAnimating ? 'scale-110 shadow-xl' : 'scale-100'}`}>
        <div className={`text-4xl md:text-6xl lg:text-7xl font-bold transition-all duration-300 ${isAnimating ? 'animate-pulse' : ''}`}>
          {value}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50 pointer-events-none"></div>
      </div>
      <div className="text-xl md:text-2xl font-semibold text-gray-300 mt-4 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-[#1A1A1A] min-h-screen py-10 px-6 md:px-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white opacity-3 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 text-center animate-fade-in">
          Event Countdown
        </h1>
        
        {/* Event Name Input */}
        <div className="text-center mb-8">
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="bg-gray-800 text-white text-2xl md:text-3xl font-semibold px-6 py-3 rounded-xl border-2 border-gray-600 focus:border-white focus:outline-none transition-all duration-300 text-center"
            placeholder="Enter event name"
          />
        </div>

        {/* Date/Time Picker */}
        <div className="text-center mb-12">
          <label className="text-white text-lg mb-4 block">Set Target Date & Time:</label>
          <input
            type="datetime-local"
            value={targetDate.toISOString().slice(0, 16)}
            onChange={handleDateChange}
            className="bg-gray-800 text-white px-6 py-3 rounded-xl border-2 border-gray-600 focus:border-white focus:outline-none transition-all duration-300"
          />
        </div>

        {isExpired ? (
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold text-white mb-8 animate-bounce">
              🎉
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Event Started!
            </h2>
            <p className="text-xl text-gray-300">
              {eventName} has begun!
            </p>
          </div>
        ) : (
          <>
            {/* Main Countdown Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
              <TimeUnit 
                value={animatedNumbers.days} 
                label="Days" 
                isAnimating={timeLeft.seconds % 4 === 0}
              />
              <TimeUnit 
                value={animatedNumbers.hours} 
                label="Hours" 
                isAnimating={timeLeft.seconds % 4 === 1}
              />
              <TimeUnit 
                value={animatedNumbers.minutes} 
                label="Minutes" 
                isAnimating={timeLeft.seconds % 4 === 2}
              />
              <TimeUnit 
                value={animatedNumbers.seconds} 
                label="Seconds" 
                isAnimating={true}
              />
            </div>

            {/* Event Info */}
            <div className="text-center bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {eventName}
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Starting on {targetDate.toLocaleDateString()} at {targetDate.toLocaleTimeString()}
              </p>
              <div className="text-sm text-gray-400">
                Get ready for an amazing AI learning experience!
              </div>
            </div>
          </>
        )}

        {/* Quick Set Buttons */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Set:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: '1 Hour', hours: 1 },
              { label: '1 Day', hours: 24 },
              { label: '1 Week', hours: 168 },
              { label: '1 Month', hours: 720 }
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  const newDate = new Date(Date.now() + preset.hours * 60 * 60 * 1000);
                  setTargetDate(newDate);
                  setIsExpired(false);
                }}
                className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
