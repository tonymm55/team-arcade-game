import { signInWithGoogle } from '../../data/Firebase';
import { signOutWithGoogle } from '../../data/Firebase';

function SignIn() {
  if (!localStorage.getItem('token')) {
    return (
      <div className="SignIn">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign In
        </button>
      </div>
    );
  } else {
    return (
      <div className="SignOut">
        <button className="login-with-google-btn" onClick={signOutWithGoogle}>
          Sign Out
        </button>
      </div>
    );
  }
}

export default SignIn;
