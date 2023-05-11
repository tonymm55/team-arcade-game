import { signInWithGoogle } from '../../data/Firebase';
import { signOutWithGoogle } from '../../data/Firebase';
import { useState } from 'react';

export default function SignIn() {
  // const [logInOut, setLogInOut] = useState('');
  return (
    <div className="SignIn">
      <button
        className="login-with-google-btn"
        onClick={
          !localStorage.getItem('token') ? signInWithGoogle : signOutWithGoogle
        }
      >
        SignIn/SignOut
        {/* {logInOut} */}
      </button>
    </div>
  );
}
