import { SET_TEXT, GET_API, ALL_CATEGORIES, SINGLE_CATEGORY, CLEAR_CATEGORY, ADD_MODEL } from './action-type'

// const initialState = {
//   text: '',
// }


export function dummyReducer(text = 'no action', action) {
  switch (action.type) {

    case SET_TEXT:
      return action.payload.data

    default:
      return text;
  }

}

export function productsReducer(products = {}, action) {
  switch (action.type) {
    case GET_API:
      // console.log('inside productsReducer')
      return action.products
    default:
      return products
  }
}

export function categoryReducer(category = [], action) {
  switch (action.type) {
    // case ALL_CATEGORIES: {
    //   // console.log('action in menu reducer', action.menu)
    //   return action.menu
    // }
    case SINGLE_CATEGORY: {
      // console.log('inside category reducer')
      return action.category
    }
    case CLEAR_CATEGORY: {
      return []
    }
    default:
      return category
  }
}

export function modelsReducer(models = [], action) {
  switch (action.type) {
    case ADD_MODEL:
      // console.log('modelsReducer', [...models, action.models])
      return [...models, action.models]
    default:
      return models
  }
}

// export default { dummyReducer, productsReducer }
