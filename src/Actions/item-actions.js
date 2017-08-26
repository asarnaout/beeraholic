import {
    SET_ITEMS,
    TOGGLE_LOADING    
} from './action-types'


export function setItems(items) {   
    return {
        type: SET_ITEMS,
        items
    }
}

export function toggleLoading(loading) {
    return {
        type: TOGGLE_LOADING,
        loading
    }
}