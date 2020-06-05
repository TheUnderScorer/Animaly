import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import { Provider } from 'react-redux';
import { makeStore } from './store';
import AsyncStorageProvider from './providers/AsyncStorageProvider';
import { NativeModules } from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const store = makeStore();

const App = () => {
  return (
    <Provider store={store}>
      <AsyncStorageProvider>
        <ThemeProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </ThemeProvider>
      </AsyncStorageProvider>
    </Provider>
  );
};

export default App;
