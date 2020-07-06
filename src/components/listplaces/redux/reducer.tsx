import initialState from './initalState';
import { 
    FETCH_PLACES_SUCCESS,
    SAVE_FAVOURITE_PLACES
} from './actions';

const reducer = (state = initialState, payload, error ) => {
  switch (payload.type) {
    case FETCH_PLACES_SUCCESS :
      return {
        ...state,
        placesList : payload.data
      }
    case SAVE_FAVOURITE_PLACES :
      return { 
        ...state,
        favouritePlacesList: [...state.favouritePlacesList, payload.data]
    }
    default:
      return state
  }
}

export default reducer