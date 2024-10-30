import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CompanyInfo from './components/Molecules/Companyinfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company/:companyName" element={<CompanyInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
