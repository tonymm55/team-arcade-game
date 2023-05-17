import { useEffect, useState } from 'react';
import axios from 'axios';

const TetrisEmbed = () => {
  const [gameScore, setGameScore] = useState(null);

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== 'https://react-tetris-project.netlify.app/') {
        return;
      }

      const { tetrisScore } = JSON.parse(event.data);
      if (tetrisScore) {
        setGameScore(tetrisScore);
      }
      console.log(localStorage.getItem('nickname'));
      console.log(tetrisScore);

      const data = {
        name: localStorage.getItem('nickname'),
        score: tetrisScore,
        img: localStorage.getItem('profilePic'),
      };
      axios
        .post('https://arcade-backend.onrender.com/scoreboard/tetris/add', data)
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err);
        });
    }

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [gameScore]);

  return (
    <iframe
      title="Tetris Game"
      width={700}
      height={900}
      className="tetris-game-embed"
      src="https://react-tetris-project.netlify.app/"
    ></iframe>
  );
};

export default TetrisEmbed;
