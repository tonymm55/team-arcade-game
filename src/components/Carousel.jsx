import Gamepage from './Gamepage';
import gameData from '../assets/Site/gamedata.json';

const Carousel = ({ handleGameSelected }) => {
  return (
    <div className="homepage__swiper">
      <swiper-container
        class="homepage__swiper-container"
        slides-per-view="1"
        navigation="true"
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
  );
};

export default Carousel;
