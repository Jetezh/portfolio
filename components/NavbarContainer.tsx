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

const NavbarContainer = () => {
  const navItems = [
    { name: "HOME", link: "#" },
    { name: "ABOUT ME", link: "#about-me" },
    { name: "PORTFOLIO", link: "#portfolio" },
    { name: "CONTACT", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const html = document.documentElement;

    const updateTheme = () => {
      if (html.classList.contains("dark")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    // Inisialisasi saat mount
    updateTheme();

    // Observe perubahan class pada <html>
    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

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
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-[var(--primary-font-color)]"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-[var(--bg-navbar)] flex flex-row text-[1.5rem] text-[var(--primary-font-color)] gap-3 font-normal items-center justify-center"
              >
                <ThemeSwitch />{theme === "light" ? "dark mode" : "light mode"}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarContainer;
