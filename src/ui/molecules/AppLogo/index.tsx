import { RowView } from '../../../styles/view';
import { Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    marginTop: 5,
  },
});

const AppLogo = () => (
  <>
    <RowView style={styles.row}>
      <Text category="h1">{config.appName}</Text>
      <Icon size={40} name="dog-side" />
    </RowView>
    <RowView style={[styles.row, styles.subtitle]}>
      <Text category="s2">Your everyday companion.</Text>
    </RowView>
  </>
);

export default AppLogo;
