import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="w-full md:w-5/8 xl:w-3/8 h-screen flex flex-col mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}
