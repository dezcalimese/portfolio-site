"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading>Projects</SectionHeading>

        {/* Editorial grid: alternating 2:1 / 1:2 rhythm across 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {projectsData.map((project, index) => (
            <BentoCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectType = (typeof projectsData)[number];

function BentoCard({ project, index }: { project: ProjectType; index: number }) {
  const span = project.span === 2 ? "md:col-span-2" : "md:col-span-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl bg-swiss-card border border-swiss-border hover:border-swiss-accent transition-all duration-300 ${span}`}
    >
      {/* Background image, or a monochrome topographic fallback */}
      {project.imageUrl ? (
        <div className="absolute inset-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top opacity-50 dark:opacity-30 group-hover:opacity-60 dark:group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-swiss-card via-swiss-card/60 to-transparent dark:via-swiss-card/80" />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          {/* faint contour-style rings to echo the topographic theme */}
          <div
            className="absolute -inset-1/4 opacity-[0.18] group-hover:opacity-30 transition-opacity duration-500"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 70% 20%, var(--color-text) 0 1px, transparent 1px 26px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-swiss-accent/10 via-transparent to-swiss-bg-secondary" />
        </div>
      )}

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-swiss-text/5 flex items-center justify-center hover:bg-swiss-accent hover:text-white transition-all duration-300 group-hover:scale-110"
          >
            <HiArrowUpRight className="w-4 h-4" />
          </a>
        )}

        <h3 className="swiss-heading text-xl md:text-2xl mb-2 group-hover:text-swiss-accent transition-colors">
          {project.title}
        </h3>

        <p className="swiss-body text-swiss-text-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-swiss-text/5 rounded-full text-swiss-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-swiss-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
