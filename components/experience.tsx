"use client";

import React from "react";
import clsx from "clsx";
import { experiencesData } from "@/lib/data";
import { FadeIn, Plate, Section, SectionHead, WIDE } from "./editorial";

export default function Experience() {
  return (
    <Section id="experience" name="Experience">
      <SectionHead title="Experience" />

      <Plate
        name="Experience"
        aspect={WIDE}
        sizes="100vw"
        className="mb-16 sm:mb-24"
      />

      {/* Hairline bento: current role leads at double width, the rest fill 3-up */}
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-fg border border-ink-fg">
        {experiencesData.map((item, index) => (
          <li
            key={`${item.company}-${item.title}`}
            className={clsx("bg-ink-bg", index === 0 && "md:col-span-2")}
          >
            <FadeIn
              delay={(index % 3) * 0.06}
              className="flex h-full flex-col p-5 sm:p-6"
            >
              <p className="label flex justify-between text-ink-muted">
                <span>{item.date}</span>
                {item.type === "education" && <span>Education</span>}
              </p>
              <h3
                className={clsx(
                  "font-serif leading-[1] tracking-[-0.01em] mt-8",
                  index === 0
                    ? "text-[2.75rem] sm:text-[4rem]"
                    : "text-[2rem] sm:text-[2.5rem]"
                )}
              >
                {item.company}
              </h3>
              <p className="body mt-2">{item.title}</p>
              <p
                className={clsx(
                  "body mt-6 text-ink-muted",
                  index === 0 && "max-w-2xl"
                )}
              >
                {item.description}
              </p>
              {"previously" in item && (
                <div className="mt-6 border-t border-ink-rule pt-4">
                  <p className="label text-ink-muted mb-2">Previously</p>
                  <p className="text-[0.8125rem] leading-[1.45] text-ink-muted">
                    {item.previously.map((course, i) => (
                      <React.Fragment key={course.name}>
                        <span className="text-ink-fg">{course.name}</span>{" "}
                        <span className="font-mono text-[0.6875rem]">
                          {course.year}
                        </span>
                        {i < item.previously.length - 1 && " · "}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              )}
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
