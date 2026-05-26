import styles from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

import iconBookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import iconBookmarkFull from "../../assets/icon-bookmark-full.svg";

import iconCategoryMovie from "../../assets/icon-category-movie.svg";
import iconCategoryTV from "../../assets/icon-category-tv.svg";

import { useFilteredMovies } from "../../hooks/useFilteredMovies";
import { useSearchContext } from "../../contexts/SearchContext";
import { useMovieContext } from "../../contexts/MovieContext";

type MovieGridProps = {
  movies: Movie[];
  title: string;
};

const MovieGrid = ({ movies, title }: MovieGridProps) => {
  const { search } = useSearchContext();
  const filteredMovies = useFilteredMovies(movies, search);
  const { toggleBookmark } = useMovieContext();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles["movies-grid"]}>
        {filteredMovies.map((movie) => (
          <article className={styles.card} key={movie.title}>
            <div className={styles["image-wrapper"]}>
              <img
                className={styles.image}
                src={movie.thumbnail.regular.large}
                alt={movie.title}
              />

              <button
                className={styles.bookmark}
                type="button"
                onClick={() => toggleBookmark(movie.title)}
                aria-label={
                  movie.isBookmarked
                    ? `Remove ${movie.title} from bookmarks`
                    : `Add ${movie.title} to bookmarks`
                }
              >
                <img
                  src={
                    movie.isBookmarked ? iconBookmarkFull : iconBookmarkEmpty
                  }
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className={styles["movie-info"]}>
              <span>{movie.year}</span>
              <span>•</span>

              <span className={styles.category}>
                <img
                  src={
                    movie.category === "Movie" ? iconCategoryMovie : iconCategoryTV
                  }
                  alt=""
                  aria-hidden="true"
                />
                {movie.category}
              </span>

              <span>•</span>
              <span>{movie.rating}</span>
            </div>

            <h3 className={styles.name}>{movie.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;