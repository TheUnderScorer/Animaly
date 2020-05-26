import React, { ReactNode } from 'react';
import store from '../store';
import AsyncStorageProvider from '../providers/AsyncStorageProvider';
import ThemeProvider from '../providers/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { act, render } from 'react-native-testing-library';
import SplashScreen from './SplashScreen';
import { wait } from '../utils/timeout';
import { createMockProxy } from 'jest-mock-proxy/lib';
import AsyncStore from '../storage/AsyncStore';

const mockStore = createMockProxy<AsyncStore>();

const wrapComponent = (cmp: ReactNode) => (
  <Provider store={store}>
    <AsyncStorageProvider defaultStorage={mockStore}>
      <ThemeProvider>
        <NavigationContainer>{cmp}</NavigationContainer>
      </ThemeProvider>
    </AsyncStorageProvider>
  </Provider>
);

describe('<SplashScreen />', () => {
  beforeEach(() => {
    mockStore.mockClear();
  });

  it('should render without crashing', () => {
    const cmp = render(wrapComponent(<SplashScreen />));
    expect(cmp.toJSON()).toMatchSnapshot();
  });

  it('should show spinner on loading', async () => {
    mockStore.get.mockImplementation(async () => {
      await wait(9000);

      return null;
    });

    const cmp = render(wrapComponent(<SplashScreen />));

    await act(async () => {
      await wait(1100);
    });

    const spinner = cmp.getByTestId('splashSpinner');
    expect(spinner).toBeDefined();
  });

  it('should show "Get Started" btn if user does not exist', async () => {
    const cmp = render(wrapComponent(<SplashScreen />));

    await act(async () => {
      await wait(1100);
    });

    const btn = cmp.getByTestId('getStarted');
    expect(btn).toBeDefined();
  });
});
