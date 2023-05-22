import { useState } from 'react';

const NickName = ({ setNickname }) => {
  const [scoreName, setScoreName] = useState(localStorage.getItem('nickname'));
  const handleInputChange = (event) => setScoreName(event.target.value);
  const handleSubmit = () => {
    localStorage.setItem('nickname', scoreName);
    setNickname(scoreName);
  };

  return (
    <div className="nickname">
      <input
        type="text"
        id="name-input"
        placeholder="Enter your name..."
        onChange={handleInputChange}
        value={scoreName}
      />
      <button className="user-btn" type="submit" onClick={handleSubmit}>
        Update Nickname
      </button>
    </div>
  );
};

export default NickName;
