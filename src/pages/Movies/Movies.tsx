import { useEffect } from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useMovieContext } from "../../contexts/MovieContext";

const Movies = () => {
  const { movies } = useMovieContext();

  const categoryMovies = movies.filter((movie) => movie.category === "Movie");

  useEffect(() => {
    document.title = "Movies | Entertainment App";
  }, []);

  return <MovieGrid movies={categoryMovies} title="Movies" />;
};

export default Movies;
