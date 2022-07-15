
// Firebase
import { db } from '../firebase/config';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';

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
        dispatch(noteActive(doc.id, newNote));
    }
}

export const noteActive = (id, note) => {
    return {
        type: types.noteActive,
        payload: {
            ...note,
            id
        }
    }
}

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        console.log('startLoadingNotes -> notes', notes);
        dispatch(setNotes(notes));
    }
}
// export const startLoadingNotes = (uid) => {
//     return (dispatch, getState) => {
//         const { uid } = getState().auth;
//         const coll = collection(db, `${uid}/journal/notes`);
//         let notesData = [];
        
//         const notes = onSnapshot(coll, (notes) => {
//             notes.forEach(note => notesData.push({ id: note.id, ...note.data() }))
//         });
        
//         console.log(notesData);
//         dispatch(notesLoad(notesData));
//     }
// }



export const startNotesDelete = (noteId = 'D041X9tfJdQaodiRrvMZ') => {
    return async(dispatch) => {
        try {
            const coll = collection(db, 'DZsVPQBHm4c2wJsPSBRJzF1Oaq13/journal/notes');
            const document = doc(coll, noteId);

            await deleteDoc(document);
            dispatch(notesDelete(noteId));
        } catch (error) {
            console.log(error);
        }
    }
}

export const notesDelete = (noteId) => {
    return {
        type: types.notesDelete,
        payload: noteId
    }
}

export const setNotes = (notes) => {
    console.log('llegan notas', notes);
    return {
        type: types.notesLoad,
        payload: notes
    }
}

