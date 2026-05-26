import { useEffect } from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useMovieContext } from "../../contexts/MovieContext";

const Archived = () => {
  const { movies } = useMovieContext();

  const bookmarkedMovies = movies.filter((movie) => movie.isBookmarked);

  useEffect(() => {
    document.title = "Bookmarked | Entertainment App";
  }, []);

  return <MovieGrid movies={bookmarkedMovies} title="Bookmarked Movies" />;
};

export default Archived;
