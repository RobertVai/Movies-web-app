import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import mainLogo from "../../assets/logo.svg";
import iconNavBookmark from "../../assets/icon-nav-bookmark.svg";
import iconNavHome from "../../assets/icon-nav-home.svg";
import iconNavMovies from "../../assets/icon-nav-movies.svg";
import iconNavTVSeries from "../../assets/icon-nav-tv-series.svg";
import avatar from "../../assets/image-avatar.png";

const Sidebar = () => {
  return (
    <aside className={styles["side-bar"]}>
      <div className={styles.logo}>
        <img src={mainLogo} alt="Entertainment app logo" />
      </div>

      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink
          to="/"
          aria-label="Home"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={iconNavHome} alt="" aria-hidden="true" />
        </NavLink>

        <NavLink
          to="/movies"
          aria-label="Movies"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={iconNavMovies} alt="" aria-hidden="true" />
        </NavLink>

        <NavLink
          to="/tv-series"
          aria-label="TV Series"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={iconNavTVSeries} alt="" aria-hidden="true" />
        </NavLink>

        <NavLink
          to="/archived"
          aria-label="Bookmarked"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={iconNavBookmark} alt="" aria-hidden="true" />
        </NavLink>
      </nav>

      <img className={styles.avatar} src={avatar} alt="User avatar" />
    </aside>
  );
};

export default Sidebar;
