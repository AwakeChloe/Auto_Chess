import { handleActions } from 'redux-actions'
import { QUERY_FAILED, QUERY_SUCCESS ,REQUEST_QUERY } from './actionTypes'

const initialState = {
  gameIdIsIllegal: true
}

export type queryState = typeof initialState

const queryReducer = handleActions<queryState>({
  [QUERY_SUCCESS] (state, action) {
    return {
      ...state,
      gameIdIsIllegal: false
    }
  },
  [REQUEST_QUERY] (state, action) {
    return {
      ...state,
    }
  },
  [QUERY_FAILED] (state, action) {
    return {
      ...state,
    }
  }
}, initialState)

export default queryReducer
