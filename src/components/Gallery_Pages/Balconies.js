import real from "../../assets/singles/balcony_real-min.png";
import clay from "../../assets/singles/balcony_clay-min.png";
import video from "../../assets/singles/balcony_video.mp4";
import { useEffect } from "react";

const Balconies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
            My art is not just a product of my skills and techniques, but also of my life experiences and personal vision. Each piece I create is a reflection of my unique perspective and my deep connection to the world. I pour my heart and soul into every stroke of the brush, and the results speak for themselves.
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
    </>
  );
};

export default Balconies;
