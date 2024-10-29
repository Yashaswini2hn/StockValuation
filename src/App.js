
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from '../src/Pages/Landingpage';

function App() {
  return (
    <>
      <Router> 
        <Routes>
           <Route path="/" element={<Landingpage />} />   
        </Routes> 
     </Router>

      {/* <div>
        <h1>asdfghj</h1>
        <Landingpage />
      </div> */}
      

    </>
  );
}

export default App;
