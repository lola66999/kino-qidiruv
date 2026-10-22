"use client";

import { useEffect, useState } from "react";
import type { Movie } from "@/lib/types";

const KEY = "favorites";
const EVENT = "favorites-changed";

function read(): Movie[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const sync = () => setFavorites(read());
    sync();
    setLoaded(true);

    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const isFavorite = (id: number) => favorites.some((m) => m.id === id);

  const toggle = (movie: Movie) => {
    const current = read();
    const next = current.some((m) => m.id === movie.id)
      ? current.filter((m) => m.id !== movie.id)
      : [...current, movie];
    localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  };

  return { favorites, loaded, isFavorite, toggle };
}