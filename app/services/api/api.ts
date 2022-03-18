import { create } from "apisauce"
import { store } from "../../models"

// import { firebase } from "@react-native-firebase/auth"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"

export const generateApiClient = () => {
  const config: ApiConfig = DEFAULT_API_CONFIG
  const api = create({
    baseURL: config.url,
    timeout: config.timeout,
    headers: { "Content-Type": "application/json" },
  })

  api.addAsyncRequestTransform((request) => async () => {
    // Get Access token from local storge and add it to headers
    const { getState } = store
    const userInfo = getState().userInfo.user
    const token = userInfo?.jwt
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    } else {
      request.headers.Authorization = ``
    }
  })
  return api
}
