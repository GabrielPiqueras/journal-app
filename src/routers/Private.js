import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Private = ({ isAuth, component: Component }) => {

    const { pathname } = useLocation();
    localStorage.setItem('lastPath', pathname);
         
    return (
        ( isAuth )
        ? <Component />
        : <Navigate to='/auth/login' />
    ) 
}

Private.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}