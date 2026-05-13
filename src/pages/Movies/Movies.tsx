import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { movies } from "../../data/movies";

const Movies = () => {
  const categoryMovies = movies.filter((m) => m.category === "Movie");
  return <MovieGrid movies={categoryMovies} />;
};

export default Movies;
