// src/pages/Career.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDataUsage, MdHeadsetMic, MdEmail, MdLocationOn, MdAttachMoney, MdSend } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import Layout from "../components/layout/Layout";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Cardtemp";

const openPositions = [
  { 
    icon: <MdOutlineDataUsage />, 
    title: "Data Entry Clerk", 
    salary: "$25 per hour",
    description: "We are seeking a detail-oriented Data Entry Clerk to join our team. You will be responsible for accurate data processing, database management, and documentation.",
    requirements: [
      "High school diploma or equivalent",
      "Excellent typing speed and accuracy",
      "Proficient in Microsoft Office Suite",
      "Strong attention to detail",
      "Ability to work independently"
    ],
    type: "Full-time • Remote",
    location: "Remote (Worldwide)"
  },
  { 
    icon: <MdHeadsetMic />, 
    title: "Customer Service Representative", 
    salary: "$25 per hour",
    description: "Join our customer support team to help clients with inquiries, issue resolution, and provide exceptional service experience.",
    requirements: [
      "High school diploma or equivalent",
      "Excellent communication skills",
      "Previous customer service experience preferred",
      "Problem-solving abilities",
      "Empathetic and patient demeanor"
    ],
    type: "Full-time • Remote",
    location: "Remote (Worldwide)"
  },
];

const benefits = [
  { icon: "🏠", title: "Remote First", desc: "Work from anywhere in the world" },
  { icon: "💰", title: "Competitive Pay", desc: "$25 per hour with regular reviews" },
  { icon: "📈", title: "Growth Opportunities", desc: "Continuous learning & career advancement" },
  { icon: "💊", title: "Health Benefits", desc: "Comprehensive medical coverage" },
  { icon: "🏖️", title: "Flexible PTO", desc: "Paid time off & holidays" },
  { icon: "💻", title: "Equipment Provided", desc: "Laptop and home office setup" },
  { icon: "🎓", title: "Training Programs", desc: "$2000/year for professional development" },
  { icon: "⏰", title: "Flexible Hours", desc: "Choose your work schedule" },
];

const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [showApplyForm, setShowApplyForm] = useState(false);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowApplyForm(true);
    // Smooth scroll to application form
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Application for ${selectedJob} Position`);
    const body = encodeURIComponent(
      `Dear Hiring Manager,\n\nI am writing to apply for the ${selectedJob} position at QuantumWorks.\n\nPlease find my resume attached.\n\nBest regards,\n[Your Name]\n[Your Phone Number]`
    );
    window.location.href = `mailto:recruiter@quantum-works.org?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-accent-purple text-sm font-semibold tracking-wider uppercase bg-accent-purple/10 px-4 py-1 rounded-full inline-block mb-4">
              Join Our Team
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
              Build Your Career
              <span className="text-accent-purple block">With QuantumWorks</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              We're looking for talented individuals to join our growing team. 
              Work remotely, enjoy competitive pay, and grow with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            label="Open Positions" 
            title="Current Opportunities" 
            description="Join us in shaping the future of technology" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {openPositions.map((position, i) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent-purple/10 flex items-center justify-center text-accent-purple text-2xl flex-shrink-0">
                      {position.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-2xl text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 text-accent-green font-semibold">
                          <MdAttachMoney className="text-lg" />
                          {position.salary}
                        </span>
                        <span className="inline-flex items-center gap-1 text-gray-400 text-sm">
                          <HiOutlineBriefcase />
                          {position.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-gray-400 text-sm">
                          <MdLocationOn />
                          {position.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {position.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleApplyClick(position.title)}
                    className="w-full bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <MdEmail className="text-lg" />
                    Apply for {position.title}
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section - Shows when Apply is clicked */}
      {showApplyForm && (
        <section id="application-form" className="section-padding relative overflow-hidden bg-gray-900/30">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[150px]" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-accent-purple/10 flex items-center justify-center mx-auto mb-6 text-accent-purple text-3xl">
                    <MdSend />
                  </div>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                    Apply for {selectedJob}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Fill out the form below to submit your application
                  </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleEmailClick(); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple transition-colors"
                        placeholder="(555) 555-5555"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Years of Experience</label>
                      <select className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors">
                        <option value="">Select</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Cover Letter / Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple transition-colors"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Resume/CV *</label>
                    <input
                      type="file"
                      id="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent-purple file:text-white hover:file:bg-accent-purple/80 cursor-pointer"
                    />
                    <p className="text-gray-500 text-xs mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowApplyForm(false)}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <MdSend className="text-lg" />
                      Submit Application
                    </button>
                  </div>
                </form>

                <p className="text-gray-500 text-sm text-center mt-6">
                  By submitting, you agree to our privacy policy. We'll contact you within 24-48 hours.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-accent-purple text-sm font-semibold tracking-wider uppercase bg-accent-purple/10 px-4 py-1 rounded-full inline-block mb-4">
              Why Join Us
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Benefits & Perks
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer competitive compensation and a supportive work environment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="text-center h-full">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h4 className="font-heading font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;