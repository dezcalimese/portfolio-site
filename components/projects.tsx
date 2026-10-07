"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { projectsData } from "@/lib/data";
import { FadeIn, Plate, Section, SectionHead, WIDE } from "./editorial";

const totalSpan = projectsData.reduce((sum, p) => sum + p.span, 0);
const fillsLastRow = totalSpan % 3 !== 0;

export default function Projects() {
  return (
    <Section id="projects" name="Projects">
      <SectionHead
        title={
          <>
            Work{" "}
            <sup className="font-mono text-[0.14em] tracking-normal align-top">
              ({String(projectsData.length).padStart(2, "0")})
            </sup>
          </>
        }
      />

      <Plate
        name="Projects"
        aspect={WIDE}
        sizes="100vw"
        className="mb-16 sm:mb-24"
      />

      {/* Hairline bento: the 1px gap shows the ink colour between cells */}
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-fg border border-ink-fg">
        {projectsData.map((project, index) => (
          <ProjectCell
            key={project.title}
            project={project}
            index={index}
            // A wide card left alone on the last row takes the full row instead
            fullRow={index === projectsData.length - 1 && fillsLastRow}
          />
        ))}
      </ol>
    </Section>
  );
}

type ProjectType = (typeof projectsData)[number];

function ProjectCell({
  project,
  index,
  fullRow,
}: {
  project: ProjectType;
  index: number;
  fullRow: boolean;
}) {
  const wide = project.span === 2;

  const content = (
    <>
      {project.imageUrl && (
        <div
          className={clsx(
            "relative overflow-hidden bg-ink-rule",
            wide ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[16/10]",
            fullRow && "md:w-2/3 md:shrink-0"
          )}
        >
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            sizes={wide ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {project.link && (
          <p className="label text-right text-ink-muted transition-colors group-hover:text-ink-fg">
            Visit ↗
          </p>
        )}
        <h3
          className={clsx(
            "display leading-[0.95]", project.link && "mt-4",
            project.imageUrl
              ? "text-[2.25rem] sm:text-[2.75rem]"
              : "text-[3rem] sm:text-[4.5rem]"
          )}
        >
          {project.title}
        </h3>
        <p
          className={clsx(
            "body mt-4 text-ink-muted",
            project.imageUrl && "line-clamp-3"
          )}
        >
          {project.description}
        </p>
        <p className="label mt-auto pt-6">{project.tags.join(" / ")}</p>
      </div>
    </>
  );

  return (
    <li
      className={clsx(
        "bg-ink-bg",
        fullRow ? "md:col-span-3" : wide && "md:col-span-2"
      )}
    >
      <FadeIn delay={(index % 3) * 0.06} className="h-full">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx("group flex h-full flex-col", fullRow && "md:flex-row")}
          >
            {content}
          </a>
        ) : (
          <div
            className={clsx("group flex h-full flex-col", fullRow && "md:flex-row")}
          >
            {content}
          </div>
        )}
      </FadeIn>
    </li>
  );
}
