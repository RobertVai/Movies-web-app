import styles from "./SearchBar.module.css";

import { useSearchContext } from "../../contexts/SearchContext";
import searchIcon from "../../assets/icon-search.svg";
const SearchBar = () => {
  const { search, setSearch } = useSearchContext();

  return (
    <div className={styles.searchbar}>
      <span className={styles.icon}>
        <img
          src={searchIcon}
          alt="
        Search"
        />
      </span>

      <input
        className={styles.input}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default SearchBar;
