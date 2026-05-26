import useEmblaCarousel from "embla-carousel-react";
import styles from "./MovieRow.module.css";
import type { Movie } from "../../types/movie";
import { useSearchContext } from "../../contexts/SearchContext";
import { useFilteredMovies } from "../../hooks/useFilteredMovies";
import { useMovieContext } from "../../contexts/MovieContext";
import iconCategoryMovie from "../../assets/icon-category-movie.svg";
import iconCategoryTV from "../../assets/icon-category-tv.svg";
import iconBookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import iconBookmarkFull from "../../assets/icon-bookmark-full.svg";

type MovieRowProps = {
  movies: Movie[];
};

const MovieRow = ({ movies }: MovieRowProps) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const { search } = useSearchContext();
  const filteredMovies = useFilteredMovies(movies, search);
  const { toggleBookmark } = useMovieContext();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Trending</h2>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.container}>
          {filteredMovies.map((movie) => (
            <article className={styles.slide} key={movie.title}>
              <img
                className={styles.image}
                src={
                  movie.thumbnail.trending?.large ??
                  movie.thumbnail.regular.large
                }
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

              <div className={styles.info}>
                <div className={styles.meta}>
                  <span>{movie.year}</span>
                  <span>•</span>

                  <span className={styles.category}>
                    <img
                      src={
                        movie.category === "Movie"
                          ? iconCategoryMovie
                          : iconCategoryTV
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieRow;
