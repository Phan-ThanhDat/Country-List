import { takeEvery, call, put, all, fork, delay } from 'redux-saga/effects'

import fetchApi from '../utils/apis'
import {
  FETCH_COUNTRIES_REQUESTED,
  ADD_COUNTRY_REQUEST,
  ADD_COUNTRY_SUCCEED,
  FetchCountriesRequestedAction,
} from '../../types'

function* callApi(action: FetchCountriesRequestedAction) {
  if (action.payload) {
    const {
      successType,
      beforeCallType,
      afterSuccess,
      afterError,
      uri,
    } = action.payload
    console.log('action.payload', uri)
    if (beforeCallType) {
      yield put({ type: beforeCallType })
    }

    const response = yield call(fetchApi, uri)

    if (response && !response.error) {
      if (successType) {
        yield put({ type: successType, payload: response })
      }

      if (typeof afterSuccess === 'function') {
        afterSuccess(response)
      }
    } else {
      if (typeof afterError === 'function') {
        afterError(response.error)
      }
    }
  }
}

function* addCountryToCart() {
  // yield take(ADD_COUNTRY_REQUEST)
  yield delay(1000)
  yield put({ type: ADD_COUNTRY_SUCCEED })
}

function* watchCountries() {
  yield takeEvery(FETCH_COUNTRIES_REQUESTED, callApi)
  yield takeEvery(ADD_COUNTRY_REQUEST, addCountryToCart)
}

export default function* companiesSagas() {
  yield all([fork(watchCountries)])
}
