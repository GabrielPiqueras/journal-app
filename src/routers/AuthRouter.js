import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';

export const AuthRouter = () => {
  return (
      <div className='auth__main'>
        <div className='auth__box-container'>
          <Routes>
            <Route exact path='/auth/login' element={ <LoginPage /> } />
            <Route exact path='auth/register' element={ <RegisterPage /> } />
            <Route path='*' element={ <Navigate to='/auth/login' replace /> } />
          </Routes>
        </div>
      </div>
  )
} 
