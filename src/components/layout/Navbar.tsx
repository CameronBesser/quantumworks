import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#ai" },
  { label: "Cybersecurity", href: "#cyber" },
  { label: "App Dev", href: "#appdev" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-dark/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <span className="font-heading font-bold text-xl">Quantum<span className="text-accent-blue">Works</span></span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-gray-300 hover:text-accent-blue transition text-sm font-medium">{item.label}</a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-blue/25 transition-all">Get Started</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-100 border-t border-white/10 px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-gray-300 hover:text-accent-blue py-2" onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
