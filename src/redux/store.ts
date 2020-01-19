import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ReduxState } from './interface'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducer"
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeWithDevTools({})(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(mySaga)

export default store
