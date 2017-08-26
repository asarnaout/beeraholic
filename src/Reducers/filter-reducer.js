import { SET_NAME, SET_ABV, SET_IBU, SET_YEAR, SET_ORDER, CLEAR_FILTER } from '../Actions/action-types'

const INITIAL_FILTER = { name: '', abv: '', ibu: '', year: '', order: ''};

function filter(state = INITIAL_FILTER, action) {
    switch(action.type) {
        case SET_NAME: return Object.assign({}, state, {name: action.name});
        case SET_ABV: return Object.assign({}, state, {abv: action.abv});
        case SET_IBU: return Object.assign({}, state, {ibu: action.ibu});
        case SET_YEAR: return Object.assign({}, state, {year: action.year});
        case SET_ORDER: return Object.assign({}, state, {order: action.order});
        case CLEAR_FILTER: return INITIAL_FILTER;
        default: return state;
    }
}

export default filter;