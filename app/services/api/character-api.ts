import { ApiResponse } from "apisauce"
import { GetCharactersResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"
import { generateApiClient } from "./api"

const API_PAGE_SIZE = 50
const apiClient = generateApiClient()

export class CharacterApi {
  async getCharacters(): Promise<GetCharactersResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await apiClient.get(
        "https://raw.githubusercontent.com/infinitered/ignite/master/data/rick-and-morty.json",
        { amount: API_PAGE_SIZE },
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const characters = response.data.results

      return { kind: "ok", characters }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
