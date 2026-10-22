import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/lib/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  const year = movie.release_date?.slice(0, 4);

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-violet-500/50"
    >
      <div className="relative aspect-[2/3] bg-slate-800">
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Rasm yo'q
          </div>
        )}
        <span className="absolute right-2 top-2 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-yellow-400">
          ★ {movie.vote_average.toFixed(1)}
        </span>
      </div>
      <div className="p-3">
        <h3 className="line-clamp-1 font-medium text-white">{movie.title}</h3>
        <p className="text-sm text-slate-400">{year}</p>
      </div>
    </Link>
  );
}