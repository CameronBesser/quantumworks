import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contact" className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[150px]" />
      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading
          label="Get in Touch"
          title="Lets Build Something Together"
          description="Ready to transform your operations? Reach out to us."
        />
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={submit}
          className="glass-card p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handle}
                required
                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handle}
                required
                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Organization</label>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handle}
              className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition"
              placeholder="Your organization"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              required
              rows={5}
              className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;