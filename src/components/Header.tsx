import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar bg-base-100 shadow-xl sticky top-0 h-20 p-4 z-10">
      <div className="flex-1 justify-center xl:-mr-28 ">
        <NavLink to="/">
          <p className="text-center uppercase text-black text-xl xl:text-3xl font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter">
            Pokedex
          </p>
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/favs">Favourites</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
