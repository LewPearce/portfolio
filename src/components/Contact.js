import { Link } from "react-router-dom";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";

const Contact = () => {
  return (
    <div className="page__fade">
      <div className="about__all">
        <h2 id="contact__title">Get in Touch!</h2>
        <p id="contact__para">
          I’m always looking for new and exciting projects to work on, if you
          have something you’d like to collaborate on or have a commission me
          for then please get in touch!
        </p>
        <Link to="mailto:	lewpearceart@gmail.com">
          <div className="contact__logolink">
            <img src={email} className="contact__logo" alt="email" />
            <h3 className="contact__link">lewpearceart@gmail.com</h3>
          </div>
        </Link>
        <Link
          to="https://www.instagram.com/lew.pearce.art/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact__logolink">
            <img src={insta} className="contact__logo" alt="instagram" />
            <h3 className="contact__link">@lew.pearce.art</h3>
          </div>
        </Link>
        <Link
          to="https://www.linkedin.com/in/lew-pearce-7b7986265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact__logolink">
            <img src={linkedin} className="contact__logo" alt="linkedin" />
            <h3 className="contact__link">lew-pearce</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
