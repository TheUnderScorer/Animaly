import React, { FC } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView, StatusBar } from 'react-native';
import useThemedStatusBar from '../../hooks/statusBar/useThemedStatusBar';

export interface MindClearScreenProps {}

const MindClearScreen: FC<MindClearScreenProps> = () => {
  const statusBarProps = useThemedStatusBar();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar {...statusBarProps} />
      <Layout level="2" style={{ flex: 1 }}>
        <Text>Mind clear!</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default MindClearScreen;
