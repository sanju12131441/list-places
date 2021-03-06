import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { sagas as ListPlacesSaga } from './components/listplaces/redux';


export function configureStore () {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const middleware =   compose(applyMiddleware(...middlewares));
  

  const store = createStore(
    rootReducer,
    middleware,
  );

  sagaMiddleware.run(ListPlacesSaga);

  return store;
}
