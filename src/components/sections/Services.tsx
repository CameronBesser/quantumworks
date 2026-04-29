import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaShieldAlt, FaCode } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

const services = [
  { icon: <FaBrain className="text-3xl text-accent-blue" />, title: "AI Solutions", description: "Large language models, data science, and AI Agents.", features: ["LLM Integration", "Data Science", "AI Agents", "Model Training"] },
  { icon: <FaShieldAlt className="text-3xl text-accent-purple" />, title: "Cybersecurity", description: "Advanced threat detection for sensitive systems.", features: ["Post-Quantum Crypto", "Pen Testing", "Phishing Solutions", "Cyber Audits"] },
  { icon: <FaCode className="text-3xl text-accent-cyan" />, title: "App Development", description: "End-to-end development with modern UI/UX.", features: ["Full-Stack Dev", "UI/UX Design", "Cloud Deployment", "API Integration"] },
];

const Services: React.FC = () => (
  <section id="services" className="section-padding relative">
    <div className="max-w-7xl mx-auto">
      <SectionHeading label="What We Do" title="Our Core Services" description="Solutions across AI, Cybersecurity, and Software Development." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
            <Card className="h-full">
              <div className="mb-5">{s.icon}</div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{s.description}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3" />{f}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
