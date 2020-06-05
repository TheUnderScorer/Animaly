import React, { FC, useState } from 'react';
import UserWelcome from '../ui/molecules/UserWelcome';
import useTimeOfDayBackgroundAndText from '../hooks/common/useTimeOfDayBackgroundAndText';
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import FeaturesGrid from '../ui/molecules/FeaturesGrid';
import { Layout } from '@ui-kitten/components';
import HomeBackground from '../ui/atoms/HomeBackground';
import Collapsable from '../ui/molecules/Collapsable';
import { Transition, Transitioning } from 'react-native-reanimated';
import { BackgroundOverlay } from '../styles/overlay';

export interface HomeScreenProps {}

const styles = StyleSheet.create({
  layout: {
    height: '100%',
  },
  text: {
    color: '#fff',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    overflow: 'hidden',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

const HomeScreen: FC<HomeScreenProps> = () => {
  const { text, background } = useTimeOfDayBackgroundAndText();
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <Layout level="2" style={styles.layout} testID="homeScreen">
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: background,
        }}
      />
      <BackgroundOverlay />
      <View style={styles.textContainer}>
        {!menuExpanded && (
          <UserWelcome textStyle={styles.text} timeOfDay={text} />
        )}
      </View>
      <Collapsable onExpandChange={setMenuExpanded}>
        <FeaturesGrid />
      </Collapsable>
    </Layout>
  );
};

export default HomeScreen;
