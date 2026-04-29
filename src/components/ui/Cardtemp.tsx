import React from "react";
import { motion } from "framer-motion";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`glass-card p-6 md:p-8 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-lg hover:shadow-accent-blue/10 ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;