import React from "react";
import { motion } from "framer-motion";

const SectionHeading: React.FC<{ label?: string; title: string; description?: string }> = ({
  label,
  title,
  description,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    {label && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
        {label}
      </span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;