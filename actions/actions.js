import { SET_TEXT } from './action-type'

export const dummyAction = (data) => {
  return {
    type: SET_TEXT,
    payload: {
      data
    }
  }
}
