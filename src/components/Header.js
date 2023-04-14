import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  console.log(path);

  return (
    <>
      <div className="nav__all">
        <div className="nav__words">
          <h2 className="nav__name">Lew Pearce</h2>
          <div id="nav__titles">
            <h3 className="nav__title">Illustrator</h3>
            <h3 className="nav__title">Animator</h3>
            <h3 className="nav__title">Designer</h3>
          </div>
        </div>
        <div className="nav__options">
          <Link to={"/work"}>
            <h3
              className="nav__option"
              style={path === "/work" ? { color: "var(--yellow)" } : null}
            >
              Work
            </h3>
          </Link>
          <Link to={"/about"}>
            <h3
              className="nav__option"
              style={path === "/about" ? { color: "var(--yellow)" } : null}
            >
              About
            </h3>
          </Link>
          <Link to={"/contact"}>
            <h3
              className="nav__option"
              style={path === "/contact" ? { color: "var(--yellow)" } : null}
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
