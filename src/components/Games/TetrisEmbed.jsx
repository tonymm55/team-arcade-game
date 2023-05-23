import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TetrisEmbed = () => {
  const [gameScore, setGameScore] = useState(null);

  useEffect(() => {
    function handleTetris(event) {
      if (event.origin !== 'https://react-tetris-project.netlify.app') {
        return;
      }

      const { tetrisScore } = JSON.parse(event.data);
      if (tetrisScore) {
        setGameScore(tetrisScore);
      }

      if (!localStorage.getItem('nickname')) {
        const userInput = window.prompt(
          'Please enter a name to submit your score!'
        );
        if (userInput) {
          localStorage.setItem('nickname', userInput);
        }
      }

      const data = {
        name: localStorage.getItem('nickname'),
        score: tetrisScore,
        img: localStorage.getItem('profilePic'),
      };
      axios
        .post('https://arcade-backend.onrender.com/scoreboard/tetris/add', data)
        .then((response) => {
          toast.promise(Promise.resolve(response), {
            pending: 'Loading...',
            success: 'Score submitted!',
            closeOnClick: true,
            draggable: false,
            autoClose: 3000,
          });
        })
        .catch((err) => {
          toast.error(`${err.message}`, {
            closeOnClick: true,
            draggable: false,
            autoClose: 3000,
          });
        });
    }

    window.addEventListener('message', handleTetris);

    return () => {
      window.removeEventListener('message', handleTetris);
    };
  }, [gameScore]);

  return (
    <iframe
      title="Tetris Game"
      src="https://react-tetris-project.netlify.app"
      width={1400}
      height={700}
      className="tetris-game-embed"
    ></iframe>
  );
};

export default TetrisEmbed;
