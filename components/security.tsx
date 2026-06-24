"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { securityData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi2";

export default function Security() {
  const { ref } = useSectionInView("Security", 0.3);

  return (
    <section
      id="security"
      ref={ref}
      className="mb-28 max-w-4xl mx-auto px-4 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Security Research</SectionHeading>

      <div className="flex flex-col gap-4">
        {securityData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-swiss-card border border-swiss-border hover:border-swiss-accent transition-all duration-300 p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-swiss-accent/10 flex items-center justify-center">
                <HiShieldCheck className="w-6 h-6 text-swiss-accent" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="swiss-heading text-xl group-hover:text-swiss-accent transition-colors">
                    {item.title}
                  </h3>
                  <span className="swiss-label text-swiss-text-secondary">
                    {item.date}
                  </span>
                </div>

                <p className="text-sm text-swiss-text-secondary font-medium mb-4">
                  {item.context}
                </p>

                <p className="swiss-body text-swiss-text-secondary text-sm mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Findings */}
                <ul className="grid sm:grid-cols-2 gap-2 mb-5">
                  {item.findings.map((finding) => (
                    <li
                      key={finding}
                      className="flex items-center gap-2 text-sm text-swiss-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-swiss-accent shrink-0" />
                      {finding}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-swiss-text/5 rounded-full text-swiss-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto text-xs italic text-swiss-text-secondary/70">
                    {item.note}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
