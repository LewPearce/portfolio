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
              style={{ color: "#52d29c", fontSize: "2.25em" }}
            >
              Who am I?
            </h2>
            <p className="single__para" style={{ fontSize: "1.5em" }}>
              I am an illustrator, 3D artist and occasional animator based in
              Manchester. I use CGI software to create colourful illustrations
              and animations and try to tell a story with every piece.
            </p>
            <p
              className="single__para"
              style={{ fontSize: "1.5em", marginTop: "30px" }}
            >
              With over 7 years of experience creating 3D artwork, I have
              experience working with clients to create fun and eyecatching
              designs and am excited to continue pushing my creative boundaries,
              while exploring new possibilities in the field of illustration.
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
