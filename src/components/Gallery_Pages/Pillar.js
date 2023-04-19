import real from "../../assets/singles/pillar_real.png";
import clay from "../../assets/singles/pillar_clay.png";
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
          autoplay="autoplay"
          muted
          defaultmuted
          loop="true"
        ></video>
        <div className="single__vert__container">
          <p className="single__para">Personal work.</p>
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

export default Pillar;
