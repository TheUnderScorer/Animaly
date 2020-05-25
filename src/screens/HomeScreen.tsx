import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CenteredLayout } from '../styles/view';
import { Button, Icon, Text } from '@ui-kitten/components';
import { RootScreens } from '../screens';
import { normalIcon } from '../styles/icons';

export interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <CenteredLayout level="1">
      <Text category="h1">Hello, React!</Text>
      <Button
        onPress={() => navigation.navigate(RootScreens.Splash)}
        appearance="filled"
        size="large"
        accessoryLeft={() => (
          <Icon fill="#8F9BB3" style={normalIcon} name="star" />
        )}>
        Click me!
      </Button>
    </CenteredLayout>
  );
};

export default HomeScreen;
