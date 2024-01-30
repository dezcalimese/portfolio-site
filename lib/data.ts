import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import brxlandingpageImg from "@/public/brx-landing-page.png"
import brxexchangeImg from "@/public/brx-exchange.png";
import mintingmelodiesImg from "@/public/minting-melodies.png";
import rsvpappImg from "@/public/rsvp-app.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamps",
    location: "NuCamp / ConsenSys",
    description:
      "I graduated both NuCamp and ConsenSys bootcamps after 6 months of studying. I then created multiple decentralized applications as personal projects.",
    icon: React.createElement(""),
    date: "2021",
  },
  {
    title: "Chief Technical Officer / Founding Engineer",
    location: "Minting Melodies",
    description:
      "I worked as the Chief Technical Officer and Founding Engineer for Minting Melodies, doing full-stack development.",
    icon: React.createElement(""),
    date: "2022 - 2023",
  },
  {
    title: "Blockchain Developer",
    location: "Bricks Exchange",
    description:
      "I'm now a full-stack blockchain developer working as the lead frontend engineer for Bricks Exchange. My stack includes React, Next.js, JavaScript TypeScript, and Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(""),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bricks Exchange Landing Page",
    description:
      "Landing page for Bricks Exchange. Users can check out information about the company.",
    tags: ["React", "Next.js", "Tailwind", "Wagmi", "Viem"],
    imageUrl: brxlandingpageImg,
  },
  {
    title: "Bricks Decentralized Exchange",
    description:
      "UI for the Bricks decentralized exchange. Users can swap USDC for BRX, check their balances, stake their tokens and contact support if needed.",
    tags: ["React", "Next.js", "Tailwind", "Wagmi", "Viem"],
    imageUrl: brxexchangeImg,
  },
  {
    title: "Minting Melodies",
    description:
      "UI for the marketplace enabling users to download NFT collections of artists' songs.",
    tags: ["React", "Next.js", "Tailwind", "Redux", "Thirdweb"],
    imageUrl: mintingmelodiesImg,
  },
  {
    title: "RSVP Decentralized App Project",
    description:
      "UI for the page enabling users to create and RSVP to events.",
    tags: ["React", "Next.js", "Tailwind", "Redux", "Wagmi", "Ethers"],
    imageUrl: rsvpappImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Express",
  "Mocha",
  "Truffle",
  "Hardhat",
  "Foundry",
  "Thirdweb",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Solidity",
  "Rust",
  "Move",
  "Docker",
  "AWS"
] as const;
