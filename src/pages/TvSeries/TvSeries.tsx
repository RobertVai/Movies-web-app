import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { movies } from "../../data/movies";
import { useMovieContext } from "../../contexts/MovieContext";

const TvSeries = () => {
  const { movies } = useMovieContext();
  const tvSeriesMovies = movies.filter((m) => m.category === "TV Series");

  const title = "TV Series";
  return <MovieGrid movies={tvSeriesMovies} title={title} />;
};

export default TvSeries;
