import { signInWithGoogle } from '../../data/Firebase';

const SignIn = () => {
  if (!localStorage.getItem('token')) {
    return (
      <div className="SignIn">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign In
        </button>
      </div>
    );
  }
};

export default SignIn;
