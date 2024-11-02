import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const [submissionMessage, setSubmissionMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    setSubmissionMessage('Form submitted successfully!');
    reset(); // Reset the form fields
    setTimeout(() => {
      setSubmissionMessage(''); // Clear message after 3 seconds
    }, 3000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-800 to-gray-900 p-6 overflow-hidden pt-28">
      {/* Background Circles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 animate-bounce opacity-40 transform transition-all duration-700">
          <div className="bg-white rounded-full h-96 w-96 animate-pulse"></div>
        </div>
        <div className="absolute -bottom-10 -right-60 animate-spin opacity-30 transform transition-all duration-800">
          <div className="bg-white rounded-full h-72 w-72"></div>
        </div>
        <div className="absolute top-1/4 left-1/4 animate-ping opacity-35 transform transition-all duration-900">
          <div className="bg-white rounded-full h-80 w-80"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce opacity-25 transform transition-all duration-1100">
          <div className="bg-white rounded-full h-64 w-64"></div>
        </div>
        <div className="absolute bottom-20 left-1/3 animate-bounce opacity-50 transform transition-all duration-1200">
          <div className="bg-white rounded-full h-56 w-56 animate-pulse"></div>
        </div>
        <div className="absolute bottom-10 right-1/4 animate-spin opacity-30 transform transition-all duration-1300">
          <div className="bg-white rounded-full h-48 w-48"></div>
        </div>
      </div>

      <h1 className="text-6xl font-extrabold text-white mb-4 text-shadow-lg text-center">Get in Touch!</h1>
      <p className="text-lg text-white mb-10 text-center max-w-2xl">
        We're here to help! Fill out the form below or reach out via social media. Your feedback matters!
      </p>

      {/* Submission Message */}
      {submissionMessage && (
        <div className="bg-white text-green-600 font-bold py-2 px-4 rounded mb-6 shadow-md animate-fade-in transition-all duration-300">
          {submissionMessage}
        </div>
      )}

      <div className="flex w-full max-w-6xl space-x-8 z-10 relative">
        {/* Left Section */}
        <div className="flex-1 bg-white shadow-2xl rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Why Contact Us?</h2>
          <p className="text-gray-700 mb-4">
            We're dedicated to providing the best service. Whether you have questions, need assistance, or want to share your thoughts, we're here for you!
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Customer Support</li>
            <li>Product Inquiries</li>
            <li>Feedback and Suggestions</li>
          </ul>
        </div>

        {/* Right Section with Form */}
        <div className="flex-1 bg-white shadow-2xl rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                {...register('name', { required: true })}
                className="shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register('email', { required: true })}
                className="shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                {...register('message', { required: true })}
                className="shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-600 hover:bg-green-700 transition duration-300 text-white font-bold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="mt-10 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://twitter.com" className="transition duration-300 transform hover:scale-110">
            <FaTwitter size={30} className="text-green-200 hover:text-white" />
          </a>
          <a href="https://facebook.com" className="transition duration-300 transform hover:scale-110">
            <FaFacebook size={30} className="text-green-200 hover:text-white" />
          </a>
          <a href="https://instagram.com" className="transition duration-300 transform hover:scale-110">
            <FaInstagram size={30} className="text-green-200 hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
