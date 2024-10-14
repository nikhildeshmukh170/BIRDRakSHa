import React, { useEffect, useState } from 'react';
import logo from '../logo.png'; // Import your logo image
import './UnderConstruction.css'; // Import custom styles

const UnderConstruction = () => {
    const calculateTimeLeft = (targetDate) => {
        const now = new Date();
        const difference = targetDate - now;
    
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds };
      };
    
      const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
      useEffect(() => {
        // Check if there's a stored target date
        let targetDate = localStorage.getItem('targetDate');
    
        // If no target date is found, create one for 30 days from now
        if (!targetDate) {
          targetDate = new Date();
          targetDate.setDate(targetDate.getDate() + 30);
          localStorage.setItem('targetDate', targetDate);
        } else {
          targetDate = new Date(targetDate); // Convert string back to date object
        }
    
        const updateTimer = () => {
          setTimeLeft(calculateTimeLeft(targetDate));
        };
    
        // Initial timer update
        updateTimer();
        const timer = setInterval(updateTimer, 1000);
    
        return () => clearInterval(timer); // Cleanup on unmount
      }, []);
    
      return (
        <div className="relative flex items-center justify-center min-h-screen bg-[#121212] overflow-hidden">
          {/* Background Bubbles Animation */}
          <div className="bubbles absolute top-0 left-0 w-full h-full z-0"></div>
    
          <div className="text-center relative z-10 text-white p-6">
            <img src={logo} alt="Project Logo" className="w-40 md:w-56 mx-auto mb-4" />
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fadeIn">COMING SOON</h1>
            <p className="text-xl md:text-2xl mb-6">Something amazing is on the way...</p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center mb-8">
              <div className="text-center mx-4">
                <span className="text-5xl font-bold">{timeLeft.days}</span>
                <div className="text-sm">Days</div>
              </div>
              <div className="text-center mx-4">
                <span className="text-5xl font-bold">{timeLeft.hours}</span>
                <div className="text-sm">Hours</div>
              </div>
              <div className="text-center mx-4">
                <span className="text-5xl font-bold">{timeLeft.minutes}</span>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="text-center mx-4">
                <span className="text-5xl font-bold">{timeLeft.seconds}</span>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
    
            {/* Marquee for Coming Soon Text */}
            <div className="border-t-4 border-[#C0FF73] text-xl font-bold text-[#C0FF73] mt-4">
              <marquee behavior="scroll" direction="left" className="marquee">
                🚀 COMING SOON - Stay Tuned for Updates! 🚀
              </marquee>
            </div>
    
            {/* Social Media Links */}
            <div className="flex justify-center mt-6">
                <p className="mx-10 text-[#cdefa4] text-md">"Exciting things are in the works! Our team is devoted to delivering a fantastic experience. See you soon!"</p>
              {/* <a href="https://twitter.com" className="mx-4 text-[#C0FF73] text-2xl hover:underline">Twitter</a>
              <a href="https://instagram.com" className="mx-4 text-[#C0FF73] text-2xl hover:underline">Instagram</a>
              <a href="https://facebook.com" className="mx-4 text-[#C0FF73] text-2xl hover:underline">Facebook</a> */}
            </div>
          </div>
        </div>
      );
    };
    

export default UnderConstruction;
