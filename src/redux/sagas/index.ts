import { all, fork } from 'redux-saga/effects'

import productSagas from './product'
import uiSagas from './ui'
import companiesSagas from './countries'

export default function* rootSaga() {
  yield all([fork(companiesSagas)])
  yield all([...productSagas, ...uiSagas])
}
