import video from "../../assets/singles/strange_video.mp4";
import real from "../../assets/singles/greece_real-min.png";

const Greece = () => {
  return (
    <>
      <div className="single__horz__container">
        <div className="single__img__container">
          <img className="single__imgs__initial" src={real} alt="artwork"></img>
          <img
            className="single__imgs__overlay"
            src="https://i.ibb.co/zZYrdhw/greece-clay.jpg"
            alt="artwork"
          ></img>
        </div>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2 className="single__title" style={{ color: "#EF6B56" }}>
              Greek Supper
            </h2>
            <p className="single__para">
              My art is not just a product of my skills and techniques, but also
              of my life experiences and personal vision. Each piece I create is
              a reflection of my unique perspective and my deep connection to
              the world. I pour my heart and soul into every stroke of the
              brush, and the results speak for themselves.
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

export default Greece;
