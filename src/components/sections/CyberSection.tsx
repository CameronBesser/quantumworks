import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaBug, FaFish, FaClipboardCheck } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Cardtemp";

const items = [
  { icon: <FaLock />, title: "Post-Quantum Cryptography", desc: "Next-gen encryption for quantum threats." },
  { icon: <FaBug />, title: "Penetration Testing", desc: "Identify vulnerabilities before adversaries do." },
  { icon: <FaFish />, title: "Phishing Solutions", desc: "Protect from social engineering attacks." },
  { icon: <FaClipboardCheck />, title: "Cyber Audits", desc: "Comprehensive security assessments." },
];

const CyberSection: React.FC = () => (
  <section id="cyber" className="section-padding relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px]" />
    <div className="max-w-7xl mx-auto relative z-10">
      <SectionHeading label="Cybersecurity" title="Protect Your Critical Systems" description="Advanced threat detection for sensitive government systems." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
            <Card className="text-center h-full">
              <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 flex items-center justify-center mx-auto mb-4 text-accent-purple text-xl">{item.icon}</div>
              <h4 className="font-heading font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CyberSection;
