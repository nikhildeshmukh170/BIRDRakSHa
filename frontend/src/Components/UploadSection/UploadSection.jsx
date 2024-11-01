import React, { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
  FaCheckCircle,
  FaInfoCircle,
  FaCloudUploadAlt,
  FaDove,
  FaCameraRetro,
  FaBinoculars,
  FaMicroscope,
  FaChartLine,
} from "react-icons/fa";
import uploadbgroundVideo from "../../assests/uploadbgroundVideo.mp4";
import birdVideo from "../../assests/birdVideo.mp4";

const BirdUploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadStatus("");
    } else {
      setUploadStatus("Please select a valid image file.");
      setSelectedFile(null);
      setPreviewUrl("");
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    setUploadStatus("Uploading...");
    setTimeout(() => {
      setUploadStatus("Upload successful!");
      setSelectedFile(null);
      setPreviewUrl("");
    }, 2000);
  };

  return (
    <div
      id="uploadSection"
      className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={uploadbgroundVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay for slight background tint */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      <div className="flex flex-col gap-8">
        <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl gap-6 md:gap-20 rounded-lg overflow-hidden">
          {/* Left Card - Enhanced Information */}
          <div className="p-4 md:p-6 flex-1 bg-gradient-to-br from-white to-lime-200 relative text-left rounded-lg backdrop-blur-sm">
            <div className="absolute -top-0 left-10 md:left-80 opacity-40 text-5xl md:text-7xl text-lime-900 z-30">
              <FaDove />
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <FaInfoCircle className="text-gray-900 text-2xl md:text-3xl" />
              <h3 className="text-gray-800 text-xl md:text-2xl font-bold">
                Why Upload an Image?
              </h3>
            </div>

            <p className="text-gray-700 text-sm md:text-base mb-2">
              <FaCameraRetro className="inline-block text-green-700 mr-2" />
              By uploading a clear image of the bird, you help us identify the
              species accurately and gain insights about its unique
              characteristics.
            </p>

            <p className="text-gray-700 text-sm md:text-base mb-2">
              <FaBinoculars className="inline-block text-green-700 mr-2" />
              Our system uses advanced AI to classify the bird species,
              providing scientific details including habitat, diet, and
              behavior.
            </p>

            <p className="text-gray-700 text-sm md:text-base mb-2">
              <FaMicroscope className="inline-block text-green-700 mr-2" />
              Once classified, you’ll receive analysis data that explains common
              patterns, behaviors, and significant traits of the species.
            </p>

            <p className="text-gray-700 text-sm md:text-base mb-2">
              <FaChartLine className="inline-block text-green-700 mr-2" />
              Our model also generates predictions, such as the likelihood of
              observing this bird in various regions or during specific seasons.
            </p>

            <p className="text-gray-700 text-sm md:text-base mt-4 font-semibold">
              Supported formats: JPG, PNG (Max size: 5MB)
            </p>
          </div>

          {/* Right Card - Image Upload */}
          <div className="p-4 md:p-6 flex-2 text-center border-2 border-green-400 shadow-inner flex flex-col rounded-lg backdrop-blur-sm">
            {uploadStatus === "Upload successful!" ? (
              <div className="flex flex-col items-center justify-center h-full">
                <FaCheckCircle className="text-green-400 text-4xl md:text-5xl mb-4" />
                <h3 className="text-green-400 text-xl md:text-2xl font-semibold">
                  Upload Successful!
                </h3>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center h-24 md:h-36 bg-white bg-opacity-70 rounded-md mb-4 hover:bg-opacity-20 transition duration-200 ease-in-out relative cursor-pointer">
                  <input
                    type="file"
                    id="upload"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                  <FaCloudUploadAlt className="text-gray-800 text-3xl md:text-4xl mb-2" />
                  <p className="text-gray-800 text-lg font-medium">
                    Select Bird Image
                  </p>
                </div>

                {/* Image Preview */}
                {previewUrl && (
                  <div className="mt-4">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-32 md:h-48 object-cover rounded-md border border-gray-300 shadow-md mb-4"
                    />
                  </div>
                )}

                {/* Upload Button */}
                <div className="flex justify-center items-center">
                  <button
                    onClick={handleUpload}
                    style={{ backgroundColor: "#C0FF73" }}
                    className="w-[170px] h-[46px] text-black py-2 px-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-lime-500"
                  >
                    <FileUploadIcon className="mr-2" />
                    Upload Here
                  </button>
                </div>
              </>
            )}

            {/* Additional Information */}
            <div className="mt-4 text-gray-300 text-xs md:text-sm">
              <h4 className="font-semibold">Tips for Uploading:</h4>
              <ul className="list-disc list-inside">
                <li>Ensure good lighting and a clear view of the bird.</li>
                <li>Use the best quality image possible.</li>
                <li>
                  If you encounter issues,{" "}
                  <a
                    href="mailto:support@example.com"
                    className="text-lime-200"
                  >
                    contact support
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Card with Video and "Did You Know" Section */}
        <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl h-auto gap-8 md:gap-20 rounded-lg overflow-hidden">
          {/* Left Card - Video Only */}
          <div className="w-full md:w-2/3">
            <video
              className="w-full h-full object-cover rounded-lg"
              src={birdVideo}
              autoPlay
              loop
              muted
            ></video>
          </div>

          {/* Right Card - "Did You Know" Section */}
          <div className="p-4 md:p-6 flex text-center bg-gradient-to-br from-white to-lime-200 shadow-inner flex flex-col rounded-lg backdrop-blur-sm w-full md:w-1/3">
            <div className="mt-4 md:mt-6 p-6 bg-green-200 bg-opacity-30 rounded-lg shadow-sm hover:bg-green-400 hover:bg-opacity-30">
              <h4 className="font-bold text-green-800 text-md md:text-lg mb-2">
                Did You Know?
              </h4>
              <p className="text-gray-700 text-sm md:text-base">
                Bird species identification helps scientists track biodiversity
                and monitor ecosystem health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdUploadSection;
