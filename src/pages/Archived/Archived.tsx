import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useMovieContext } from "../../contexts/MovieContext";

const Archived = () => {
  const { movies } = useMovieContext();
  const bookmarkedMovies = movies.filter((m) => m.isBookmarked);

  const title = "Bookmarked Movies";
  return <MovieGrid movies={bookmarkedMovies} title={title} />;
};

export default Archived;
