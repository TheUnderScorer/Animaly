import React, { FC } from 'react';
import { RootScreens } from './screens';
import { CenteredLayout } from './styles/view';
import { Button, Icon, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { normalIcon } from './styles/icons';
import { stackHeaderProps } from './static/headerProps';
import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();

export interface RootStackProps {}

const RootStack: FC<RootStackProps> = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          ...stackHeaderProps,
        }}
        initialRouteName={RootScreens.Splash}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
          name={RootScreens.Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={SplashScreen}
          name={RootScreens.Splash}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
