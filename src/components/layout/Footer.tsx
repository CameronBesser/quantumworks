import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="bg-dark-100 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
      
      {/* Brand */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <span className="font-heading font-bold text-xl">
            Quantum<span className="text-accent-blue">Works</span>
          </span>
        </div>
        <p className="text-gray-400 text-sm">
          Building AI, Cyber, and Software Applications for Government.
        </p>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#ai" className="hover:text-accent-blue transition">AI Solutions</a></li>
          <li><a href="#cyber" className="hover:text-accent-blue transition">Cybersecurity</a></li>
          <li><a href="#appdev" className="hover:text-accent-blue transition">App Development</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#faq" className="hover:text-accent-blue transition">FAQ</a></li>
          <li><a href="#contact" className="hover:text-accent-blue transition">Contact</a></li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h4 className="font-heading font-semibold text-white mb-4">Connect</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-accent-blue transition">
            <FaLinkedin size={22} />
          </a>
          <a href="#" className="text-gray-400 hover:text-accent-blue transition">
            <FaTwitter size={22} />
          </a>
          <a href="#" className="text-gray-400 hover:text-accent-blue transition">
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 text-center text-gray-500 text-sm py-6">
      2025 QuantumWorks. All rights reserved.
    </div>
  </footer>
);

export default Footer;