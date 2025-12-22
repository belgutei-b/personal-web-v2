import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { useNavigation } from "react-router";

export default function MainLayout() {
  let navigation = useNavigation();
  return (
    <div className="w-full md:w-5/8 xl:w-3/8 h-screen flex flex-col mx-auto">
      <Navbar />
      {navigation.state === "loading" ? <div>Loading...</div> : <Outlet />}
    </div>
  );
}
