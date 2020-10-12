import { createStore, compose, applyMiddleware } from 'redux';
import tasks from './tasksReducer';
import thunkMiddleWare from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    tasks,
    composeEnhancers(applyMiddleware(thunkMiddleWare))
);

export default store;