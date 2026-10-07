"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

function useNycTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 1_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const time = useNycTime();

  // Once the page scrolls, the nav collapses to the active section so it
  // doesn't sit on top of content; hovering or tabbing in expands it again.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMenuOpen(false);
  };

  return (
    <>
      {/* Difference blend keeps the header legible over paper, night and plates */}
      <header className="fixed inset-x-0 top-0 z-[999] text-white mix-blend-difference pointer-events-none">
        <div className="mx-auto max-w-page px-5 sm:px-8 pt-5 sm:pt-6 grid grid-cols-12 gap-x-5 label">
          <Link
            href="#home"
            onClick={() => handleLinkClick("Home")}
            className="col-span-6 md:col-span-3 pointer-events-auto"
          >
            Dez Calimese
          </Link>
          <p className="hidden md:block md:col-span-3">
            Applied AI
            <br />
            Blockchain Engineer
          </p>
          <p className="hidden md:block md:col-span-3">
            Available for work
            <br />
            New York City{time ? ` ${time}` : ""}
          </p>

          <nav className="group hidden md:block md:col-span-3 self-start pointer-events-auto">
            <ul>
              {links.map((link) => (
                <li
                  key={link.hash}
                  className={clsx(
                    "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    scrolled && activeSection !== link.name
                      ? "max-h-0 opacity-0 group-hover:max-h-[1.2em] group-hover:opacity-100 group-focus-within:max-h-[1.2em] group-focus-within:opacity-100"
                      : "max-h-[1.2em] opacity-100"
                  )}
                >
                  <Link
                    href={link.hash}
                    onClick={() => handleLinkClick(link.name)}
                    className={clsx(
                      "inline-flex items-center gap-2 transition-opacity duration-300",
                      activeSection === link.name
                        ? "opacity-100"
                        : "opacity-45 hover:opacity-100"
                    )}
                  >
                    <span
                      className={clsx(
                        "h-px bg-current transition-all duration-500",
                        activeSection === link.name ? "w-4" : "w-0"
                      )}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            className="md:hidden col-span-6 justify-self-end pointer-events-auto label"
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="theme-dark fixed inset-0 z-[1000] bg-ink-bg text-ink-fg md:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-full flex-col px-5 pt-5 pb-8">
              <div className="label flex justify-between">
                <span>Dez Calimese</span>
                <button type="button" onClick={() => setMenuOpen(false)}>
                  Close
                </button>
              </div>
              <ul className="mt-auto">
                {links.map((link, i) => (
                  <li key={link.hash} className="border-t border-ink-rule">
                    <Link
                      href={link.hash}
                      onClick={() => handleLinkClick(link.name)}
                      className="flex items-baseline justify-between py-2"
                    >
                      <span className="display text-[2.75rem] leading-none">
                        {link.name}
                      </span>
                      <span className="label text-ink-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
