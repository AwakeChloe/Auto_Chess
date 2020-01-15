import { handleActions } from 'redux-actions'
import { LOGIN_SUCCESS } from './actionTypes'

const initialState = {
  isLoginIn: false,
}

export type LoginState = typeof initialState

const loginReducer = handleActions<LoginState>({
  [LOGIN_SUCCESS] (state, action) {
    return {
      ...state,
      isLoginIn: true
    }
  }
}, initialState)

export default loginReducer
