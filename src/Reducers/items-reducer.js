import { SET_ITEMS, TOGGLE_LOADING } from '../Actions/action-types'

const LOADING_INIT = { isLoading: false };

export function items(state = [], action) {
    return action.type === SET_ITEMS? action.items : state;
}

export function loading(state = LOADING_INIT, action) {
    return action.type === TOGGLE_LOADING? Object.assign({}, state, {isLoading: !state.isLoading}): state;
}