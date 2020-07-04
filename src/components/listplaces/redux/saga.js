import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import endpoints from '../../../constants/endpoints';
import { 
    fetchPlaces
} from './actions';

function listUsersInProject(sessionToken,projectId) {
 return axios.get(endpoints.LIST_USERS_IN_PROJECT.replace(':projectId', projectId.data.projectId) , config)
}

// createProject Axios call
function addUserInProjectCall(sessionToken , payload) {
   const config = {
    headers : {
      'Content-Type': 'application/json',
      'Authorization': 'basic ' + sessionToken
    }
  }
  return axios.post(endpoints.ADD_USERS_IN_PROJECT.replace(':projectId', payload.project_id) , payload , config)
}

// createProject Axios call
function deleteUserInProject(sessionToken , payload) {
  const config = {
   headers : {
     'Content-Type': 'application/json',
     'Authorization': 'basic ' + sessionToken
   }
 }
 return axios.delete(endpoints.DELETE_USERS_IN_PROJECT.replace(':projectId', payload.data.payload.project_id).replace(':userId', payload.data.payload.user_id) , config)
}

function listUsersInEnvrionment(sessionToken,payload) {
  console.log(payload , 'data');
  const config = {
   headers : {
     'Content-Type': 'application/json',
     'Authorization': 'basic ' + sessionToken
   }
 }
 return axios.get(endpoints.LIST_USERS_IN_ENVIRONMENT.replace(':environmentId', payload.data.environmentId) , config)
}

// createProject Axios call
function addUserInEnvironmentCall(sessionToken , payload) {
   const config = {
    headers : {
      'Content-Type': 'application/json',
      'Authorization': 'basic ' + sessionToken
    }
  }
  return axios.post(endpoints.ADD_USERS_IN_ENVIRONMENT.replace(':environmentId', payload.environment_id) , payload , config)
}

// createProject Axios call
function deleteUserInEnvironment(sessionToken , payload) {
  const config = {
   headers : {
     'Content-Type': 'application/json',
     'Authorization': 'basic ' + sessionToken
   }
 }
 return axios.delete(endpoints.DELETE_USERS_IN_ENVIRONMENT.replace(':environmentId', payload.data.payload.environmentId).replace(':userId', payload.data.payload.user_id) , config)
}

// createProject Axios call
function fetchRoles(sessionToken) {
  const config = {
   headers : {
     'Content-Type': 'application/json',
     'Authorization': 'basic ' + sessionToken
   }
 }
 return axios.get(endpoints.FETCH_ROLES_DATA, config)
}

function* fetchRolesGenerator() {
  try {
    const sessionToken = yield select(sessionTokenSelector)
    const response = yield call(fetchRoles, sessionToken)
    const data = response.data;
    console.log(data);
    if(response.status === 200){
      yield put({ type: FETCH_ROLES_SUCCESS, data })
    }else {
      toast.error('error while fetching roles');
    }
  } catch (error) {
    console.log(error , 'err');
    toast.error('error while fetching roles');
  }
}

// Generator Call 
function* addUserInProjectGenerator(payload) {
  console.log(payload);
  try {
    const sessionToken = yield select(sessionTokenSelector)
    const response = yield call(addUserInProjectCall, sessionToken , payload.data.payload)
    const data = response.data;
    if (response.status === 201){ 
      try {
        const createdPayload = {
          data : {
            projectId : payload.data.payload.project_id
          }
        }
        const response = yield call(listUsersInProject, sessionToken , createdPayload)
        const data = response.data;
        if(response.status !== 200){
          toast.error('Some error while fetching users list');
        } else {
          yield put({ type: USERS_LIST_IN_PROJECT, data })
        }
      } catch (error){
        console.log(error , 'err');
        toast.error('Some error while fetching users list');
      }
      toast.success('Users Added Succesfully');
    } else {
      toast.error('Some error while Adding users');
    }
  } catch (error) {
    console.log(error , 'err');
    toast.error('Some error while adding users');
  }
}

