import { User } from '../../../typings/user';

export interface CreateUserInput
  extends Omit<User, 'hasBeenWelcomed' | 'createdAt'> {}
