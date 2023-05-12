import { register } from 'swiper/element/bundle';
import '../styles/Homepage.css';
import Gamepage from './Gamepage';
import RunnerGame from './RunnerGame/RunnerGame';
import RunnerEmbed from './RunnerGame/RunnerEmbed';
import SignIn from './authentication/SignIn';
import SignOut from './authentication/SignOut';

register();

const Homepage = () => {
  // make reusable component and pass in props to make the indivdual slides for games
  // put game data (title description) in .json pull in and pass into gamepage as props
  // when game is selected, hide swiper carousel and load in game component
  return (
    <main className="homepage">
      <h2 className="homepage__title-center">
        Dynamic Homepage Component title
      </h2>
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
            <Gamepage />
          </swiper-slide>
          <swiper-slide>
            <RunnerGame />
          </swiper-slide>
          <swiper-slide>
            <RunnerEmbed />
          </swiper-slide>
          <swiper-slide>Game 2</swiper-slide>
          <swiper-slide>Game 3</swiper-slide>
          <swiper-slide>Game 4</swiper-slide>
        </swiper-container>
        <swiper-container
          class="homepage__thumbs"
          slides-per-view="4"
          pagination="true"
          watch-slides-progress="true"
          space-between={10}
        >
          <swiper-slide>Thumb 1</swiper-slide>
          <swiper-slide>Thumb 2</swiper-slide>
          <swiper-slide>Thumb 3</swiper-slide>
          <swiper-slide>Thumb 4</swiper-slide>
          <swiper-slide>Thumb 5</swiper-slide>
        </swiper-container>
      </div>
    </main>
  );
};

export default Homepage;
