import { call, put, select, takeLatest } from 'redux-saga/effects'

import { setSendingRequest } from '../App/actions'
import {
  setType as setNotificationType,
  setIsVisible as setNotificationIsVisible
} from '../Notification/actions'
import { finishProgress, startProgress } from '../ProgressBar/actions'
import makeSelectApp from '../App/selector'
import { getTeamEndpoint } from '../../api/teams'

import { setNotificationMessage, setTeam } from './actions'
import { GET_TEAM } from './constants'

function* getTeamFlow(params) {
  const sendingRequest = yield select(makeSelectApp('sendingRequest'))
  if (sendingRequest) {
    return
  }

  yield put(setSendingRequest(true))
  yield put(startProgress())

  let response
  try {
    response = yield call(getTeamEndpoint, params.teamId)
  } catch (error) {
    yield put(setNotificationType('error'))
    if (error.code === 'ECONNABORTED') {
      yield put(setNotificationMessage('timeoutError'))
    } else if (error.response.data.general === 'Place not found') {
      yield put(setNotificationMessage('notFoundError'))
    } else {
      yield put(setNotificationMessage('serverError'))
    }
    yield put(setNotificationIsVisible(true))

    yield put(setSendingRequest(false))
    yield put(finishProgress())

    return
  }

  yield put(setTeam(response.data))

  yield put(setSendingRequest(false))
  yield put(finishProgress())
}

export default function* teamSaga() {
  yield takeLatest(GET_TEAM, getTeamFlow)
}
