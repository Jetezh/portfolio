"use client"

import React, { useState } from 'react'
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

const NavbarContainer = () => {
  const navItems = [
    {
      name: "HOME",
      link: "#",
    },
    {
      name: "ABOUT ME",
      link: "#about-me",
    },
    {
      name: "PORTFOLIO",
      link: "#portfolio",
    },
    {
      name: "CONTACT",
      link: "#contact",
    },
    
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='relative w-full'>
      <Navbar>
        {/* desktop navigation */}
        <NavBody className='text-[2rem]'>
          <NavbarLogo />
          <NavItems className='text-[3rem]' items={navItems} />
          <div className='flex items-center gap-4'>
            <NavbarButton className='text-[2.5rem] font-medium' variant='primary' >Dark</NavbarButton>
          </div>
        </NavBody>

        {/* mobile navigation */}
        <MobileNav>
        <MobileNavHeader>
            <NavbarLogo />
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
                Dark
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}

export default NavbarContainer