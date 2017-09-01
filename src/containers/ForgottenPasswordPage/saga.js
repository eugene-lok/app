import { call, put, select, takeLatest } from 'redux-saga/effects'

import { forgottenPasswordEndpoint } from '../../api/authentication'

import makeSelect from './selector'

import { FORGOTTEN_PASSWORD_REQUEST } from './constants'

import {
  clearMessages,
  requestError,
  requestSuccess,
  sendingRequest
} from './actions'

function* resetPassword() {
  const currentlySending = yield select(makeSelect('currentlySending'))
  if (currentlySending) {
    return
  }

  const data = yield select(makeSelect('data'))
  const { email } = data

  yield put(clearMessages())
  yield put(sendingRequest(true))

  try {
    yield call(forgottenPasswordEndpoint, email)
  } catch (error) {
    yield put(sendingRequest(false))
    yield put(requestError(error.response.data))
    return
  }

  yield put(sendingRequest(false))
  yield put(requestSuccess('Success'))
}

export default function* watchResetPassword() {
  yield takeLatest(FORGOTTEN_PASSWORD_REQUEST, resetPassword)
}