import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import { Provider } from 'react-redux';
import store from './store';
import AsyncStorageProvider from './providers/AsyncStorageProvider';

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
