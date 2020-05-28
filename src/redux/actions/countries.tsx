import {
  FETCH_COUNTRIES_SUCCEEDED,
  FETCH_COUNTRIES_REQUESTED,
  CountriesActions,
  ADD_COUNTRY_REQUEST,
  Countries,
  LOAD_IN_CART,
} from '../../types'

export const getCountriesRequest = (
  payload: {
    uri: string
  },
  next: () => void,
  nextError: () => void
) => {
  return {
    type: FETCH_COUNTRIES_REQUESTED,
    payload: {
      uri: payload.uri,
      params: payload,
      // opt: { method: "GET" },
      beforeCallType: FETCH_COUNTRIES_REQUESTED,
      successType: FETCH_COUNTRIES_SUCCEEDED,
      afterSuccess: next,
      afterError: nextError,
    },
  }
}

export const addCountryToCartRequest = (payload: {
  country: Countries
}): CountriesActions => {
  return {
    type: ADD_COUNTRY_REQUEST,
    payload: {
      country: payload.country,
    },
  }
}

export const loadingInCartDAta = () => {
  return {
    type: LOAD_IN_CART,
  }
}
