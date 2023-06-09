import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <>
      <div className="nav__all">
        <Link to={"/work"}>
          <div className="nav__words">
            <h2 className="nav__name">Lew Pearce</h2>
            <div id="nav__titles">
              <h3 className="nav__title">Illustrator</h3>
              <h3 className="nav__title">Animator</h3>
              <h3 className="nav__title">Designer</h3>
            </div>
          </div>
        </Link>
        <div className="nav__options">
          <Link to={"/work"}>
            <h3
              className="nav__option"
              style={path === "/work" ? { color: "var(--green)" } : null}
            >
              Work
            </h3>
          </Link>
          <Link to={"/about"}>
            <h3
              className="nav__option"
              style={path === "/about" ? { color: "var(--green)" } : null}
            >
              About
            </h3>
          </Link>
          <Link to={"/contact"}>
            <h3
              className="nav__option"
              style={path === "/contact" ? { color: "var(--green)" } : null}
            >
              Contact
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
