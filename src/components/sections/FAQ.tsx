import React from "react";
import SectionHeading from "../ui/SectionHeading";
import AccordionItem from "../ui/AccordionItem";

const faqData = [
  {
    question: "Is QuantumWorks a U.S. company?",
    answer: "Yes, we are a Women-Owned Small Business (WOSB) based in the United States.",
  },
  {
    question: "What AI services do you offer?",
    answer: "We offer LLMs, data science, AI Agents, model training, and custom AI apps.",
  },
  {
    question: "What cybersecurity capabilities do you provide?",
    answer: "Post-Quantum Crypto, pen testing, phishing solutions, cyber audits, and threat detection.",
  },
  {
    question: "Do you work with government agencies?",
    answer: "Yes, we specialize in Federal, State, and Local government solutions.",
  },
  {
    question: "Can you build custom applications?",
    answer: "Absolutely. We provide end-to-end app development with modern UI/UX.",
  },
];

const FAQ: React.FC = () => (
  <section id="faq" className="section-padding relative">
    <div className="max-w-3xl mx-auto">
      <SectionHeading label="FAQ" title="Frequently Asked Questions" />
      {faqData.map((item, i) => (
        <AccordionItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  </section>
);

export default FAQ;