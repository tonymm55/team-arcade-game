import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const SteamPunkEmbed = () => {
  const [gameScore, setGameScore] = useState(null);

  useEffect(() => {
    function handleSteampunk(event) {
      if (event.origin !== 'https://steam-punk-project.netlify.app') {
        return;
      }

      const { steamPunkScore } = JSON.parse(event.data);
      if (steamPunkScore) {
        setGameScore(steamPunkScore);
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
        score: steamPunkScore,
        img: localStorage.getItem('profilePic'),
      };

      axios
        .post(
          'https://arcade-backend.onrender.com/scoreboard/steampunk/add',
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

    window.addEventListener('message', handleSteampunk);

    return () => {
      window.removeEventListener('message', handleSteampunk);
    };
  }, [gameScore]);
  return (
    <>
      <iframe
        title="Steam Punk Game"
        className="steam-punk-embed"
        id="steam-punk-embed"
        src="https://steam-punk-project.netlify.app"
        width={1000}
        height={500}
      ></iframe>
    </>
  );
};

export default SteamPunkEmbed;
