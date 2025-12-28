import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import mealIcon from "@/assets/icons/meal.png";
import Image, { StaticImageData } from "next/image";

const MealsCommunity = () => {
  const sections: {
    image: StaticImageData;
    alt: string;
    description: string;
  }[] = [
    {
      image: mealIcon,
      alt: "A delicious meal",
      description: "Share & discover recipes",
    },
    {
      image: communityIcon,
      alt: "A crowd of people, cooking",
      description: " Find new friends & like-minded people",
    },
    {
      image: eventsIcon,
      alt: "A crowd of people at a cooking event",
      description: "Participate in exclusive events",
    },
  ];
  return (
    <div className="space-y-24">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">
          One shared passion: <span className="text-accent">Food</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Join our community and share your favorite recipes!
        </p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full place-items-center">
        {sections.map((section, index) => (
          <section
            key={index}
            className="flex flex-col items-center text-center w-full max-w-lg group"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl border border-white/10 bg-surface">
              <Image
                src={section.image}
                alt={section.alt}
                className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <p className="text-white/90 text-xl font-bold mt-6">
              {section.description}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default MealsCommunity;
