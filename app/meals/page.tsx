import MealsGrid from "@/components/Meals/MealsGrid";
import MealsGridFallback from "@/components/Meals/MealsGridFallback";
import { getMeals } from "@/lib/meals";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
export const dynamic = "force-static";
export const revalidate = false;
export const metadata: Metadata = {
  title: "Meals | Foodies",
  description: "Browse and discover delicious meals shared by our community.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meals | Foodies",
    description:
      "Discover delicious meals shared by the Foodies community. Explore recipes and cooking inspiration.",
    url: "https://your-domain.com/meals",
    siteName: "Foodies",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "A selection of delicious meals from Foodies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meals | Foodies",
    description:
      "Browse and discover delicious meals shared by the Foodies community.",
    images: [
      "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
};
const MealsPage = () => {
  return (
    <>
      <header className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold text-white">
          Delicious Meals created <span className="text-accent">BY YOU</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Choose your favorite recipe and cook it yourself. It&apos;s easy and
          fun!
        </p>

        <p>
          <Link
            href="/meals/share"
            className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={MealsGridFallback()}>
          <MealsList />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;

async function MealsList() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
