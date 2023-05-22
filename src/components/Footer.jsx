import soundOn from '../assets/Site/soundon.png';
import soundOff from '../assets/Site/soundoff.png';
import Ambient from '../assets/sounds/Ambient.mp3';
import '../styles/Footer.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Footer = () => {
  const [playAudio, setPlayAudio] = useState(false);
  const [music, setMusic] = useState(new Audio(Ambient));
  const [soundButton, setSoundButton] = useState(soundOff);
  const [muteState, setMuteState] = useState('Mute');

  const handleOnClick = () => {
    if (!playAudio) {
      setPlayAudio(true);
      setSoundButton(soundOn);
      setMuteState('Playing');
    } else {
      setPlayAudio(false);
      setSoundButton(soundOff);
      setMuteState('Mute');
    }
  };

  useEffect(() => {
    if (playAudio) {
      music.play();
      music.muted = false;
      music.loop = true;
    } else {
      music.muted = true;
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
      <div className="mute">
        <button onClick={handleOnClick}>
          <div className="mute-image">
            <img
              src={soundButton}
              alt="sound icon"
              className="footer__image-aspect"
            />
            <div className="centered">{muteState}</div>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
