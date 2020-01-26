import { call, put, take, fork } from 'redux-saga/effects'
import { requestQuery, queryFailed, querySuccess } from './actions'
import Toast from '../../components/Toast'
import queryProfile from '../../networks/api/enter_profile'

export default function* watchQuery () {
  while (true) {
    const { payload } = yield take(requestQuery)
    const { name } = payload
    yield fork(query, name)
  }
}

function* query (gameId: string) {
  try {
    const res = yield call(queryProfile.query, gameId)
    if (res.data.status) {
      yield put(querySuccess({
      }))
      Toast.show('正在进入游戏...')
      setTimeout(() => {
      }, 1000)
    } else {
      yield put(queryFailed({}))
      Toast.show(res.data.message)
    }
  } catch (e) {
    console.log(e)
  }
}
