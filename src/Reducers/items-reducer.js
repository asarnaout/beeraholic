import { SET_ITEMS, TOGGLE_LOADING, TOGGLE_FAV } from '../Actions/action-types'

const LOADING_INIT = { isLoading: false };

export function items(state = [], action) {
    switch(action.type) {
        case SET_ITEMS : return action.items;
        case TOGGLE_FAV: 
            return state.map(function(item){
                let beer = Object.assign({}, item);
                if(beer.id === action.beerId) {
                    beer.isFav = !beer.isFav
                }
                return beer;
            });
        default: return state;
    }
}

export function loading(state = LOADING_INIT, action) {
    return action.type === TOGGLE_LOADING? Object.assign({}, state, {isLoading: !state.isLoading}): state;
}