"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { plates } from "@/lib/data";
import Image from "next/image";
import { FadeIn, RevealLine } from "./editorial";

const focus = [
  "Agent-driven products",
  "MCP & AI integrations",
  "Smart contracts & vaults",
  "Security audits",
  "DeFi protocols — EVM & Solana",
];

const elsewhere = [
  { label: "Resume", href: "/dez-calimese-resume-fde.pdf", download: true },
  { label: "GitHub", href: "https://github.com/dezcalimese" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dezcalimese/" },
  { label: "Email", href: "mailto:dezcalimese@gmail.com" },
];

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const plate = plates.Home;

  return (
    <section
      ref={ref}
      id="home"
      className={`theme-${plate.theme} bg-ink-bg text-ink-fg`}
    >
      {/* First screen: the plate sits behind the name, washed in paper so the ink reads */}
      <div className="relative overflow-hidden">
        <Image
          src={plate.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--bg) 82%, transparent), color-mix(in srgb, var(--bg) 45%, transparent) 55%, color-mix(in srgb, var(--bg) 30%, transparent))",
          }}
        />
        <div className="relative mx-auto max-w-page px-5 sm:px-8 flex flex-col justify-between md:h-[100svh] md:min-h-[640px] pt-28 sm:pt-32 md:pt-48 pb-6 sm:pb-8">
          {/* Quote + bio, Gareis-style: small at the far left, body from the middle */}
          <div className="grid grid-cols-12 gap-x-5 gap-y-10">
            <FadeIn className="col-span-12 md:col-span-4 flex gap-4">
              <span className="font-serif text-xl leading-none">&ldquo;</span>
              <p className="font-serif italic text-lg leading-[1.15] max-w-[14rem]">
                Agents, protocols, and the infrastructure between them.
              </p>
            </FadeIn>
            <FadeIn
              delay={0.1}
              className="col-span-12 md:col-start-7 md:col-span-5 body-lg"
            >
              Applied AI and blockchain engineer in New York City. Five years taking
              products from zero to one: multi-chain AI agents secured with
              threshold cryptography, ERC-4626 vaults, and security-reviewed
              DeFi integrations across EVM and Solana.
            </FadeIn>
          </div>

          {/* The name is the hero image; focus + links sit in the space beside DEZ */}
          <h1 className="sr-only">Dez Calimese</h1>
          <div className="display uppercase mt-16 text-[19.5vw] md:text-[length:min(19.5vw,17rem,calc((100svh_-_29rem)/1.6))] leading-[0.8]"
          >
            <div className="grid grid-cols-12 gap-x-5 items-center">
              <span aria-hidden className="col-span-12 md:col-span-6">
                <RevealLine onLoad>Dez</RevealLine>
              </span>
              <FadeIn
                delay={0.2}
                className="hidden md:block md:col-span-3 font-sans normal-case tracking-normal body-lg leading-[1.3] pb-[0.08em]"
              >
                <Focus />
              </FadeIn>
              <FadeIn
                delay={0.25}
                className="hidden md:block md:col-span-3 font-sans normal-case tracking-normal body-lg leading-[1.3] pb-[0.08em]"
              >
                <Elsewhere />
              </FadeIn>
            </div>
            <span aria-hidden className="block text-right">
              <RevealLine onLoad delay={0.12}>Calimese</RevealLine>
            </span>
          </div>

          {/* Small screens: lists drop below the name */}
          <div className="md:hidden mt-10 grid grid-cols-2 gap-x-5 body">
            <Focus />
            <Elsewhere />
          </div>
        </div>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <ul>
      {focus.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Elsewhere() {
  return (
    <ul>
      {elsewhere.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            {...(item.download
              ? { download: "dez-calimese-resume.pdf" }
              : item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            className="link-underline"
          >
            {item.label}
          </a>{" "}
          <span className="text-ink-muted">↗</span>
        </li>
      ))}
    </ul>
  );
}
