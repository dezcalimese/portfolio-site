"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMenuOpen(false);
  };

  return (
    <header className="z-[999] fixed top-0 left-0 right-0 flex justify-center pt-4 sm:pt-6 px-3">
      {/* Desktop / tablet: full pill nav */}
      <motion.nav
        className="hidden md:block px-3 py-2 bg-swiss-bg/70 backdrop-blur-md border border-swiss-border/50 rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <ul className="flex items-center gap-0.5 text-[0.85rem] font-medium text-swiss-text-secondary">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className={clsx(
                  "relative px-3 py-1.5 rounded-full block transition-all duration-200 whitespace-nowrap",
                  {
                    "text-swiss-text": activeSection === link.name,
                    "hover:text-swiss-text": activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 bg-swiss-accent/25 rounded-full -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile: compact toggle + dropdown */}
      <motion.div
        className="md:hidden relative w-full max-w-xs"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="w-full flex items-center justify-between gap-3 px-5 py-2.5 bg-swiss-bg/80 backdrop-blur-md border border-swiss-border/50 rounded-full text-sm font-medium text-swiss-text"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-swiss-accent" />
            {activeSection}
          </span>
          {menuOpen ? (
            <HiXMark className="w-5 h-5 text-swiss-text-secondary" />
          ) : (
            <HiBars3 className="w-5 h-5 text-swiss-text-secondary" />
          )}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 right-0 mt-2 p-2 bg-swiss-bg/95 backdrop-blur-md border border-swiss-border/60 rounded-2xl shadow-xl flex flex-col gap-0.5 origin-top"
            >
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => handleLinkClick(link.name)}
                    className={clsx(
                      "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                      {
                        "bg-swiss-accent/15 text-swiss-text":
                          activeSection === link.name,
                        "text-swiss-text-secondary hover:bg-swiss-card hover:text-swiss-text":
                          activeSection !== link.name,
                      }
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
