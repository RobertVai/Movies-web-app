import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SearchProvider } from "./contexts/SearchContext.tsx";
import "./index.css";
import App from "./App.tsx";
import { MovieProvider } from "./contexts/MovieContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </SearchProvider>
  </StrictMode>,
);
