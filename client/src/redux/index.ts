import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth/authReducer';
import alertReducer from './alert/alertReducer';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  alert: alertReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
