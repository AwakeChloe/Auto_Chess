import { combineReducers } from 'redux'
import LoginReducer from './login/reducer'

const rootReducer = combineReducers({
  loginState: LoginReducer
})

export default rootReducer
