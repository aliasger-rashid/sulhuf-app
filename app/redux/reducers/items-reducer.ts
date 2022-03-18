import { GET_ALL_ITEMS } from "./../actions/action-types"
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from "immer"
import { RESET } from "../actions/action-types"

interface INIT_STATE_TYPE {
  items: any[]
}

// This Reduer is Persisted in Redux Store
const INIT_STATE: INIT_STATE_TYPE = {
  items: [],
}

export default produce((draft, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      draft.items = action.payload
      break
    case RESET:
      return INIT_STATE // Always return the initial state
    default:
      return draft
  }
}, INIT_STATE)