import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import MainLayout from "./components/MainLayout";
import BlogPage from "./pages/BlogPage";
import Uni from "./pages/Uni";

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
    ],
  },
]);

export default router;
