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
          After discovering the transformative potential of decentralized
          applications, I committed to mastering blockchain development. I
          enrolled in two intensive bootcamps simultaneously:{" "}
          <span className="text-swiss-text font-medium">NuCamp</span> for backend
          development with Python, SQL, and DevOps, and{" "}
          <span className="text-swiss-text font-medium">ConsenSys Academy</span>{" "}
          for blockchain fundamentals.
        </p>

        <p>
          What drives me is the problem-solving aspect of engineering. There's
          nothing quite like the moment a complex solution clicks into place. My
          core stack includes{" "}
          <span className="text-swiss-text font-medium">
            React, Next.js, TypeScript, and Solidity
          </span>
          , complemented by Python, Rust, and Move for systems-level work.
        </p>

        <p>
          Outside of coding, I analyze crypto markets, dive deep into DeFi
          metrics, create music, and explore{" "}
          <span className="text-swiss-text font-medium">
            audioreactive and 3D art
          </span>
          . I'm always learning something new.
        </p>
      </div>
    </motion.section>
  );
}
