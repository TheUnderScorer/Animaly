import { applyMiddleware, combineReducers, createStore } from 'redux';
import { UserActions, userReducer, UserState } from './reducers/user/reducer';
import thunk from 'redux-thunk';
import { initialState as userInitialState } from './reducers/user/reducer';

export interface AppStore {
  user: UserState;
}

const initialState: AppStore = {
  user: userInitialState,
};

export type AppActions = UserActions;

const reducers = combineReducers({
  user: userReducer,
});
const middleware = [thunk];

export const makeStore = () =>
  createStore(reducers, initialState, applyMiddleware(...middleware));
