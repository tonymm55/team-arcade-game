import { register } from 'swiper/element/bundle';
import { useState } from 'react';
import SignIn from './authentication/SignIn';
import SignOut from './authentication/SignOut';
import NickName from './authentication/NickName';
import Carousel from './Carousel';
// import gameData from '../assets/Site/gamedata.json';
// import Gamepage from './Gamepage';

import '../styles/Homepage.css';
import '../styles/user.css';

register();

const Homepage = () => {
  // when game is selected, hide swiper carousel and load in game component
  const [nickname, setNickname] = useState(localStorage.getItem('nickname'));
  const [gameSelected, setGameSelected] = useState(false);

  return (
    <main className="homepage">
      <h2 className="homepage__title-center">Choose a Game</h2>
      <div className="user-bar">
        {nickname && <NickName setNickname={setNickname} />}
        <SignIn />
        <SignOut />
      </div>
      {!gameSelected && <Carousel />}
    </main>
  );
};

export default Homepage;
