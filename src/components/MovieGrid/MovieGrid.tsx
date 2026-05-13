import styles from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";
import { useSearchContext } from "../../context/SearchContext";
import { useFilteredMovies } from "../../hooks/useFilteredMovies";
type MovieGridProps = {
  movies: Movie[];
};

const MovieGrid = ({ movies }: MovieGridProps) => {
  const { search } = useSearchContext();
  const filteredMovies = useFilteredMovies(movies, search);
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Recommended for you</h2>

      <div className={styles["movies-grid"]}>
        {filteredMovies.map((m) => (
          <div className={styles.card} key={m.title}>
            <div className={styles["image-wrapper"]}>
              <img
                className={styles.image}
                src={m.thumbnail.regular.large}
                alt={m.title}
              />
            </div>

            <div className={styles["movie-info"]}>
              <p>{m.year}</p>
              <span>•</span>
              <p>{m.category}</p>
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
