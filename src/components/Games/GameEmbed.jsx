// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const GameEmbed = ({ Game }) => {
//   const [gameScore, setGameScore] = useState(null);

//   const GameRender = () => {
//     if (Game === 'Run') {
//       function handleMessage(event) {
//         if (event.origin !== 'https://arcade-game-runner.netlify.app') {
//           return;
//         }

//         const { runnerScore } = JSON.parse(event.data);
//         if (runnerScore) {
//           setGameScore(runnerScore);
//         }

//         const data = {
//           name: localStorage.getItem('nickname'),
//           score: runnerScore,
//           img: localStorage.getItem('profilePic'),
//         };

//         axios
//           .post('https://arcade-backend.onrender.com/scoreboard/run/add', data)
//           .then((response) => console.log(response))
//           .catch((err) => {
//             console.log(err);
//           });
//       }

//       window.addEventListener('message', handleMessage);

//       return () => {
//         window.removeEventListener('message', handleMessage);
//       };
//     } else if (Game === 'Tetris') {
//       function handleMessage(event) {
//         if (event.origin !== 'https://react-tetris-project.netlify.app/') {
//           return;
//         }

//         const { tetrisGameScore } = JSON.parse(event.data);
//         if (tetrisGameScore) {
//           setGameScore(tetrisGameScore);
//         }
//         console.log(localStorage.getItem('nickname'));
//         console.log(tetrisGameScore);

//         const data = {
//           name: localStorage.getItem('nickname'),
//           score: tetrisGameScore,
//           img: localStorage.getItem('profilePic'),
//         };
//         axios
//           .post(
//             'https://arcade-backend.onrender.com/scoreboard/tetris/add',
//             data
//           )
//           .then((response) => console.log(response))
//           .catch((err) => {
//             console.log(err);
//           });
//       }

//       window.addEventListener('message', handleMessage);

//       return () => {
//         window.removeEventListener('message', handleMessage);
//       };
//     }
//     useEffect(() => {
//       GameRender();
//     }, [gameScore]);
//   };
//   return (
//     <>
//       <iframe
//         title="Runner Game"
//         src="https://arcade-game-runner.netlify.app/"
//         width={800}
//         height={720}
//         className="runner-game-embed"
//       ></iframe>
//     </>
//   );
// };

// export default GameEmbed;
