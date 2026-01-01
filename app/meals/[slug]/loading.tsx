export default function LoadingMealDetails() {
  return (
    <article className="max-w-4xl mx-auto space-y-10 animate-pulse">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-8 w-2/3 bg-surface rounded-md" />
        <div className="mx-auto h-4 w-1/3 bg-surface rounded-md" />
      </div>

      <div className="h-[300px] md:h-[400px] bg-surface rounded-xl shadow-lg border border-white/10" />

      {/* Summary Placeholder */}
      <div className="space-y-3 max-w-2xl mx-auto">
        <div className="h-3 w-full bg-surface rounded-md" />
        <div className="h-3 w-5/6 bg-surface rounded-md" />
      </div>

      <div className="space-y-4 bg-surface p-6 rounded-xl shadow-lg border border-white/10">
        <div className="h-5 w-40 bg-accent/50 rounded-md" />
        <div className="space-y-2">
          <div className="h-2.5 w-full bg-white/10 rounded-md" />
          <div className="h-2.5 w-11/12 bg-white/10 rounded-md" />
          <div className="h-2.5 w-10/12 bg-white/10 rounded-md" />
          <div className="h-2.5 w-9/12 bg-white/10 rounded-md" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-full bg-accent/70 h-9 w-40" />
      </div>
    </article>
  );
}
