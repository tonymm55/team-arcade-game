import { useState } from "react";
import "../styles/App.css";
import SplashScreen from "./SplashScreen";

function App() {
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  return (
    <>{showSplashScreen ? <SplashScreen /> : <h1>Arcade Game Homepage</h1>}</>
  );
}

export default App;
