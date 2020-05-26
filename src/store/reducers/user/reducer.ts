import { User } from '../../../typings/user';
import { Action, defaultHandler, mapReducer } from '@theunderscorer/utils';

export interface UserState {
  currentUser: User | null;
  didInitialFetch: boolean;
}

export const initialState: UserState = {
  currentUser: null,
  didInitialFetch: false,
};

export type UserActions =
  | Action<'SetCurrentUser', User | null>
  | Action<'SetDidInitialFetch', boolean>;

export const userReducer = mapReducer<UserState, UserActions>(
  {
    SetCurrentUser: defaultHandler('currentUser'),
    SetDidInitialFetch: defaultHandler('didInitialFetch'),
  },
  initialState,
);
