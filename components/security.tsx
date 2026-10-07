"use client";

import React from "react";
import { securityData } from "@/lib/data";
import { FadeIn, Plate, RevealLine, Section, SectionHead } from "./editorial";

export default function Security() {
  return (
    <Section id="security" name="Security">
      <SectionHead title="Security Research" />

      {securityData.map((item) => (
        <article
          key={item.title}
          className="grid grid-cols-12 gap-x-5 gap-y-12 border-t border-ink-rule pt-8"
        >
          <div className="col-span-12 md:col-span-6">
            <p className="label text-ink-muted mb-6">
              {item.date} — {item.context}
            </p>
            <h3 className="display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95]">
              <RevealLine>{item.title}</RevealLine>
            </h3>
            <FadeIn className="mt-8 max-w-lg">
              <p className="body-lg">{item.description}</p>
            </FadeIn>


            <p className="label mt-10">{item.tags.join(" / ")}</p>
            <p className="mt-3 font-serif italic text-lg text-ink-muted">
              {item.note}.
            </p>
          </div>

          <Plate
            name="Security"
            className="col-span-12 sm:col-span-8 md:col-start-8 md:col-span-5"
          />
        </article>
      ))}
    </Section>
  );
}
