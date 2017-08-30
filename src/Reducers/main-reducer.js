import { combineReducers } from 'redux'
import { page, numberOfPages } from './page-reducer'
import { items, loading } from './items-reducer'
import { account, loginErrorMessage } from './account-reducer'
import filter from './filter-reducer'

const reducers = combineReducers({
    page,
    numberOfPages,
    filter,
    items,
    loading,
    account,
    loginErrorMessage
})
  
export default reducers;