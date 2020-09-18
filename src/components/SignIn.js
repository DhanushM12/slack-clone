import React, { Component, useContext } from 'react';
import { signInWithGoogle } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
function SignIn(props) {
  const auth = useContext(UserContext);
  // Redirect the user if not logged in
  if (auth.user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="signin-form">
      <h1>Sign In / Sign Up</h1>
      <button className="btn basic-btn" onClick={signInWithGoogle}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
          alt="pic"
        />
        Sign In / Sign Up with Google
      </button>
    </div>
  );
}

export default SignIn;
