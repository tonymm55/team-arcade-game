import soundOn from '../assets/Site/soundon.png';
import soundOff from '../assets/Site/soundoff.png';
import Ambient from '../assets/sounds/Ambient.mp3';
import '../styles/Footer.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Footer = () => {
  const [playAudio, setPlayAudio] = useState(false);
  const [music, setMusic] = useState(new Audio(Ambient));

  const handleOnClick = () => {
    setPlayAudio(true);
  };
  const handleOffClick = () => {
    setPlayAudio(false);
  };

  useEffect(() => {
    if (playAudio) {
      music.play();
    } else {
      music.pause();
    }
  }, [playAudio, music]);

  return (
    <footer className="footer" id="footer">
      <button onClick={handleOnClick}>
        <img
          src={soundOn}
          alt="sound on icon"
          className="footer__image-aspect"
        />
      </button>
      <button onClick={handleOffClick}>
        <img
          src={soundOff}
          alt="sound off icon"
          className="footer__image-aspect"
        />
      </button>
    </footer>
  );
};

export default Footer;
