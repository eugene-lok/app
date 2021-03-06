import { CLEAR_STATE, SET_LOADING_VENUE, SET_VENUE } from './constants'

const initialState = {
  loadingVenue: true,
  venue: {
    id: '',
    address: '',
    allowsGuideDog: {
      yes: 0,
      no: 0
    },
    bathroomReviews: 0,
    bathroomScore: null,
    coverPhoto: '',
    entryReviews: 0,
    entryScore: null,
    googleRating: null,
    googleUrl: '',
    hasParking: {
      yes: 0,
      no: 0
    },
    hasSecondEntry: {
      yes: 0,
      no: 0
    },
    hasWellLit: {
      yes: 0,
      no: 0
    },
    isQuiet: {
      yes: 0,
      no: 0
    },
    isSpacious: {
      yes: 0,
      no: 0
    },
    location: {
      lat: 0,
      lng: 0
    },
    name: '',
    formattedPhone: '',
    internationalPhone: '',
    photos: [],
    placeId: '',
    steps: {
      zero: 0,
      one: 0,
      two: 0,
      moreThanTwo: 0
    },
    types: [],
    website: ''
  }
}

export default function venueReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_STATE:
      return initialState

    case SET_LOADING_VENUE:
      return { ...state, loadingVenue: action.loadingVenue }

    case SET_VENUE:
      return { ...state, venue: action.venue }

    default:
      return state
  }
}
