"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-4xl mx-auto px-4 sm:mb-40 scroll-mt-[100rem]"
    >
      <div className="flex flex-col items-center text-center">
        {/* Location / coordinate tag — ties to the topographic NYC map */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-swiss-border bg-swiss-bg/50 backdrop-blur-sm px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="font-mono text-xs tracking-wider text-swiss-text-secondary">
            NEW YORK, NY · 40.7128° N, 74.0060° W
          </span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <div className="relative">
            <Image
              src="/yuji2.jpeg"
              alt="Dez Calimese"
              width={120}
              height={120}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-4 border-swiss-card shadow-lg"
            />
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-swiss-bg" />
          </div>
        </motion.div>

        {/* Name & Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="swiss-heading text-5xl sm:text-6xl md:text-7xl mb-4">
            Dez Calimese
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-swiss-accent" />
            <span className="swiss-label text-swiss-accent">
              Blockchain Security Engineer · Full-Stack Builder
            </span>
            <span className="h-px w-8 bg-swiss-accent" />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="swiss-body text-lg sm:text-xl text-swiss-text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          I build and audit production-grade DeFi infrastructure across{" "}
          <span className="text-swiss-text font-medium">EVM and Solana</span> —
          from <span className="text-swiss-text font-medium">ERC-4626 vaults</span>{" "}
          and Hyperliquid perps to multi-chain AI agents secured with threshold
          cryptography.{" "}
          <span className="text-swiss-text font-medium">5 years</span> taking
          products from zero to one under ambiguity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 bg-swiss-text text-swiss-bg rounded-full font-medium hover:bg-swiss-accent hover:text-white transition-all duration-300 hover:scale-105"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Get in touch
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            className="group flex items-center gap-2 px-7 py-3.5 bg-swiss-card border border-swiss-border rounded-full font-medium hover:border-swiss-accent hover:text-swiss-accent transition-all duration-300 hover:scale-105"
            href="/dez-calimese-resume.pdf"
            download
          >
            Resume
            <HiDownload className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center gap-3 mt-6"
        >
          <a
            className="w-11 h-11 flex items-center justify-center rounded-full bg-swiss-card border border-swiss-border text-swiss-text-secondary hover:border-swiss-accent hover:text-swiss-accent transition-all duration-300 hover:scale-110"
            href="https://www.linkedin.com/in/dezcalimese/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin className="w-5 h-5" />
          </a>
          <a
            className="w-11 h-11 flex items-center justify-center rounded-full bg-swiss-card border border-swiss-border text-swiss-text-secondary hover:border-swiss-accent hover:text-swiss-accent transition-all duration-300 hover:scale-110"
            href="https://github.com/dezcalimese"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <BsGithub className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
