import {
    SET_ITEMS,
    TOGGLE_LOADING,
    TOGGLE_FAV,
    INCREMENT_PAGE ,
    DECREMENT_PAGE,
    SET_PAGE,
    RESET_PAGE,
    SET_NUMBER_OF_PAGES
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

export function incrementPage() {
    return {
      type: INCREMENT_PAGE,
    }
}

export function decrementPage() {
    return {
      type: DECREMENT_PAGE,
    }
}

export function setPage(page) {
    return {
      type: SET_PAGE,
      page
    }
}

export function resetPage() {
    return {
        type: RESET_PAGE
    }
}

export function setNumberOfPages(pages) {
    return {
        type: SET_NUMBER_OF_PAGES,
        pages
    }
}