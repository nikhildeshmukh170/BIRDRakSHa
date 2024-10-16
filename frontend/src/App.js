import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from './page/UnderConstruction';
import HomePage from './page/Homepage/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<UnderConstruction />} />
          <Route path="/home" element={<HomePage />} />
          {/* You can add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
