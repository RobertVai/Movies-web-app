import useEmblaCarousel from "embla-carousel-react";
import styles from "./MovieRow.module.css";
import { movies } from "../../data/movies";
import type { Movie } from "../../types/movie";
import { useSearchContext } from "../../context/SearchContext";
import { useFilteredMovies } from "../../hooks/useFilteredMovies";
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

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Trending</h2>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.container}>
          {filteredMovies.map((m) => (
            <div className={styles.slide} key={m.title}>
              <img
                className={styles.image}
                src={m.thumbnail.trending?.large}
                alt={m.title}
              />

              <div className={styles.info}>
                <p className={styles.meta}>
                  {m.year} • {m.category} • {m.rating}
                </p>
                <h3 className={styles.name}>{m.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieRow;
