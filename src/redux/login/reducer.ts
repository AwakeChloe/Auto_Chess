import { handleActions } from 'redux-actions'
import { LOGIN_SUCCESS, REQUEST_LOGIN } from './actionTypes'

const initialState = {
  loginIn: false,
  isLogging: false
}

export type LoginState = typeof initialState

const loginReducer = handleActions<LoginState>({
  [LOGIN_SUCCESS] (state, action) {
    return {
      ...state,
      loginIn: true,
      isLogging: false
    }
  },
  [REQUEST_LOGIN] (state, action) {
    return {
      ...state,
      isLogging: true
    }
  }
}, initialState)

export default loginReducer
