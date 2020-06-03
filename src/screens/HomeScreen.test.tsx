import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../store';
import AsyncStorageProvider from '../providers/AsyncStorageProvider';
import ThemeProvider from '../providers/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { RootScreens } from '../screens';
import HomeScreen from './HomeScreen';
import { createMockProxy } from 'jest-mock-proxy/lib';
import AsyncStore from '../storage/AsyncStore';
import { act, render } from 'react-native-testing-library';
import { getMockUser } from '../tests/mocks/user';
import { wait } from '../utils/timeout';

const user = getMockUser();

const mockStore = createMockProxy<AsyncStore>();

const wrapComponent = (cmp: ReactNode) => (
  <Provider store={makeStore()}>
    <AsyncStorageProvider defaultStorage={mockStore}>
      <ThemeProvider>
        <NavigationContainer>{cmp}</NavigationContainer>
      </ThemeProvider>
    </AsyncStorageProvider>
  </Provider>
);

describe('<HomeScreen />', () => {
  beforeEach(() => {
    mockStore.mockClear();

    mockStore.get.mockResolvedValueOnce(user);
  });

  it('should render without crashing', async () => {
    const cmp = render(wrapComponent(<HomeScreen />));

    await act(async () => {
      await wait(100);
    });

    expect(cmp.toJSON()).toMatchSnapshot();
  });
});
