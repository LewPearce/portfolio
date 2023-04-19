import real from "../../assets/singles/everyman_real.png";
import clay from "../../assets/singles/everyman_clay.png";

const Everyman = () => {
  return (
    <>
      <div className="single__horz__container">
        <img className="single__imgs" src={real} alt="artwork"></img>
        <div className="single__vert__container">
          <p className="single__para">
            Illustration comissioned by Everyman Cinemas of their Manchester
            venue to be featured in their October/November 2022 magazine.
          </p>
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
