import {
  createItemsService,
  updateItemsService,
  getItemService,
  getAllItemsService,
} from "./../../services/items-services/items-services"
import { hideLoader, showLoader } from "../../components/atoms/loader/loader"
import { CREATE_ITEM, GET_ALL_ITEMS, GET_ITEM, UPDATE_ITEM } from "./action-types"
import { navigate } from "../../navigators"

export const createItem = (item) => async (dispatch) => {
  showLoader()
  const result = await createItemsService(item)
  hideLoader()
  if (result?.kind === "ok") {
    dispatch({
      type: CREATE_ITEM,
      payload: result?.data,
    })
    navigate("ItemList")
  }
}

export const updateItem = (item) => async (dispatch) => {
  showLoader()
  const result = await updateItemsService(item)
  hideLoader()
  if (result?.kind === "ok") {
    dispatch({
      type: UPDATE_ITEM,
      payload: result?.data,
    })
  }
}

export const getItem = (itemId) => async (dispatch) => {
  showLoader()
  const result = await getItemService(itemId)
  hideLoader()
  if (result?.kind === "ok") {
    dispatch({
      type: GET_ITEM,
      payload: result?.data,
    })
  }
}

export const getAllItems = () => async (dispatch) => {
  showLoader()
  const result = await getAllItemsService()
  hideLoader()
  if (result?.kind === "ok") {
    dispatch({
      type: GET_ALL_ITEMS,
      payload: result?.data,
    })
  }
}
