import { register } from 'swiper/element/bundle';
import { useState } from 'react';
import SignIn from './authentication/SignIn';
import SignOut from './authentication/SignOut';
import NickName from './authentication/NickName';
import RunnerScoreboard from './Scoreboards/RunnerScoreboard';
import gameData from '../assets/Site/gamedata.json';
import Gamepage from './Gamepage';

import '../styles/Homepage.css';
import '../styles/user.css';

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
      <div className="user-bar">
        {nickname && <NickName setNickname={setNickname} />}
        <SignIn />
        <SignOut />
      </div>
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
              <swiper-slide key={game.title}>
                <Gamepage props={game} key={game.title} />
              </swiper-slide>
            );
          })}
          <swiper-slide>
            <RunnerScoreboard />
          </swiper-slide>
        </swiper-container>
        <swiper-container
          class="homepage__thumbs"
          slides-per-view="4"
          pagination="true"
          watch-slides-progress="true"
          space-between={10}
        >
          <swiper-slide>Runner GamePage</swiper-slide>
          <swiper-slide>Tetris GamePage</swiper-slide>
          <swiper-slide>Ninja GamePage</swiper-slide>
          <swiper-slide>SteamPunk GamePage</swiper-slide>
        </swiper-container>
      </div>
    </main>
  );
};

export default Homepage;
