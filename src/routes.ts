import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import MainLayout from "./components/MainLayout";
import BlogPage from "./pages/BlogPage";
import Uni from "./pages/Uni";
import Notfound from "./pages/NotFound";
import { blogLoader } from "./utils/blogLoader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "blogs/:blogTitle",
        // loader fetches the data and converts md to html
        // after the conversion, it renders the data until then
        // it stays on the same page
        loader: blogLoader,
        Component: BlogPage,
      },
      {
        path: "uni",
        Component: Uni,
      },
      {
        path: "*",
        Component: Notfound,
      },
    ],
  },
]);

export default router;
