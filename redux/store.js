import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weather.reducer';

const reducers = combineReducers({
  weatherReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
