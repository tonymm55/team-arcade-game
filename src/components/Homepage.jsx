import { register } from 'swiper/element/bundle';
import { useState } from 'react';
import SignIn from './authentication/SignIn';
import SignOut from './authentication/SignOut';
import NickName from './authentication/NickName';
import gameData from '../assets/Site/gamedata.json';
import Gamepage from './Gamepage';

import { ReactComponent as ReturnKey } from '../assets/icons/return-key.svg';

import '../styles/Homepage.css';
import '../styles/user.css';
import RunnerEmbed from './Games/RunnerEmbed';
import NinjaEmbed from './Games/NinjaEmbed';
import TetrisEmbed from './Games/TetrisEmbed';
import SteamPunkEmbed from './Games/SteamPunkEmbed';
import arcadeLogo from '../assets/icons/arcade-games-neon.png';

register();

const Homepage = () => {
  const [nickname, setNickname] = useState(localStorage.getItem('nickname'));
  const [gameSelected, setGameSelected] = useState(false);
  const [buttonId, setButtonId] = useState(null);

  const handleGameSelected = () => {
    setGameSelected((prev) => !prev);
    setButtonId(null);
  };

  const handleButtonId = (btnId) => {
    setButtonId(btnId);
  };

  const reloadFrame = () => {
    document.getElementById('steam-punk-embed').src =
      document.getElementById('steam-punk-embed').src;
  };

  const loadGame = (buttonId) => {
    if (buttonId === 'game-btn-run') {
      return <RunnerEmbed />;
    } else if (buttonId === 'game-btn-samurai') {
      return <NinjaEmbed />;
    } else if (buttonId === 'game-btn-tetris') {
      return <TetrisEmbed />;
    } else if (buttonId === 'game-btn-steampunk') {
      return <SteamPunkEmbed />;
    }
  };

  return (
    <main className="homepage">
      <header className="homepage__header">
        <img src={arcadeLogo} className="homepage__header-img"></img>
        <h1>Arcade Game Room</h1>
        <h2 className="homepage__title-center">Select Game</h2>
      </header>
      <div className="user-bar">
        {nickname && <NickName setNickname={setNickname} />}
        <SignIn />
        <SignOut />
      </div>
      {!gameSelected && (
        <div className="homepage__swiper">
          <swiper-container
            class="homepage__swiper-container"
            slides-per-view="1"
            navigation="true"
            //   pagination="true"
            thumbs-swiper=".homepage__thumbs"
          >
            {gameData.map((game) => {
              return (
                <swiper-slide
                  class={`homepage__swiper-slide--${game.scoreboard}`}
                  key={game.title}
                >
                  <Gamepage
                    handleGameSelected={handleGameSelected}
                    handleButtonId={handleButtonId}
                    props={game}
                    key={game.title}
                  />
                </swiper-slide>
              );
            })}
          </swiper-container>
          <swiper-container
            class="homepage__thumbs"
            slides-per-view="4"
            pagination="true"
            watch-slides-progress="true"
            space-between={10}
          >
            {gameData.map((game) => {
              return (
                <swiper-slide
                  class={`homepage__swiper-thumb--pointer homepage__swiper-thumb--${game.scoreboard}`}
                  key={game.scoreboard}
                >
                  <img
                    className={
                      'homepage__swiper-thumb--pointer  homepage__swiper-thumb-img'
                    }
                    src={game.thumbImg}
                  />
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
      )}
      {gameSelected && (
        <>
          {loadGame(buttonId)}
          <div className="gamepage-controls">
            <button
              type="button"
              className="return__homepage-btn"
              onClick={handleGameSelected}
            >
              <p>Choose another game</p>
              <ReturnKey
                width={30}
                height={30}
                color={'white'}
                margin-right={5}
              />
            </button>
            {buttonId === 'game-btn-steampunk' && (
              <button
                type="button"
                className="return__homepage-btn reload-game__homepage"
                onClick={reloadFrame}
              >
                Reload Game
              </button>
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default Homepage;
