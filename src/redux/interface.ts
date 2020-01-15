import { Dispatch } from 'redux'
import { LoginState } from "./login/reducer";

export interface ReduxProps {
  dispatch: Dispatch<any>
}

export interface ReduxState {
  loginState: LoginState
}
