import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const activeNote = useSelector((state) => state.notes.active);
    const { title, body } = activeNote;

    const titleRef = useRef();
    const bodyRef = useRef();
    const activeId = useRef(activeNote.id);

    useEffect(() => {
      if ( activeNote.id !== activeId.current) {
        titleRef.current = activeNote.title;
        bodyRef.current = activeNote.body;
        activeId.current = activeNote.id;
      }
    }, [activeNote])
    
    
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    ref={ titleRef }
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    defaultValue={ title }
                />

                <textarea
                    ref={ bodyRef }
                    placeholder="What happened today"
                    className="notes__textarea"
                    defaultValue={ body }
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>

        </div>
    )
}
