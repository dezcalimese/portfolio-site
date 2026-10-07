import React from "react";

export default function Footer() {
  return (
    <footer className="theme-dark bg-ink-bg text-ink-muted">
      <div className="mx-auto max-w-page px-5 sm:px-8 py-8 grid grid-cols-12 gap-x-5 gap-y-2 label border-t border-ink-rule">
        <p className="col-span-12 md:col-span-6">
          &copy; {new Date().getFullYear()} Dez Calimese
        </p>
        <p className="col-span-12 md:col-span-6">
          Built with Next.js, TypeScript, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}
