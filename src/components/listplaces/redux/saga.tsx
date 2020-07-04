import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import endpoints from '../../../constants/endpoints';
import { 
   FETCH_PLACES,FETCH_PLACES_SUCCESS
} from './actions';

function fetchPlacesApiCall() {
 return axios.get(endpoints.GET_PLACES)
}

function* fetchPlacesGenerator() {
  try {
    const response = yield call(fetchPlacesApiCall);
    console.log(response)
    if(response.status === 200){
      const data = response.data.places;
      yield put({type : FETCH_PLACES_SUCCESS , data})
    }
  } catch (error) {
    console.log(error , 'err');
  }
}


// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(FETCH_PLACES, fetchPlacesGenerator);
}