import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions 
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

/**cd 
 * Muestra formulario para iniciar sesión en la aplicación, puede ser
 * tanto con correo y contraseña como con cuenta de Google. Usa animación.
 * 
 * Ejecutar acciones sobre el store.
 * @var {function} dispatch
 * 
 * Dice si la aplicación está cargando o no.
 * @var {boolean} loading
 * 
 * @returns {jsx}
 */
export const LoginPage = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(({ui}) => ui);
  
  const handleLogin = (e) => {
      e.preventDefault();
      
      const { email, password } = Object.fromEntries(
        new FormData(e.target)
      );

      dispatch(startLoginEmailPassword(email, password));
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <div className='animate__animated  animate__fadeIn animate__fast'>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={ handleLogin }>
        <input
          defaultValue='rocamora_gabriel@hotmail.com'
          type="text"
          placeholder="Email"
          name="email"
          className='auth__input'
          autoComplete='off'
        />

        <input
          defaultValue='adventure2012'
          type="password"
          placeholder="Password"
          name="password"
          className='auth__input'
          autoComplete='off'
        />
        
        <button type="submit" className='btn btn-primary btn-block' disabled={loading}> 
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
    </div>
  )
}
