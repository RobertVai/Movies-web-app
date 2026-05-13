import styles from "./SearchBar.module.css";
import { useSearchContext } from "../../context/SearchContext";

const SearchBar = () => {
  const { search, setSearch } = useSearchContext();

  return (
    <div className={styles.searchbar}>
      <span className={styles.icon}>⌕</span>

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
