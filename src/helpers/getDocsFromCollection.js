import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

export const getDocsFromCollection = (c) => {

    let documents = [];
    const coll = collection(db, c);

    onSnapshot(coll, (docs) => {
        docs.forEach(doc => {
            documents.push({ id: doc.id, ...doc.data()})
        })
    });

    return documents;
}