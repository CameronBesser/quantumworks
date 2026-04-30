// src/pages/SuccessPageSimple.tsx

"use client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPageSimple = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/ime");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 0 25px rgba(0,0,0,0.1)",
        maxWidth: "400px"
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#08833d",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          fontSize: "48px",
          color: "white"
        }}>
          ✓
        </div>
        <h1 style={{ color: "#2e3f51", marginBottom: "10px" }}>Success!</h1>
        <p style={{ color: "#757575", marginBottom: "20px" }}>
          Your profile has been successfully validated
        </p>
        <p style={{ fontSize: "14px", color: "#266aca" }}>
          Redirecting to dashboard...
        </p>
      </div>
    </div>
  );
};

export default SuccessPageSimple;