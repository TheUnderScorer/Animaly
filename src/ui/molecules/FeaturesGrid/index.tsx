import React, { FC } from 'react';
import { FeatureScreens } from '../../../screens';
import FeatureBox from '../../atoms/FeatureBox';
import { StyleSheet, View } from 'react-native';

export interface FeaturesGridProps {}

const screens = Object.values(FeatureScreens);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  feature: {
    width: '45%',
  },
});

const FeaturesGrid: FC<FeaturesGridProps> = () => {
  return (
    <View style={styles.container}>
      {screens.map((screen) => (
        <FeatureBox style={styles.feature} feature={screen} key={screen} />
      ))}
    </View>
  );
};

export default FeaturesGrid;
