import { CREATE_ITEM, GET_ALL_ITEMS, RESET, UPDATE_ITEM } from "./../actions/action-types"
import produce from "immer"

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

    case CREATE_ITEM:
      draft.items = [...draft.items, action.payload]
      break

    case UPDATE_ITEM: {
      const index = draft.items.findIndex((item) => item?.id === action.payload?.id)
      draft.items[index] = action.payload
      break
    }

    case RESET:
      return INIT_STATE // Always return the initial state

    default:
      return draft
  }
}, INIT_STATE)
