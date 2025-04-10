'use client'

import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
      </main>
      <footer>

      </footer>
    </>
  );
}
