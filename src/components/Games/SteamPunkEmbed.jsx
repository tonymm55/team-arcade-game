import { useState, useEffect } from 'react';
import axios from 'axios';

const SteamPunkEmbed = () => {
  const [gameScore, setGameScore] = useState(null);

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== 'https://steam-punk-project.netlify.app/') {
        return;
      }

      const { steamScore } = JSON.parse(event.data);
      if (steamScore) {
        setGameScore(steamScore);
      }

      console.log(localStorage.getItem('nickname'));
      console.log(steamScore);

      const data = {
        name: localStorage.getItem('nickname'),
        score: steamScore,
        img: localStorage.getItem('profilePic'),
      };

      axios
        .post(
          'https://arcade-backend.onrender.com/scoreboard/steampunk/add',
          data
        )
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
    <>
      <iframe
        title="Steam Punk Game"
        className="steam-punk-embed"
        src="https://steam-punk-project.netlify.app/"
        width={1000}
        height={500}
      ></iframe>
    </>
  );
};

export default SteamPunkEmbed;
