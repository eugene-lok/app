import { array, bool } from 'prop-types'
import React from 'react'
import { intlShape } from 'react-intl'
import styled from 'styled-components'

import Button from '../Button'
import { colors } from '../../styles'

import messages from './messages'

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0 0 1.5rem 0;
  padding: 0;
  width: 100%;
`

const Item = styled.li`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin: 0 0 1rem 0;
  padding: 0;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const Image = styled.div`
  flex-shrink: 0;

  border-radius: 100%;
  height: 3rem;
  margin-right: 1rem;
  width: 3rem;

  background-image: ${props => `url("${props.image}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Text = styled.p`
  overflow: hidden;

  margin: 0;

  color: ${colors.darkGrey};
  font-weight: bold;
  text-overflow: ellipsis;
`

const EditTeams = (props, context) => {
  const formatMessage = context.intl.formatMessage

  const teams = props.teams.map(t => (
    <Item key={t.id}>
      <InfoWrapper>
        <Image image={t.avatar} />
        <Text>{t.name}</Text>
      </InfoWrapper>
      <Button
        backgroundColor={colors.lightGrey}
        color={colors.darkestGrey}
        disabled={props.sendingRequest}
        onClick={() => props.leaveTeam(t.id)}
      >
        {formatMessage(messages.leaveButton)}
      </Button>
    </Item>
  ))

  return <Wrapper>{teams}</Wrapper>
}

EditTeams.propTypes = {
  teams: array.isRequired,
  sendingRequest: bool.isRequired
}

EditTeams.contextTypes = { intl: intlShape }

export default EditTeams
