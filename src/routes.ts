import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import MainLayout from "./components/MainLayout";
import Uni from "./pages/Uni";
import Notfound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";

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
