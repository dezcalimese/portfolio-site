import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex items-center justify-center gap-2 h-12 px-8 bg-swiss-text text-swiss-bg rounded-lg font-medium hover:bg-swiss-accent transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-swiss-bg border-t-transparent" />
      ) : (
        <>
          Send Message
          <FaPaperPlane className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </>
      )}
    </button>
  );
}
