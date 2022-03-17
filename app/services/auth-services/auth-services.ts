import { ApiResponse } from "apisauce"
import { toastWrapper } from "../../utils/helper"
import { generateApiClient } from "../api"
import { APIRoutes } from "../api/api-config"
import { getGeneralApiProblem } from "../api/api-problem"

const apiClient = generateApiClient()
// TODO: Define the type of the response
export const loginService = async (username, password): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.post(APIRoutes.Login, {
      identifier: username,
      password: password,
    })

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem: any = getGeneralApiProblem(response)
      toastWrapper(problem?.message)
      if (problem) return problem
    }
    const data = response.data
    return { kind: "ok", data }
  } catch (e) {
    toastWrapper(e.message)
    return { kind: "bad-data" }
  }
}
