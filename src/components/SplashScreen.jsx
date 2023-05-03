import "../styles/splashscreen.css";

const SplashScreen = () => {
  return (
    <div
      id="splashscreen"
      className="splashscreen"
      style={{
        backgroundImage: `url(/splash-screen.gif)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Splash Screen</h1>
      <h2>Logo</h2>
      <h2>Project Name</h2>
      <p>Enter / begin / insert coin image (flickering)</p>
      <p>Credits & Links</p>
    </div>
  );
};

export default SplashScreen;
