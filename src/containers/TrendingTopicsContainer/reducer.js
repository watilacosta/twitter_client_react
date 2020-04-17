import { UPDATE_TRENDINGS } from './constants'

const initialState = {
  hashtags: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TRENDINGS:
      // return { hashtags: [['#OneBitCode', '20'], ['#RubyOnRails', '1k']] }
      return {...state, hashtags: action.payload.hashtags}
      default:
        return state
  }
}