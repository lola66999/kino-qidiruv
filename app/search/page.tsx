import { Suspense } from "react";
import type { Metadata } from "next";
import { tmdbFetch } from "@/lib/tmdb";
import type { Movie } from "@/lib/types";
import MovieGrid from "../components/MovieGrid";

export const metadata: Metadata = { title: "Qidiruv" };

async function Results({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  if (!query?.trim()) {
    return <p className="text-slate-400">Film nomini yozing va qidiring.</p>;
  }

  const data = await tmdbFetch<{ results: Movie[] }>(
    `/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`
  );

  if (data.results.length === 0) {
    return <p className="text-slate-400">"{query}" bo'yicha hech narsa topilmadi.</p>;
  }

  return <MovieGrid movies={data.results} />;
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Qidiruv</h1>

      <form action="/search" className="mb-8 flex gap-3">
        <input
          name="query"
          type="text"
          placeholder="Masalan: Inception"
          className="w-full max-w-md rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
        />
        <button
          type="submit"
          className="rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 px-5 py-2 font-medium text-white transition hover:opacity-90"
        >
          Qidirish
        </button>
      </form>

      <Suspense fallback={<p>Qidirilmoqda...</p>}>
        <Results searchParams={searchParams} />
      </Suspense>
    </div>
  );
}