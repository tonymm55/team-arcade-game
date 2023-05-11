import '../styles/splashscreen.css';
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
      <p>Credits & Links</p>
      <Footer />
    </div>
  );
};

export default SplashScreen;
