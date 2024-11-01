import React from "react";
import { FaImage, FaSearch, FaInfoCircle, FaHeart } from "react-icons/fa";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-gray-850 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-300">How It Works</h2>
        <p className="text-gray-400 mb-12">
          Follow these 4 simple steps to help BirdRaksha protect bird species
          and gain valuable insights.
        </p>

        <div className="relative flex justify-between items-center flex-col md:flex-row md:space-y-0 space-x-0 lg:space-x-12 gap-6">
          {/* Curved Line */}
          <div className="hidden md:flex absolute top-8 left-6 -right-8 h-2/3 justify-between items-center transform -translate-y-1/2">
            <div className="w-1/4 h-16 border-t-2 border-b-2 border-blue-300 border-b-transparent rounded-t-full"></div>
            <div className="w-1/4 h-16 border-t-2 border-b-2 border-blue-300 border-b-transparent rounded-t-full rotate-180 mt-72"></div>
            <div className="w-1/4 h-16 border-t-2 border-b-2 border-blue-300 border-b-transparent rounded-t-full"></div>
            <div className="w-1/4 h-16 border-t-2 border-b-2 border-blue-300 border-b-transparent rounded-t-full rotate-180 mt-72"></div>
          </div>

          {/* Step 1 */}
          <div className="flex-1 text-center justify-items-center relative z-10 transition duration-500 transform hover:scale-105 animate-fade-in">
            <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 mb-4">
              <FaImage className="text-2xl" />
            </div>
            <p className="font-semibold text-lime-400">Upload Bird Image</p>
            <p className="text-sm text-gray-300">
              Submit an image of the bird to start the identification process.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 text-center justify-items-center relative z-10 transition duration-500 transform hover:scale-105 animate-fade-in">
            <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 mb-4">
              <FaSearch className="text-2xl" />
            </div>
            <p className="font-semibold text-lime-400">Analyze & Identify</p>
            <p className="text-sm text-gray-300">
              BirdRaksha uses AI to analyze and identify the bird species.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 text-center justify-items-center relative z-10 transition duration-500 transform hover:scale-105 animate-fade-in">
            <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 mb-4">
              <FaInfoCircle className="text-2xl" />
            </div>
            <p className="font-semibold text-lime-400">Get Bird Details</p>
            <p className="text-sm text-gray-300">
              Learn about the bird’s habitat, conservation status, and more.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex-1 text-center justify-items-center relative z-10 transition duration-500 transform hover:scale-105 animate-fade-in">
            <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 mb-4">
              <FaHeart className="text-2xl" />
            </div>
            <p className="font-semibold text-lime-400">
              Contribute to Conservation
            </p>
            <p className="text-sm text-gray-300">
              Take actions to protect and support conservation efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
