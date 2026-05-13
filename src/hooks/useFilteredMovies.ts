import type { Movie } from "../types/movie";
export const useFilteredMovies = (movies: Movie[], search: string) => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );
};
