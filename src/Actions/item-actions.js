import {
    SET_ITEMS,
    TOGGLE_LOADING,
    TOGGLE_FAV    
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

export function toggleFavorite(beerId) {
    return {
        type: TOGGLE_FAV,
        beerId
    }
}