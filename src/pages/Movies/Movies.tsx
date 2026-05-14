import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useMovieContext } from "../../contexts/MovieContext";

const Movies = () => {
  const { movies } = useMovieContext();
  const categoryMovies = movies.filter((m) => m.category === "Movie");

  const title = "Movies";
  return <MovieGrid movies={categoryMovies} title={title} />;
};

export default Movies;
