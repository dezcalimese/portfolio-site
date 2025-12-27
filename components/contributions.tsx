"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { contributionsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Contributions() {
  const { ref } = useSectionInView("OSS", 0.5);

  return (
    <section
      id="contributions"
      ref={ref}
      className="mb-28 max-w-4xl mx-auto px-4 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Open Source</SectionHeading>

      <div className="flex flex-col gap-4">
        {contributionsData.map((contribution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-swiss-card border border-swiss-border hover:border-swiss-accent transition-all duration-300 p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-swiss-text/5 flex items-center justify-center">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="swiss-heading text-lg group-hover:text-swiss-accent transition-colors">
                    {contribution.title}
                  </h3>
                  <p className="text-sm text-swiss-text-secondary">
                    {contribution.repo}
                  </p>
                </div>
              </div>

              <a
                href={contribution.prLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-swiss-text/5 rounded-full hover:bg-swiss-accent hover:text-white transition-all duration-300"
              >
                <span>PR #{contribution.prNumber}</span>
                <HiArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Description */}
            <p className="swiss-body text-swiss-text-secondary text-sm mb-4">
              {contribution.description}
            </p>

            {/* Tags and Status */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {contribution.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-swiss-text/5 rounded-full text-swiss-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {contribution.merged && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Merged
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
