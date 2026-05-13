import MovieGrid from "../../components/MovieGrid/MovieGrid";
import MovieRow from "../../components/MovieRow/MovieRow";
import { movies } from "../../data/movies";
import { useSearchContext } from "../../context/SearchContext";
import { useFilteredMovies } from "../../hooks/useFilteredMovies";
const Home = () => {
  const { search } = useSearchContext();

  const filteredMovies = useFilteredMovies(movies, search);

  const trendingMovies = filteredMovies.filter((m) => m.isTrending);

  const recommendedMovies = filteredMovies.filter((m) => !m.isTrending);
  return (
    <div>
      <MovieRow movies={trendingMovies} />
      <MovieGrid movies={recommendedMovies}/>
    </div>
  );
};

export default Home;
