import video from "../../assets/singles/strange_video.mp4";
import real from "../../assets/singles/strange_real-min.png";
import { useEffect } from "react";

const Strange = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page__fade">
      <div className="single__horz__container">
        <div className="single__img__container">
          <img className="single__imgs__initial" src={real} alt="artwork"></img>
          <img
            className="single__imgs__overlay"
            src="https://i.ibb.co/tJkjC6h/strange-clay.jpg"
            alt="artwork"
          ></img>
        </div>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2 className="single__title" style={{ color: "#52D29C" }}>
              Sanctum Santorum
            </h2>
            <p className="single__para">
              Using various screenshots from films and scraps of concept art I
              create my reimagination of Dr Strange's New York Sanctum.
            </p>
          </div>
          <video
            className="single__imgs__small__square"
            src={video}
            type="video/mp4"
            alt="artwork"
            autoplay="autoPlay"
            loop="true"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Strange;
