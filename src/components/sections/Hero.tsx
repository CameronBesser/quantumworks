import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-200 to-dark" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px]" />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px]" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
    </div>
    <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-8">
          Women-Owned Small Business (WOSB)
        </span>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AI, Cyber &amp; <span className="gradient-text">Software Solutions</span><br /> for Government
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          We offer a spectrum of AI solutions that automate and unlock new levels of productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="#services">Explore Solutions</Button>
          <Button variant="outline" size="lg" href="#contact">Contact Us</Button>
        </div>
      </motion.div>
    </div>
    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-accent-blue rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default Hero;
