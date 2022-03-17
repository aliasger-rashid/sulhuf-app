import { combineReducers } from "redux"
import common from "./common"

export default function reducers(/* navReducer */) {
  return combineReducers({
    common: common,
  })
}
