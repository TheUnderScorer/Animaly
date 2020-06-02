import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@ui-kitten/components';

export interface HomeBackgroundProps {}

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 100,
  },
});

const HomeBackground: FC<HomeBackgroundProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[
        theme['color-primary-300'],
        theme['color-primary-400'],
        theme['color-primary-500'],
        theme['color-primary-600'],
        theme['color-primary-700'],
        theme['color-primary-800'],
        theme['color-primary-900'],
      ]}>
      {children}
    </LinearGradient>
  );
};

export default HomeBackground;
