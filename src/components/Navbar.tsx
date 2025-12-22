import { NavLink } from "react-router";
import MenuSvg from "../assets/menu.svg?react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);
  return (
    <nav className="w-full mb-3 flex justify-between pt-5 pb-5 border-b border-stone-300">
      <div className="font-medium ml-2 md:ml-0 text-lg text-stone-700">
        <NavLink to="/" end>
          Belgutei
        </NavLink>
      </div>

      {/* Mobile drawer */}
      <div className="md:hidden flex flex-col items-end mr-4">
        <MenuSvg
          onClick={() => setIsOpen(true)}
          className="h-6 w-6 text-stone-700"
        />
        <div
          className={`fixed top-0 right-0 h-full w-50 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col items-end p-6 space-y-4">
            <NavLink to="/" onClick={closeDrawer} end>
              Home
            </NavLink>
            <NavLink to="/blogs" onClick={closeDrawer} end>
              Blogs
            </NavLink>
            <NavLink to="/uni" onClick={closeDrawer} end>
              Uni
            </NavLink>
            <NavLink to="/projects" onClick={closeDrawer} end>
              Projects
            </NavLink>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-stone-50 opacity-60 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex space-x-5">
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
  );
}
