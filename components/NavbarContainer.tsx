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
            width={300}
            height={300}
            src={theme === "light" ? assets.logo1 : assets.logo2}
          />
          <NavItems className="text-[5rem]" items={navItems} />
          <div className="flex items-center gap-4">
            <ThemeSwitch />
          </div>
        </NavBody>

        {/* mobile navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo
              width={200}
              height={200}
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
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                {theme === "light" ? "Light" : "Dark"}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarContainer;
