import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
