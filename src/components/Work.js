import everyman from "../assets/gallery/everyman_square.png";
import computer from "../assets/gallery/computer_square.png";
import greece from "../assets/gallery/greece_square.png";
import pillar from "../assets/gallery/pillar_square2.png";
import strange from "../assets/gallery/strange_square.png";
import balcony from "../assets/gallery/balcony_square.png";

const Work = () => {
  return (
    <>
      <div>
        <ul className="work__gallery">
          <li className="work__container">
            <img className="work__imgs" src={`${everyman}`}></img>
            <div className="work__overlay">
              <div className="work__text">See More</div>
            </div>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={pillar}></img>
            <div className="work__overlay">
              <div className="work__text">See More</div>
            </div>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={strange}></img>
            <div className="work__overlay">
              <div className="work__text">See More</div>
            </div>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={balcony}></img>
            <div className="work__overlay">
              <div className="work__text">See More</div>
            </div>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={computer}></img>
            <div className="work__overlay">
              <div className="work__text">See More</div>
            </div>
          </li>
          <li className="work__container">
            <img className="work__imgs" src={greece}></img>
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
