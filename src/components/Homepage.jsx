import { register } from 'swiper/element/bundle';
import '../styles/Homepage.css';
import Gamepage from './Gamepage';
import RunnerEmbed from './Games/RunnerEmbed';
import TetrisEmbed from './Games/TetrisEmbed';
import gameData from '../assets/Site/gamedata.json';
import SignIn from './authentication/SignIn';
import SignOut from './authentication/SignOut';
import NickName from './authentication/NickName';
import RunnerScoreboard from './Scoreboards/RunnerScoreboard';

register();

const Homepage = () => {
  // make reusable component and pass in props to make the indivdual slides for games
  // put game data (title description) in .json pull in and pass into gamepage as props
  // when game is selected, hide swiper carousel and load in game component
  // console.log(gameData);
  return (
    <main className="homepage">
      <h2 className="homepage__title-center">
        Dynamic Homepage Component title
      </h2>
      <NickName />
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
          {/* <swiper-slide>
            <RunnerScoreboard />
          </swiper-slide> */}
          <swiper-slide>
            <RunnerEmbed />
          </swiper-slide>
          <swiper-slide>
            <Gamepage props={gameData} />
          </swiper-slide>
          <swiper-slide>
            <TetrisEmbed />
          </swiper-slide>
          <swiper-slide>
            <Gamepage props={gameData} />
          </swiper-slide>
          <swiper-slide>Game 4</swiper-slide>
          <swiper-slide>Game 5</swiper-slide>
        </swiper-container>
        <swiper-container
          class="homepage__thumbs"
          slides-per-view="4"
          pagination="true"
          watch-slides-progress="true"
          space-between={10}
        >
          <swiper-slide>Runner Thumb</swiper-slide>
          <swiper-slide>Runner GamePage Thumb</swiper-slide>
          <swiper-slide>Tetris</swiper-slide>
          <swiper-slide>Thumb 4</swiper-slide>
          <swiper-slide>Thumb 5</swiper-slide>
          <swiper-slide>Thumb 6</swiper-slide>
        </swiper-container>
      </div>
    </main>
  );
};

export default Homepage;
