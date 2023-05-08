import video from "../../assets/singles/pillar_video.mp4";

const Pillar = () => {
  return (
    <>
      <div className="single__horz__container">
        <video
          className="single__imgs"
          src={video}
          type="video/mp4"
          alt="artwork"
          autoPlay
          muted
          loop={true}
        ></video>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2 className="single__title" style={{ color: "#FF9759" }}>
              Pillar Sitter
            </h2>
            <p className="single__para">
              This personal project was my a my first attempt at adding a
              character to one of my animations, it was great to get some
              experience with character modelling and rigging.
            </p>
          </div>
          <div className="single__horz__container__small">
            <img
              className="single__imgs__small"
              src="https://i.ibb.co/mCYTnF0/pillar-clay.jpg"
              alt="artwork"
            ></img>
            {/* this third image will be the one in the theatre but Ineed a better quality
      photo */}
            <img
              className="single__imgs__small"
              src="https://i.ibb.co/TmJHQnp/pillar-real.jpg"
              alt="artwork"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pillar;
