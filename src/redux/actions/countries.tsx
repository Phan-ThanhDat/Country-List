import {
  FETCH_COUNTRIES_SUCCEEDED,
  FETCH_COUNTRIES_REQUESTED,
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
