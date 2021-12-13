import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3>Hadi Abaza</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
