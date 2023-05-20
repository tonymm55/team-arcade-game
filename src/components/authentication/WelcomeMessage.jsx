const WelcomeMessage = () => {
  if (localStorage.getItem('token')) {
    return (
      <div className="WelcomeMessage">
        <div className="profile-pic">
          <img src={localStorage.getItem('profilePic')}></img>
        </div>
        <div className="welcome-message">
          <h2>Welcome {localStorage.getItem('nickname')}!</h2>
        </div>
      </div>
    );
  }
};

export default WelcomeMessage;
