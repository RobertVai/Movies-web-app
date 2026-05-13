import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { movies } from "../../data/movies";
import { useSearchContext } from "../../context/SearchContext";
import { useFilteredMovies } from "../../hooks/useFilteredMovies";

const TvSeries = () => {
  const tvSeriesMovies = movies.filter((m) => m.category === "TV Series");
  return <MovieGrid movies={tvSeriesMovies} />;
};

export default TvSeries;
