const MealsGridFallback = () => {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <li
          key={i}
          className="h-60 rounded-xl bg-surface border border-white/10 shadow-lg"
        />
      ))}
    </ul>
  );
};
export default MealsGridFallback;
