import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import MovieRow from "../components/MovieRow/MovieRow";
import styles from "./Layout.module.css";
import SearchBar from "../components/SearchBar/SearchBar";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
