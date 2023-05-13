import { useState, useEffect } from 'react';
import axios from 'axios';

const RunnerEmbed = () => {
  const [gameScore, setGameScore] = useState(null);

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== 'https://arcade-game-runner.netlify.app') {
        // if (event.origin !== 'https://tsv-stacks.github.io/runner-game-two/') {
        return;
      }

      const { runnerScore } = JSON.parse(event.data);
      if (runnerScore) {
        setGameScore(runnerScore);
      }
      console.log(localStorage.getItem('nickname'));
      console.log(runnerScore);
      const data = {
        name: localStorage.getItem('nickname'),
        score: runnerScore,
        img: localStorage.getItem('profilePic'),
      };
      axios
        .post('https://arcade-backend.onrender.com/scoreboard/run/add', data)
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
      title="Runner Game"
      src="https://arcade-game-runner.netlify.app/"
      // src="https://tsv-stacks.github.io/runner-game-two/"
      width={800}
      height={720}
      className="runner-game-embed"
    ></iframe>
  );
};

export default RunnerEmbed;
