import "./header.scss";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="header__menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              to="/comics"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
