import { combineReducers } from 'redux'
import { search, loading } from './search-reducer'
import { account, loginErrorMessage, signUpErrorMessage } from './account-reducer'
import filter from './filter-reducer'

const reducers = combineReducers({
    filter,
    search,
    loading,
    account,
    loginErrorMessage,
    signUpErrorMessage
})
  
export default reducers;