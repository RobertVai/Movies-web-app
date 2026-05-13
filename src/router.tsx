import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Archived from "./pages/Archived/Archived";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TvSeries/TvSeries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/archived",
        element: <Archived />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv-series",
        element: <TvSeries />,
      },
    ],
  },
]);
