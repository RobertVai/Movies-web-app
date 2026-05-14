import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import mainLogo from "../../assets/logo.svg";
import iconNavBookmark from "../../assets/icon-nav-bookmark.svg";
import iconNavHome from "../../assets/icon-nav-home.svg";
import iconNavMovies from "../../assets/icon-nav-movies.svg";
import iconNavTVSeries from "../../assets/icon-nav-tv-series.svg";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={mainLogo} alt="Main-logo" />
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={iconNavHome} alt="home" />
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={iconNavMovies} alt="movies" />
        </NavLink>

        <NavLink
          to="/tv-series"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={iconNavTVSeries} alt="tv series" />
        </NavLink>

        <NavLink
          to="/archived"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={iconNavBookmark} alt="bookmarked" />
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
