import { fork, all } from 'redux-saga/effects'
import watchRequestLogin from './login/saga'

export default function * rootSaga () {
  yield all([
    fork(watchRequestLogin)
  ])
}
