import { ReactComponent as Html } from '../assets/icons/html-icon.svg';
import { ReactComponent as CSSIcon } from '../assets/icons/css-icon.svg';
import { ReactComponent as VJSIcon } from '../assets/icons/vanillaJS-icon.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-icon.svg';

const Gamepage = ({ props }) => {
  // remove line below when mapping through in parent
  const gameInfo = props;
  return (
    <div className="gamepage">
      <h2>{gameInfo.title}</h2>
      <p>Highscores</p>
      <p>{gameInfo.description}</p>
      <p>image background</p>
      <p>Built with: [icons]</p>
      <Html height={50} width={50} />
      <CSSIcon height={50} width={50} />
      <VJSIcon height={50} width={50} />
      <ReactIcon height={50} width={50} />
      <button type="button" className="gamepage__start-btn">
        Start Game
      </button>
    </div>
  );
};

export default Gamepage;
