/* eslint-disable camelcase */
import { ApiResponse } from "apisauce"
import { toastWrapper } from "../../utils/helper"
import { generateApiClient } from "../api"
import { APIRoutes } from "../api/api-config"
import { getGeneralApiProblem } from "../api/api-problem"

const apiClient = generateApiClient()

export const getAllOrdersService = async (start = 0): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.get(
      `${APIRoutes.Orders}?includeCount=true&_start=${start}&_limit=10`,
    )

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

export const getOrderService = async (orderId: string): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.get(`${APIRoutes.Orders}/${orderId}`)

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

export const getOrderByFilterService = async ({
  status,
  updatedAt_gt,
  _start,
  _limit,
  _sort,
}): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.get(
      `${APIRoutes.Orders}?status=${status}&updatedAt_gt=${updatedAt_gt}&_start=${_start}&_limit=${_limit}&_sort=${_sort}`,
    )

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

export const getOrderCountService = async (status = "delivered"): Promise<any> => {
  try {
    const response: ApiResponse<any> = await apiClient.get(
      `${APIRoutes.OrderCount}?status=${status}`,
    )

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
