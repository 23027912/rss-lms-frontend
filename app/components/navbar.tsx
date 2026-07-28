/****************************************************************************************************
  This creates the narbar, pages in the top navigation, tottgle hamburger menu
*****************************************************************************************************/

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper array to keep links structured and DRY (Don't Repeat Yourself)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Feeds / Posts", href: "/feeds" },
    { name: "Settings", href: "/settings" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link 
            href="/" 
            className="text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400"
            onClick={closeMenu}
          >
            RSS ↔ LMS Hub
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive 
                      ? "text-blue-600 dark:text-blue-400 font-semibold" 
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Accessible Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex h-6 w-6 flex-col justify-between p-0.5 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle Navigation Menu"
          >
            <span 
              className={`h-0.5 w-full bg-slate-800 transition-all duration-300 dark:bg-slate-200 ${
                isOpen ? "translate-y-[9px] rotate-45" : ""
              }`} 
            />
            <span 
              className={`h-0.5 w-full bg-slate-800 transition-all duration-300 dark:bg-slate-200 ${
                isOpen ? "opacity-0" : ""
              }`} 
            />
            <span 
              className={`h-0.5 w-full bg-slate-800 transition-all duration-300 dark:bg-slate-200 ${
                isOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`} 
            />
          </button>
        </div>

        {/* Mobile Navigation Drawer with Hide/Show Behavior */}
        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "mt-4 max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-2 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-sm font-medium transition-colors duration-200 px-2 py-1 rounded-md ${
                    isActive 
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 font-semibold" 
                      : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}