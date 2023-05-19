const Scoreboard = ({ props }) => {
  //   console.log(props);
  let gameScores = props;
  let topTenScores = gameScores.sort((a, b) => b.score - a.score).slice(0, 10);
  console.log(topTenScores);
};

export default Scoreboard;
