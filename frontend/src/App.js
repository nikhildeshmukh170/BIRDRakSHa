import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from './page/UnderConstruction';
import HomePage from './page/Homepage/HomePage';
import AboutUs from './page/AboutUs/AboutUs';
import Contactus from './page/Contactus/Contactus';
// import ContactUs from './page/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-b from-gray-950 to-gray-800 shadow-lg min-h-screen">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<UnderConstruction />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/contactus' element={<Contactus />} />
          {/* You can add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
