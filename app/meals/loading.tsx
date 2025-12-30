import MealsGridFallback from "@/components/Meals/MealsGridFallback";

export default function LoadingMealsPage() {
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

        <div className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition w-fit mx-auto">
          Share Your Favorite Recipe
        </div>
      </header>
      <div className="">
        <MealsGridFallback />
      </div>
    </>
  );
}
