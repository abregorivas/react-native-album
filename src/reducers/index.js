import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'

export default combineReducers({
  techData: LibraryReducer
})
