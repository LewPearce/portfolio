import video from "../../assets/singles/computer_video.mp4";
import clay from "../../assets/singles/Computer Viewport-min.png";
import { useEffect } from "react";

const Computer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page__fade">
      <div className="single__horz__container">
        <div className="single__img__container">
          <video
            className="single__imgs__square"
            src={video}
            type="video/mp4"
            alt="artwork"
            autoplay="autoPlay"
            loop="true"
          ></video>
        </div>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2 className="single__title" style={{ color: "#FF7676" }}>
              Computer Love
            </h2>
            <p className="single__para">
              Not only was this scene made in Blender but even the graphics show
              on the screen are a 3D animation whichI created and then 'played'
              on the computer.
            </p>
          </div>
          <img
            className="single__imgs__small__square"
            src={clay}
            alt="artwork"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Computer;
