import { create } from "apisauce"

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
    // const authForDefaultApp = firebase.auth()
    // const token = await authForDefaultApp.currentUser?.getIdToken()
    // request.headers['auth-token'] = token || ""
  })
  return api
}
