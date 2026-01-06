"use client";
import ImagePicker from "@/components/Meals/ImagePicker";
import SubmitButton from "@/components/ShareMeal/SubmitButton";
import { shareMeal } from "@/lib/actions";
import { useFormState } from "react-dom";

const MealsSharePage = () => {
  const [errors, formAction] = useFormState(shareMeal, {});
  return (
    <>
      {/* Header */}
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-white">
          Share your{" "}
          <span className="text-accent drop-shadow">favorite meal</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Or any other meal you feel needs sharing!
        </p>
      </header>

      {/* Form */}
      <main className="max-w-3xl mx-auto bg-surface border border-white/10 rounded-xl shadow-lg p-8 space-y-6">
        <form className="space-y-6" action={formAction}>
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <p className="flex flex-col gap-2 text-sm">
              <label htmlFor="name" className="text-muted">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="creator"
                className="rounded-lg bg-black/20 text-white px-4 py-2 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
              />
              {errors?.creator && (
                <p className="text-red-400 text-sm">{errors.creator}</p>
              )}
            </p>

            <p className="flex flex-col gap-2 text-sm">
              <label htmlFor="email" className="text-muted">
                Your email
              </label>
              <input
                type="text"
                id="email"
                name="creator_email"
                className="rounded-lg bg-black/20 text-white px-4 py-2 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
              />
              {errors?.creator_email && (
                <p className="text-red-400 text-sm">{errors.creator_email}</p>
              )}
            </p>
          </div>

          {/* Title */}
          <p className="flex flex-col gap-2 text-sm">
            <label htmlFor="title" className="text-muted">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="rounded-lg bg-black/20 text-white px-4 py-2 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
            {errors?.title && (
              <p className="text-red-400 text-sm">{errors.title}</p>
            )}
          </p>

          {/* Summary */}
          <p className="flex flex-col gap-2 text-sm">
            <label htmlFor="summary" className="text-muted">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              className="rounded-lg bg-black/20 text-white px-4 py-2 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
            {errors?.summary && (
              <p className="text-red-400 text-sm">{errors.summary}</p>
            )}
          </p>

          {/* Instructions */}
          <p className="flex flex-col gap-2 text-sm">
            <label htmlFor="instructions" className="text-muted">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={8}
              className="rounded-lg bg-black/20 text-white px-4 py-3 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
            {errors?.instructions && (
              <p className="text-red-400 text-sm">{errors.instructions}</p>
            )}
          </p>

          {/* Image Picker Placeholder */}
          <ImagePicker label="Upload your meal image" name="image" />
          {errors?.image && (
            <p className="text-red-400 text-sm">{errors.image}</p>
          )}
          {/* Submit Button */}
          <SubmitButton />
        </form>
      </main>
    </>
  );
};

export default MealsSharePage;
