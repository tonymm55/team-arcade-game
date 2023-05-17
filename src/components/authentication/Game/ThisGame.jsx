import NickName from '../NickName';
import GameEmbed from '../../Games/RunnerEmbed';

const RunnerGame = ({ nickname, setNickname, Game }) => {
  return (
    <>
      {nickname ? (
        <GameEmbed Game={Game} />
      ) : (
        <NickName setNickname={setNickname} />
      )}
    </>
  );
};

export default RunnerGame;
