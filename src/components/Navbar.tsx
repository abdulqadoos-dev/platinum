"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-50 py-6 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white  via-white/75 to-transparent backdrop-blur-xs">
        <div className="flex items-center justify-between">
        {/* Logo */}
        <a className="flex items-center " href="/#home" >
          <Image src="/logo.png" width={140} height={45} alt="Platinum Track Services Logo" className="w-28 sm:w-32 lg:w-[140px] h-auto" priority />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-secondary font-medium text-sm">
          {[
            { label: "Services", href: "/#services" },
            { label: "Projects", href: "/#projects" },
            { label: "Safety", href: "/#safety" },
            { label: "Equipments", href: "/#equipments" },
            { label: "About Us", href: "/#about" },
            { label: "Indigenous Engagement", href: "/indigenous-engagement" },
            { label: "Contact Us", href: "/#contact" },
            { label: "Careers", href: "/#careers" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-primary transition"
            >
              {item.label}
            </a>
          ))}
          </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          
          <a
            href="/#contact"
            className="px-6 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm font-medium flex items-center space-x-2 hover:shadow-lg transition"
          >
            <span>Get Quote</span>
            <svg width="21" height="21" fill="none" stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 21 21">
              <path d="M14.4785 10.4999L10.2094 14.769M14.4785 10.4999L10.2094 6.23082M14.4785 10.4999L6.99907 10.5M0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5Z" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-secondary"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation - Full Screen */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`lg:hidden fixed inset-0 bg-white backdrop-blur-xs z-60 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="flex flex-col h-full px-6 py-8 bg-white">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between mb-8 bg-white">
            <Image src="/logo.png" width={120} height={40} alt="Platinum Track Services Logo" className="w-24 sm:w-28 lg:w-[120px] h-auto" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-secondary hover:text-primary transition"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col ">
            {[
              { label: "Home", href: "/#home" },
              { label: "Services", href: "/#services" },
              { label: "Projects", href: "/#projects" },
              { label: "Indigenous Engagement", href: "/indigenous-engagement" },
              { label: "Equipments", href: "/#equipments" },
              { label: "Safety", href: "/#safety" },
              { label: "Careers", href: "/#careers" },
              { label: "About Us", href: "/#about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-4 text-lg font-medium text-secondary hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-auto mb-8">
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full px-6 py-3 border border-secondary rounded-full text-secondary text-sm font-medium hover:bg-secondary hover:text-white transition text-center"
            >
              Get Quote
            </a>
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition"
            >
              <span>Contact Us</span>
              <svg width="21" height="21" fill="none" stroke="#F0F0F0" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 21 21">
                <path d="M14.4785 10.4999L10.2094 14.769M14.4785 10.4999L10.2094 6.23082M14.4785 10.4999L6.99907 10.5M0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </header>
    </>
  );
}
