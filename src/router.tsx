import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import TvSeries from "./pages/Tv-series/TvSeries";
import Anime from "./pages/Anime/Anime";
import Bookmark from "./pages/Bookmark/Bookmark";
import Media from "./pages/media/Media";
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/tvSeries",
        element: <TvSeries />,
      },
      {
        path: "/anime",
        element: <Anime />,
      },
      {
        path: "/tvSeries",
        element: <TvSeries />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
      {
        path: "/media/:idOfMedia",
        element: <Media />,
      },
    ],
  },
]);
