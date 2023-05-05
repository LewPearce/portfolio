import { Link } from "react-router-dom";
import everyman from "../assets/gallery/everyman_square.jpg";
import computer from "../assets/gallery/computer_square.jpg";
import greece from "../assets/gallery/greece_square.jpg";
import pillar from "../assets/gallery/pillar_square.jpg";
import strange from "../assets/gallery/strange_square.jpg";
import balcony from "../assets/gallery/balcony_square.jpg";

const Work = () => {
  return (
    <>
      <div>
        <ul className="work__gallery">
          <li className="work__container">
            <img className="work__imgs" src={everyman} alt="artwork"></img>
            <Link to="/work/everyman">
              <div className="work__overlay">
                <div className="work__text">See More</div>
              </div>
            </Link>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={pillar} alt="artwork"></img>
            <Link to="/work/pillar">
              <div className="work__overlay">
                <div className="work__text">See More</div>
              </div>
            </Link>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={strange} alt="artwork"></img>
            <Link to="/work/strange">
              <div className="work__overlay">
                <div className="work__text">See More</div>
              </div>
            </Link>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={balcony} alt="artwork"></img>
            <div className="work__overlay">
              <div className="work__text">See More</div>
            </div>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={computer} alt="artwork"></img>
            <div className="work__overlay">
              <div className="work__text">See More</div>
            </div>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={greece} alt="artwork"></img>
            <div className="work__overlay">
              <div className="work__text">See More</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Work;
