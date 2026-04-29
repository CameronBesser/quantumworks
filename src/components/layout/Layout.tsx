import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-dark">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;