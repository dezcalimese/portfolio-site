"use client";

import React from "react";
import { skillCategories } from "@/lib/data";
import { FadeIn, Plate, Section, SectionHead, WIDE } from "./editorial";

// The two AI groups stack in the first column; every other category gets its own
const [aiTools, agents, ...rest] = skillCategories;
const columns = [[aiTools, agents], ...rest.map((category) => [category])];

export default function Skills() {
  return (
    <Section id="skills" name="Skills">
      <SectionHead title="Toolkit" />

      <Plate
        name="Skills"
        aspect={WIDE}
        sizes="100vw"
        className="mb-16 sm:mb-24"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-12">
        {columns.map((column, i) => (
          <FadeIn
            key={column[0].label}
            delay={i * 0.06}
            className="border-t border-ink-rule pt-4 space-y-10"
          >
            {column.map((category) => (
              <div key={category.label}>
                <h3 className="label text-ink-muted mb-6">{category.label}</h3>
                <ul className="body-lg">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
