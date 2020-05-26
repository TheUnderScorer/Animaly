import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer, UserState } from './reducers/user/reducer';
import thunk from 'redux-thunk';
import { initialState as userInitialState } from './reducers/user/reducer';

export interface AppStore {
  user: UserState;
}

const initialState: AppStore = {
  user: userInitialState,
};

const reducers = combineReducers({
  user: userReducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
