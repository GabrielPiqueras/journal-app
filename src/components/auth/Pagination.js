import React from 'react';
import { db } from '../../firebase/config';
import { collection, query, orderBy, limit, getDocs, startAfter, endBefore } from 'firebase/firestore';

export const Pagination = () => {

    let firstDocument = null;
    let lastDocument = null;

    const handlePreviousPage = () => {
        let data = [];

        const users = collection(db, 'users');
        const q = query(users,
            orderBy('name'),
            limit(2),
            endBefore(firstDocument)
        );

        const documents = getDocs(q)
            .then(({docs}) => {

                firstDocument = docs[0] || null;
                lastDocument = docs[docs.length - 1] || null;

                docs.map(doc => {
                    //console.log(doc.data());
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            })
        
        console.log(data);
    }

    const handleNextPage = () => {
        let data = [];

        const users = collection(db, 'users');
        const q = query(users,
            orderBy('name'),
            limit(2),
            startAfter(lastDocument)
        );

        const documents = getDocs(q)
            .then(({docs}) => {

                firstDocument = docs[0] || null;
                lastDocument = docs[docs.length - 1] || null;

                docs.map(doc => {
                    // console.log(doc.data());
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            })
        
        console.log(data);
    }

    return (
        <div>
            <button onClick={ handlePreviousPage }>Anterior página</button>
            <button onClick={ handleNextPage }>Siguiente página</button>
        </div>
    )
}
