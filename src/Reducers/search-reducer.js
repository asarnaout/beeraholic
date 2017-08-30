import { SET_ITEMS, TOGGLE_LOADING, TOGGLE_FAV, INCREMENT_PAGE, DECREMENT_PAGE, SET_NUMBER_OF_PAGES, RESET_PAGE, SET_PAGE } from '../Actions/action-types'

const INITIAL_LOADING = { isLoading: false };
const INITIAL_SEARCH = { items: [], page: 1, numberOfPages: 0 }

export function search(state = INITIAL_SEARCH, action) {
    switch(action.type) {
        case SET_ITEMS : return Object.assign({}, state, {items: action.items});
        case TOGGLE_FAV: return Object.assign({}, state, {items: state.items.map(function(item){
            let beer = Object.assign({}, item);
            if(beer.id === action.beerId) {
                beer.isFav = !beer.isFav
            }
            return beer;
        })});
        case INCREMENT_PAGE: return Object.assign({}, state, {page: state.page + 1});
        case DECREMENT_PAGE: return Object.assign({}, state, {page: state.page - 1});
        case RESET_PAGE: return Object.assign({}, state, {page: INITIAL_SEARCH.page});
        case SET_PAGE: return Object.assign({}, state, {page: action.page});
        case SET_NUMBER_OF_PAGES: return Object.assign({}, state, {numberOfPages: action.pages === undefined? INITIAL_SEARCH.numberOfPages : action.pages});
        default: return state;
    }
}

export function loading(state = INITIAL_LOADING, action) {
    return action.type === TOGGLE_LOADING? Object.assign({}, state, {isLoading: !state.isLoading}): state;
}