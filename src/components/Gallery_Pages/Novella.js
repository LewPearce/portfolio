import poster from "../../assets/singles/novella_poster-min.png";
import banner from "../../assets/singles/novella_banner-min.png";
import mug from "../../assets/singles/Mug-Spilled.png";
import { useEffect } from "react";

const Novella = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="single__vert__container__centered">
        <img className="single__imgs__banner" src={banner} alt="artwork"></img>
        <div className="single__horz__container">
          <div className="single__horz__container">
            <div className="single__vert__container__top">
              <h2 className="single__title" style={{ color: "#FF9993" }}>
                Novella Film Festival
              </h2>
              <p className="single__para">
                My art is not just a product of my skills and techniques, but
                also of my life experiences and personal vision. Each piece I
                create is a reflection of my unique perspective and my deep
                connection to the world. I pour my heart and soul into every
                stroke of the brush, and the results speak for themselves.
              </p>
            </div>
            <img
              className="single__imgs__novella"
              src={poster}
              alt="artwork"
            ></img>
            <div className="single__vert__container">
              <div className="single__vert__container__bottom">
                <h2 className="single__title" style={{ color: "#FF9993" }}>
                  Novella Film Festival
                </h2>
                <p className="single__para">
                  My art is not just a product of my skills and techniques, but
                  also of my life experiences and personal vision. Each piece I
                  create is a reflection of my unique perspective and my deep
                  connection to the world. I pour my heart and soul into every
                  stroke of the brush, and the results speak for themselves.
                </p>
              </div>
              <div className="single__horz__container">
                <img
                  className="single__imgs__small__square"
                  src={mug}
                  alt="artwork"
                  style={{ boxShadow: "none" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Novella;
