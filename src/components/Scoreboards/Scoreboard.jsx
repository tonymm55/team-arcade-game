const Scoreboard = ({ props, gameData }) => {
  //   console.log(props);
  let gameScores = props;
  let topTenScores = gameScores.sort((a, b) => b.score - a.score).slice(0, 10);
  console.log(topTenScores, gameData);
  return (
    <div className={`scoreboard scoreboard-${gameData}`}>
      <p>{topTenScores[0].name}</p>
      {/* map through topTenScores */}
      {topTenScores ? 'gamescores' : <p>Loading Highscores...</p>}
    </div>
  );
};

export default Scoreboard;
