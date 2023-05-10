import video from "../../assets/singles/strange_video.mp4";
import real from "../../assets/singles/strange_real-min.png";
import { useEffect } from "react";

const Strange = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
            <h2 className="single__title">Sanctum Santorum</h2>
            <p className="single__para">
              I had a much bigger task ahead of me when starting this project
              than I anticipated. Despite the sheer size of Marvel’s filmography
              there is a surprising lack of screen time given to Dr Strange’s
              New York Sanctum. My reference for this project consisted of
              screenshots from multiple movies as well as some concept art from
              marvel studios. This was a really fun project to work on as it
              tested my hard surface modeling skills.
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
    </>
  );
};

export default Strange;
