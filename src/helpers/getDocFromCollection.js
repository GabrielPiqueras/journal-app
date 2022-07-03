
import { db } from '../firebase/config';
import { collection, doc, onSnapshot } from 'firebase/firestore';

export const getDocFromCollection = (c, id) => {

    let data = [];
    const coll = collection(db, c);
    const document = doc(coll, id);

    onSnapshot(document, (doc) => {
        
        data.push({
            id: doc.id,
            ...doc.data()
        });
    });
    
    console.log('data', data);
    return data;
}