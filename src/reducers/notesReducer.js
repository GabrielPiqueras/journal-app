import { types } from '../types/types';

/*
    {
        notes: [],
        active: null,
        active: {
            id: 'ASD78KJSASDA123',
            title: '',
            body: '';
            imageUrl: '',
            date: 123678167
        }
    }
*/

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.noteActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return {
                ...state,
                notes: action.payload
            }
        // case types.notesActive:
        //     return { ...state, active: action.payload }
        // case types.notesAddNew:
        //     return {}
        // case types.notesDelete:
        //     const notes = state.notes.filter(note => note.id !== action.payload);
        //     return { ...state, notes }


        // case types.notesActive:
        //     state.map();
        //     return state
        // case types.noteAdd:
        //     return [...state, action.payload];
        // case types.noteUpdate:
        //     return state.map(note => {
        //         if (note.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return note;
        //         }
        //     });
        // case types.noteRemove:
        //     return state.filter(note => note.id !== action.payload);
        
        default: return state;
    }
}
