import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions 
import { login } from '../../actions/auth';

// Firebase
import { db } from '../../firebase/config';
import { collection,  query, where, onSnapshot, orderBy, doc, getDoc, getDocs } from 'firebase/firestore';
import { getDocsFromCollection } from '../../helpers/getDocsFromCollection';
import { getDocFromCollection } from '../../helpers/getDocFromCollection';

export const LoginPage = () => {

  /******************************************** */
  const users = collection(db, 'users');
  const document = doc(users, 'FW7xPaXIOVM2L6rlfK9z');
  


  console.log('FIN EJECUCIÓN');
  
  /******************************************** */






















  const dispatch = useDispatch();

  const handleLogin = (e) => {
      e.preventDefault();
      
      const { email, password } = Object.fromEntries(
        new FormData(e.target)
      );

      dispatch(login(12345, 'Pepito'));
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

          <div className="google-btn">
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
