import { hideLoader, showLoader } from "../../components/atoms/loader/loader"
import {
  getAllOrdersService,
  getOrderCountService,
} from "../../services/order-services/order-services"
import { GET_ALL_ORDERS, GET_ORDER_COUNT, SET_ORDER_LIST_LOADING } from "./action-types"

export const getAllOrders = (start = 0) => async (dispatch) => {
  showLoader()
  dispatch({
    type: SET_ORDER_LIST_LOADING,
    payload: true,
  })
  const result = await getAllOrdersService(start)
  hideLoader()
  if (result?.kind === "ok") {
    dispatch({
      type: GET_ALL_ORDERS,
      payload: result?.data,
    })
  }
  dispatch({
    type: SET_ORDER_LIST_LOADING,
    payload: false,
  })
}

export const getOrdersCount = (status: string) => async (dispatch) => {
  showLoader()
  const result = await getOrderCountService(status)
  hideLoader()
  if (result?.kind === "ok") {
    dispatch({
      type: GET_ORDER_COUNT,
      status,
      payload: result?.data,
    })
  }
}
