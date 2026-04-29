import React from "react";
import { motion } from "framer-motion";

interface ButtonProps { children: React.ReactNode; variant?: "primary" | "outline"; size?: "sm" | "md" | "lg"; href?: string; onClick?: () => void; }

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "md", href, onClick }) => {
  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300";
  const v: Record<string, string> = { primary: "bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:shadow-lg hover:shadow-accent-blue/25", outline: "border-2 border-accent-blue text-accent-blue hover:bg-accent-blue/10" };
  const s: Record<string, string> = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
  const Tag = href ? "a" : "button";
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Tag href={href} onClick={onClick} className={`${base} ${v[variant!]} ${s[size!]}`}>{children}</Tag>
    </motion.div>
  );
};

export default Button;
