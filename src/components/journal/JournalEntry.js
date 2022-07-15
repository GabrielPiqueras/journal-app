import React from 'react';
import moment from 'moment';

export const JournalEntry = ({id, title, body, date, urlImg}) => {

    const noteDate = moment(date);

    return (
        <div className="journal__entry pointer">
            
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
