import { combineReducers } from 'redux';
import { reducer as ListPlacesReducer } from './components/listplaces/redux';


export interface AppState {
}

export const rootReducer = combineReducers<AppState>({
    ListPlacesReducer
});

export default rootReducer;