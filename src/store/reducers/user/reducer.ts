import { User } from '../../../typings/user';
import { Action, defaultHandler, mapReducer } from '@theunderscorer/utils';

export interface UserState {
  currentUser: User | null;
}

export const initialState: UserState = {
  currentUser: null,
};

export type UserActions = Action<'SetCurrentUser', User | null>;

export const userReducer = mapReducer<UserState, UserActions>(
  {
    SetCurrentUser: defaultHandler('currentUser'),
  },
  initialState,
);
