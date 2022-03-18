import { hideLoader, showLoader } from "../../components/atoms/loader/loader"
import { uploadFileService } from "../../services/file-upload-services/file-upload-services"
import { RESTORE_SPLASH } from "./action-types"

export const restoreSplash = () => async (dispatch) => {
  dispatch({
    type: RESTORE_SPLASH,
  })
}

export const uploadFile = (imageObject, callbackAction) => async () => {
  showLoader()
  const result = await uploadFileService(imageObject)
  hideLoader()
  if (result?.kind === "ok") {
    callbackAction(result?.data)
  }
}
