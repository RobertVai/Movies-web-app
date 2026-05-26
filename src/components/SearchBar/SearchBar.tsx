import styles from "./SearchBar.module.css";

import { useSearchContext } from "../../contexts/SearchContext";
import searchIcon from "../../assets/icon-search.svg";

const SearchBar = () => {
  const { search, setSearch } = useSearchContext();

  return (
    <form className={styles["search-bar"]} role="search">
      <img className={styles.icon} src={searchIcon} alt="" aria-hidden="true" />

      <input
        className={styles.input}
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for movies or TV series"
        aria-label="Search for movies or TV series"
      />
    </form>
  );
};

export default SearchBar;
