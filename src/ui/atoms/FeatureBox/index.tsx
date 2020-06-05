import React, { FC, useCallback, useMemo } from 'react';
import { FeatureScreens } from '../../../screens';
import { featureDescriptions } from '../../../features';
import { Card, Text } from '@ui-kitten/components';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface FeatureBoxProps {
  feature: FeatureScreens;
  onPress?: (screen: FeatureScreens) => any;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  card: {
    minWidth: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 15,
  },
});

const FeatureBox: FC<FeatureBoxProps> = ({ feature, onPress, style }) => {
  const description = useMemo(() => featureDescriptions[feature], [feature]);

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(feature);
    }
  }, [onPress, feature]);

  return (
    <Card style={[styles.card, style]}>
      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        {description.icon({ size: 50 })}
        <Text category="p1" style={styles.text}>
          {description.title}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default FeatureBox;
