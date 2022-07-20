import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, title, body, date, urlImg}) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        const note = { id, title, body, urlImg };
        console.log('note', note);
        dispatch(activeNote( id, note ));
    }

    return (
        <div
            className="journal__entry pointer"
            onClick={ handleEntryClick }
        >
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    // backgroundImage: `${urlImg}`,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('Do') }</span>
                <h4>{ noteDate.format('dddd') }</h4>
            </div>

        </div>
    )
}
