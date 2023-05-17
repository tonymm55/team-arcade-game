import NickName from '../NickName';
import TetrisEmbed from '../../Games/TetrisEmbed';

const TetrisGame = ({ nickname, setNickname }) => {
  return (
    <>{nickname ? <TetrisEmbed /> : <NickName setNickname={setNickname} />}</>
  );
};

export default TetrisGame;
