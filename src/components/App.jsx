import { useState } from "react";
import "../styles/App.css";
import SplashScreen from "./SplashScreen";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const handleChildClick = (value) => {
    setShowSplashScreen(value);
  };

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen onChildClick={handleChildClick} />
      ) : (
        <h1>Arcade Game Homepage Component</h1>
      )}
    </>
  );
}

export default App;
