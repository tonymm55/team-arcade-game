import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ReactComponent as Html } from '../assets/icons/html-icon.svg';
import { ReactComponent as CSSIcon } from '../assets/icons/css-icon.svg';
import { ReactComponent as VJSIcon } from '../assets/icons/vanillaJS-icon.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-icon.svg';
import '../styles/Gamepage.css';
import Scoreboard from './Scoreboard';
import StartButtonImage from '../assets/icons/press-start-icon-removebg-preview.png';
import samuraiGif from '../assets/games/samurai-gif.gif';

const Gamepage = ({ props, handleGameSelected, handleButtonId }) => {
  const [gameStates, setGameStates] = useState([]);
  const gameInfo = props;

  const handleButtonClick = (event) => {
    const { id } = event.target;
    handleGameSelected(true);
    handleButtonId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (gameInfo.scoreboard === 'samurai') {
        return;
      } else {
        try {
          const response = await axios.get(
            ` https://arcade-backend.onrender.com/scoreboard/${gameInfo.scoreboard}`
          );
          const data = Object.keys(response.data).map(
            (item) => response.data[item]
          );
          toast.success(`Updated high scores for: ${gameInfo.title}`, {
            toastId: `${gameInfo.scoreboard}`,
            closeOnClick: true,
            draggable: false,
            autoClose: 3000,
            limit: 1,
            position: 'bottom-right',
          });
          setGameStates(data);
        } catch (err) {
          toast.error(`Unable to get high scores for ${gameInfo.title}`, {
            closeOnClick: true,
            draggable: false,
            autoClose: 3000,
          });
        }
      }
    };
    fetchData();
  }, [gameInfo.scoreboard, gameInfo.title]);

  const iconObject = {
    html: Html,
    css: CSSIcon,
    js: VJSIcon,
    react: ReactIcon,
  };

  const renderIcons = () => {
    let iconComponent = [];
    if (gameInfo.builtWith.includes('HTML')) {
      iconComponent.push(<iconObject.html height={50} width={50} />);
    }
    if (gameInfo.builtWith.includes('CSS')) {
      iconComponent.push(<iconObject.css height={50} width={50} />);
    }
    if (gameInfo.builtWith.includes('Vanilla Javascript')) {
      iconComponent.push(<iconObject.js height={50} width={50} />);
    }
    if (gameInfo.builtWith.includes('React')) {
      iconComponent.push(<iconObject.react height={50} width={50} />);
    }
    return iconComponent;
  };

  return (
    <div className="gamepage">
      <div className="gamepage__scores-details">
        <div className="gamepage__game-details">
          <div>
            <h2 className="gamepage__game-detail-title">{gameInfo.title}</h2>
            <p className="gamepage__game-detail-description">
              {gameInfo.description}
            </p>
          </div>
          <div className="gamepage__built-with">
            <p className="gamepage__built-with-text">Built with:</p>
            <div>{renderIcons()}</div>
          </div>
        </div>
        <div className="gamepage__game-scores">
          {gameInfo.scoreboard !== 'samurai' &&
            (gameStates.length === 0 ? (
              <p>Fetching highscores...</p>
            ) : (
              <Scoreboard props={gameStates} gameData={gameInfo.scoreboard} />
            ))}
          {gameInfo.scoreboard === 'samurai' && (
            <img className="samurai-gif" src={samuraiGif} />
          )}
        </div>
      </div>

      <div>
        <img
          src={StartButtonImage}
          alt="Start Game"
          className="gamepage__start-btn"
          id={`game-btn-${gameInfo.scoreboard}`}
          onClick={handleButtonClick}
        />
        {!localStorage.getItem('nickname') ? (
          <>
            <p className="gamepage__start-text">
              Sign in to set your user name and submit your highscores!
            </p>
          </>
        ) : (
          <p className="gamepage__start-text">
            Are you ready {localStorage.getItem('nickname')}?
          </p>
        )}
      </div>
    </div>
  );
};

export default Gamepage;
