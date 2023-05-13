import { useState } from 'react';

const NickName = () => {
  const [scoreName, setScoreName] = useState(localStorage.getItem('nickname'));
  const handleInputChange = (event) => setScoreName(event.target.value);
  const handleSubmit = () => {
    localStorage.setItem('nickname', scoreName);
  };
  return (
    <>
      <input
        type="text"
        id="name-input"
        placeholder="Enter your name"
        onChange={handleInputChange}
        value={scoreName}
      />
      <button type="submit" onClick={handleSubmit}>
        Set Nickname
      </button>
    </>
  );
};

export default NickName;
