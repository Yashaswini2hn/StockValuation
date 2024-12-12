import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LandingPage from './pages/LandingPage';
import CompanyInfo from './components/Molecules/Companyinfo'; // Ensure this matches the actual filename
import StoryPage from './components/Molecules/StoryPage';


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/company/:stockName" element={<CompanyInfo/>}/>
          <Route path="/company/:stockName/story/:id" element={<StoryPage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
