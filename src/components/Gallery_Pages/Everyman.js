import real from "../../assets/singles/everyman_real-min.png";
import { useEffect } from "react";

const Everyman = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page__fade">
      <div className="single__horz__container">
        <img className="single__imgs" src={real} alt="artwork"></img>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2 className="single__title" style={{ color: "#F84D74" }}>
              Everyman Cinemas
            </h2>
            <p className="single__para">
              A commission for Everyman Cinemas of their Manchester venue,
              this colourful design was featured as the centrefold of their
              bi-monthly magazine across all their venues.
            </p>
          </div>
          <div className="single__horz__container__small">
            <img
              className="single__imgs__small"
              src="https://i.ibb.co/K26sCtZ/everyman-clay.jpg"
              alt="artwork"
            ></img>
            {/* this third image will be the one in the theatre but Ineed a better quality
      photo */}
            <div className="spacer__2"></div>
            <img className="single__imgs__small" src={real} alt="artwork"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Everyman;
