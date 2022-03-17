import { combineReducers } from "redux"
import common from "./common"
import user from "./user-reducer"
export default function reducers(/* navReducer */) {
  return combineReducers({
    common: common,
    userInfo: user, // Persist userInfo
  })
}
