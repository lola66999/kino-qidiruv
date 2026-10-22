"use client";

import Link from "next/link";
import MovieGrid from "../components/MovieGrid";
import { useFavorites } from "../hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites, loaded } = useFavorites();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Sevimlilar</h1>

      {!loaded ? (
        <p className="text-slate-400">Yuklanmoqda...</p>
      ) : favorites.length === 0 ? (
        <p className="text-slate-400">
          Hali sevimli film yo'q.{" "}
          <Link href="/" className="text-violet-400 hover:underline">
            Filmlarni ko'rish
          </Link>
        </p>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </div>
  );
}