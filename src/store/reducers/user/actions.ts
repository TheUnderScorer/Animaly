import { Dispatch } from 'redux';
import { AppActions } from '../../index';
import AsyncStore from '../../../storage/AsyncStore';
import { User } from '../../../typings/user';
import { CreateUserInput } from './types';

export const fetchCurrentUser = (asyncStore: AsyncStore) => async (
  dispatch: Dispatch<AppActions>,
) => {
  const currentUser = await asyncStore.get<User>('currentUser');

  dispatch({
    type: 'SetCurrentUser',
    payload: currentUser,
  });

  return dispatch({
    type: 'SetDidInitialFetch',
    payload: true,
  });
};

export const createUser = (
  asyncStore: AsyncStore,
  input: CreateUserInput,
) => async (dispatch: Dispatch<AppActions>) => {
  const user: User = {
    ...input,
    createdAt: new Date(),
    hasBeenWelcomed: false,
  };

  asyncStore.set('currentUser', user);

  dispatch({
    type: 'SetCurrentUser',
    payload: user,
  });

  return user;
};
