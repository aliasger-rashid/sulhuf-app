import produce from "immer"
import { GET_ALL_ORDERS, GET_ORDER_COUNT, RESET } from "../actions/action-types"

interface INIT_STATE_TYPE {
  orderList: any[]
  orderCount: {
    delivered: number
    cancelled: number
  }
}

// This Reduer is Persisted in Redux Store
const INIT_STATE: INIT_STATE_TYPE = {
  orderList: [],
  orderCount: {
    delivered: 0,
    cancelled: 0,
  },
}

export default produce((draft, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      draft.orderList = action.payload
      break

    case GET_ORDER_COUNT:
      draft.orderCount[action.status] = action.payload
      break

    case RESET:
      return INIT_STATE // Always return the initial state
    default:
      return draft
  }
}, INIT_STATE)
