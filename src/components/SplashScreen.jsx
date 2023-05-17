import '../styles/splashscreen.css';
import { ReactComponent as GithubIcon } from '../assets/icons/github-icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter-icon.svg';
import Footer from './Footer';
import SignIn from './authentication/SignIn';

const SplashScreen = ({ onChildClick }) => {
  const handleInputChange = () => {
    onChildClick(false);
  };

  return (
    <div
      id="splashscreen"
      className="splashscreen"
      style={{
        backgroundImage: `url(/splash-screen.gif)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Splash Screen</h1>
      <h2>Logo</h2>
      <h2>Project Name</h2>
      <SignIn />
      <p>Enter / begin / insert coin image (flickering)</p>
      <button
        style={{ width: '200px' }}
        type="button"
        onClick={handleInputChange}
      >
        Temp Button
      </button>
      <div className="splashscreen__credits">
        <p>Created by:</p>
        <p>Anthony Moran</p>
        <p>Matthew Giles</p>

        <div className="splashscreen__credits-container">
          <a
            href="https://www.linkedin.com/in/tarndeep-virdi/"
            target={'_blank'}
            className="splashscreen__credits-tarndeep"
            rel="noreferrer"
          >
            Tarndeep Virdi
          </a>
          <a
            href="https://github.com/tsv-stacks"
            target={'_blank'}
            rel="noreferrer"
          >
            <GithubIcon color={'white'} />
          </a>
          <a
            target={'_blank'}
            href="https://twitter.com/tsv_stacks"
            rel="noreferrer"
          >
            <TwitterIcon color={'white'} />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SplashScreen;
