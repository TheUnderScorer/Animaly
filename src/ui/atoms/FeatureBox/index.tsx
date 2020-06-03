import React, { FC, useMemo } from 'react';
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
  onPress?: () => any;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  card: {
    minWidth: 150,
    height: 150,
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

  return (
    <Card style={[styles.card, style]}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        {description.icon({ size: 50 })}
        <Text category="p1" style={styles.text}>
          {description.title}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default FeatureBox;
