import { hideLoader, showLoader } from "../../components/atoms/loader/loader"
import { loginService } from "../../services/auth-services/auth-services"
import { LOGIN_USER } from "./action-types"

export const loginUser = (username, password) => async (dispatch) => {
  showLoader()
  const result = await loginService(username, password)
  hideLoader()
  if (result?.kind === "ok") {
    dispatch({
      type: LOGIN_USER,
      payload: result?.data,
    })
  }
}
