import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { types } from '../types/types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { uiSetError } from './ui';
import { async } from '@firebase/util';

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
    return async (dispatch) => {
        const auth = getAuth();
        
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        dispatch(login(user.uid, user.displayName));
    }
}

export const startRegister = ({name, email, password}) => {
    return (dispatch) => {

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
        .then( async({user}) => {
            await updateProfile(user, { displayName: name});

            dispatch(login(user.uid, user.displayName));
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

// export const startRegister = ({name, email, password}) => {
//     return (dispatch) => {
        
//         const users = collection(db, 'users');

//         addDoc(users, {
//             name: name,
//             email: email,
//             password: password
//         })
//         .then(user => {
//             console.log('docRef', user);
//             dispatch(login(user.id, name))
//         })
//         .catch(err => {
//             dispatch(uiSetError('Hubo un error al registrar el usuario'));
//             throw new Error(err);
//         });
//     }
// }

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