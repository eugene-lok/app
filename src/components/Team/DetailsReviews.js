import { number } from 'prop-types'
import React from 'react'
import { intlShape } from 'react-intl'
import styled from 'styled-components'

import Icon from '../Icon'
import { colors, media } from '../../styles'

import messages from './messages'

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2rem;
  padding: 0 1rem;
  width: 100%;

  ${media.tablet`
    padding: 0;
  `};

  ${media.desktop`
    margin-bottom: 3rem;
  `};

  ${media.widescreen`
    margin-bottom: 4rem;
  `};
`

const Title = styled.h1`
  display: block;

  margin: 0;
  width: 100%;

  color: ${colors.darkestGrey};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  ${media.desktop`
    font-size: 1.3rem;
  `};

  ${media.widescreen`
    font-size: 1.4rem;
  `};
`

const DetailsReviews = (props, context) => {
  const formatMessage = context.intl.formatMessage

  return (
    <Wrapper>
      <Icon
        glyph="reviewsStar"
        size={2.5}
        tabletSize={3}
        desktopSize={3.5}
        widescreenSize={4}
        color={colors.secondary}
        style={{ marginBottom: '0.5rem' }}
      />
      <Title>
        {formatMessage(messages.reviewsRanking, {
          ranking: props.ranking,
          amount: props.amount || '0'
        })}
      </Title>
    </Wrapper>
  )
}

DetailsReviews.propTypes = {
  amount: number,
  ranking: number
}

DetailsReviews.contextTypes = {
  intl: intlShape
}

export default DetailsReviews
