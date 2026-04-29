import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const Partners: React.FC = () => (
  <section className="section-padding bg-dark-100">
    <div className="max-w-7xl mx-auto">
      <SectionHeading label="Partners" title="Our Trusted Partners" description="We work with top partners to fulfill a range of requirements." />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex items-center justify-center h-24 opacity-50 hover:opacity-100 transition-opacity">
            <span className="text-gray-500 font-heading font-semibold">Partner {i + 1}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
