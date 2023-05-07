import video from "../../assets/singles/computer_video.mp4";
import clay from "../../assets/singles/Computer Viewport-min.png";

const Computer = () => {
  return (
    <>
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
              My art is not just a product of my skills and techniques, but also
              of my life experiences and personal vision. Each piece I create is
              a reflection of my unique perspective and my deep connection to
              the world. I pour my heart and soul into every stroke of the
              brush, and the results speak for themselves.
            </p>
          </div>
          <img
            className="single__imgs__small__square"
            src={clay}
            alt="artwork"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Computer;
