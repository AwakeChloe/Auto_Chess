import { call, put, take, fork } from 'redux-saga/effects'
import {requestLogin, loginSuccess, loginFailed} from './actions'
import loginApi from '../../networks/api/login'
import { LocalStorage } from '../../common/storage'
import Toast from '../../components/Toast'

export default function* watchLoginIn () {
  while (true) {
    const { payload } = yield take(requestLogin)
    const { studentId, password } = payload
    yield fork(login, studentId, password)
  }
}

function* login (studentId: number, password: string) {
  try {
    const res = yield call(loginApi.login, studentId, password)
    if (res.data.status) {
      yield LocalStorage.set('token', res.data.token)
      yield put(loginSuccess({}))
      Toast.show('登录成功')
    } else {
      yield put(loginFailed({loginFailedMessage: res.data.msg}))
      Toast.show(res.data.msg)
    }
  } catch (e) {
    console.log(e)
  }
}
