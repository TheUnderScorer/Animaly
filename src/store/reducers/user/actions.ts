import { Dispatch } from 'redux';
import { AppActions } from '../../index';
import AsyncStore from '../../../storage/AsyncStore';
import { User } from '../../../typings/user';

export const fetchCurrentUser = (asyncStore: AsyncStore) => async (
  dispatch: Dispatch<AppActions>,
) => {
  const currentUser = await asyncStore.get<User>('currentUser');

  dispatch({
    type: 'SetCurrentUser',
    payload: currentUser,
  });

  dispatch({
    type: 'SetDidInitialFetch',
    payload: true,
  });
};
