import MovieGrid from "../../components/MovieGrid/MovieGrid";
import MovieRow from "../../components/MovieRow/MovieRow";
import { useMovieContext } from "../../contexts/MovieContext";
import { useSearchContext } from "../../contexts/SearchContext";
import { useFilteredMovies } from "../../hooks/useFilteredMovies";
const Home = () => {
  const { movies } = useMovieContext();
  const trendingMovies = movies.filter((m) => m.isTrending);

  const recommendedMovies = movies.filter((m) => !m.isTrending);

  const title = "Recommended for you";
  return (
    <div>
      <MovieRow movies={trendingMovies} />
      <MovieGrid movies={recommendedMovies} title={title} />
    </div>
  );
};

export default Home;
