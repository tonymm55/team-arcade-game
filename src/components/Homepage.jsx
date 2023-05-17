import { register } from 'swiper/element/bundle';
import '../styles/Homepage.css';
import Gamepage from './Gamepage';
import RunnerGame from './authentication/Game/RunnerGame';
import TetrisGame from './authentication/Game/TetrisGame';
import gameData from '../assets/Site/gamedata.json';
import SignIn from './authentication/SignIn';
import SignOut from './authentication/SignOut';
import NickName from './authentication/NickName';
import RunnerScoreboard from './Scoreboards/RunnerScoreboard';
import TetrisScoreboard from './Scoreboards/TetrisScoreboard';
import { useState } from 'react';
import SteampunkScoreboard from './Scoreboards/SteampunkScoreboard';
import SteamPunkGame from './authentication/Game/SteamPunkGame';
import NinjaEmbed from './Games/NinjaEmbed';

register();

const Homepage = () => {
  // make reusable component and pass in props to make the indivdual slides for games
  // put game data (title description) in .json pull in and pass into gamepage as props
  // when game is selected, hide swiper carousel and load in game component
  // console.log(gameData);
  const [nickname, setNickname] = useState(localStorage.getItem('nickname'));
  return (
    <main className="homepage">
      <h2 className="homepage__title-center">
        Dynamic Homepage Component title
      </h2>
      {nickname && <NickName setNickname={setNickname} />}
      <SignIn />
      <SignOut />
      <div className="homepage__swiper">
        <swiper-container
          class="homepage__swiper-container"
          slides-per-view="1"
          navigation="true"
          //   pagination="true"
          thumbs-swiper=".homepage__thumbs"
        >
          <swiper-slide>
            <RunnerScoreboard />
          </swiper-slide>
          <swiper-slide>
            <RunnerGame nickname={nickname} setNickname={setNickname} />
          </swiper-slide>
          <swiper-slide>
            <Gamepage props={gameData} />
          </swiper-slide>
          <swiper-slide>
            <TetrisScoreboard />
          </swiper-slide>
          <swiper-slide>
            <TetrisGame nickname={nickname} setNickname={setNickname} />
          </swiper-slide>
          <swiper-slide>
            <Gamepage props={gameData} />
          </swiper-slide>
          <swiper-slide>
            <NinjaEmbed />
          </swiper-slide>
          <swiper-slide>
            <Gamepage props={gameData} />
          </swiper-slide>
          <swiper-slide>
            <SteampunkScoreboard />
          </swiper-slide>
          <swiper-slide>
            <SteamPunkGame nickname={nickname} setNickname={setNickname} />
          </swiper-slide>
          <swiper-slide>
            <Gamepage props={gameData} />
          </swiper-slide>
          <swiper-slide>Game 5</swiper-slide>
        </swiper-container>
        <swiper-container
          class="homepage__thumbs"
          slides-per-view="4"
          pagination="true"
          watch-slides-progress="true"
          space-between={10}
        >
          <swiper-slide>Runner Scoreboard</swiper-slide>
          <swiper-slide>Runner GamePage</swiper-slide>
          <swiper-slide>Runner</swiper-slide>
          <swiper-slide>Tetris Scoreboard</swiper-slide>
          <swiper-slide>Tetris GamePage</swiper-slide>
          <swiper-slide>Tetris</swiper-slide>
          <swiper-slide>Ninja GamePage</swiper-slide>
          <swiper-slide>Ninja</swiper-slide>
          <swiper-slide>SteamPunk Scoreboard</swiper-slide>
          <swiper-slide>SteamPunk GamePage</swiper-slide>
          <swiper-slide>SteamPunk</swiper-slide>
          <swiper-slide>Thumb 6</swiper-slide>
        </swiper-container>
      </div>
    </main>
  );
};

export default Homepage;
