
// Firebase
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useSelector } from 'react-redux';

export const notesAddNew = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            imageUrl: '',
            date: new Date().getTime() // ms
        }
        const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
        console.log('doc', doc);
    }  
}

export const notesActive = () => {

}

export const notesLoad = () => {

}

export const notesUpdate = () => {

}

export const notesFileUrl = () => {

}

export const notesDelete = () => {

}

export const notesLogoutCleaning = () => {

}
