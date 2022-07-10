import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uiRemoveError, uiSetError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { loading, msgError } = useSelector(({ui}) => ui);

  const handleRegister = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(e.target)
    );

    if (isFormValid(data)) {
      dispatch(startRegister(data))
    }
  }

  const isFormValid = (data) => {

    const { name, email, password, password2 } = data;

    const regExpName = /^\w{3,}$/;
    const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regExpPass = /^(?=.*\w)(?=.*\d)[\w\d]{8,}$/;

    if (!name.match(regExpName)) {
      dispatch(uiSetError('El nombre debe tener al menos tres caracteres (letras, números o guión bajo).'));
      return false;
    } else if (!email.match(regExpEmail)) {
      dispatch(uiSetError('La dirección de correo es inválida.'));
      return false;
    } else if (!password.match(regExpPass)) {
      dispatch(uiSetError('La contraseña debe tener al menos ocho caracteres, una letra y un número.'));
      return false;
    } else if (password !== password2) {
      dispatch(uiSetError('Las contraseñas no coinciden.'));
      return false;
    }

    dispatch(uiRemoveError());
    return true;
  }

  // Alert con error
  if (msgError) {
    Swal.fire('Error', msgError, 'error');
  }
  
  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={ handleRegister }>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className='auth__input'
          autoComplete='off'
        />

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
        
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className='auth__input'
          autoComplete='off'
        />
        
        <button type="submit" className='btn btn-primary btn-block mb-5' disabled={loading}>
          Register
        </button>

        <Link to='/auth/login' className='link'>
          Already registered?
        </Link>
      </form>
    </>
  )
}
