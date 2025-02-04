import "./header.scss";

import { Link } from "react-router-dom";

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
            <Link to="/">Characters</Link>
          </li>
          /
          <li>
            <Link to="/comics">Comics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
