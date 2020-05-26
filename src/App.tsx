import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
