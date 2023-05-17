import NickName from '../NickName';
import SteamPunkEmbed from '../../Games/SteamPunkEmbed';

const SteamPunkGame = ({ nickname, setNickname }) => {
  return (
    <>
      {nickname ? <SteamPunkEmbed /> : <NickName setNickname={setNickname} />}
    </>
  );
};

export default SteamPunkGame;
