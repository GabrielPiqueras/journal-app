import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { types } from '../types/types';

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch( login('123', 'Pedro'));
        }, 3500); 
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        const googleAuthProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) => {
                login(user.uid, user.displayName)
            });
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}