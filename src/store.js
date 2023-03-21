import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './redusers/todoReducer';
import todoSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSaga);

export default store;