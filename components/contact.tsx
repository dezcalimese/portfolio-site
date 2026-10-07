"use client";

import React from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import { FadeIn, Plate, RevealLine, Section, WIDE } from "./editorial";

const fieldClass =
  "w-full bg-transparent border-0 border-b border-ink-rule px-0 py-3 body-lg text-ink-fg placeholder:text-ink-muted focus:border-ink-fg focus:outline-none focus-visible:outline-none transition-colors";

export default function Contact() {
  return (
    <Section id="contact" name="Contact" className="border-t border-ink-rule">
      <h2 className="display text-[clamp(3.5rem,13vw,13rem)]">
        <RevealLine>Let&apos;s build</RevealLine>
        <RevealLine delay={0.1} className="text-right italic">
          something
        </RevealLine>
      </h2>

      <div className="mt-20 sm:mt-28 grid grid-cols-12 gap-x-5 gap-y-14">
        <Plate
          name="Contact"
          aspect={WIDE}
          sizes="100vw"
          className="col-span-12"
        />

        <FadeIn className="col-span-12 md:col-start-7 md:col-span-6">
          <p className="label text-ink-muted mb-3">Write directly</p>
          <a
            href="mailto:dezcalimese@gmail.com"
            className="font-serif text-[clamp(1.75rem,3.4vw,3rem)] leading-none link-underline"
          >
            dezcalimese@gmail.com
          </a>

          <form
            className="mt-14 space-y-6"
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Message sent — talk soon.");
            }}
          >
            <p className="label text-ink-muted">Or leave a note</p>
            <input
              className={fieldClass}
              name="senderEmail"
              type="email"
              autoComplete="email"
              required
              maxLength={500}
              placeholder="Your email"
              aria-label="Your email"
            />
            <textarea
              className={`${fieldClass} h-36 resize-none`}
              name="message"
              placeholder="Your message"
              aria-label="Your message"
              required
              maxLength={5000}
            />
            <SubmitButton />
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}
