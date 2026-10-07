"use client";

import React from "react";
import { contributionsData, toolsData } from "@/lib/data";
import { FadeIn, Plate, Section, SectionHead, WIDE } from "./editorial";

export default function Contributions() {
  return (
    <Section id="contributions" name="OSS" className="border-t border-ink-rule">
      <SectionHead title="Open Source" />

      <Plate name="OSS" aspect={WIDE} sizes="100vw" className="mb-16 sm:mb-24" />

      {toolsData.length > 0 && (
        <Group title="Tools" count={toolsData.length}>
          {toolsData.map((tool) => (
            <Entry
              key={tool.repo}
              meta={tool.repo}
              title={tool.title}
              description={tool.description}
              tags={tool.tags}
              href={tool.link}
              cta="View repository"
            />
          ))}
        </Group>
      )}

      <Group title="Contributions" count={contributionsData.length}>
        {contributionsData.map((contribution) => (
          <Entry
            key={contribution.prLink}
            meta={`${contribution.repo} — PR #${contribution.prNumber}${
              contribution.merged ? " — Merged" : ""
            }`}
            title={contribution.title}
            description={contribution.description}
            tags={contribution.tags}
            href={contribution.prLink}
            cta="View pull request"
          />
        ))}
      </Group>
    </Section>
  );
}

/** Label on the left, a ruled list of entries from the middle column. */
function Group({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-6 border-t border-ink-fg pt-5 [&+&]:mt-20">
      <h3 className="col-span-12 md:col-span-4 font-serif text-[2rem] sm:text-[2.5rem] leading-none tracking-[-0.01em]">
        {title}{" "}
        <sup className="font-mono text-[0.4em] tracking-normal align-top text-ink-muted">
          ({String(count).padStart(2, "0")})
        </sup>
      </h3>
      <ol className="col-span-12 md:col-start-5 md:col-span-8">{children}</ol>
    </div>
  );
}

function Entry({
  meta,
  title,
  description,
  tags,
  href,
  cta,
}: {
  meta: string;
  title: string;
  description: string;
  tags: readonly string[];
  href: string;
  cta: string;
}) {
  return (
    <li className="border-b border-ink-rule pb-8 last:border-b-0 last:pb-0 [&+&]:pt-8">
      <FadeIn className="grid grid-cols-8 gap-x-5 gap-y-4">
        <div className="col-span-8 lg:col-span-4">
          <p className="label text-ink-muted mb-4">{meta}</p>
          <h4 className="display text-[clamp(2rem,3.6vw,3.25rem)] leading-[0.95]">
            {title}
          </h4>
        </div>
        <div className="col-span-8 lg:col-span-4">
          <p className="body text-ink-muted">{description}</p>
          <p className="label mt-5">{tags.join(" / ")}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="body link-underline mt-5 inline-block"
          >
            {cta} ↗
          </a>
        </div>
      </FadeIn>
    </li>
  );
}
