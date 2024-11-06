import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Confetti from 'react-confetti'; // Import Confetti
import logo from '../logo.png'; // Import your logo image
import './UnderConstruction.css'; // Import custom styles

const UnderConstruction = () => {
    const [countdown, setCountdown] = useState(10); // Countdown starts from 10
    const [showHomePage, setShowHomePage] = useState(false); // State to toggle homepage visibility
    const [isCountdownStarted, setIsCountdownStarted] = useState(false); // Track if countdown started
    const navigate = useNavigate(); // Initialize useNavigate hook for redirection

    useEffect(() => {
        if (isCountdownStarted && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup on unmount
        } else if (countdown === 0) {
            // When countdown reaches 0, reveal the homepage
            setShowHomePage(true);
        }
    }, [isCountdownStarted, countdown]);

    useEffect(() => {
        if (showHomePage) {
            // Redirect to homepage after 5 seconds
            const redirectTimer = setTimeout(() => {
                navigate('/'); // Redirect to the homepage
            }, 10000);
            return () => clearTimeout(redirectTimer); // Cleanup on unmount
        }
    }, [showHomePage, navigate]);

    const handleStart = () => {
        setIsCountdownStarted(true);
    };

    if (showHomePage) {
        return (
            <div className="celebration-screen flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white">
                {/* Logo at the top */}
                <img src={logo} alt="Project Logo" className="w-40 md:w-56 mb-4" />

                {/* Confetti Effect */}
                <Confetti 
                    width={window.innerWidth} 
                    height={window.innerHeight} 
                    numberOfPieces={300} 
                    gravity={0.3}
                />
                
                <h1 className="text-6xl font-bold text-green-500 animate-bounce">🎉 Welcome to Our Website! 🎉</h1>
                <p className="text-xl mt-4">We are live! Explore our amazing features.</p>
                {/* Additional celebratory message */}
                <div className="mt-6">
                    <p>Redirecting you to the homepage in 10 seconds...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-[#121212] overflow-hidden">
            {/* Background Bubbles Animation */}
            <div className="bubbles absolute top-0 left-0 w-full h-full z-0"></div>

            <div className="text-center relative z-10 text-white p-6">
                <img src={logo} alt="Project Logo" className="w-40 md:w-56 mx-auto mb-4" />
                <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fadeIn">COMING SOON</h1>
                <p className="text-xl md:text-2xl mb-6">Something amazing is on the way...</p>

                {/* Start Button */}
                {!isCountdownStarted && (
                    <button 
                        onClick={handleStart} 
                        className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-bold hover:bg-green-600 transition mt-4"
                    >
                        Start Countdown
                    </button>
                )}

                {/* Countdown Timer */}
                {isCountdownStarted && (
                    <div className="flex justify-center mb-8 mt-4">
                        <div className="text-center mx-4">
                            <span className="text-5xl font-bold">{countdown}</span>
                            <div className="text-sm">Seconds</div>
                        </div>
                    </div>
                )}

                {/* Marquee for Coming Soon Text */}
                <div className="border-t-4 border-[#C0FF73] text-xl font-bold text-[#C0FF73] mt-4">
                    <marquee behavior="scroll" direction="left" className="marquee">
                        🚀 COMING SOON - Stay Tuned for Updates! 🚀
                    </marquee>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center mt-6">
                    <p className="mx-10 text-[#cdefa4] text-md">"Exciting things are in the works! Our team is devoted to delivering a fantastic experience. See you soon!"</p>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;
