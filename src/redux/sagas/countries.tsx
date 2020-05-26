import { takeEvery, call, put } from 'redux-saga/effects'

import fetchApi from '../utils/apis'
import { FETCH_COUNTRIES_REQUESTED } from '../../types'

function* callApi(action: any) {
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

export default [takeEvery(FETCH_COUNTRIES_REQUESTED, callApi)]
