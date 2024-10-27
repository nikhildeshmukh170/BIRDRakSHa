import React, { useState, useEffect } from "react";
import logo from '../../assests/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <nav
        className={`flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-max py-3 px-6 rounded-full gap-10 ${
          isScrolled ? "bg-black bg-opacity-60 shadow-lg" : "bg-black bg-opacity-900"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="BirdRaksha Logo" className="h-12" />
        </div>
  
        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-white ml-8 mr-8">
          <a href="#features" className="hover:text-green-400">
            Features
          </a>
          <a href="#testimonials" className="hover:text-green-400">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-green-400">
            FAQ
          </a>
          <a href="#blog" className="hover:text-green-400">
            Blog
          </a>
        </div>
  
        {/* Upload Button */}
        <button style={{ backgroundColor: '#C0FF73' }} className="text-black py-2 px-4 rounded-full font-bold flex items-center ml-6 shadow-md hover:bg-green-500">
          <span className="mr-2">Upload Here</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5M12 4.5v16.5"
            />
          </svg>
        </button>
      </nav>
    );
  };
  
  export default Navbar;