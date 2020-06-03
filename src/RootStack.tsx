import React, { FC } from 'react';
import { RootScreens } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { stackHeaderProps } from './static/headerProps';
import SplashScreen from './screens/SplashScreen';
import { useSelector } from 'react-redux';
import { AppStore } from './store';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

export interface RootStackProps {}

const RootStack: FC<RootStackProps> = () => {
  const currentUser = useSelector<AppStore>((store) => store.user.currentUser);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          ...stackHeaderProps,
        }}
        initialRouteName={RootScreens.Splash}>
        {currentUser && (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            component={HomeStack}
            name={RootScreens.Home}
          />
        )}
        {!currentUser && (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            component={SplashScreen}
            name={RootScreens.Splash}
          />
        )}
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
