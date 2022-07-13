import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

export const loadNotes = (uid) => {
    let data = [];
    const coll = collection(db, `${uid}/journal/notes`);

    onSnapshot(coll, (notes) => {
        notes.forEach(note => data.push({ id: note.id, ...note.data()}))
    })

    console.log('data', data);

    return data;
}