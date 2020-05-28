import { RowView } from '../../../styles/view';
import { Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { FC, useMemo } from 'react';
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

export interface AppLogoProps {
  variant?: 'light' | 'dark';
}

const AppLogo: FC<AppLogoProps> = ({ variant }) => {
  const textColor = useMemo(() => (variant === 'dark' ? '#000' : '#fff'), [
    variant,
  ]);

  return (
    <>
      <RowView style={styles.row}>
        <Text
          style={{
            color: textColor,
          }}
          category="h1">
          {config.appName}
        </Text>
        <Icon
          size={40}
          style={{
            color: textColor,
          }}
          name="dog-side"
        />
      </RowView>
      <RowView style={[styles.row, styles.subtitle]}>
        <Text
          style={{
            color: textColor,
          }}
          category="s2">
          Your everyday companion.
        </Text>
      </RowView>
    </>
  );
};

export default AppLogo;
