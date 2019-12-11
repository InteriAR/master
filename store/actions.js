import { SET_TEXT, GET_API, ALL_CATEGORIES, SINGLE_CATEGORY, CLEAR_CATEGORY, ADD_MODEL, SINGLE_MODEL, GET_SINGLE_MODEL, ALL_MODELS, CLEAR_ALL_MODELS, REMOVE_MODEL, SET_EXAMINED, GET_EXAMINED } from './action-type'
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

export const removeModel = (model) => {
  return {
    type: REMOVE_MODEL,
    model
  }
}

export const allModels = () => {
  return {
    type: ALL_MODELS
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

export const clearAllModels = () => {
  return {
    type: CLEAR_ALL_MODELS
  }
}

export const setExamined = model => {
  return {
    type: SET_EXAMINED,
    examinedModel: model
  };
};

export const getExamined = () => {
  return {
    type: GET_EXAMINED
  };
};

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
