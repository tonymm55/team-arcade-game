import soundOn from "../assets/Site/soundon.png";
import soundOff from "../assets/Site/soundoff.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <p>footer</p>
      <img src={soundOn} alt="sound on icon" className="footer__image-aspect" />
      <img
        src={soundOff}
        alt="sound off icon"
        className="footer__image-aspect"
      />
    </footer>
  );
};

export default Footer;
