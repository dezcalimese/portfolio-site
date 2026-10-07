import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group inline-flex items-center gap-3 border border-ink-fg px-7 py-3.5 label transition-colors duration-300 hover:bg-ink-fg hover:text-ink-bg disabled:opacity-50"
      type="submit"
      disabled={pending}
    >
      {pending ? "Sending…" : "Send message"}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}
