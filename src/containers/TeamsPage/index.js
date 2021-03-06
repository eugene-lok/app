import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import makeSelectApp from '../App/selector'
import Teams from '../../components/Teams'

import { clearState, getTeams } from './actions'
import makeSelectTeams from './selector'

const mapStateToProps = createStructuredSelector({
  sendingRequest: makeSelectApp('sendingRequest'),
  loadingTeams: makeSelectTeams('loadingTeams'),
  nextPage: makeSelectTeams('nextPage'),
  teams: makeSelectTeams('teams')
})

const mapDispatchToProps = dispatch => ({
  getTeams: () => {
    dispatch(getTeams())
  },
  clearState: () => {
    dispatch(clearState())
  }
})

const TeamsPage = connect(mapStateToProps, mapDispatchToProps)(Teams)

export default TeamsPage
