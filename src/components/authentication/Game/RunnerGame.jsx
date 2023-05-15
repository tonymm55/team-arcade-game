import NickName from '../NickName';
import RunnerEmbed from '../../Games/RunnerEmbed';

const RunnerGame = ({ nickname, setNickname }) => {
  return (
    <>{nickname ? <RunnerEmbed /> : <NickName setNickname={setNickname} />}</>
  );
};

export default RunnerGame;
