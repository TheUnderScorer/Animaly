import React, { FC } from 'react';
import { RootScreens } from './screens';
import { CenteredLayout } from './styles/view';
import { Button, Icon, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { normalIcon } from './styles/icons';

const Stack = createStackNavigator();

export interface RootStackProps {}

const RootStack: FC<RootStackProps> = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => <Text category="h6">{props.children}</Text>,
          headerStyle: {
            height: 100,
          },
          headerLeft: (props) =>
            props.canGoBack ? (
              <Button
                onPress={props.onPress}
                appearance="ghost"
                accessoryLeft={() => (
                  <Icon
                    fill="#000"
                    style={normalIcon}
                    name="arrow-back-outline"
                  />
                )}
              />
            ) : undefined,
        }}
        initialRouteName={RootScreens.Home}>
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
          name={RootScreens.Splash}>
          {() => (
            <CenteredLayout level="1">
              <Text category="h1">Splash</Text>
            </CenteredLayout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
