import real from "../../assets/singles/everyman_real.jpg";
import clay from "../../assets/singles/everyman_clay.jpg";

const Everyman = () => {
  return (
    <>
      <div className="single__horz__container">
        <img className="single__imgs" src={real} alt="artwork"></img>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2 className="single__title" style={{ color: "#F84D74" }}>
              Everyman Cinemas
            </h2>
            <p className="single__para">
              A commission for Everyman Cinemas which of their Manchester venue,
              this colourful design was featured as the centrefold of their
              bi-monthly magazine.
            </p>
          </div>
          <div className="single__horz__container">
            <img className="single__imgs__small" src={clay} alt="artwork"></img>
            {/* this third image will be the one in the theatre but Ineed a better quality
      photo */}
            <img className="single__imgs__small" src={real} alt="artwork"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Everyman;
