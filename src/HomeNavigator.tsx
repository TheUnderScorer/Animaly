import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Layout, Text } from '@ui-kitten/components';
import { HomeFooterScreens } from './screens';
import HomeScreen from './screens/HomeScreen';
import { normalIcon } from './styles/icons';
import FooterNavigator from './ui/molecules/FooterNavigator';
import { SafeAreaView } from 'react-native';

export interface HomeStackProps {}

const TabNavigator = createBottomTabNavigator();

const HomeNavigator: FC<HomeStackProps> = () => {
  return (
    <TabNavigator.Navigator
      tabBar={(props) => <FooterNavigator {...props} />}
      initialRouteName={HomeFooterScreens.Home}>
      <TabNavigator.Screen
        name={HomeFooterScreens.Routine}
        options={{
          tabBarLabel: 'Routine',
          tabBarIcon: (props) => (
            <Icon style={normalIcon} {...props} name="repeat-outline" />
          ),
        }}>
        {() => (
          <SafeAreaView>
            <Layout level="2">
              <Text>Routine</Text>
            </Layout>
          </SafeAreaView>
        )}
      </TabNavigator.Screen>
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
          <SafeAreaView>
            <Layout level="2">
              <Text>Settings</Text>
            </Layout>
          </SafeAreaView>
        )}
      </TabNavigator.Screen>
    </TabNavigator.Navigator>
  );
};

export default HomeNavigator;
