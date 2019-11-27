import { SET_TEXT, GET_API } from './action-type'
// import { sortByClassName, formatProducts } from './utility-funcs.js'
export const dummyAction = (data) => {
  return {
    type: SET_TEXT,
    payload: {
      data
    }
  }
}

export const loadModels = (products) => {
  return {
    type: GET_API,
    products
  }
}

export const loadModelsThunk = () => {
  return dispatch => {
    console.log('inside loadModelsThunk')
    try {
      const products = 'hello from loadModelsThunk'
      dispatch(loadModels(products))

    } catch (error) {
      console.error(error)
    }
  }

}

// export const loadModelsThunk = () => {
//   return async dispatch => {
//     try {
//       console.log('inside loadModelsThunk')
//       const wayfairUrls = [
//         'https://api.wayfair.com/v1/3dapi/models?page=1',
//         'https://api.wayfair.com/v1/3dapi/models?page=2',
//         'https://api.wayfair.com/v1/3dapi/models?page=3'
//       ]
//       const getProducts = async () => {
//         try {
//           const allProducts = await Promise.all(
//             wayfairUrls.map(url => axios.get(url, {
//               // headers: {
//               //     Authorization: wayfairAuth
//               // }
//             }))
//           )
//           return allProducts
//         } catch (error) {
//           console.error(error)
//         }
//       }
//       const productData = await getProducts(); //[{}, {}, {}]

//       dispatch(loadModels(sortByClassName(productData)))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }
