import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ReduxState } from './interface'
import rootReducer from "./reducer"
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export default store
