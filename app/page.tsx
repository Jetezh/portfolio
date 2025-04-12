'use client'

import About from "@/components/About";
import EducationSections from "@/components/EducationSections";
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
      </main>
      <footer>

      </footer>
    </>
  );
}
