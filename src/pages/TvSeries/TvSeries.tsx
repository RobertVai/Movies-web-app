import { useEffect } from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useMovieContext } from "../../contexts/MovieContext";

const TvSeries = () => {
  const { movies } = useMovieContext();

  const tvSeriesMovies = movies.filter(
    (movie) => movie.category === "TV Series",
  );

  useEffect(() => {
    document.title = "TV Series | Entertainment App";
  }, []);

  return <MovieGrid movies={tvSeriesMovies} title="TV Series" />;
};

export default TvSeries;
