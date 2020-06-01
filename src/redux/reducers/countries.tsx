import {
  CountriesActions,
  CountriesState,
  Countries,
  FETCH_COUNTRIES_REQUESTED,
  FETCH_COUNTRIES_SUCCEEDED,
  ADD_COUNTRY_REQUEST,
  Countries as CountryType,
  ADD_COUNTRY_SUCCEED,
  LOAD_IN_CART,
} from '../../types'

export const initialState: CountriesState = {
  inCart: [],
  countries: [],
  loading: true,
}

export default function (
  state = initialState,
  action: CountriesActions
): CountriesState {
  switch (action.type) {
  case FETCH_COUNTRIES_REQUESTED:
    return { ...state, loading: true }
  case FETCH_COUNTRIES_SUCCEEDED: {
    const countryList = JSON.parse(JSON.stringify(action.payload))
    const data: Countries[] = countryList.data
    return { ...state, countries: [...data], loading: false }
  }
  case ADD_COUNTRY_REQUEST:
    const data: CountryType[] = [action.payload.country]
    let retrievedObject: any = localStorage.getItem('inCart')
    if (typeof retrievedObject === 'string') {
      retrievedObject = JSON.parse(retrievedObject)
    }

    const inCart = [...retrievedObject, ...data]
    localStorage.setItem('inCart', JSON.stringify(inCart))
    return {
      ...state,
      inCart: [...inCart],
      loading: true,
    }
  case ADD_COUNTRY_SUCCEED:
    return { ...state, loading: false }
  case LOAD_IN_CART:
    if (localStorage.getItem('inCart') !== null) {
      // Retrieve the object from storage
      let retrievedObject: any = localStorage.getItem('inCart')
      if (typeof retrievedObject === 'string') {
        retrievedObject = JSON.parse(retrievedObject)
      }

      const inCart = [...retrievedObject]
      localStorage.setItem('inCart', JSON.stringify(inCart))
      return {
        ...state,
        inCart: [...inCart],
      }
    } else {
      const inCart = [...state.inCart]
      localStorage.setItem('inCart', JSON.stringify(inCart))
      return {
        ...state,
      }
    }
  default:
    return state
  }
}
