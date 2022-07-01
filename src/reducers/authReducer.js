import { types } from "../types/types";

/*
    {
        uid: '3mbm23vasqr',
        name: 'Gabriel'
    }
*/

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login: 
            return {
                uid: action.payload.uid,
                name: action.paypload.displayName
            }
        case types.logout:
            return { }
        default:
            return { };
    }
}   
