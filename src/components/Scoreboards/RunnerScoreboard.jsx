import axios from 'axios';
import { useEffect, useState } from 'react';

const RunnerScoreboard = () => {
  const [gameStates, setGameStates] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://arcade-backend.onrender.com/scoreboard/run'
    );
    const data = Object.keys(response.data).map((item) => response.data[item]);
    setGameStates(data);
  };
  console.log(gameStates);
  useEffect(() => {
    fetchData();
  }, []);
  const descendingGameStates = gameStates?.sort((a, b) => b.score - a.score);
  const topTenGameStates = descendingGameStates?.slice(0, 10);
  return (
    <div className="score-board">
      <h3>High Scores: </h3>
      {topTenGameStates?.map((gameState, index) => (
        <div className="top-ten-scores" key={index}>
          <h4>
            <img src={gameState.img} /> {gameState.name}: {gameState.score}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default RunnerScoreboard;
