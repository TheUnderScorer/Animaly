import React, { FC, ReactElement, useCallback } from 'react';
import UserWelcome from '../ui/molecules/UserWelcome';
import useTimeOfDayBackgroundAndText from '../hooks/common/useTimeOfDayBackgroundAndText';
import { Route, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import FeaturesGrid from '../ui/molecules/FeaturesGrid';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
} from '@ui-kitten/components';
import HomeBackground from '../ui/atoms/HomeBackground';
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

export interface HomeScreenProps {}

const styles = StyleSheet.create({
  layout: {
    height: '100%',
  },
  text: {
    color: '#fff',
  },
  inner: {
    bottom: 60,
  },
});

const HomeScreen: FC<HomeScreenProps> = () => {
  const { text, background } = useTimeOfDayBackgroundAndText();

  return (
    <Layout style={styles.layout} level="2" testID="homeScreen">
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HomeBackground background={background}>
        <UserWelcome textStyle={styles.text} timeOfDay={text} />
      </HomeBackground>
      <SafeAreaView style={styles.layout}>
        <View style={styles.inner}>
          <FeaturesGrid />
        </View>
      </SafeAreaView>
    </Layout>
  );
};

export default HomeScreen;
