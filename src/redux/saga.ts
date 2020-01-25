import { fork, all } from 'redux-saga/effects'
import { watchLoginIn,watchTokenVerification } from './login/saga'
import watchQuery from './enter_profile/saga'

export default function * rootSaga () {
  yield all([
    fork(watchLoginIn),
    fork(watchTokenVerification),
    fork(watchQuery)
  ])
}
