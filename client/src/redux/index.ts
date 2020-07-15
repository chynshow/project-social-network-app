import { combineReducers, createStore, applyMiddleware, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import authReducer from './auth/authReducer';
import alertReducer from './alert/alertReducer';
import profileReducer from './profile/profileReducer';
import postsReducer from './posts/postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  profile: profileReducer,
  auth: authReducer,
  alert: alertReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type BaseThunk<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppState,
  unknown,
  A
>;

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
