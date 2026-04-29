import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const AppDevSection: React.FC = () => (
  <section id="appdev" className="section-padding bg-dark-100 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-medium mb-4">App Development</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">End-to-End Application Development</h2>
        <p className="text-gray-400 leading-relaxed mb-6">Modern UI/UX experiences built with cutting-edge technologies.</p>
        <ul className="space-y-3 mb-8">
          {["Modern UI/UX", "Full-Stack Development", "Cloud-Native Architecture", "Scalable and Secure"].map((f) => (
            <li key={f} className="flex items-center text-gray-300"><span className="w-2 h-2 bg-accent-cyan rounded-full mr-3" />{f}</li>
          ))}
        </ul>
        <Button variant="primary" href="#contact">Start a Project</Button>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
        <div className="glass-card p-8">
          <div className="bg-dark rounded-xl p-6 font-mono text-sm">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <code className="text-gray-300">
              <span className="text-accent-purple">const</span> <span className="text-accent-blue">solution</span> = <span className="text-accent-purple">await</span> <span className="text-yellow-400">buildApp</span>({"{"}<br/>
              {"  "}<span className="text-accent-cyan">stack</span>: <span className="text-green-400">&apos;modern&apos;</span>,<br/>
              {"  "}<span className="text-accent-cyan">secure</span>: <span className="text-accent-blue">true</span>,<br/>
              {"  "}<span className="text-accent-cyan">scalable</span>: <span className="text-accent-blue">true</span>,<br/>
              {"}"});
            </code>
          </div>
        </div>
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-cyan/10 rounded-full blur-[80px]" />
      </motion.div>
    </div>
  </section>
);

export default AppDevSection;
