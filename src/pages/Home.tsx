import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import AISection from "../components/sections/AISection";
import CyberSection from "../components/sections/CyberSection";
import AppDevSection from "../components/sections/AppDevSection";
import Highlights from "../components/sections/Highlights";
import Partners from "../components/sections/Partners";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

const Home: React.FC = () => (
  <Layout>
    <Hero />
    <Services />
    <AISection />
    <CyberSection />
    <AppDevSection />
    <Highlights />
    <Partners />
    <FAQ />
    <Contact />
  </Layout>
);

export default Home;