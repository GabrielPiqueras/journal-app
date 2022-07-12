
// Firebase
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { types } from '../types/types';

export const notesLoad = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}

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
    }  
}

export const notesActive = () => {

}

export const startLoadNotes = () => {
    return (dispatch, getState) => {

        const { uid } = getState().auth;
        const coll = collection(db, `${uid}/journal/notes`);
        let notesData = [];

        const notes = onSnapshot(coll, (notes) => {
            notes.forEach(note => notesData.push({ id: note.id, ...note.data() }))
        });
        
        console.log(notesData);
        dispatch(notesLoad(notesData));
    }
}

export const notesUpdate = () => {

}

export const notesFileUrl = () => {

}

export const notesDelete = () => {

}

export const notesLogoutCleaning = () => {

}
