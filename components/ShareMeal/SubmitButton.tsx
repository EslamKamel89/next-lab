"use client";

import { useFormStatus } from "react-dom";

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-center pt-6">
      {pending ? (
        <div className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-2 text-sm font-semibold text-black shadow-md">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
          <span>Sharing…</span>
        </div>
      ) : (
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-2 text-sm font-semibold text-black shadow-md transition
                     hover:scale-105 hover:shadow-accent/40 active:scale-95"
        >
          Share Meal
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
