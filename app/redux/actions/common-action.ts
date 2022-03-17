import { RESTORE_SPLASH } from "./action-types"

export const restoreSplash = () => async (dispatch) => {
  dispatch({
    type: RESTORE_SPLASH,
  })
}
