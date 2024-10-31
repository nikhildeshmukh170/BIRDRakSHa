import React, { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import logo from "../../assests/logo.png";
import backgroundVideo from "../../assests/backgroundVideo.mp4"; // Ensure the video file path is correct

const HeroSection = () => {
  const [rippleVisible, setRippleVisible] = useState(false);

  const handleRipple = () => {
    setRippleVisible(true);
    setTimeout(() => setRippleVisible(false), 500);
  };

  const scrollToUploadSection = () => {
    const uploadSection = document.getElementById("uploadSection");
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen text-white p-6">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      
      {/* Overlay and Content */}
      <div className="relative w-full text-center p-8 flex flex-col gap-16 z-10">
        
        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-80 h-auto" />
        </div>

        {/* Main Title */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-7xl font-bold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent">
            BirdWatch:
          </h2>
          <p className="text-6xl font-bold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent w-[75%] h-[130px]">
            Real-Time Bird Detection & Conservation Insights
          </p>
        </div>

        {/* Upload Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => {
              handleRipple();
              setTimeout(() => {
                scrollToUploadSection();
              }, 200); // 5 seconds delay
            }}
            className="relative w-[170px] h-[54px] text-white font-semibold rounded-full flex items-center justify-center 
              overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 bg-opacity-60 
              backdrop-blur-lg border-2 border-lime-400 shadow-[0px_3px_15px_rgba(255,255,255,0.4)] active:shadow-none 
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-lime-300 
              before:to-green-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 
              hover:text-black"
          >
            <FileUploadIcon className="mr-2 z-10" />
            <span className="relative z-10">Upload Here</span>

            {/* Ripple Effect */}
            <span
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-lime-500 
                transition-transform duration-500 ease-out ${
                  rippleVisible ? 'opacity-20 scale-150' : 'opacity-0 scale-0'
                }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
