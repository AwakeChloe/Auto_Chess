import { call, put, take, fork } from 'redux-saga/effects'
import { requestLogin, loginSuccess, loginFailed, requestTokenVerification } from './actions'
import loginApi from '../../networks/api/login'
import { LocalStorage } from '../../common/storage'
import Toast from '../../components/Toast'
import { Actions } from 'react-native-router-flux'
import { ENTER_PROFILE, HOME } from '../../common/scenes'

export function* watchLoginIn () {
  while (true) {
    const { payload } = yield take(requestLogin)
    const { studentId, password } = payload
    yield fork(login, studentId, password)
  }
}

export function* watchTokenVerification () {
  while (true) {
    const { payload } = yield take(requestTokenVerification)
    const { token } = payload
    yield fork(tokenVerification, token)
  }
}

function* tokenVerification (token: string) {
  try {
    const res = yield call(loginApi.tokenVerification, token)
    if (res.data.status) {
      yield put(loginSuccess({
        college: res.data.college,
        profession: res.data.profession,
        isFirstEnter: res.data.isFirstEnter
      }))
    } else {
      yield put(loginFailed({loginFailedMessage: '自动登录失败'}))
      Toast.show('验证已过期,请重新登录')
    }
  } catch (e) {
    console.log(e)
  }
}

function* login (studentId: number, password: string) {
  try {
    const res = yield call(loginApi.login, studentId, password)
    if (res.data.status) {
      yield LocalStorage.set('token', res.data.token)
      yield put(loginSuccess({
        college: res.data.college,
        profession: res.data.profession,
        isFirstEnter: res.data.isFirstEnter
      }))
      Toast.show('登录成功')
      if (res.data.isFirstEnter) {
        setTimeout(() => {
          Actions[ENTER_PROFILE]()
        }, 1000)
      } else {
        setTimeout(() => {
          Actions[HOME]()
        }, 1000)
      }
    } else {
      yield put(loginFailed({loginFailedMessage: res.data.msg}))
      Toast.show(res.data.msg)
    }
  } catch (e) {
    console.log(e)
  }
}
