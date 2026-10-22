"use client";

import { useFavorites } from "../hooks/useFavorites";
import type { Movie } from "@/lib/types";

export default function FavoriteButton({
  movie,
  className = "",
}: {
  movie: Movie;
  className?: string;
}) {
  const { isFavorite, toggle } = useFavorites();
  const active = isFavorite(movie.id);

  return (
    <button
      type="button"
      onClick={() =>
        toggle({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          release_date: movie.release_date,
        })
      }
      aria-label={active ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo'shish"}
      className={`flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-lg transition hover:scale-110 ${
        active ? "text-pink-500" : "text-white"
      } ${className}`}
    >
      {active ? "♥" : "♡"}
    </button>
  );
}