import { NavLink } from "react-router";

export default function Notfound() {
  return (
    <div className="px-2 md:px-0">
      <div className="flex">
        <p className="mr-1">404.</p>
        <p>Page not found</p>
      </div>
      <NavLink className="home-link" to="/" end>
        Go to homepage
      </NavLink>
    </div>
  );
}
