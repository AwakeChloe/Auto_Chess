import { createSelector } from 'reselect'
import { ReduxState } from './interface'
import { LoginState } from "./login/reducer"

type Selector<T> = (state: ReduxState) => T

export const selectLoginState: Selector<LoginState> = (state) => state.loginState
