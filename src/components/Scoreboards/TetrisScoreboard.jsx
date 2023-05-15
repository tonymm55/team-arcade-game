import axios from 'axios';
import { useEffect, useState } from 'react';

const TetrisScoreboard = () => {
  const [gameStates, setGameStates] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://arcade-backend.onrender.com/scoreboard/tetris'
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
            <img className="top-ten-scores-image" src={gameState.img} />{' '}
            <p className="name-and-score">
              {gameState.name} : {gameState.score}
            </p>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default TetrisScoreboard;
