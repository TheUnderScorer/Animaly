import { User } from '../../typings/user';

export const getMockUser = (): User => ({
  createdAt: new Date('2018-05-07 09:00'),
  hasBeenWelcomed: false,
  name: 'John Doe',
});
