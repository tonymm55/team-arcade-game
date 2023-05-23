import '../../styles/Scoreboard.css';

const Scoreboard = ({ props, gameData }) => {
  //   console.log(props);
  let gameScores = props;
  let topTenScores = gameScores.sort((a, b) => b.score - a.score).slice(0, 10);
  console.log(topTenScores, gameData, props[0]._id);

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className={`scoreboard scoreboard-${gameData}`}>
      <p className="scoreboard__title">Leaderboard</p>
      {topTenScores ? (
        topTenScores.map((score, index) => {
          return (
            <div key={score._id} className={'scoreboard__entry'}>
              <p className="scoreboard__position">{index + 1}</p>
              <img className="scoreboard__img" src={score.img}></img>
              <p className="scoreboard__username">{score.name}</p>
              <p className="scoreboard__userscore">{score.score}</p>
              <p className="scoreboard__userdate">{convertDate(score.date)}</p>
            </div>
          );
        })
      ) : (
        <p>Loading Highscores...</p>
      )}
    </div>
  );
};

export default Scoreboard;
