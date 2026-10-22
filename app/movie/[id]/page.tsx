import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tmdbFetch } from "@/lib/tmdb";
import type { MovieDetail } from "@/lib/types";
import FavoriteButton from "@/app/components/FavoriteButton";

async function MovieInfo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) notFound();

  let movie: MovieDetail;
  try {
    movie = await tmdbFetch<MovieDetail>(`/movie/${id}?language=en-US`);
  } catch {
    notFound();
  }

  const year = movie.release_date?.slice(0, 4);

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="relative aspect-[2/3] w-full max-w-xs shrink-0 overflow-hidden rounded-xl bg-slate-800">
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="320px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-500">
            Rasm yo'q
          </div>
        )}
      </div>

      <div>
        <h1 className="text-3xl font-bold text-white">
          {movie.title} <span className="text-slate-400">({year})</span>
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="font-semibold text-yellow-400">
            ★ {movie.vote_average.toFixed(1)}
          </span>
          {movie.runtime ? <span>{movie.runtime} daqiqa</span> : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {movie.genres.map((g) => (
            <span
              key={g.id}
              className="rounded-full bg-violet-500/15 px-3 py-1 text-sm text-violet-200"
            >
              {g.name}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <FavoriteButton movie={movie} />
        </div>

        {movie.tagline ? (
          <p className="mt-6 italic text-slate-400">{movie.tagline}</p>
        ) : null}

        <h2 className="mt-6 text-lg font-semibold text-white">Tavsif</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          {movie.overview || "Tavsif mavjud emas."}
        </p>
      </div>
    </div>
  );
}

export default function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-slate-400 transition hover:text-white"
      >
        ← Orqaga
      </Link>
      <Suspense fallback={<p>Yuklanmoqda...</p>}>
        <MovieInfo params={params} />
      </Suspense>
    </div>
  );
}
