"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-3xl mx-auto px-4 scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>

      <div className="space-y-6 swiss-body text-swiss-text-secondary leading-relaxed">
        <p>
          I&apos;m a blockchain engineer with{" "}
          <span className="text-swiss-text font-medium">5 years</span> of
          experience and founding roles at early-stage companies. My work spans{" "}
          <span className="text-swiss-text font-medium">
            ERC-4626 vault architectures
          </span>
          , multi-chain AI agent systems, perpetual futures platforms on
          Hyperliquid, and cross-chain transaction infrastructure built on
          threshold cryptography.
        </p>

        <p>
          As a <span className="text-swiss-text font-medium">Founding Engineer</span>{" "}
          at Omo Protocol, I led smart contract development, frontend
          engineering, and AI agent integrations — work that helped secure over{" "}
          <span className="text-swiss-text font-medium">$1M in pre-seed</span>{" "}
          funding. I recently completed the{" "}
          <span className="text-swiss-text font-medium">
            Rektoff × Solana Foundation Rust Security Bootcamp
          </span>
          , adding formal Solana/Anchor audit methodology to a background in
          smart-contract security and full-stack development.
        </p>

        <p>
          What drives me is taking products from zero to one under ambiguity —
          and the moment a complex solution clicks into place. Outside of
          engineering I analyze DeFi markets, make music, and explore{" "}
          <span className="text-swiss-text font-medium">
            audioreactive and 3D art
          </span>
          .
        </p>
      </div>
    </motion.section>
  );
}
