import React, { useState, useEffect, useRef } from 'react';

// Confetti component
const Confetti = () => {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 animate-pulse"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .confetti-piece {
          animation: confetti-fall 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const intervalRef = useRef(null);

  // Start countdown
  const startCountdown = () => {
    setTimeLeft(inputTime);
    setIsRunning(true);
  };

  // Stop countdown
  const stopCountdown = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Reset countdown
  const resetCountdown = () => {
    setIsRunning(false);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setInputTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setShowConfetti(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          const totalSeconds = 
            prevTime.days * 86400 + 
            prevTime.hours * 3600 + 
            prevTime.minutes * 60 + 
            prevTime.seconds;

          if (totalSeconds <= 1) {
            setIsRunning(false);
            setShowConfetti(true);
            // Hide confetti after 5 seconds
            setTimeout(() => setShowConfetti(false), 5000);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }

          const newTotal = totalSeconds - 1;
          return {
            days: Math.floor(newTotal / 86400),
            hours: Math.floor((newTotal % 86400) / 3600),
            minutes: Math.floor((newTotal % 3600) / 60),
            seconds: newTotal % 60
          };
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  // Format number with leading zero and fixed width
  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  const handleInputChange = (unit, value) => {
    let numValue = Math.max(0, parseInt(value) || 0);
    
    // Ensure proper limits and format
    if (unit === 'hours' && numValue > 23) numValue = 23;
    if ((unit === 'minutes' || unit === 'seconds') && numValue > 59) numValue = 59;
    if (unit === 'days' && numValue > 99) numValue = 99; // Limit days to 99 for display
    
    setInputTime(prev => ({
      ...prev,
      [unit]: numValue
    }));
  };

  const TimeDisplay = ({ value, label, isInput, unit, max }) => (
    <div className="text-center flex flex-col items-center">
      <div className="bg-white text-black rounded-xl shadow-lg w-[140px] md:w-[180px] lg:w-[220px] h-[120px] md:h-[160px] lg:h-[200px] flex items-center justify-center">
        {isInput ? (
          <input
            type="number"
            min="0"
            max={max}
            value={value}
            onChange={(e) => handleInputChange(unit, e.target.value)}
            className="w-full h-full text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-mono bg-transparent text-black text-center border-none outline-none"
            disabled={isRunning}
          />
        ) : (
          <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-mono transition-all duration-500">
            {formatNumber(value)}
          </div>
        )}
      </div>
      <div className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest mt-3">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-[#1A1A1A] min-h-screen py-20 px-6 md:px-20 relative">
      {showConfetti && <Confetti />}
      
      <div className="max-w-6xl mx-auto">
        
        {/* Main Title */}
        <div className="text-center mb-16 mt-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Countdown Timer
          </h1>
          <p className="text-xl text-gray-400">
            Set your time and start the countdown
          </p>
        </div>

        {/* Time Display - Consistent UI */}
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-16">
          <TimeDisplay 
            value={isRunning ? timeLeft.days : inputTime.days} 
            label="DAYS" 
            isInput={!isRunning}
            unit="days"
            max={99}
          />
          <div className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-500 pb-8">:</div>
          <TimeDisplay 
            value={isRunning ? timeLeft.hours : inputTime.hours} 
            label="HOURS" 
            isInput={!isRunning}
            unit="hours"
            max={23}
          />
          <div className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-500 pb-8">:</div>
          <TimeDisplay 
            value={isRunning ? timeLeft.minutes : inputTime.minutes} 
            label="MIN" 
            isInput={!isRunning}
            unit="minutes"
            max={59}
          />
          <div className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-500 pb-8">:</div>
          <TimeDisplay 
            value={isRunning ? timeLeft.seconds : inputTime.seconds} 
            label="SEC" 
            isInput={!isRunning}
            unit="seconds"
            max={59}
          />
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {!isRunning ? (
            <button
              onClick={startCountdown}
              className="px-8 py-4 bg-white text-black font-bold text-xl rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              START
            </button>
          ) : (
            <button
              onClick={stopCountdown}
              className="px-8 py-4 bg-red-600 text-white font-bold text-xl rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              STOP
            </button>
          )}
          
          <button
            onClick={resetCountdown}
            className="px-8 py-4 bg-gray-600 text-white font-bold text-xl rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
