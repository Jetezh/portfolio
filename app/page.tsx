'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import EducationSections from "@/components/EducationSections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarContainer from "@/components/NavbarContainer";
import PortfolioSections from "@/components/PortfolioSections";

export default function Home() {
  return (
    <>
      <header>
        <NavbarContainer />
      </header>
      <main>
        <Hero />
        <About />
        <EducationSections />
        <PortfolioSections />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
