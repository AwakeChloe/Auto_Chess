import { createAction } from 'redux-actions'
import { QUERY_FAILED, QUERY_SUCCESS ,REQUEST_QUERY } from './actionTypes'

export const requestQuery = createAction<any>(REQUEST_QUERY)
export const querySuccess = createAction<any>(QUERY_SUCCESS)
export const queryFailed = createAction<any>(QUERY_FAILED)
