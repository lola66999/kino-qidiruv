export default function MovieGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-xl border border-white/10 bg-white/5"
        >
          <div className="aspect-[2/3] bg-slate-800" />
          <div className="space-y-2 p-3">
            <div className="h-4 w-3/4 rounded bg-slate-800" />
            <div className="h-3 w-1/4 rounded bg-slate-800" />
          </div>
        </div>
      ))}
    </div>
  );
}