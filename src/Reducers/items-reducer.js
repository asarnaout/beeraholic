import { SET_ITEMS, SET_LOADING } from '../Actions/action-types'

export function items(state = [], action) {
    return action.type === SET_ITEMS? action.items : state;
}

export function loading(state = true, action) {
    return action.type === SET_LOADING? action.loading : state;
}