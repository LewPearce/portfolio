import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const path = useLocation().pathname;

  return (
    <>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
