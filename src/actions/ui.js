import { types } from '../types/types';

export const uiSetError = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const uiRemoveError = () => {
    return {
        type: types.uiRemoveError
    }
}

export const uiStartLoading = () => {
    return {
        type: types.uiStartLoading
    }
}

export const uiFinishLoading = () => {
    return {
        type: types.uiFinishLoading
    }
}