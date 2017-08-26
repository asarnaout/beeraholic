import {
    INCREMENT_PAGE ,
    DECREMENT_PAGE,
    SET_NUMBER_OF_PAGES,
    SET_NAME,
    SET_ABV,
    SET_IBU,
    SET_YEAR,
    SET_ORDER,
    SET_ITEMS,
    CLEAR_FILTER,
    SET_LOADING
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

export function setNumberOfPages(pages){
    return {
        type: SET_NUMBER_OF_PAGES,
        pages
    }
}

export function setName(name) {
    return {
        type: SET_NAME,
        name
    }
}

export function setAbv(abv) {
    return {
        type: SET_ABV,
        abv
    }
}

export function setIbu(ibu) {
    return {
        type: SET_IBU,
        ibu
    }
}

export function setYear(year) {
    return {
        type: SET_YEAR,
        year
    }
}

export function setOrder(order) {
    return {
        type: SET_ORDER,
        order
    }
}

export function setItems(items) {   
    return {
        type: SET_ITEMS,
        items
    }
}

export function clearFilter(){
    return {
        type: CLEAR_FILTER
    }
}

export function setLoading(loading){
    return {
        type: SET_LOADING,
        loading
    }
}