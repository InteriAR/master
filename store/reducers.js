import { SET_TEXT, GET_API } from './action-type'

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

export function productsReducer(products = 'no action', action) {
  switch (action.type) {
    case GET_API:
      console.log('inside productsReducer')
      return action.products
    default:
      return products
  }
}

// export default { dummyReducer, productsReducer }
