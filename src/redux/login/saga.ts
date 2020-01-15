import { call, put, take, fork } from 'redux-saga/effects'
import { requestLogin, loginSuccess } from './actions'
import loginApi from '../../networks/api/login'
import { LocalStorage } from '../../common/storage'

export default function* watchLoginIn () {
  while (true) {
    const { payload } = yield take(requestLogin)
    const { studentId, password } = payload
    yield fork(login, studentId, password)
    console.log(1)
  }
}

function* login (studentId: number, password: string) {
  try {
    console.log(2)
    const res = yield call(loginApi.login, studentId, password)
    if (res.data.status) {
      yield LocalStorage.set('token', res.data.token)
      put(loginSuccess({}))
    }
  } catch (e) {
    console.log(e)
  }
}
