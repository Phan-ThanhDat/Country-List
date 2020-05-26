import axios from 'axios'
import { Countries } from '../../types'

export interface FetchGetCountriesResponse {
  data: Countries
}

export default function fetchGetCompanyDetail(uri: string) {
  return axios.get<FetchGetCountriesResponse>(
    `https://restcountries.eu/rest/v2${uri}`
  )
}
