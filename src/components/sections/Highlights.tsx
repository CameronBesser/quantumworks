import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const stats = [
  { value: "50+", label: "AI Models Deployed" },
  { value: "WOSB", label: "Certified Business" },
  { value: "100%", label: "U.S. Based Team" },
  { value: "24/7", label: "Support and Monitoring" },
];

const Highlights: React.FC = () => (
  <section className="section-padding relative">
    <div className="max-w-7xl mx-auto">
      <SectionHeading label="Highlights" title="Our AI and Cybersecurity Capabilities" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-8 text-center hover:border-accent-blue/30 transition-all">
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">{s.value}</div>
            <div className="text-gray-400 text-sm">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
