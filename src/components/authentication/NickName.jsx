import { useState } from 'react';
import { toast } from 'react-toastify';

const NickName = ({ setNickname }) => {
  const [scoreName, setScoreName] = useState(localStorage.getItem('nickname'));
  const handleInputChange = (event) => setScoreName(event.target.value);
  const handleSubmit = () => {
    if (scoreName) {
      localStorage.setItem('nickname', scoreName);
      setNickname(scoreName);
      toast.success(`Nickname updated to ${scoreName}`, {
        closeOnClick: true,
        draggable: false,
        autoClose: 3000,
      });
    } else {
      toast.error('Not a valid nickname', {
        closeOnClick: true,
        draggable: false,
        autoClose: 3000,
      });
    }
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
