import real from "../../assets/singles/greece_real-min.png";
import { useEffect } from "react";

const Greece = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page__fade">
      <div className="single__horz__container">
        <div className="single__img__container">
          <img className="single__imgs__initial" src={real} alt="artwork"></img>
        </div>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2 className="single__title" style={{ color: "#EF6B56" }}>
              Greek Supper
            </h2>
            <p className="single__para">
              The plants in this scene were all created in a way which makes it
              easy for me to edit and add them. They can be made by drawing a
              simple line, and my code generates the plant around that line,
              this allows for more versatile designs.
            </p>
          </div>
          <img
            className="single__imgs__small__square"
            src="https://i.ibb.co/zZYrdhw/greece-clay.jpg"
            alt="artwork"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Greece;
