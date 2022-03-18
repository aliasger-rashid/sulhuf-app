import { combineReducers } from "redux"
import common from "./common"
import user from "./user-reducer"
import items from "./items-reducer"

export default function reducers(/* navReducer */) {
  return combineReducers({
    common: common,
    userInfo: user, // Persist userInfo
    items: items,
  })
}
