import plant from "../assets/plant.png";

const About = () => {
  return (
    <>
      <img id="plant" src={plant}></img>
      <div className="about__all">
        <div>
          <h2 id="about__me">About me</h2>
          <p id="about__para">
            Hi! I’m Lew, an illustrator, 3D generalist and occasional animator
            based in Manchester. I use a 3D software to create colourful
            illustrative pieces. I have over 7 years of experience using Blender
            and through this have a great knowledge of modeling, lighting,
            materials, rigging and composition. I’m always looking for new and
            exciting projects to work on, if you have something you’d like to
            collaborate on or have a commission me for then email me at{" "}
            <span className="highlight">lewispearce1@hotmail.co.uk</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
