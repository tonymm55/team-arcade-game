import { useState, useEffect } from "react";

const RunnerEmbed = () => {
  const [gameScore, setGameScore] = useState(null);

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== "https://arcade-game-runner.netlify.app") {
        // Ignore messages from other domains
        return;
      }

      const { runnerScore } = event.data;
      if (runnerScore) {
        setGameScore(runnerScore);
      }

      console.log(runnerScore);
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [gameScore]);

  return (
    <iframe
      title="Runner Game"
      src="https://arcade-game-runner.netlify.app/"
      width={800}
      height={720}
      className="runner-game-embed"
    ></iframe>
  );
};

export default RunnerEmbed;
