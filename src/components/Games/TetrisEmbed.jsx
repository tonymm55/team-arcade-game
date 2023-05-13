import { useEffect, useState } from "react";

const TetrisEmbed = () => {
  const [tetrisScore, setTetrisScore] = useState(null);

  useEffect(() => {
    function handleMessage(event) {
      if (
        event.origin !== "https://main--glittering-parfait-b48aaf.netlify.app/"
      ) {
        return;
      }

      const { tetrisGameScore } = JSON.parse(event.data);
      console.log(tetrisGameScore);
      if (tetrisGameScore) {
        setTetrisScore(tetrisGameScore);
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [tetrisScore]);

  return (
    <iframe
      title="Tetris Game"
      width={800}
      height={900}
      className="tetris-game-embed"
      src="https://main--glittering-parfait-b48aaf.netlify.app/"
    ></iframe>
  );
};

export default TetrisEmbed;
