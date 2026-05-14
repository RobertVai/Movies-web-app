import { createContext, useContext, useState } from "react";

import { movies as initialMovies } from "../data/movies";

import type { Movie } from "../types/movie";

type MovieContextType = {
  movies: Movie[];

  toggleBookmark: (title: string) => void;
};

const MovieContext = createContext<MovieContextType | null>(null);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  const toggleBookmark = (title: string) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.title === title
          ? {
              ...movie,
              isBookmarked: !movie.isBookmarked,
            }
          : movie,
      ),
    );
  };

  return (
    <MovieContext.Provider value={{ movies, toggleBookmark }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("No MovieContext");
  }

  return context;
};
