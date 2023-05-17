import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import '../styles/App.css';
import SplashScreen from './SplashScreen';
import Homepage from './Homepage';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </>
  );
};

export default App;
