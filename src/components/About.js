import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
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
              style={{ color: "#f26876", fontSize: "2.25em" }}
            >
              Hey!
            </h2>
            <p className="single__para" style={{ fontSize: "1.5em" }}>
              I am an illustrator, 3D artist and occasional animator based in
              Manchester. I use CGI software to create colourful 3D
              illustrations which are bold and fun.
            </p>
            <p
              className="single__para"
              style={{ fontSize: "1.5em", marginTop: "30px" }}
            >
              I have over 7 years of experience creating 3D artwork, working
              with clients such as Everyman Cinemas and The Novella Film
              Festival to create fun and eye-catching designs. and am excited to
              continue pushing my creative boundaries.
            </p>
            <p
              className="single__para"
              style={{ fontSize: "1.5em", marginTop: "30px" }}
            >
              If you have a project or idea you want to work with me on don't be
              afraid to{" "}
              <span
                className="single__para"
                style={{ fontSize: "1.1em", marginTop: "0px" }}
              >
                <Link to="/contact"> get in touch!</Link>
              </span>
            </p>
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
    </>
  );
};

export default About;
