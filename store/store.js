import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { dummyReducer, productsReducer } from './reducers'

const reducer = combineReducers({
  text: dummyReducer,
  products: productsReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
