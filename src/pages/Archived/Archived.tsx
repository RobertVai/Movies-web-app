import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { movies } from "../../data/movies";

const Archived = () => {
  const bookmarkedMovies = movies.filter((m) => m.isBookmarked);
  return <MovieGrid movies={bookmarkedMovies} />;
};

export default Archived;
