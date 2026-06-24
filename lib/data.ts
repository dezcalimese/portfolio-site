import nekoImg from "@/public/neko-app.png";
import bricksRealEstateImg from "@/public/bricks-real-estate.png";
import brxexchangeImg from "@/public/brx-exchange.png";
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
    name: "Security",
    hash: "#security",
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
    title: "Founding Engineer",
    company: "Omo Protocol",
    description:
      "Architected ERC-4626 standardized vaults in Solidity + Foundry and a spot/perpetuals trading platform on Hyperliquid. Built a multi-chain AI agent stack (ElizaOS Lit plugin, Coinbase MPC wallets, Nucleus SDK). Tenderly virtual testnets lifted testing efficiency 50% — work that helped secure $1M+ in pre-seed.",
    date: "2023 — 2025",
    type: "work" as const,
  },
  {
    title: "Lead Blockchain Developer",
    company: "Bricks Exchange",
    description:
      "Principal engineer over a four-person frontend team. Onboarded and mentored three junior devs through code review and pairing, cutting delivery timelines 25%. Shipped production dApps with Next.js, Wagmi, Viem, and TypeScript.",
    date: "2022 — 2024",
    type: "work" as const,
  },
  {
    title: "Chief Technology Officer",
    company: "Minting Melodies",
    description:
      "Owned end-to-end blockchain delivery for an NFT music platform. Automated 80% of royalty distribution via smart contracts and stood up test-automation pipelines for reliable releases.",
    date: "2022 — 2023",
    type: "work" as const,
  },
  {
    title: "Rust Security Bootcamp",
    company: "Rektoff × Solana Foundation",
    description:
      "Completed an intensive Solana/Anchor audit program, adding formal audit methodology to a foundation in smart-contract security and full-stack engineering. Capstone: the MetaLend security audit.",
    date: "2026",
    type: "education" as const,
  },
] as const;

export const projectsData = [
  {
    title: "Neko DeFi",
    description:
      "DeFi protocol interface featuring token swaps, perpetual trading, vault deposits, and portfolio tracking. Modern dark UI with real-time on-chain data.",
    tags: ["React", "Next.js", "TypeScript", "Web3"],
    imageUrl: nekoImg,
    span: 2,
    link: null,
  },
  {
    title: "Tessera",
    description:
      "Solo-built multimodal AI agent that ingests URLs, screenshots, YouTube, and live market feeds, extracts entities with Gemini 3.1 Pro, and renders an interactive force-directed knowledge graph. Local-first via IndexedDB with Supabase backup. Built at the Cerebral Valley × Vercel × DeepMind hackathon, NYC.",
    tags: ["Next.js", "Gemini 3.1 Pro", "Sigma.js", "Supabase", "WebGL"],
    imageUrl: null,
    span: 1,
    link: "https://github.com/dezcalimese",
  },
  {
    title: "Bricks Exchange MVP",
    description:
      "Decentralized exchange UI for swapping USDC for BRX, staking tokens, and managing balances on-chain.",
    tags: ["Next.js", "Wagmi", "Viem", "Tailwind"],
    imageUrl: brxexchangeImg,
    span: 1,
    link: null,
  },
  {
    title: "Bricks Real Estate",
    description:
      "Fractional real estate trading platform letting users buy and sell shares of properties on-chain with full wallet integration.",
    tags: ["React", "Next.js", "Wagmi", "Viem"],
    imageUrl: bricksRealEstateImg,
    span: 2,
    link: "https://www.bricks.realestate",
  },
  {
    title: "Minting Melodies",
    description:
      "NFT marketplace for artists to sell downloadable song collections as digital collectibles, with automated royalty splits.",
    tags: ["React", "Next.js", "Redux", "Thirdweb"],
    imageUrl: mintingmelodiesImg,
    span: 2,
    link: null,
  },
  {
    title: "RSVP dApp",
    description:
      "Decentralized event management app for creating and RSVPing to events fully on-chain.",
    tags: ["React", "Next.js", "Wagmi", "Ethers"],
    imageUrl: rsvpappImg,
    span: 1,
    link: null,
  },
] as const;

export const securityData = [
  {
    title: "MetaLend Security Audit",
    context: "Rektoff × Solana Foundation Bootcamp — Capstone",
    description:
      "Audited a Solana lending protocol and surfaced high-severity vulnerabilities across oracle integrity, borrow, withdraw, and liquidation instructions. Delivered findings with working Anchor proof-of-concepts confirming exploitability.",
    findings: [
      "Oracle integrity manipulation",
      "Borrow / withdraw accounting flaws",
      "Liquidation instruction abuse",
    ],
    tags: ["Solana", "Anchor", "Rust", "Oracle Security", "PoC"],
    date: "2026",
    note: "Full report available on request",
  },
] as const;

export const skillCategories = [
  {
    label: "Smart Contracts & Security",
    skills: [
      "Solidity",
      "Foundry",
      "Slither",
      "Echidna",
      "Mythril",
      "Anchor",
      "Fuzzing / Invariants",
      "MEV Protection",
      "Threat Modeling",
      "Gas Optimization",
    ],
  },
  {
    label: "Languages",
    skills: ["TypeScript", "Rust", "Python", "Solidity", "Move", "Cairo", "SQL"],
  },
  {
    label: "Multi-Chain Infrastructure",
    skills: [
      "Lit Protocol",
      "Threshold Crypto",
      "Cross-Chain Messaging",
      "ERC-4626 Vaults",
      "Hyperliquid",
      "Morpho",
      "Uniswap",
      "Subgraphs",
      "Tenderly",
    ],
  },
  {
    label: "Frontend & Tooling",
    skills: [
      "Next.js",
      "React",
      "React Native",
      "Wagmi",
      "Viem",
      "Tailwind",
      "Docker",
      "AWS",
      "CI/CD",
    ],
  },
] as const;

export const contributionsData = [
  {
    title: "Lit Protocol Plugin",
    repo: "elizaOS/eliza",
    description:
      "Multi-chain transactions plugin leveraging Lit Protocol's Programmable Key Pairs (PKPs) and threshold cryptography — enabling secure, decentralized key management for AI agents across EVM and Solana. Built for Omo's agent stack and merged into the open-source ElizaOS framework.",
    tags: ["TypeScript", "Lit Protocol", "EVM", "Solana", "Threshold Crypto"],
    prNumber: 2703,
    prLink: "https://github.com/elizaOS/eliza/pull/2703",
    merged: true,
  },
] as const;
