"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { ThemeSwitch } from "./ui/switch";
import { assets } from "@/assets/asset";
import { useLocalStorage } from "usehooks-ts";
import Link from "next/link";

// ICONS
const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 24 24" {...props}>
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

const NavbarContainer = () => {
  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT ME", link: "#about-me" },
    { name: "PORTFOLIO", link: "#portfolios" },
    { name: "CONTACT", link: "#contacts" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    const updateTheme = () => {
      if (html.classList.contains("dark")) {
        setTheme("dark");
        setIsDark(true);
      } else {
        setTheme("light");
        setIsDark(false);
      }
    };

    // Initialize on mount
    updateTheme();

    // Observe changes to <html> class
    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [setTheme]);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    html.classList.remove("light", "dark");
    html.classList.add(newTheme);
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* desktop navigation */}
        <NavBody>
          <NavbarLogo
            src={theme === "light" ? assets.logo1 : assets.logo2}
          />
          <NavItems className="lg:text-[2rem] md:text-[1rem] text-[.7rem]" items={navItems} />
          <div className="flex items-center gap-4">
            <ThemeSwitch />
          </div>
        </NavBody>

        {/* mobile navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo
              src={theme === "light" ? assets.logo1 : assets.logo2}
            />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-[var(--bg-mobile-navbar)]"
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-[var(--primary-font-color)]"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={toggleTheme}
                variant="primary"
                className="w-full bg-[var(--bg-navbar)] flex flex-row text-lg md:text-2xl text-[var(--primary-font-color)] gap-3 font-normal items-center justify-center"
              >
                {isDark ? (
                  <SunIcon className="text-yellow-400 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" />
                ) : (
                  <MoonIcon className="text-blue-500 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" />
                )} 
                {theme === "light" ? "dark mode" : "light mode"}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarContainer;
