import real from "../../assets/singles/balcony_real-min.png";
import clay from "../../assets/singles/balcony_clay-min.png";
import video from "../../assets/singles/balcony_video.mp4";
import { useEffect } from "react";

const Balconies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page__fade">
      <div className="single__horz__container">
        <div className="single__img__container__portrait">
          <img className="single__imgs__initial" src={real} alt="artwork"></img>
          <img className="single__imgs__overlay" src={clay} alt="artwork"></img>
        </div>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2 className="single__title" style={{ color: "#48D4FF" }}>
              Barcelona Balconies
            </h2>
            <p className="single__para">
              The balconies, shutters and plants were all created in a way which
              makes it easy for me to edit and add them. The plants can be made
              by drawing a simple line, and my code generates the plant around
              that line, this allows for more versatile designs.
            </p>
          </div>
          <div className="single__horz__container">
            <video
              className="single__imgs__small__square"
              src={video}
              type="video/mp4"
              alt="artwork"
              autoPlay
              muted
              loop={true}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balconies;
