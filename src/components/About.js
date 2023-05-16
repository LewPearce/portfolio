import { Link } from "react-router-dom";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";

const About = () => {
  return (
    <div className="page__fade">
      <div className="single__horz__container__about">
        <img
          className="single__imgs"
          src="https://i.ibb.co/TmJHQnp/pillar-real.jpg"
          alt="artwork"
        ></img>
        <div className="single__vert__container">
          <div className="single__vert__container">
            <h2
              className="single__title"
              style={{ color: "#f26876", fontSize: "5vw" }}
            >
              Hey There!
            </h2>
            <p className="single__para" style={{ fontSize: "1.5em" }}>
              I am a 3D illustrator and occasional animator based in Manchester.
              I use CGI software to create colourful illustrations which are
              vibrant, bold and fun.
            </p>
            <p
              className="single__para"
              style={{ fontSize: "1.5em", marginTop: "30px" }}
            >
              I have over 7 years of experience creating 3D artwork, and have
              worked with clients such as Everyman Cinemas and The Novella Film
              Festival to create eye-catching designs. I am excited to continue
              pushing my creative boundaries amd creating work which is new and
              exciting.
            </p>
            <div className="single__horz__container__socials">
              <Link to="mailto:	lewpearceart@gmail.com">
                <img src={email} className="contact__logo" alt="email" />
              </Link>
              <Link
                to="https://www.instagram.com/lew.pearce.art/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} className="contact__logo" alt="instagram" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/lew-pearce-7b7986265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} className="contact__logo" alt="linkedin" />
              </Link>
            </div>
            {/* <p
              className="single__para"
              style={{ fontSize: "1.5em", marginTop: "30px" }}
            >
              If you have a project or idea you want to work with me on don't be
              afraid to{" "}
              <span
                className="single__para"
                style={{ fontSize: "1em", paddingTop: "0px" }}
              >
                <Link to="/contact"> get in touch!</Link>
              </span>
            </p> */}
          </div>
        </div>
      </div>

      {/* <div className="about__all">
        <div className="single__horz__container">
          <div className="photo"></div>
          <div className="single__vert__container">
            <h2 id="about__me">About me</h2>
            <p id="about__para">
              I am an illustrator, 3D artist and occasional animator based in
              Manchester. I use CGI software to create colourful illustrations
              and animations and try to tell a story with every piece.
            </p>
            <p id="about__para">
              With over 7 years of experience creating 3D artwork, I have
              experience working with clients to create fun and eyecatching
              designs and am excited to continue pushing my creative boundaries,
              while exploring new possibilities in the field of illustration.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
