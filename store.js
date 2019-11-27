import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import dummyReducers from './reducers/dummyReducer'

const reducer = combineReducers({ dummyReducers })

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
