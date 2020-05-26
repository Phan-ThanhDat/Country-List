import { CountriesActions, CountriesState, Countries } from '../../types'

export const initialState: CountriesState = {
  inCart: [],
  countries: [],
  loading: true,
}

export default function (
  state = initialState,
  action: CountriesActions
): CountriesState {
  console.log('action', action)
  switch (action.type) {
  case 'FETCH_COUNTRIES_REQUESTED':
    console.log(111)
    return { ...state, ...initialState }
  case 'FETCH_COUNTRIES_SUCCEEDED': {
    const countryList = JSON.parse(JSON.stringify(action.payload))
    const data: Countries[] = countryList.data
    return { ...state, countries: [...data], loading: false }
  }
  default:
    return state
  }
}
