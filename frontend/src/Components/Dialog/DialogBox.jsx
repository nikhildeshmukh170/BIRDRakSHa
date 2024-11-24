import React from "react";
import { FaTimes } from "react-icons/fa";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";

function DialogBox({
  predictionData,
  closeModal,
  isPredicting,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white bg-opacity-100 backdrop-blur-md rounded-xl shadow-md shadow-green-200 w-11/12 h-[80%] md:w-2/3 max-h-[160vh] overflow-hidden transform transition-all duration-500 ease-in-out">
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-gray-800 hover:text-gray-700"
          onClick={closeModal}
        >
          <FaTimes className="text-3xl transform hover:scale-110 transition-all" />
        </button>

        {/* Header */}
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-lime-300 to-green-500 rounded-t-xl flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800 ml-4">
            {predictionData?.species || "Predicting..."}
          </h2>

          {/* Check if predictionData is available */}
          {predictionData ? (
            <div
              className={`py-1 px-3 rounded-full text-white mr-12 text-lg ${
                predictionData.safe === true ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {predictionData.safe === true ? "Safe" : "Endangered"}
            </div>
          ) : (
            <div className="py-1 px-3 rounded-full text-white mr-12 text-lg bg-gray-500">
              Loading...
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh] text-gray-800">
          {isPredicting ? (
            <div className="flex justify-center items-center space-x-4">
              <div className="w-8 h-8 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
              <p className="text-lg font-semibold text-gray-600">
                Analyzing the image...
              </p>
            </div>
          ) : (
            predictionData && (
              <>
                {/* Bird Image */}
                <div className="flex justify-center">
                  <img
                    src={predictionData.image}
                    alt="Bird"
                    className="h-64 w-64 object-cover rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110"
                  />
                </div>

                {/* Bird Description */}
                <div className="mt-4 text-gray-700">
                  <h3 className="font-semibold text-3xl text-center text-green-600">
                    Bird Overview
                  </h3>
                  <p className="italic text-lg mt-2 text-center text-gray-800">
                    {predictionData.description}
                  </p>
                </div>

                {/* Analysis and Prediction Tabs */}
                <div className="flex justify-center space-x-6 mt-6">
                  <button
                    className={`px-6 py-3 rounded-full font-semibold transition-all transform ${
                      activeTab === "Analysis1"
                        ? "bg-lime-500 text-white scale-105"
                        : "bg-gray-200 text-gray-700 hover:bg-lime-300"
                    }`}
                    onClick={() => setActiveTab("Analysis1")}
                  >
                    Analysis 1
                  </button>
                  <button
                    className={`px-6 py-3 rounded-full font-semibold transition-all transform ${
                      activeTab === "Analysis2"
                        ? "bg-lime-500 text-white scale-105"
                        : "bg-gray-200 text-gray-700 hover:bg-lime-300"
                    }`}
                    onClick={() => setActiveTab("Analysis2")}
                  >
                    Predictions
                  </button>
                </div>

                <div>
                  {activeTab === "Analysis1" && (
                    <>
                      {/* Bar Chart for Species Data */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-center text-green-600">
                          Species Data (Bar Chart)
                        </h4>
                        <Bar
                          data={{
                            labels: predictionData.graphData.labels,
                            datasets: [
                              {
                                label: "Species Analysis",
                                data: predictionData.graphData.analysisValues1,
                                backgroundColor: "rgba(75,192,192,0.4)",
                                borderColor: "rgba(75,192,192,1)",
                                borderWidth: 1,
                              },
                            ],
                          }}
                        />
                      </div>

                      {/* Line Chart for Lifespan Prediction */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-center text-green-600">
                          Predicted Lifespan Over Years (Line Chart)
                        </h4>
                        <Line
                          data={{
                            labels: [
                              "Year 1",
                              "Year 2",
                              "Year 3",
                              "Year 4",
                              "Year 5",
                            ],
                            datasets: [
                              {
                                label: "Lifespan (years)",
                                data: predictionData.graphData
                                  .lifespanPrediction,
                                fill: false,
                                borderColor: "rgba(153,102,255,1)",
                                tension: 0.1,
                              },
                            ],
                          }}
                        />
                      </div>

                      {/* Line Chart for Endangerment Risk */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-center text-red-600">
                          Endangerment Risk Over Time (Line Chart)
                        </h4>
                        <Line
                          data={{
                            labels: [
                              "Year 1",
                              "Year 2",
                              "Year 3",
                              "Year 4",
                              "Year 5",
                            ],
                            datasets: [
                              {
                                label: "Endangerment Risk (%)",
                                data: predictionData.graphData
                                  .predictionValues1,
                                fill: false,
                                borderColor: "rgba(255,99,132,1)",
                                tension: 0.1,
                              },
                            ],
                          }}
                        />
                      </div>

                      {/* Radar Chart */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-center text-blue-700">
                          Bird Characteristics Comparison (Radar Chart)
                        </h4>
                        <Radar
                          data={{
                            labels: predictionData.graphData
                              .characteristicsLabels || [
                              "Characteristic 1",
                              "Characteristic 2",
                              "Characteristic 3",
                              "Characteristic 4",
                              "Characteristic 5",
                            ], // Fallback to default labels
                            datasets: [
                              {
                                label: "Characteristics",
                                data: predictionData.graphData
                                  .characteristicsData || [10, 20, 30, 40, 50], // Fallback to default data
                                backgroundColor: "rgba(179,181,198,0.2)",
                                borderColor: "rgba(179,181,198,1)",
                                pointBackgroundColor: "rgba(179,181,198,1)",
                                pointBorderColor: "#fff",
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderColor: "rgba(179,181,198,1)",
                              },
                            ],
                          }}
                        />
                      </div>
                    </>
                  )}

                  {activeTab === "Analysis2" && (
                    <div>
                      {/* Prediction Details Section */}
                      <h4 className="text-lg font-semibold text-center text-green-600">
                        Predictions for {predictionData.species}
                      </h4>
                      <p className="text-gray-700 mt-2">
                        Here, we can present more detailed predictions, such as
                        the projected population trend, likely habitats, and
                        more information about the bird's future.
                      </p>

                      {/* Line Chart for Predictions */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-center text-green-600">
                          Prediction Trend Over Time (Line Chart)
                        </h4>
                        <Line
                          data={{
                            labels: predictionData.graphData.trendLabels || [
                              "2024",
                              "2025",
                              "2026",
                              "2027",
                              "2028",
                            ], // Fallback to default years if no data is available
                            datasets: [
                              {
                                label: "Population Projection",
                                data: predictionData.graphData
                                  .populationTrend || [15, 12, 10, 8, 6], // Fallback to default population if no data is available
                                fill: false,
                                borderColor: "rgba(75, 192, 192, 1)",
                                tension: 0.1,
                              },
                              {
                                label: "Lifespan Projection",
                                data: predictionData.graphData
                                  .lifespanTrend || [30, 28, 27, 26, 25], // Fallback to default lifespan if no data is available
                                fill: false,
                                borderColor: "rgba(153, 102, 255, 1)",
                                tension: 0.1,
                              },
                            ],
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Prevent Endangerment Section */}
                {predictionData.safe === false && (
                  <div className="mt-8 bg-gradient-to-r from-red-300 to-red-500 p-6 rounded-xl">
                    <h3 className="font-semibold text-2xl text-center text-white mb-4">
                      How to Prevent {predictionData.species} from Becoming
                      Endangered
                    </h3>
                    <p className="text-lg text-center text-white mb-4">
                      Taking action to protect the{" "}
                      <strong>{predictionData.species}</strong> is crucial. Here
                      are some ways you can help:
                    </p>
                    <ul className="list-disc list-inside text-sm text-white">
                      <li>Protect and restore natural habitats.</li>
                      <li>Prevent illegal hunting and trade.</li>
                      <li>Support conservation programs.</li>
                      <li>Raise awareness about the species.</li>
                    </ul>
                  </div>
                )}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
