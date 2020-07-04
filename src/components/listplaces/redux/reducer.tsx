import initialState from './initalState';
import { 
    FETCH_PLACES_SUCCESS
} from './actions';

const reducer = (state = initialState, payload, error ) => {
  switch (payload.type) {
    case FETCH_PLACES_SUCCESS :
      return {
        ...state,
        placesList : payload.data
      }
    default:
      return state
  }
}

export default reducer