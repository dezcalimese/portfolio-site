import quincyLabsImg from "@/public/quincy-labs-oct26.png";
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
    title: "Founder",
    company: "Quincy Labs",
    description:
      "Co-founded an AI and blockchain research collective and studio building agent-driven products across DeFi, cryptography, and applied AI. Built MCP integrations surfacing insights from a 500+ channel, 8-year research base to power agentic workflows, and maintain deployment infrastructure across the collective (Docker, AWS, CI/CD). Contributing engineering and leading UI/UX on Emergency Passport (Red Cell Systems), an AI-native app surfacing critical patient context during sickle cell crises.",
    date: "2018 — Present",
    type: "work" as const,
  },
  {
    title: "Founding Engineer",
    company: "Omo Protocol",
    description:
      "Architected ERC-4626 standardized vaults in Solidity + Foundry and a spot/perpetuals trading platform on Hyperliquid. Built a multi-chain AI agent stack (ElizaOS Lit plugin, Coinbase MPC wallets, Nucleus SDK). Tenderly virtual testnets lifted testing efficiency 50% — work that helped secure $1M+ in pre-seed.",
    date: "2023 — 2025",
    type: "work" as const,
  },
  {
    title: "Lead Frontend Developer",
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
    // Earlier bootcamps, newest first (from LinkedIn Education)
    previously: [
      { name: "RareSkills Advanced Solidity", year: "2025–26" },
      { name: "Encode Club Expert Solidity", year: "2023" },
      { name: "Encode Club Solidity", year: "2023" },
      { name: "Ackee Winter School of Solana", year: "2023" },
      { name: "Encode Club Algorand Camp", year: "2022–23" },
      { name: "Encode Club Cairo Camp", year: "2022" },
      { name: "StarkNet Basecamp", year: "2022" },
      { name: "Consensys Academy Ethereum Development", year: "2021–22" },
      { name: "Secureum Smart Contract Auditing", year: "2021" },
      { name: "Nucamp Python, SQL & DevOps", year: "2021" },
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Quincy Labs",
    description:
      "Research lab site for an AI infrastructure company building agent-native systems across memory, inference, GPU/edge workloads, blockchain settlement, and healthcare intelligence.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: quincyLabsImg,
    span: 2,
    link: "https://www.quincylabs.org",
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
    title: "Neko DeFi",
    description:
      "DeFi protocol interface featuring token swaps, perpetual trading, vault deposits, and portfolio tracking. Modern dark UI with real-time on-chain data.",
    tags: ["React", "Next.js", "TypeScript", "Web3"],
    imageUrl: nekoImg,
    span: 2,
    link: null,
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
    title: "RSVP dApp",
    description:
      "Decentralized event management app for creating and RSVPing to events fully on-chain.",
    tags: ["React", "Next.js", "Wagmi", "Ethers"],
    imageUrl: rsvpappImg,
    span: 1,
    link: null,
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
] as const;

export const securityData = [
  {
    title: "MetaLend Security Audit",
    context: "Rektoff × Solana Foundation Bootcamp — Capstone",
    description:
      "Audited a Solana lending protocol and surfaced multiple high-severity vulnerabilities, each delivered with a working Anchor proof-of-concept confirming exploitability.",
    tags: ["Solana", "Anchor", "Rust", "DeFi Security", "PoC"],
    date: "2026",
    note: "Full report available on request",
  },
] as const;

export const skillCategories = [
  // The first two categories share a column in the Toolkit section
  {
    label: "AI Tools",
    skills: ["Claude Code", "Codex", "Cursor", "Muse", "Grok"],
  },
  {
    label: "Agents & Protocols",
    skills: ["MCP", "LangChain", "ElizaOS", "Hermes Agent", "OpenClaw"],
  },
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

// Each section's NYC plate. `theme` follows the plate's mean luminance
// (measured on a 0–255 scale; >= 150 reads as paper, below as night).
export const plates = {
  Home: { src: "/nyc-pics/nyc-7.webp", number: "VII", theme: "light" },
  About: { src: "/nyc-pics/nyc-6.webp", number: "VI", theme: "dark" },
  Projects: { src: "/nyc-pics/nyc-2.webp", number: "II", theme: "light" },
  Security: { src: "/nyc-pics/nyc-4.webp", number: "IV", theme: "dark" },
  Skills: { src: "/nyc-pics/nyc-3.webp", number: "III", theme: "light" },
  Experience: { src: "/nyc-pics/nyc-5.webp", number: "V", theme: "dark" },
  OSS: { src: "/nyc-pics/nyc-1.webp", number: "I", theme: "dark" },
  Contact: { src: "/nyc-pics/nyc-8.webp", number: "VIII", theme: "dark" },
} as const;

// Open source tools Dez builds and maintains. The "Tools" block in the Open
// Source section renders only once this has entries.
export type OssTool = {
  title: string;
  repo: string; // e.g. "dezcalimese/tool-name"
  description: string;
  tags: string[];
  link: string;
};

export const toolsData: OssTool[] = [];
