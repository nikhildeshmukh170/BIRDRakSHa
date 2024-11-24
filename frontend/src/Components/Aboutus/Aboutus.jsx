import React, { useState } from "react";
import logo from "../../assests/logo.png"; // Ensure the correct path to the logo image
import "./AboutUs.css";
import Nikhil from "../../assests/nikhil.png";
import Shivam from "../../assests/shivam.png"
import Bharat from "../../assests/bharatsec.jpg"
import Utkarsh from "../../assests/utkarsh.png"
import seema_maam from "../../assests/seema_maam.jpg"
import pranva from "../../assests/pranav.jpg"
// import avatar from "../../assests/avatar.png";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    name: "Nikhil Deshmukh",
    role: "Frontend Developer, UI/UX Designer & Machine Learning Specialist",
    img: Nikhil,
    social: {
      twitter: "https://twitter.com/nikhil",
      linkedin: "https://linkedin.com/in/nikhil-d-deshmukh",
    },
    description:
      "Nikhil is responsible for frontend development and UI/UX design, ensuring a smooth user experience while also specializing in machine learning.",
  },
  {
    name: "Shivam Kumar Pathak",
    role: "Backend Developer, API Integration & Machine Learning Specialist",
    img: Shivam,
    social: {
      twitter: "https://twitter.com/shivam",
      linkedin: "https://linkedin.com/in/shivamkumarpathak0610",
    },
    description:
      "Shivam focuses on backend development, API integration, and machine learning, facilitating efficient data processing and classification.",
  },
  {
    name: "Somala Bharath Sai",
    role: "Research Specialist",
    img: Bharat,
    social: {
      twitter: "https://twitter.com/somala",
      linkedin: "https://linkedin.com/in/bharath-somala-computer-science",
    },
    description:
      "Somala conducts research and applies machine learning algorithms across various projects, specializing in bird species classification.",
  },
  {
    name: "Utkarsh Maurya",
    role: "Data Analyst & Visualization Expert",
    img: Utkarsh,
    social: {
      twitter: "https://twitter.com/utkarsh",
      linkedin: "https://linkedin.com/in/utkarsh-maurya-515258252",
    },
    description:
      "Utkarsh analyzes data and visualizes insights to enhance user understanding and drive decision-making.",
  },
  {
    name: "Pranav",
    role: "Contributor",
    img: pranva,
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
    },
    description:
      "Pranav is our backend contributor",
  },
];


const mentor = {
  name: "Dr.Seema Srivastava",
  role: "Project Mentor",
  img: seema_maam,
};

const Aboutus = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  const handleGetInvolvedClick = () => {
    navigate("/get-involved");
  };

  return (
    <section className="bg-gradient-to-b from-green-700 to-gray-900 text-white py-20 px-6 relative overflow-hidden">
      {/* Background Illustrations */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="#fff"
            className="floating-circle"
          />
          <circle
            cx="150"
            cy="150"
            r="50"
            fill="#fff"
            className="floating-circle"
          />
          <circle
            cx="100"
            cy="30"
            r="20"
            fill="#fff"
            className="floating-circle"
          />
        </svg>
      </div>

      <div className="container mx-auto text-center z-10 my-14">
        {/* Logo and Header */}
        <div className="mb-12">
          <img src={logo} alt="BirdRaksha Logo" className="w-52 mx-auto mb-4" />
          <h1 className="text-6xl font-extrabold mb-2 tracking-wide drop-shadow-lg">
            About BirdRaksha
          </h1>
          <p className="text-xl max-w-2xl mx-auto mt-4 font-light">
            BirdRaksha is dedicated to conserving bird species by raising
            awareness through identification, information sharing, and
            data-driven analysis. Users can upload images to identify species
            and access insights on population trends, helping protect birds from
            endangerment.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white text-gray-800 rounded-lg py-8 px-8 my-10 shadow-lg transition-transform transform hover:scale-105 duration-300 max-w-3xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At BirdRaksha, our mission is to create a comprehensive platform
            that aids in identifying bird species and fosters a deeper
            understanding of their habitats and conservation needs. Through our
            easy-to-use image upload feature, we empower users to learn more
            about the birds they encounter and contribute to the protection of
            biodiversity.
          </p>
          <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-500 rounded-full opacity-50"></div>
        </div>

        {/* Meet the Team Section */}
        <div className="mt-16">
          <h2 className="text-5xl font-semibold mb-8">Meet the Team</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
            Our dedicated team at BirdRaksha is committed to leveraging
            technology for bird conservation. Each member brings a unique skill
            set that contributes to our mission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative cursor-pointer"
                onClick={() => openModal(member)}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
                />
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-gray-700">{member.role}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {member.description}
                </p>
                <div className="absolute -bottom-2 right-0 transform translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full opacity-50"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Mentor Section */}
        <div className="mt-16">
          <h2 className="text-5xl font-semibold mb-8">Meet Our Mentor</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
            Our project is guided by the invaluable expertise of our mentor, who
            has played a crucial role in shaping our vision and strategy.
          </p>
          <div className="flex flex-col items-center">
            <img
              src={mentor.img}
              alt={mentor.name}
              className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-green-500"
            />
            <h3 className="text-3xl font-semibold mb-2">{mentor.name}</h3>
            <p className="text-sm text-gray-300">{mentor.role}</p>
            <p className="text-sm text-gray-200 text-center mt-2 max-w-xl">
              Seema ma`am is an accomplished professional with extensive experience in
              environmental conservation and technology integration. Her
              guidance has been instrumental in our project's development,
              helping us navigate challenges and align our objectives with best
              practices in conservation efforts.
            </p>
          </div>
        </div>

        {/* Additional Section for Impact */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-semibold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Together, we can contribute to the conservation of our avian
            friends. Whether you're a bird enthusiast or a casual observer, your
            participation in our platform can help make a real impact. Let's
            protect bird species and their habitats for future generations.
          </p>
          <button
            onClick={handleGetInvolvedClick}
            className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300 z-60 relative"
          >
            Get Involved
          </button>
        </div>
      </div>

      {/* Modal for Team Member Details */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3 relative transition-transform transform scale-105 duration-300">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition duration-200"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full border-4 border-green-500 shadow-md object-cover mb-4 text-gray-900"
              />
              <h3 className="text-2xl text-green-700 font-bold text-center mb-1">
                {selectedMember.name}
              </h3>
              <p className="text-md text-gray-700 mb-2">
                {selectedMember.role}
              </p>
              <p className="text-sm text-gray-700 text-center mb-4">
                {selectedMember.description}
              </p>

              <div className="flex justify-center space-x-4 mb-4">
                {selectedMember.social.twitter && (
                  <a
                    href={selectedMember.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    Twitter
                  </a>
                )}
                {selectedMember.social.linkedin && (
                  <a
                    href={selectedMember.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* <button
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
              onClick={closeModal}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Aboutus;
