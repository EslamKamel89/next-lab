import ImagesSlideShow from "@/components/Images/ImagesSlideShow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="relative w-full overflow-hidden rounded-xl shadow-lg bg-surface mb-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[360px]">
          <div className="flex flex-col justify-center  text-center md:text-left gap-4 p-5">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Foodies 🍉🍉
            </h1>

            <p className="max-w-md text-white/90 text-sm md:text-base mx-auto md:mx-0">
              Delicious meals, shared by a food-loving community. Taste and
              share foods from all over the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <Link
                href="/meals/community"
                className="rounded-full bg-accent text-black font-semibold px-6 py-2 text-sm hover:opacity-90 transition text-center"
              >
                Join the community
              </Link>
              <Link
                href="/meals"
                className="rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium px-6 py-2 text-sm hover:bg-white/20 transition text-center"
              >
                Explore Meals
              </Link>
            </div>
          </div>

          <ImagesSlideShow />
        </div>
      </header>

      <main className="space-y-20">
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-accent">
            How it works
          </h2>
          <p className="text-muted text-sm md:text-base">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-muted text-sm md:text-base">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-accent">
            Why NextLevel Food?
          </h2>
          <p className="text-muted text-sm md:text-base">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-muted text-sm md:text-base">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
