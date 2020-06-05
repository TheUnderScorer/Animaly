import React, { FC } from 'react';
import { ImageBackground, StyleSheet, useWindowDimensions } from 'react-native';
import { BackgroundOverlay } from '../../../styles/overlay';

export interface HomeBackgroundProps {
  background: string;
}

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    overflow: 'hidden',
    flex: 1,
  },
});

const HomeBackground: FC<HomeBackgroundProps> = ({ children, background }) => {
  const dimensions = useWindowDimensions();

  return (
    <ImageBackground
      style={[
        styles.image,
        {
          height: dimensions.height * 0.3,
        },
      ]}
      source={{
        uri: background,
      }}>
      <BackgroundOverlay
        style={{
          height: dimensions.height,
        }}
      />
      {children}
    </ImageBackground>
  );
};

export default HomeBackground;
