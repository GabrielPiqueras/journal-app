import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions 
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

// Firebase
import { db } from '../../firebase/config';
import { collection, query, where, onSnapshot, orderBy, doc, getDoc, getDocs, limit } from 'firebase/firestore';

export const LoginPage = () => {

  const dispatch = useDispatch();
  
  // const userExists = (email) => {
  //   const users = collection(db, 'users');
  //   const data = [];

  //   const q = query(users, where('email', '==', email), limit(1));

  //   const document = onSnapshot(q, (docs) => {
  //     docs.forEach(doc => {
  //       console.log(doc.data());
  //         data.push({
  //             id: doc.id,
  //             ...doc.data()
  //         })
  //     })
  //   })
      
  //   return data;
  // }

  const handleLogin = (e) => {
      e.preventDefault();
      
      const { email, password } = Object.fromEntries(
        new FormData(e.target)
      );

      // const user = userExists(email);

      dispatch(startLoginEmailPassword(email, password));
      
      // if (user) {
      //   alert(`El email ${email} existe!!`);
      // } else {
      //   alert(`El email ${email} NO existe...`);
      // }

  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={ handleLogin }>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className='auth__input'
          autoComplete='off'
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className='auth__input'
          autoComplete='off'
        />
        
        <button type="submit" className='btn btn-primary btn-block'>
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={ handleGoogleLogin }>
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
          </div>
        </div>

        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  )
}
