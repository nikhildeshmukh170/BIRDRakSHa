import React, { useState, useEffect } from "react";
import logo from "../../assests/logo.png";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToUploadSection = () => {
    const uploadSection = document.getElementById("uploadSection");
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFAQsSection = () => {
    const uploadSection = document.getElementById("FAQsSection");
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[80%] md:w-[50%] py-3 px-6 rounded-full gap-10 flex items-center justify-between md:justify-center ${
        isScrolled
          ? "bg-gray-900 bg-opacity-60 backdrop-blur-md shadow-lg"
          : "bg-gray-900 bg-opacity-900"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="BirdRaksha Logo" className="h-12" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 text-white ml-8 mr-8">
        <Link to="/" className="hover:text-green-400">
          Home
        </Link>
        <Link to="/aboutus" className="hover:text-green-400">
          About Us
        </Link>
        <a href="/home#faqs" className="hover:text-green-400">
          FAQs
        </a>
        <Link to="/contactus" className="hover:text-green-400">
          Contact us
        </Link>
      </div>

      {/* Upload Button for Desktop */}
      <button
        style={{ backgroundColor: "#C0FF73" }}
        onClick={scrollToUploadSection}
        className="hidden md:flex w-[170px] h-[46px] text-black py-2 px-4 rounded-full font-semibold items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-lime-500"
      >
        <FileUploadIcon className="mr-2" />
        Upload Here
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-900 bg-opacity-95 rounded-lg py-4 text-center space-y-4 text-white">
          <Link
            to="/"
            className="block hover:text-green-400"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="block hover:text-green-400"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <a
            href="/home#faq"
            className="block hover:text-green-400"
            onClick={toggleMobileMenu}
          >
            FAQs
          </a>
          <Link
            to="/contactus"
            className="block hover:text-green-400"
            onClick={toggleMobileMenu}
          >
            Contact us
          </Link>
          <button
            style={{ backgroundColor: "#C0FF73" }}
            onClick={() => {
              scrollToUploadSection();
              toggleMobileMenu();
            }}
            className="w-full text-black py-2 px-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-lime-500"
          >
            <FileUploadIcon className="mr-2" />
            Upload Here
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
