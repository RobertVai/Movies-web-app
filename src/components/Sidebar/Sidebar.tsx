import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import iconNavBookmark from "../../assets/icon-nav-bookmark.svg";
import iconNavHome from "../../assets/icon-nav-home.svg";
import iconNavMovies from "../../assets/icon-nav-movies.svg";
import iconNavTVSeries from "../../assets/icon-nav-tv-series.svg";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>🎬</div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.active}>
          <img src={iconNavHome} alt="home" />
        </Link>

        <Link to="/movies">
          <img src={iconNavMovies} alt="movies" />
        </Link>

        <Link to="/tv-series">
          <img src={iconNavTVSeries} alt="tv series" />
        </Link>

        <Link to="/archived">
          <img src={iconNavBookmark} alt="bookmarked" />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
