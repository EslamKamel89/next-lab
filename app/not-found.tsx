import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 mt-24">
      <h2 className="text-3xl font-bold text-accent drop-shadow">
        Meal Not Found 🍽️
      </h2>

      <p className="text-muted max-w-md">
        {
          "We couldn't find the meal you're looking for. It might have been removed or never existed."
        }
      </p>

      <Link
        href="/"
        className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
      >
        Back to Home 🏠
      </Link>
    </div>
  );
}
