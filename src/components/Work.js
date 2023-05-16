import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="page__fade">
      <ul className="work__gallery">
        <li className="work__container">
          <img
            className="work__imgs"
            src="https://i.ibb.co/74wpHK7/novella-square.png"
            alt="artwork"
          ></img>
          <Link to="/work/novella">
            <div className="work__overlay">
              <div className="work__text">Novella Film Festival</div>
            </div>
          </Link>
        </li>
        <li className="work__container">
          <img
            className="work__imgs"
            src="https://i.ibb.co/XsVFcHN/everyman-square.png"
            alt="artwork"
          ></img>
          <Link to="/work/everyman">
            <div className="work__overlay">
              <div className="work__text">Everyman Cinemas</div>
            </div>
          </Link>
        </li>
        <li className="work__container">
          <img
            className="work__imgs"
            src="https://i.ibb.co/ZVskJvg/pillar-square.png"
            alt="artwork"
          ></img>
          <Link to="/work/pillar">
            <div className="work__overlay">
              <div className="work__text">Personal</div>
            </div>
          </Link>
        </li>
        <li className="work__container">
          <img
            className="work__imgs"
            src="https://i.ibb.co/7GDbTJS/strange-square.png"
            alt="artwork"
          ></img>
          <Link to="/work/strange">
            <div className="work__overlay">
              <div className="work__text">Personal</div>
            </div>
          </Link>
        </li>
        <li className="work__container">
          <img
            className="work__imgs"
            src="https://i.ibb.co/5sYQ57z/balcony-square.png"
            alt="artwork"
          ></img>
          <Link to="/work/balconies">
            <div className="work__overlay">
              <div className="work__text">Personal</div>
            </div>
          </Link>
        </li>
        <li className="work__container">
          <img
            className="work__imgs"
            src="https://i.ibb.co/5RZH8mK/computer-square.png"
            alt="artwork"
          ></img>
          <Link to="/work/computer">
            <div className="work__overlay">
              <div className="work__text">Personal</div>
            </div>
          </Link>
        </li>
        <li className="work__container">
          <img
            className="work__imgs"
            src="https://i.ibb.co/ZcPQ6ZM/greece-real.jpg"
            alt="artwork"
          ></img>
          <Link to="/work/holiday">
            <div className="work__overlay">
              <div className="work__text">Personal</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Work;
