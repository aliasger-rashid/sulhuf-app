import { ApiResponse } from "apisauce"
import { toastWrapper } from "../../utils/helper"
import { generateApiClient } from "../api"
import { APIRoutes } from "../api/api-config"
import { getGeneralApiProblem } from "../api/api-problem"
import { ItemsType } from "./items-services-types"

const apiClient = generateApiClient()
// TODO: Define the type of the response
export const createItemsService = async (items: ItemsType): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.post(APIRoutes.Items, items)

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

export const updateItemsService = async (items: ItemsType): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.put(`${APIRoutes.Items}/${items?.id}`, items)

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

export const getAllItemsService = async (): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.get(APIRoutes.Items)

    if (!response.ok) {
      const problem: any = getGeneralApiProblem(response)
      console.log({ response })

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

export const getItemService = async (itemId: string): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.get(`${APIRoutes.Items}/${itemId}`)

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
