import { SET_TEXT, GET_API, ALL_CATEGORIES, SINGLE_CATEGORY, CLEAR_CATEGORY, ADD_MODEL, SINGLE_MODEL, GET_SINGLE_MODEL, SAVE_USER_COLLECTION } from './action-type'
import { sortByClassName, formatProducts } from './utility-funcs.js'
import axios from 'axios'
import { wayfairAuth } from './../secrets'

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

export const allCategories = (productsByClassName) => {
  return {
    type: ALL_CATEGORIES,
    menu: productsByClassName
  }
}

export const singleCategory = (category) => {
  return {
    type: SINGLE_CATEGORY,
    // selected: false,
    category
  }
}

export const clearCategory = () => {
  return {
    type: CLEAR_CATEGORY
  }
}

export const addModel = (models) => {
  return {
    type: ADD_MODEL,
    models
  }
}

export const singleModel = (model) => {
  return {
    type: SINGLE_MODEL,
    selectedModel: model
  }
}

export const getSingleModel = () => {
  return {
    type: GET_SINGLE_MODEL
  }
}

export const getUsersCollection = (collection) => {
  return {
    type: SAVE_USER_COLLECTION,
    collection
  }
}
// export const loadModelsThunk = () => {
//   return dispatch => {
//     console.log('inside loadModelsThunk')
//     try {
//       const products = 'hello from loadModelsThunk'
//       dispatch(loadModels(products))

//     } catch (error) {
//       console.error(error)
//     }
//   }

// }

export const loadModelsThunk = () => {
  return async dispatch => {
    try {
      // console.log('inside loadModelsThunk')
      const wayfairUrls = [
        'https://api.wayfair.com/v1/3dapi/models?page=1',
        'https://api.wayfair.com/v1/3dapi/models?page=2',
        'https://api.wayfair.com/v1/3dapi/models?page=3'
      ]
      const getProducts = async () => {
        try {
          const allProducts = await Promise.all(
            wayfairUrls.map(url => axios.get(url, {
              headers: {
                Authorization: wayfairAuth
              }
            }))
          )
          return allProducts
        } catch (error) {
          console.error(error)
        }
      }
      const productData = await getProducts(); //[{}, {}, {}]

      dispatch(loadModels(sortByClassName(productData)))
    } catch (error) {
      console.error(error)
    }
  }
}
