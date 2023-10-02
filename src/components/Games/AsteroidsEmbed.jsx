import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AsteroidsEmbed = () => {
  const [gameScore, setGameScore] = useState(null);

  useEffect(() => {
    function handleAsteroids(event) {
      if (event.origin !== 'https://matty92g-asteroids.netlify.app/') {
        // if (event.origin !== 'http://127.0.0.1:5500/') {
        return;
      }

      const { asteroidsScore } = JSON.parse(event.data);
      if (asteroidsScore) {
        setGameScore(asteroidsScore);
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
        score: asteroidsScore,
        img: localStorage.getItem('profilePic'),
      };
      axios
        .post(
          'https://arcade-backend.onrender.com/scoreboard/asteroids/add',
          data
        )
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

    window.addEventListener('message', handleAsteroids);

    return () => {
      window.removeEventListener('message', handleAsteroids);
    };
  }, [gameScore]);

  return (
    <iframe
      title="Asteroids Game"
      // src="http://127.0.0.1:5500/"
      src="https://matty92g-asteroids.netlify.app/"
      width={700}
      height={700}
      className="asteroids-game-embed"
    ></iframe>
  );
};

export default AsteroidsEmbed;
