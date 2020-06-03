import React, { FC, ReactElement } from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Route, SafeAreaView, View } from 'react-native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Text,
} from '@ui-kitten/components';
import { HomeFooterScreens } from './screens';
import HomeScreen from './screens/HomeScreen';
import { normalIcon } from './styles/icons';
import FooterNavigator from './ui/molecules/FooterNavigator';

export interface HomeStackProps {}

const TabNavigator = createBottomTabNavigator();

const HomeStack: FC<HomeStackProps> = () => {
  return (
    <TabNavigator.Navigator
      tabBar={(props) => <FooterNavigator {...props} />}
      initialRouteName={HomeFooterScreens.Home}>
      <TabNavigator.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props) => (
            <Icon style={normalIcon} {...props} name="home-outline" />
          ),
        }}
        name={HomeFooterScreens.Home}
        component={HomeScreen}
      />
      <TabNavigator.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: (props) => (
            <Icon style={normalIcon} {...props} name="settings-2-outline" />
          ),
        }}
        name={HomeFooterScreens.Settings}>
        {() => (
          <View>
            <Text>Settings</Text>
          </View>
        )}
      </TabNavigator.Screen>
    </TabNavigator.Navigator>
  );
};

export default HomeStack;
