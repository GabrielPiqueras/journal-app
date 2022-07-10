import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { types } from '../types/types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { uiFinishLoading, uiSetError, uiStartLoading } from './ui';
import { async } from '@firebase/util';
import Swal from 'sweetalert2';

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
        try {
            dispatch(uiStartLoading());
    
            const auth = getAuth();
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            dispatch(uiFinishLoading());
            dispatch(login(user.uid, user.displayName));

        } catch (error) {
            Swal.fire('Error', error.message, 'error');
            dispatch(uiFinishLoading());
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();

        await signOut(auth);
        dispatch(logout());
    }
}

export const startRegister = ({name, email, password}) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading());

            const auth = getAuth();
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            
            await updateProfile(user, { displayName: name});
            dispatch(login(user.uid, user.displayName));
            dispatch(uiFinishLoading());
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
            dispatch(uiFinishLoading());
        }
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