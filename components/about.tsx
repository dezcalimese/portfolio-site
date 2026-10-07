"use client";

import React from "react";
import { FadeIn, Plate, Section, SectionHead } from "./editorial";

export default function About() {
  return (
    <Section id="about" name="About">
      <SectionHead title="About" />

      <div className="grid grid-cols-12 gap-x-5 gap-y-14">
        <div className="col-span-12 md:col-span-6">
          <FadeIn>
            <p className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.08] tracking-[-0.01em]">
              Five years on founding teams, building AI agents, DeFi
              infrastructure, and the security work that keeps them safe.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-6 gap-x-5 gap-y-8 body text-ink-muted">
            <FadeIn className="col-span-6 sm:col-span-3">
              <p className="label text-ink-fg mb-3">Now</p>
              <p>
                Co-founder of <span className="text-ink-fg">Quincy Labs</span>,
                an AI and blockchain research collective and studio. I build
                MCP integrations over an 8-year research base and lead
                engineering on{" "}
                <span className="text-ink-fg">Emergency Passport</span>, an
                AI-native app surfacing critical patient context during sickle
                cell crises.
              </p>
            </FadeIn>
            <FadeIn delay={0.08} className="col-span-6 sm:col-span-3">
              <p className="label text-ink-fg mb-3">Before</p>
              <p>
                Founding Engineer at Omo Protocol, leading smart contracts,
                frontend, and AI agent integrations. This work helped secure
                over <span className="text-ink-fg">$1M in pre-seed</span>.
                Before that, Lead Frontend Developer at{" "}
                <span className="text-ink-fg">Bricks Exchange</span>, a real
                estate tokenization market.
              </p>
            </FadeIn>
            <FadeIn className="col-span-6 sm:col-span-3">
              <p className="label text-ink-fg mb-3">Security</p>
              <p>
                Completed the Rektoff × Solana Foundation Rust Security
                Bootcamp, adding formal Solana/Anchor audit methodology to a
                background in smart-contract security. My capstone audit of a
                Solana lending protocol found multiple high-severity bugs, each
                with a working exploit.
              </p>
            </FadeIn>
            <FadeIn delay={0.08} className="col-span-6 sm:col-span-3">
              <p className="label text-ink-fg mb-3">Otherwise</p>
              <p>
                Outside of engineering I analyze DeFi markets, make music, and
                explore audioreactive and 3D art.
              </p>
            </FadeIn>
          </div>
        </div>

        <Plate
          name="About"
          className="col-span-12 sm:col-span-8 md:col-start-8 md:col-span-5"
        />
      </div>
    </Section>
  );
}
