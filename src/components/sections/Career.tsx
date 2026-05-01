// src/components/sections/Career.tsx

import React from "react";
import { motion } from "framer-motion";
import { MdOutlineDataUsage, MdHeadsetMic, MdEmail } from "react-icons/md";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Cardtemp";

const careerItems = [
  { 
    icon: <MdOutlineDataUsage />, 
    title: "Data Entry Clerk", 
    salary: "$25 per hour",
    desc: "Data processing, database management, documentation",
    type: "Full-time • Remote"
  },
  { 
    icon: <MdHeadsetMic />, 
    title: "Customer Service Representative", 
    salary: "$25 per hour",
    desc: "Customer support, issue resolution, client communication",
    type: "Full-time • Remote"
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

const Career: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:recruiter@quantum-works.org";
  };

  return (
    <section id="career" className="section-padding relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          label="Careers" 
          title="Join Our Team" 
          description="Build your career with QuantumWorks and work on cutting-edge technology" 
        />

        {/* Career Grid - Only 2 positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {careerItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="text-center h-full hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 flex items-center justify-center mx-auto mb-4 text-accent-purple text-xl">
                  {item.icon}
                </div>
                <h4 className="font-heading font-semibold text-white mb-2">{item.title}</h4>
                <div className="text-accent-green font-bold text-lg mb-2">{item.salary}</div>
                <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
                <span className="inline-block bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full text-xs mb-4">
                  {item.type}
                </span>
                <button 
                  onClick={handleEmailClick}
                  className="w-full bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MdEmail className="text-lg" />
                  Apply Now →
                </button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <span className="text-accent-purple text-sm font-semibold tracking-wider uppercase bg-accent-purple/10 px-4 py-1 rounded-full inline-block mb-4">
              Why Join Us
            </span>
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Benefits & Perks
            </h3>
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
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h4 className="font-heading font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Email Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 md:p-10">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 flex items-center justify-center mx-auto mb-4 text-accent-purple text-xl">
                <MdEmail />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                Send Us Your Application
              </h3>
              <p className="text-gray-400 mb-6">
                Email your resume and cover letter to our recruiting team
              </p>
              <button 
                onClick={handleEmailClick}
                className="inline-flex items-center gap-2 bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                <MdEmail className="text-xl" />
                recruiter@quantum-works.org
              </button>
              <p className="text-gray-500 text-sm mt-4">
                We'll respond to your application within 24-48 hours
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;