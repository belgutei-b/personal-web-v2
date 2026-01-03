import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import MainLayout from "./components/MainLayout";
import Uni from "./pages/Uni";
import Notfound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Projects from "./pages/Projects";

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
        path: "projects",
        Component: Projects,
      },
      {
        path: "*",
        Component: Notfound,
      },
    ],
  },
]);

export default router;
