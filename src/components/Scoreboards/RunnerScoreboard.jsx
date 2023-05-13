import axios from 'axios';
import { useEffect, useState } from 'react';
import NickName from '../authentication/NickName';

const RunnerScoreboard = ({ score }) => {
  const [gameStates, setGameStates] = useState(null);
  const [userName, setUserName] = useState();
  const renderNickname = !localStorage.getItem('nickname') ? false : true;
  console.log('renderNickname true or false: ', renderNickname);
  const fetchData = async () => {
    // const response = await axios.get(
    //   'https://arcade-backend.onrender.com/scoreboard/run'
    // );
    const response = {
      data: [
        {
          _id: '64564af4fa9aae46ca0653df',
          name: 'Run Dude',
          score: 10,
          img: 'https://i1.sndcdn.com/artworks-000189080723-ez2uad-t500x500.jpg',
          date: '2023-05-06T12:40:39.801Z',
          __v: 0,
        },
        {
          _id: '645f69de054ec6dc77d93dab',
          name: 'Runner Man',
          score: 0,
          img: 'https://lh3.googleusercontent.com/a/AGNmyxY-JA1x3zog7Z1h5mfx4JR5NJHl7riCUaDUXdqY=s96-c',
          date: '2023-05-13T09:58:39.160Z',
          __v: 0,
        },
      ],
    };
    // console.log(response.data);
    const data = Object.keys(response.data).map((item) => response.data[item]);
    setGameStates(data);
  };
  console.log(gameStates);
  //   const saveData = () => {
  //     const data = {
  //       name: userName,
  //       score: score,
  //     };
  //     // 'http://localhost:8000/addscore'
  //     axios
  //       .post('https://arcade-backend.onrender.com/scoreboard/flappy/add', data)
  //       .then((response) => console.log(response))
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .then(fetchData);
  //   };
  useEffect(() => {
    fetchData();
  }, []);
  const descendingGameStates = gameStates?.sort((a, b) => b.score - a.score);
  const topTenGameStates = descendingGameStates?.slice(0, 10);
  //   console.log(userName);
  return (
    <div className="score-board">
      <h2>Player Name:</h2>
      <input
        type="text"
        id="name-input"
        placeholder="Enter your name"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <h2>Score: {score} </h2>
      <h3>High Scores: </h3>
      {topTenGameStates?.map((gameState, index) => (
        <div className="top-ten-scores" key={index}>
          <h4>
            {gameState.name}: {gameState.score}
          </h4>
        </div>
      ))}
      <button onClick={fetchData()}>Submit Score</button>
    </div>
  );
};

export default RunnerScoreboard;
