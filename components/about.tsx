"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {" "}
        After seeing how powerful and creative decentralized applications could
        become, <span className="font-medium"></span>I decided to pursue my
        passion for programming. I enrolled in two coding bootcamps
        simultaneously; NuCamp's{" "}
        <span className="font-medium">
          backend development using Python, SQL, and DevOps
        </span>{" "}
        bootcamp and ConsenSys Academy's{" "}
        <span className="font-medium">Blockchain Developer</span> bootcamp.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, JavaScript/TypeScript, and Solidity
        </span>
        . I am also familiar with Python, SQL, Rust and Move. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy analyzing
        the crypto markets, diving deep into DeFi metrics, creating music,
        playing basketball, watching anime, reading copius amounts of manga,
        researching different types of architecture, and playing video games. I
        also enjoy <span className="font-medium">learning new things</span>. I
        am currently learning about{" "}
        <span className="font-medium">audioreactive art</span> and{" "}
        <span className="font-medium">3D art</span>.
      </p>
    </motion.section>
  );
}
