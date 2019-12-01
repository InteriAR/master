import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'

import { dummyReducer, productsReducer, categoryReducer, modelsReducer, selectedModelReducer } from './reducers'

const reducer = combineReducers({
  text: dummyReducer,
  products: productsReducer,
  category: categoryReducer,
  models: modelsReducer,
  selectedModel: selectedModelReducer
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
const store = createStore(
  reducer,
  middleware
)

export default store


// import {createLogger} from 'redux-logger'

// import {composeWithDevTools} from 'redux-devtools-extension'

// const reducer = combineReducers({user, cart, treeHouses: treeHouseReducer})
// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
// )
// const store = createStore(reducer, middleware)
