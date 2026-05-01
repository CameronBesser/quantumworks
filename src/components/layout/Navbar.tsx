// src/components/layout/Navbar.tsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Services", href: "#services", isHash: true },
  { label: "Solutions", href: "#solutions", isHash: true },
  { label: "FAQ", href: "#faq", isHash: true },
  { label: "Contact", href: "#contact", isHash: true },
  { label: "Career", href: "/career", isHash: false },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash links (for homepage sections)
  const handleHashScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);

    // If not on homepage, navigate to homepage first
    if (!isHomePage) {
      window.location.href = `/${href}`;
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    const yOffset = -80;
    const y =
      target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo - Links to homepage */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <span className="font-heading font-bold text-xl">
            Quantum<span className="text-accent-blue">Works</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isHash ? (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleHashScroll(e, item.href)}
                className="text-sm font-medium transition text-gray-300 hover:text-accent-blue cursor-pointer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium transition text-gray-300 hover:text-accent-blue"
              >
                {item.label}
              </Link>
            )
          ))}

          <Link
            to="/career"
            className="px-5 py-2.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full text-white text-sm font-semibold hover:shadow-lg transition-all"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-100 border-t border-white/10 px-4 py-6 space-y-4"
          >
            {navItems.map((item) => (
              item.isHash ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleHashScroll(e, item.href)}
                  className="block text-gray-300 hover:text-accent-blue py-2 text-sm cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-gray-300 hover:text-accent-blue py-2 text-sm"
                >
                  {item.label}
                </Link>
              )
            ))}

            <Link
              to="/career"
              onClick={() => setOpen(false)}
              className="block text-center mt-4 px-5 py-3 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full text-white font-semibold"
            >
              Join Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;