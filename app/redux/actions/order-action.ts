import { hideLoader, showLoader } from "../../components/atoms/loader/loader"
import {
  getAllOrdersService,
  getOrderCountService,
} from "../../services/order-services/order-services"
import { GET_ALL_ORDERS, GET_ORDER_COUNT } from "./action-types"

export const getAllOrders = () => async (dispatch) => {
  showLoader()
  const result = await getAllOrdersService()
  hideLoader()
  if (result?.kind === "ok") {
    dispatch({
      type: GET_ALL_ORDERS,
      payload: result?.data,
    })
  }
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
