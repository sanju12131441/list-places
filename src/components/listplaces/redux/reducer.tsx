import initialState from './initalState';
import { 
    FETCH_PLACES
} from './actions';

const reducer = (state = initialState, payload, error ) => {
  switch (payload.type) {
    case FETCH_PLACES :
      return {
        ...state,
        placesList : payload.data
      }
    default:
      return state
  }
}

export default reducer