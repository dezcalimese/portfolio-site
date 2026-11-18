"use client";

import React from "react";
import { securityData } from "@/lib/data";
import { FadeIn, Plate, RevealLine, Section, SectionHead } from "./editorial";

export default function Security() {
  return (
    <Section id="security" name="Security">
      <SectionHead title="Security Research" />

      {securityData.map((item, index) => (
        <article
          key={item.title}
          id={item.title.toLowerCase().replace(/ /g, "-")}
          className="grid grid-cols-12 gap-x-5 gap-y-12 border-t border-ink-rule pt-8 [&+&]:mt-20"
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
            {item.links.length > 0 && (
              <p className="label mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {item.links.map((l) => {
                  const external = l.href.startsWith("http");
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="underline underline-offset-4 hover:text-ink-muted"
                    >
                      {l.label} {external ? "↗" : "↓"}
                    </a>
                  );
                })}
              </p>
            )}
            <p className="mt-3 font-serif italic text-lg text-ink-muted">
              {item.note}.
            </p>
          </div>

          {/* One plate per section, beside the first entry */}
          {index === 0 && (
            <Plate
              name="Security"
              className="col-span-12 sm:col-span-8 md:col-start-8 md:col-span-5"
            />
          )}
        </article>
      ))}
    </Section>
  );
}
