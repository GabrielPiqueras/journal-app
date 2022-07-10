import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Public = ({ isAuth, component: Component }) => {
    
    return (
        ( isAuth )
        ? <Navigate to='/' />
        : <Component />
    )
}

Public.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}