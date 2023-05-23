import { signInWithGoogle } from '../../data/Firebase';

const SignIn = () => {
  if (!localStorage.getItem('token')) {
    return (
      <div className="SignIn">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          sign in
        </button>
      </div>
    );
  }
};

export default SignIn;
