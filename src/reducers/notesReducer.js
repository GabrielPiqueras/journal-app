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

        case types.notesList:
            return state;
        case types.noteSelect:
            return { ...state, active: action.payload }
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
