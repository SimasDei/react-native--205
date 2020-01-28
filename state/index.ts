import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { mealsReducer } from './reducers';
import rootSaga from './sagas';

export const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
