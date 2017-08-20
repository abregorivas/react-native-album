import {
  ARTIST_FETCH,
  ARTIST_FETCH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {}

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case ARTIST_FETCH_SUCCESS:
      console.log(action)
    default:
      return state
  }
}