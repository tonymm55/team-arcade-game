import { signInWithGoogle } from '../../data/Firebase';

function SignIn() {
  return (
    <div className="SignIn">
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
