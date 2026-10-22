import { Suspense } from "react";
import { tmdbFetch } from "@/lib/tmdb";
import type { Movie } from "@/lib/types";
import MovieGrid from "./components/MovieGrid";
import MovieGridSkeleton from "./components/MovieGridSkeleton";

async function PopularMovies() {
  const data = await tmdbFetch<{ results: Movie[] }>(
    "/movie/popular?language=en-US&page=1"
  );
  return <MovieGrid movies={data.results} />;
}

export default function Home() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Mashhur filmlar</h1>
      <Suspense fallback={<p>Yuklanmoqda...</p>}>
        <PopularMovies />
      </Suspense>
      <Suspense fallback={<MovieGridSkeleton />}></Suspense>
    </div>
  );
}