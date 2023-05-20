const WelcomeMessage = () => {
  if (localStorage.getItem('token')) {
    return (
      <div className="WelcomeMessage">
        <div className="profile-pic">
          <img
            className="welcome-message__profile-img"
            src={localStorage.getItem('profilePic')}
          ></img>
        </div>
        <div className="welcome-message">
          <h2 className="welcome-message__text">
            Welcome {localStorage.getItem('nickname')}!
          </h2>
        </div>
      </div>
    );
  }
};

export default WelcomeMessage;
