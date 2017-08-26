import {
    SET_NAME,
    SET_ABV,
    SET_IBU,
    SET_YEAR,
    SET_ORDER,
    CLEAR_FILTER,
    TOGGLE_FILTER,
    SET_FILTER,
} from './action-types'

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

export function clearFilter() {
    return {
        type: CLEAR_FILTER
    }
}

export function toggleFilter() {
    return {
        type: TOGGLE_FILTER
    }
}

export function setFilter(newFilter) {
    return {
        type: SET_FILTER,
        newFilter
    }
}