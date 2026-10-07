"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { plates } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import type { SectionName } from "@/lib/types";

const ease = [0.16, 1, 0.3, 1] as const;

/** Full-bleed section whose ink (light/dark) is taken from its plate. */
export function Section({
  id,
  name,
  className,
  children,
}: {
  id: string;
  name: SectionName;
  className?: string;
  children: React.ReactNode;
}) {
  const { ref } = useSectionInView(name);

  return (
    <section
      ref={ref}
      id={id}
      className={clsx(
        `theme-${plates[name].theme}`,
        "relative bg-ink-bg text-ink-fg scroll-mt-0"
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-page px-5 sm:px-8 py-24 sm:py-36",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Large serif section title, laid on the 12-col grid. */
export function SectionHead({
  title,
  aside,
}: {
  title: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <header className="grid grid-cols-12 gap-x-5 gap-y-6 mb-16 sm:mb-24">
      <h2 className="display col-span-12 lg:col-span-9 text-[clamp(3.25rem,10vw,10rem)]">
        <RevealLine>{title}</RevealLine>
      </h2>
      {aside && (
        <div className="col-span-12 lg:col-span-3 lg:self-end">{aside}</div>
      )}
    </header>
  );
}

/** A line of type that slides up out of a mask when it scrolls into view. */
export function RevealLine({
  children,
  delay = 0,
  onLoad = false,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  /** Animate on mount instead of on scroll — for type already on screen at load */
  onLoad?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={clsx("block overflow-hidden pb-[0.22em] -mb-[0.14em]", className)}>
      <motion.span
        className="block"
        initial={reduce ? false : { y: "105%" }}
        {...(onLoad
          ? { animate: { y: 0 } }
          : {
              whileInView: { y: 0 },
              viewport: { once: true, margin: "-10% 0px" },
            })}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Soft fade-up for blocks of copy. */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Full-width panoramic crop, the Toolkit section's proportions. */
export const WIDE = "aspect-[16/9] sm:aspect-[21/8]";

/** An NYC engraving set into the grid like a book plate. */
export function Plate({
  name,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  className,
}: {
  name: SectionName;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <figure className={className}>
      <motion.div
        className={clsx("relative overflow-hidden", aspect)}
        initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.2, ease }}
      >
        <Image
          src={plates[name].src}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>
    </figure>
  );
}
