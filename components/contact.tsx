"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 max-w-xl mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-center text-swiss-text-secondary mb-8">
        Reach out directly at{" "}
        <a
          className="text-swiss-accent hover:underline font-medium"
          href="mailto:dezcalimese@gmail.com"
        >
          dezcalimese@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form
        className="space-y-4"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent successfully!");
        }}
      >
        <input
          className="w-full h-14 px-4 bg-swiss-card border border-swiss-border rounded-lg text-swiss-text placeholder:text-swiss-text-secondary/50 focus:border-swiss-accent focus:outline-none transition-colors"
          name="senderEmail"
          type="email"
          autoComplete="off"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="w-full h-48 p-4 bg-swiss-card border border-swiss-border rounded-lg text-swiss-text placeholder:text-swiss-text-secondary/50 focus:border-swiss-accent focus:outline-none transition-colors resize-none"
          name="message"
          placeholder="Your message..."
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
