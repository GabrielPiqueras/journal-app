import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

// Actions
import { startLoadNotes } from '../../actions/notes';

export const JournalEntries = () => {

    const dispatch = useDispatch();
    
    const handleNotas = () => {
        dispatch(startLoadNotes());
    }

    const { notes } = useSelector((state) => state.notes);
    // console.log(notes);

    return (
        <div className='journal__entries'>

            <pre>{ JSON.stringify(notes) }</pre>
            <button onClick={ handleNotas }>Cargar notas</button>

            {
                notes.map(note => {
                    return <JournalEntry key={note.date } />
                })
            }
        </div>
    )
}
