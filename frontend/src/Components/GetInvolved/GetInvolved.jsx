import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfilePanel from '../UserProfilePanel/UserProfilePanel';

const GetInvolved = () => {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Function to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data
    const formData = { name, email, phone };

    // Display a success message using toast
    toast.success('Thank you for joining our team of volunteers!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');

    // Close the modal
    closeModal();

    // Optional: Send data to backend (uncomment if needed)
    // axios.post('https://your-backend-api.com/volunteers', formData)
    //   .then(response => console.log('Successfully submitted', response))
    //   .catch(error => console.error('Error submitting form', error));
  };

  return (
    <div className="p-8 pt-28">
      {/* Toast Container */}
      <ToastContainer />

      {/* Page Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Get Involved</h1>
        <p className="text-lg text-gray-400">
          Join us in our mission to protect and preserve bird species. Discover how you can make a difference!
        </p>
      </header>

      {/* Volunteer Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Become a Volunteer</h2>
        <p className="text-gray-300 mb-4">
          Make a meaningful impact in your community! As a volunteer, you can assist with rescue operations,
          participate in awareness campaigns, and support community events aimed at conservation efforts.
        </p>
        <p className="text-gray-300 mb-4">
          There are various ways you can get involved:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Participate in local birdwatching events and workshops.</li>
          <li>Help with habitat restoration projects.</li>
          <li>Assist in organizing community outreach programs.</li>
          <li>Contribute your skills in social media and marketing to spread awareness.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          By volunteering, you will gain valuable experience, meet like-minded individuals, and contribute to vital conservation efforts.
        </p>
        <button
          onClick={openModal}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Sign Up as a Volunteer
        </button>
        <div>
          <UserProfilePanel />
        </div>
      </section>

      {/* Benefits of Volunteering */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Benefits of Volunteering</h2>
        <p className="text-gray-300 mb-4">
          Volunteering offers numerous benefits, including:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Enhancing your skills and experience in environmental conservation.</li>
          <li>Networking opportunities with professionals and other volunteers.</li>
          <li>Receiving training and resources related to bird conservation.</li>
          <li>Finding fulfillment and satisfaction from making a positive impact.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">What Our Volunteers Say</h2>
        <blockquote className="border-l-4 border-green-600 pl-4 mb-4">
          <p className="italic text-gray-400">
            "Volunteering with this organization has been one of the most rewarding experiences of my life. I’ve learned so much about bird species and met wonderful people along the way!" - Jane D.
          </p>
        </blockquote>
        <blockquote className="border-l-4 border-green-600 pl-4 mb-4">
          <p className="italic text-gray-400">
            "Being part of a team that truly cares for wildlife has inspired me to do more for our planet." - John S.
          </p>
        </blockquote>
      </section>

      {/* Modal for Volunteer Sign-Up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Volunteer Sign-Up Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInvolved;
