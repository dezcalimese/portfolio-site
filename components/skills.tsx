"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-5xl mx-auto px-4 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-swiss-card/60 border border-swiss-border p-6 hover:border-swiss-accent/60 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-swiss-accent" />
              <h3 className="swiss-label text-swiss-text-secondary">
                {category.label}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 bg-swiss-text/5 border border-transparent rounded-lg text-sm font-medium text-swiss-text-secondary hover:text-swiss-text hover:border-swiss-border transition-all duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
