import React, { useState, useEffect } from "react";
import logo from '../../assests/logo.png';
import FileUploadIcon from '@mui/icons-material/FileUpload';

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
          isScrolled ? "bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg" : "bg-gray-900 bg-opacity-900"
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
        <button style={{ backgroundColor: '#C0FF73' }} className="w-[160px] h-[46px] text-black py-2 px-4 rounded-full font-semibold flex items-center justify-center hover:bg-lime-500 transition-colors duration-300">
            <FileUploadIcon className="mr-2" />
            Upload Here
            </button>
      </nav>
    );
  };
  
  export default Navbar;