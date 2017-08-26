import { INCREMENT_PAGE, DECREMENT_PAGE, SET_NUMBER_OF_PAGES, RESET_PAGE } from '../Actions/action-types'

export function page(state = 1, action) {
    switch (action.type) {
      case INCREMENT_PAGE: return state + 1;
      case DECREMENT_PAGE: return state - 1;
      case RESET_PAGE: return 1;
      default: return state
    }
}

export function numberOfPages(state = 1, action) {
    if(action.type === SET_NUMBER_OF_PAGES) return action.pages;
    return state;
}