function* addUserInEnvironmentGenerator(payload) {
  try {
    const sessionToken = yield select(sessionTokenSelector)
    const response = yield call(addUserInEnvironmentCall, sessionToken , payload.data.payload)
    const data = response.data;
    if (response.status === 201){ 
      try {
        const createdPayload = {
          data : {
            environmentId : payload.data.payload.environment_id
          }
        }
        const response = yield call(listUsersInEnvrionment, sessionToken , createdPayload)
        const data = response.data
        if(response.status !== 200){
          toast.error('Some error while fetching users list');
        } else {
          yield put({ type: USERS_LIST_IN_ENVIRONMENT, data })
        } 
      } catch (error){
        console.log(error , 'err');
        toast.error('Some error while fetching users list');
      }
      toast.success('Users Added Succesfully');
    } else {
      toast.error('Some error while Adding users');
    }
  } catch (error) {
    console.log(error , 'err');
    toast.error('Some error while adding users');
  }
}

function* deleteUsersInProjectGenerator(payload) {
  try {
    const sessionToken = yield select(sessionTokenSelector)
    const response = yield call(deleteUserInProject, sessionToken , payload)

    if(response.status === 204){
      toast.success('User Deleted succesfully');
      try {
        const createdPayload = {
          data : {
            projectId : payload.data.payload.project_id
          }
        }
        const response = yield call(listUsersInProject, sessionToken ,createdPayload)
        const data = response.data;
        if(response.status !== 200){
          toast.error('Some error while fetching users list');
        } else {
          yield put({ type: USERS_LIST_IN_PROJECT, data })
        }
      } catch (error){
        console.log(error , 'err');
        toast.error('Some error while fetching users list');
      }
    }else {
      toast.error('error while deleting user');
    }
  } catch (error) {
    console.log(error , 'err');
    toast.error('error while deleting user');
  }
}

function* deleteUsersInEnvironmentGenerator(payload) {
  try {
    const sessionToken = yield select(sessionTokenSelector)
    const response = yield call(deleteUserInEnvironment, sessionToken , payload)

    if(response.status === 204){
      toast.success('User Deleted succesfully');
      try {
        const createdPayload = {
          data : {
            environmentId : payload.data.payload.environment_id
          }
        }
        const response = yield call(listUsersInEnvrionment, sessionToken , createdPayload)
        const data = response.data
        if(response.status !== 200){
          toast.error('Some error while fetching users list');
        } else {
          yield put({ type: USERS_LIST_IN_ENVIRONMENT, data })
        } 
      } catch (error){
        console.log(error , 'err');
        toast.error('Some error while fetching users list');
      }
    } else {
      toast.error('error while deleting user');
    }
  } catch (error) {
    console.log(error , 'err');
    toast.error('error while deleting user');
  }
}

// Generator Call 
function* listUsersInProjectGenerator(projectId) {
  console.log(projectId,'pa')
  try {
    const sessionToken = yield select(sessionTokenSelector)
    const response = yield call(listUsersInProject, sessionToken , projectId)
    const data = response.data;
    yield put({ type: USERS_LIST_IN_PROJECT, data })
  } catch (error) {
    console.log(error , 'err');
    toast.error('Some error while fetching users list In Project');
  }
}

function* fetchUsersInEnvironmentGenerator(payload) {
  try {
    const sessionToken = yield select(sessionTokenSelector)
    const response = yield call(listUsersInEnvrionment, sessionToken , payload)
    const data = response.data;
    yield put({ type  : USERS_LIST_IN_ENVIRONMENT, data })
  } catch (error) {
    console.log(error , 'err');
    toast.error('Some error while fetching users list In Environment');
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(ADD_USER_IN_PROJECT, addUserInProjectGenerator);
  yield takeLatest(ADD_USER_IN_ENVIRONMENT, addUserInEnvironmentGenerator);
  yield takeLatest(FETCH_USER_LIST_IN_PROJECT, listUsersInProjectGenerator);
  yield takeLatest(DELETE_USERS_IN_PROJECT, deleteUsersInProjectGenerator);
  yield takeLatest(FETCH_ROLES , fetchRolesGenerator);
  yield takeLatest(FETCH_USER_LIST_IN_ENVIRONMENT , fetchUsersInEnvironmentGenerator);
  yield takeLatest(DELETE_USERS_IN_ENVIRONMENT , deleteUsersInEnvironmentGenerator);
}