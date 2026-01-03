import { NavLink } from "react-router";
import MenuSvg from "../assets/menu.svg?react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (localStorage.theme) {
      return localStorage.theme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const closeDrawer = () => setIsOpen(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

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
          <div className="flex flex-col items-end p-6 space-y-4 font-semibold">
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
        <svg
          onClick={() => setDark(!dark)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`h-6 w-6 dark:stroke-white`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 3l0 18"></path>
          <path d="M12 9l4.65 -4.65"></path>
          <path d="M12 14.3l7.37 -7.37"></path>
          <path d="M12 19.6l8.85 -8.85"></path>
        </svg>
      </div>
    </nav>
  );
}
