import { array } from 'prop-types'
import React from 'react'
import { intlShape } from 'react-intl'
import styled from 'styled-components'

import Icon from '../Icon'
import { colors, media } from '../../styles'

import messages from './messages'

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  padding: 2rem 1rem;
  width: 100%;

  ${media.tablet`
    padding: 2rem 0;
  `};
`

const PhotoLink = styled.a`
  flex: 1 0 auto;

  border-radius: 3px;
  height: 14rem;
  margin-right: 1rem;
  min-width: 14rem;
`

const Photo = styled.div`
  border-radius: inherit;
  height: inherit;
  min-width: inherit;

  background-image: ${props => `url("${props.backgroundImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const PhotoPlaceholder = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  flex: 1 0 auto;

  border-radius: 3px;
  height: 14rem;
  width: 14rem;
  min-width: 14rem;
  padding: 1rem;

  background-color: ${colors.lightGrey};
`

const TextPlaceholder = styled.p`
  margin: 1rem 0 0 0;

  color: ${colors.darkGrey};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  ${media.desktop`
    font-size: 1.1rem;
  `};

  ${media.widescreen`
    font-size: 1.2rem;
  `};
`

const Photos = (props, context) => (
  <Wrapper>
    {props.photos && props.photos.length > 0
      ? props.photos.map(photo => (
          <PhotoLink key={photo.id} href={photo.url} target="_blank">
            <Photo backgroundImage={photo.url} />
          </PhotoLink>
        ))
      : null}
    <PhotoPlaceholder>
      <Icon glyph="photo" size={6} color={colors.darkGrey} />
      <TextPlaceholder>
        {context.intl.formatMessage(messages.textPlaceholder)}
      </TextPlaceholder>
    </PhotoPlaceholder>
  </Wrapper>
)

Photos.propTypes = {
  photos: array
}

Photos.defaultProps = {
  photos: []
}

Photos.contextTypes = {
  intl: intlShape
}

export default Photos
