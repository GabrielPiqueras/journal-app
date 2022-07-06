import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { types } from '../types/types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { uiSetError } from './ui';

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

export const startRegister = ({name, email, password}) => {
    return (dispatch) => {
        
        const users = collection(db, 'users');

        addDoc(users, {
            name: name,
            email: email,
            password: password
        })
        .then(docRef => {
            console.log('docRef', docRef);
            dispatch(login(docRef.id, name))
        })
        .catch(err => {
            dispatch(uiSetError('Hubo un error al registrar el usuario'));
            throw new Error(err);
        });
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