import React from "react";
import nekoImg from "@/public/neko-app.png";
import bricksRealEstateImg from "@/public/bricks-real-estate.png";
import brxexchangeImg from "@/public/brx-exchange.png";
import brxlandingpageImg from "@/public/brx-landing-page.png";
import mintingmelodiesImg from "@/public/minting-melodies.png";
import rsvpappImg from "@/public/rsvp-app.png";

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
    name: "OSS",
    hash: "#contributions",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bootcamps",
    company: "NuCamp / ConsenSys",
    description:
      "Completed intensive full-stack and blockchain development programs. Built multiple decentralized applications as capstone projects.",
    date: "2021",
    type: "education" as const,
  },
  {
    title: "CTO / Founding Engineer",
    company: "Minting Melodies",
    description:
      "Led technical architecture and full-stack development for an NFT music marketplace. Built smart contracts and React frontend.",
    date: "2022 - 2023",
    type: "work" as const,
  },
  {
    title: "Lead Blockchain Developer",
    company: "Bricks Exchange",
    description:
      "Led a four-person frontend team building blockchain applications, mentoring junior developers and collaborating cross-functionally while managing project timelines using agile methodologies.",
    date: "2022 - 2024",
    type: "work" as const,
  },
  {
    title: "Founding Engineer",
    company: "Omo Protocol",
    description:
      "Built ERC4626 vaults and AI agent infrastructure across multiple chains, developing smart contracts, a cross-chain plugin for ElizaOS, and automation scripts in Solidity, Python, and Rust.",
    date: "2023 - 2025",
    type: "work" as const,
  },
] as const;

export const projectsData = [
  {
    title: "Neko DeFi",
    description:
      "DeFi protocol interface featuring token swaps, perpetual trading, vault deposits, and portfolio tracking. Modern dark UI with real-time data.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Web3"],
    imageUrl: nekoImg,
    featured: true,
    link: "https://app.neko.fun",
  },
  {
    title: "Bricks Real Estate",
    description:
      "Fractional real estate trading platform enabling users to buy and sell shares of properties on-chain with wallet integration.",
    tags: ["React", "Next.js", "Tailwind", "Wagmi", "Viem"],
    imageUrl: bricksRealEstateImg,
    featured: true,
    link: "https://www.bricks.realestate",
  },
  {
    title: "Bricks Exchange MVP",
    description:
      "Decentralized exchange UI for swapping USDC for BRX, staking tokens, and managing balances.",
    tags: ["React", "Next.js", "Tailwind", "Wagmi", "Viem"],
    imageUrl: brxexchangeImg,
    featured: false,
    link: null,
  },
  {
    title: "RSVP dApp",
    description:
      "Decentralized event management app for creating and RSVPing to events on-chain.",
    tags: ["React", "Next.js", "Wagmi", "Ethers"],
    imageUrl: rsvpappImg,
    featured: false,
    link: null,
  },
  {
    title: "Minting Melodies",
    description:
      "NFT marketplace for artists to sell downloadable song collections as digital collectibles.",
    tags: ["React", "Next.js", "Redux", "Thirdweb"],
    imageUrl: mintingmelodiesImg,
    featured: false,
    link: null,
  },
  {
    title: "Bricks Landing",
    description:
      "Marketing landing page for Bricks Exchange with company information and features.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: brxlandingpageImg,
    featured: false,
    link: "https://brx.exchange",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Solidity",
  "Rust",
  "Move",
  "Node.js",
  "Python",
  "Tailwind",
  "GraphQL",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
  "Hardhat",
  "Foundry",
  "Wagmi",
  "Viem",
  "Thirdweb",
  "Framer Motion",
] as const;

export const contributionsData = [
  {
    title: "Lit Protocol Plugin",
    repo: "elizaOS/eliza",
    description:
      "Built a comprehensive plugin enabling blockchain interactions through Lit Protocol's Programmable Key Pairs (PKPs). Features dual-chain wallet management for EVM and Solana, secure transaction signing, and automated PKP lifecycle management.",
    tags: ["TypeScript", "Lit Protocol", "EVM", "Solana"],
    prNumber: 2703,
    prLink: "https://github.com/elizaOS/eliza/pull/2703",
    merged: true,
  },
] as const;
