import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ReactComponent as Html } from '../assets/icons/html-icon.svg';
import { ReactComponent as CSSIcon } from '../assets/icons/css-icon.svg';
import { ReactComponent as VJSIcon } from '../assets/icons/vanillaJS-icon.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-icon.svg';
import '../styles/Gamepage.css';
import Scoreboard from './Scoreboards/Scoreboard';
import StartButtonImage from '../assets/icons/press-start-icon-removebg-preview.png'
// import fakescore from './Scoreboards/scoredata.json';

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
          });
          setGameStates(data);
          console.log(data);
        } catch (error) {
          console.log(error);
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

  console.log(localStorage.getItem('nickname'));

  return (
    <div className="game-info">
      <div className="gamepage-container">
          <div className="gamepage">
            <h2>{gameInfo.title}</h2>
            <p className = "game-info">{gameInfo.description}</p>
            <img src ={StartButtonImage} alt="Start Game" className="gamepage__start-btn" />
          </div>
    
          <div className="leaderboard">
            <button id={`game-btn-${gameInfo.scoreboard}`}  onClick={handleButtonClick} />
             {gameStates.length === 0 ? (
               <p>Fetching highscores...</p>
             ) : (
               <Scoreboard props={gameStates} gameData={gameInfo.scoreboard} />
             )}
          </div>
      </div>

      <p className='built-with'>Built with:</p>
      <div className="icon-container">
        <Html height={50} width={50} />
        <CSSIcon height={50} width={50} />
        <VJSIcon height={50} width={50} />
        <ReactIcon height={50} width={50} />
      </div>

      {!localStorage.getItem('nickname') ? (
        <>
          {/* <NickName setNickname={setNickname} /> */}
          <p>Sign in to set your user name and submit your highscores!</p>
        </>
      ) : (
        <p className='are-you-ready'>Are you ready {localStorage.getItem('nickname')}?</p>
      )}

    </div>
    
  );
};

export default Gamepage;
