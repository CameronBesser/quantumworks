import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const items = [
  { title: "Large Language Models", desc: "Custom LLM solutions tailored to your agency needs." },
  { title: "Data Science", desc: "Advanced analytics and data-driven decision making." },
  { title: "AI Agents", desc: "Autonomous agents that automate complex workflows." },
  { title: "Model Training and Deploy", desc: "Build, train, and deploy AI using the best technology stack." },
];

const AISection: React.FC = () => (
  <section id="ai" className="section-padding bg-dark-100 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px]" />
    <div className="max-w-7xl mx-auto relative z-10">
      <SectionHeading label="Artificial Intelligence" title="AI Solutions That Transform" description="Our team of AI scientists builds and deploys cutting-edge solutions." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 flex items-start space-x-4 group hover:border-accent-blue/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue/20 transition">
              <span className="text-accent-blue font-bold text-lg">{i + 1}</span>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AISection;
