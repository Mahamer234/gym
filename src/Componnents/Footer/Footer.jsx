import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/db";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      
      <hr />
      <div className="footer__content">
      <div className="blur blur__f"></div> 
      <div className="blur blur__f"></div> 
        <div className="social__icons">
          <FaFacebook size={40} color="#fff" />
          <FaInstagram size={40} color="#fff" />
          <FaLinkedinIn size={40} color="#fff" />
        </div>
        <div className="footer__logo">
          <img src={logo} alt="logo" title="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
