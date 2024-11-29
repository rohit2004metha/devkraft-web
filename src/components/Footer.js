import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <div className="icon-container">
            {/* <FiInstagram />
            <FiLinkedin />
            <FiFacebook /> */}
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div>
          Made with ❤️ by Team Devkraft &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
