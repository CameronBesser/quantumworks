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
import Career from "../components/sections/Career";

const Home: React.FC = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="hero">
        <Hero />

        {/* CTA to Career */}
        <div style={{ marginTop: "20px" }}>
          <a href="#career" className="cta-link">
            Join Our Team →
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* GROUPED SOLUTIONS (IMPORTANT: matches navbar "#solutions") */}
      <section id="solutions">
        <AISection />
        <CyberSection />
        <AppDevSection />
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights">
        <Highlights />
      </section>

      {/* PARTNERS */}
      <section id="partners">
        <Partners />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* CAREER (NOW FULLY ACCESSIBLE) */}
      <section id="career">
        <Career />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default Home;