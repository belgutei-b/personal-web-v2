import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";

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
    ],
  },
]);

export default router;
