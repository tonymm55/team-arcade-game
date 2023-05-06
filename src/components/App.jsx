import { useState } from "react";
import "../styles/App.css";
import SplashScreen from "./SplashScreen";
import Homepage from "./Homepage";

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const handleChildClick = (value) => {
    setShowSplashScreen(value);
  };

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen onChildClick={handleChildClick} />
      ) : (
        <Homepage />
      )}
    </>
  );
};

export default App;
