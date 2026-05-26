import { useEffect } from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import MovieRow from "../../components/MovieRow/MovieRow";
import { useMovieContext } from "../../contexts/MovieContext";

const Home = () => {
  const { movies } = useMovieContext();

  const trendingMovies = movies.filter((movie) => movie.isTrending);
  const recommendedMovies = movies.filter((movie) => !movie.isTrending);

  useEffect(() => {
    document.title = "Home | Entertainment App";
  }, []);

  return (
    <>
      <MovieRow movies={trendingMovies} />
      <MovieGrid movies={recommendedMovies} title="Recommended for you" />
    </>
  );
};

export default Home;
