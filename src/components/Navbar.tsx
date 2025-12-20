import { NavLink, Outlet } from "react-router";

export default function Navbar() {
  return (
    <div className="w-full md:w-5/8 xl:w-3/8 h-screen flex flex-col mx-auto">
      <nav className="w-full mb-3 flex justify-between pt-5 pb-5 border-b border-stone-300">
        <div className="font-medium text-lg text-stone-700">
          <NavLink to="/" end>
            Belgutei
          </NavLink>
        </div>
        <div className="space-x-5">
          <NavLink to="/blogs" end>
            Blogs
          </NavLink>
          <NavLink to="/uni" end>
            Uni
          </NavLink>
          <NavLink to="/projects" end>
            Projects
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
