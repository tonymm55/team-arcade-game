const WelcomeMessage = () => {
  if (localStorage.getItem('token')) {
    return (
      <div className="welcome-message">
        <img
          className="welcome-message__profile-img"
          src={localStorage.getItem('profilePic')}
        ></img>

        <h2 className="welcome-message__text">
          Welcome {localStorage.getItem('nickname')}!
        </h2>
      </div>
    );
  }
};

export default WelcomeMessage;
