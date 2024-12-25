import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses"; // Courses को इंपोर्ट करें

function App() {
  return (
    <>
      {/* Routes का उपयोग किया गया है */}
      <Routes>
        {/* Home Component */}
        <Route path="/" element={<Home />} />
        
        {/* Courses Component */}
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
