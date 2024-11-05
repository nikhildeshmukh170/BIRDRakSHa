import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logo from "../../assests/logo.png"; // Adjust path if needed
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-gray-900 to-green-900 text-white py-12 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">

        {/* Logo and About Section */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="BirdRaksha Logo"
            className="h-16 mb-4"
          />
          <h3 className="text-xl font-semibold mb-3">About BirdRaksha</h3>
          <p className="text-sm leading-relaxed text-gray-200">
            BirdRaksha enables users to upload bird images, classify species,
            and view detailed information, analysis graphs, and predictions
            from our comprehensive bird dataset. We aim to raise awareness of
            species at risk of becoming endangered and support conservation
            efforts.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-200">
            <li><a href="#conservation" className="hover:underline">Conservation Efforts</a></li>
            <li><a href="#resources" className="hover:underline">Educational Resources</a></li>
            <li><Link to="/get-involved" className="hover:underline">Get Involved</Link></li>
            <li><a href="#support" className="hover:underline">Support Our Cause</a></li>
            <li><Link to="/contactus" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-sm leading-relaxed text-gray-200">
            At BirdRaksha, we’re committed to helping protect bird species from
            becoming endangered. By offering tools for bird classification and
            educational resources, we promote awareness of species diversity
            and encourage action for environmental preservation.
          </p>
        </div>

        {/* Contact and Social Media Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm mb-4 text-gray-200">
            Join us in our mission! Follow us on social media and help us spread
            awareness about bird species protection and conservation.
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" className="text-white hover:text-gray-400">
              <FaYoutube size={20} />
            </a>
          </div>
          <p className="flex items-center text-sm text-gray-200 mb-2">
            <FaEnvelope className="mr-2" /> info@birdraksha.org
          </p>
          <p className="flex items-center text-sm text-gray-200">
            <FaPhone className="mr-2" /> +91 123-456-7890
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-400 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BirdRaksha. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
