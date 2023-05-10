import { signOutWithGoogle } from '../../data/Firebase';

function SignOut() {
  return (
    <div className="SignOut">
      <button className="login-with-google-btn" onClick={signOutWithGoogle}>
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
