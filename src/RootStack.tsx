import React, { FC } from 'react';
import { FeatureScreens, RootScreens } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { stackHeaderProps } from './static/headerProps';
import SplashScreen from './screens/SplashScreen';
import { useSelector } from 'react-redux';
import { AppStore } from './store';
import HomeNavigator from './HomeNavigator';
import { SafeAreaView } from 'react-native';
import { Text } from '@ui-kitten/components';
import MindClearScreen from './screens/features/MindClearScreen';

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
          <>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              component={HomeNavigator}
              name={RootScreens.Home}
            />
            <Stack.Screen
              options={{
                title: 'Mind Clear',
                headerTransparent: true,
              }}
              name={FeatureScreens.MindClear}
              component={MindClearScreen}
            />
          </>
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
