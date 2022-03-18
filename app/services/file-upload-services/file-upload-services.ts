import { toastWrapper } from "./../../utils/helper"
import { ApiResponse } from "apisauce"
import { generateApiClient } from "../api"
import { APIRoutes } from "../api/api-config"
import { getGeneralApiProblem } from "../api/api-problem"

const apiClient = generateApiClient()

export const uploadFileService = async (imageObject): Promise<any> => {
  // Note this API does not work on debug mode , this is known issue , refer link below
  // https://github.com/jhen0409/react-native-debugger/blob/master/docs/network-inspect-of-chrome-devtools.md

  try {
    // make the api call
    const formData = new FormData()
    formData.append("files", JSON.parse(JSON.stringify(imageObject)))
    const response: ApiResponse<any> = await apiClient.post(APIRoutes.Upload, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem: any = getGeneralApiProblem(response)
      toastWrapper(response?.data?.message || problem?.message)
      if (problem) return problem
    }
    const data = response.data
    return { kind: "ok", data }
  } catch (e) {
    toastWrapper(e?.message)
    return { kind: "bad-data" }
  }
}
