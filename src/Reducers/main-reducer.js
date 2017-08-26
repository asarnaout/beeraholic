import { combineReducers } from 'redux'
import { page, numberOfPages } from './page-reducer'
import { items, loading } from './items-reducer'
import filter from './filter-reducer'

const reducers = combineReducers({
    page,
    numberOfPages,
    filter,
    items,
    loading
})
  
export default reducers;