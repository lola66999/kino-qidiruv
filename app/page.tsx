import { Suspense } from "react";
import { tmdbFetch } from "@/lib/tmdb";

type Movie = { id: number; title: string };

async function PopularMovies() {
  const data = await tmdbFetch<{ results: Movie[] }>(
    "/movie/popular?language=en-US&page=1",
  );

  return (
    <ul className="space-y-1">
      {data.results.map((m) => (
        <li key={m.id}>{m.title}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="p-8">
      <div>
        <h1 className="mb-4 text-2xl font-bold">Mashhur filmlar</h1>
        <Suspense fallback={<p>Yuklanmoqda...</p>}>
          <PopularMovies />
        </Suspense>
      </div>
    </main>
  );
}
