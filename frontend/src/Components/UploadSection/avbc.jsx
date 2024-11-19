import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BirdUploadSection = () => {
  const [isPredicting, setIsPredicting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Analysis1");
  const [predictionData, setPredictionData] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Track the uploaded image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handlePredict = () => {
    if (!imageFile) {
      alert("Please upload a bird image before predicting.");
      return;
    }

    setIsPredicting(true);
    setShowModal(true);

    // Simulate prediction process
    setTimeout(() => {
      setPredictionData({
        image: "https://via.placeholder.com/200", // Replace with actual image
        species: "Golden Eagle",
        safe: true, // or false
        description:
          "The *Golden Eagle* 🦅 is one of the most majestic birds of prey found in the Northern Hemisphere. Known for their powerful wingspan, keen eyesight, and strong hunting skills, they rule the skies with grace and precision.",
        analysisText: [
          "Golden Eagles are primarily found in mountainous areas where they build large nests.",
          "They are skilled hunters, often preying on mammals such as rabbits and squirrels.",
          "With a wingspan of up to 7 feet, they are capable of reaching speeds of up to 150 mph during dives."
        ],
        predictionsText: [
          "Golden Eagles are often sighted near cliffs and rugged terrains, ideal for nesting and hunting.",
          "They have a strong migratory behavior, often moving southward during winter months."
        ],
        graphData: {
          labels: ["Wingspan (ft)", "Flight Speed (mph)", "Hunting Range (mi²)"],
          analysisValues1: [7, 150, 50],
          analysisValues2: [6, 140, 55],
          predictionValues1: [8, 160, 60],
          predictionValues2: [7.5, 145, 53],
        },
      });
      setIsPredicting(false);
    }, 3000);
  };

  const closeModal = () => {
    setShowModal(false);
    setPredictionData(null);
    setImageFile(null); // Reset the image file after closing the modal
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-green-200 to-green-400">
      {/* File Upload Section */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          🦅 Bird Species Prediction
        </h1>
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Bird Image
        </label>
        <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 bg-gradient-to-b from-white to-green-100 hover:shadow-lg transition-all">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4V20l-8-8z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium text-green-600 focus-within:outline-none hover:text-green-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleImageUpload}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
          </div>
        </div>

        {/* Predict Button */}
        <button
          onClick={handlePredict}
          style={{ backgroundColor: "#C0FF73" }}
          className="w-full h-[46px] text-black py-2 px-4 rounded-full mt-6 font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-lime-500"
        >
          Predict
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-lime-300 to-green-400 rounded-t-lg flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                {predictionData?.species || "Predicting..."}
              </h2>
              {predictionData && (
                <div
                  className={`py-1 px-3 rounded-full text-white ${
                    predictionData.safe ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {predictionData.safe ? "Safe" : "Endangered"}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-96">
              {isPredicting && (
                <div className="flex justify-center items-center">
                  <div className="w-8 h-8 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
                  <p className="ml-4 text-center text-lg font-semibold text-gray-600">
                    Analyzing the image...
                  </p>
                </div>
              )}

              {!isPredicting && predictionData && (
                <>
                  {/* Bird Image */}
                  <div className="flex justify-center">
                    <img
                      src={predictionData.image}
                      alt="Bird"
                      className="h-48 w-48 object-cover rounded-md border border-gray-300 shadow-lg transform transition-all duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Bird Description */}
                  <div className="mt-4 text-gray-700">
                    <h3 className="font-semibold text-lg text-center text-green-600">Bird Overview</h3>
                    <p className="italic text-md mt-2 text-center">{predictionData.description}</p>
                  </div>

                  {/* Analysis and Prediction Tabs */}
                  <div className="flex justify-center space-x-4 mt-4">
                    <button
                      className={`px-4 py-2 rounded-full font-semibold ${
                        activeTab === "Analysis1"
                          ? "bg-lime-400 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => setActiveTab("Analysis1")}
                    >
                      Analysis 1
                    </button>
                    <button
                      className={`px-4 py-2 rounded-full font-semibold ${
                        activeTab === "Analysis2"
                          ? "bg-lime-400 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => setActiveTab("Analysis2")}
                    >
                      Analysis 2
                    </button>
                    <button
                      className={`px-4 py-2 rounded-full font-semibold ${
                        activeTab === "Prediction1"
                          ? "bg-lime-400 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => setActiveTab("Prediction1")}
                    >
                      Prediction 1
                    </button>
                    <button
                      className={`px-4 py-2 rounded-full font-semibold ${
                        activeTab === "Prediction2"
                          ? "bg-lime-400 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => setActiveTab("Prediction2")}
                    >
                      Prediction 2
                    </button>
                  </div>

                  {/* Graphs */}
                  {activeTab === "Analysis1" && (
                    <Bar
                      data={{
                        labels: predictionData.graphData.labels,
                        datasets: [
                          {
                            label: "Analysis 1",
                            data: predictionData.graphData.analysisValues1,
                            backgroundColor: "#00C9A7",
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          title: {
                            display: true,
                            text: "Analysis 1: Bird Characteristics",
                          },
                          legend: {
                            position: "top",
                          },
                        },
                      }}
                    />
                  )}

                  {activeTab === "Analysis2" && (
                    <Bar
                      data={{
                        labels: predictionData.graphData.labels,
                        datasets: [
                          {
                            label: "Analysis 2",
                            data: predictionData.graphData.analysisValues2,
                            backgroundColor: "#6FCF97",
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          title: {
                            display: true,
                            text: "Analysis 2: Bird Behavior",
                          },
                          legend: {
                            position: "top",
                          },
                        },
                      }}
                    />
                  )}

                  {activeTab === "Prediction1" && (
                    <Bar
                      data={{
                        labels: predictionData.graphData.labels,
                        datasets: [
                          {
                            label: "Prediction 1",
                            data: predictionData.graphData.predictionValues1,
                            backgroundColor: "#FFD700",
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          title: {
                            display: true,
                            text: "Prediction 1: Future Behavior",
                          },
                          legend: {
                            position: "top",
                          },
                        },
                      }}
                    />
                  )}

                  {activeTab === "Prediction2" && (
                    <Bar
                      data={{
                        labels: predictionData.graphData.labels,
                        datasets: [
                          {
                            label: "Prediction 2",
                            data: predictionData.graphData.predictionValues2,
                            backgroundColor: "#FF6347",
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          title: {
                            display: true,
                            text: "Prediction 2: Bird Evolution",
                          },
                          legend: {
                            position: "top",
                          },
                        },
                      }}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirdUploadSection;
