import { useState } from 'react';

const NickName = () => {
  const [scoreName, setScoreName] = useState(localStorage.getItem('nickname'));
  const handleInputChange = (event) => setScoreName(event.target.value);
  //   if (!localStorage.getItem('nickname'))
  return (
    <>
      <input type="text" onChange={handleInputChange} value={scoreName} />
      <button
        type="submit"
        onClick={localStorage.setItem('nickname', scoreName)}
      >
        Set Nickname
      </button>
    </>
  );
};

export default NickName;
