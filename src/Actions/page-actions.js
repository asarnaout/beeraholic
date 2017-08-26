import {
    INCREMENT_PAGE ,
    DECREMENT_PAGE,
    SET_PAGE,
    RESET_PAGE,
    SET_NUMBER_OF_PAGES
} from './action-types'

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