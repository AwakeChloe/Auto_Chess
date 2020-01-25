import { createAction } from 'redux-actions'
import { LOGIN_FAILED, LOGIN_SUCCESS, REQUEST_LOGIN, REQUEST_TOKEN_VERIFICATION } from './actionTypes'

export const requestLogin = createAction<any>(REQUEST_LOGIN)
export const loginSuccess = createAction<any>(LOGIN_SUCCESS)
export const loginFailed = createAction<any>(LOGIN_FAILED)
export const requestTokenVerification = createAction<any>(REQUEST_TOKEN_VERIFICATION)
