import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth/authReducer';
import alertReducer from './alert/alertReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
