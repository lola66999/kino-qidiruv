export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
};

export type MovieDetail = Movie & {
  tagline: string;
  overview: string;
  runtime: number | null;
  genres: { id: number; name: string }[];
};