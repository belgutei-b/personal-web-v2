import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Navbar,
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
    ],
  },
]);

export default router;
