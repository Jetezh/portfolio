'use client'

import About from "@/components/About";
import EducationSections from "@/components/EducationSections";
import Hero from "@/components/Hero";
import NavbarContainer from "@/components/NavbarContainer";

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
      </main>
      <footer>

      </footer>
    </>
  );
}
