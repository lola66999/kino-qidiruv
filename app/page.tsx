import { Suspense } from "react";
import { tmdbFetch } from "@/lib/tmdb";
import type { Movie } from "@/lib/types";
import MovieCard from "./components/MovieCard";

async function PopularMovies() {
  const data = await tmdbFetch<{ results: Movie[] }>(
    "/movie/popular?language=en-US&page=1"
  );

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Mashhur filmlar</h1>
      <Suspense fallback={<p>Yuklanmoqda...</p>}>
        <PopularMovies />
      </Suspense>
    </div>
  );
}
