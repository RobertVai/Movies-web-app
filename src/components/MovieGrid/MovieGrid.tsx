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
        {filteredMovies.map((m) => (
          <div className={styles.card} key={m.title}>
            <div className={styles["image-wrapper"]}>
              <img
                className={styles.image}
                src={m.thumbnail.regular.large}
                alt={m.title}
              />

              <button
                className={styles.bookmark}
                onClick={() => toggleBookmark(m.title)}
              >
                <img
                  src={m.isBookmarked ? iconBookmarkFull : iconBookmarkEmpty}
                  alt="bookmark"
                />
              </button>
            </div>

            <div className={styles["movie-info"]}>
              <p>{m.year}</p>

              <span>•</span>

              <div className={styles.category}>
                <img
                  src={
                    m.category === "Movie" ? iconCategoryMovie : iconCategoryTV
                  }
                  alt={m.category}
                />

                <p>{m.category}</p>
              </div>

              <span>•</span>

              <p>{m.rating}</p>
            </div>

            <h3 className={styles.name}>{m.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
