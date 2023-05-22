import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const RunnerEmbed = () => {
  const [gameScore, setGameScore] = useState(null);

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== 'https://arcade-game-runner.netlify.app') {
        return;
      }

      const { runnerScore } = JSON.parse(event.data);
      if (runnerScore) {
        setGameScore(runnerScore);
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
        score: runnerScore,
        img: localStorage.getItem('profilePic'),
      };

      axios
        .post('https://arcade-backend.onrender.com/scoreboard/run/add', data)
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
          toast.error(`${'Score not Submitted: ' + err.message}`, {
            closeOnClick: true,
            draggable: false,
            autoClose: 3000,
          });
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
        title="Runner Game"
        src="https://arcade-game-runner.netlify.app/"
        width={800}
        height={720}
        className="runner-game-embed"
      ></iframe>
    </>
  );
};

export default RunnerEmbed;
