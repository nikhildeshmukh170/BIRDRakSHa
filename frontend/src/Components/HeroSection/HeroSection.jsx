import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import logo from "../../assests/logo.png";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white p-6">
      <div className="w-full text-center p-8 flex flex-col gap-16">
        {/* Logo Section */}
        <div className="flex justify-center items-center ">
          <img src={logo} alt="" className="w-80 h-auto" />
        </div>

        {/* Main Title */}
        {/* <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-lime-400 to-green-600 text-transparent bg-clip-text">
            BirdWatch:
        </h2> */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-7xl font-bold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent">
            BirdWatch:
          </h2>
          <p className="text-6xl font-bold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent w-[75%] h-[130px]">
            Real-Time Bird Detection & Conservation Insights
          </p>
        </div>

        {/* Subtitle */}
        {/* <p className="text-lg font-semibold mb-8 text-lime-400">
          Real-Time Bird Detection & Conservation Insights
        </p> */}

        {/* Upload Button */}
        <div className="flex flex-col items-center justify-center">
            <button style={{ backgroundColor: '#C0FF73' }} className="w-[200px] h-[60px] text-black py-2 px-4 rounded-full font-semibold flex items-center justify-center hover:bg-lime-500 transition-colors duration-300">
            <FileUploadIcon className="mr-2" />
            Upload Here
            </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
