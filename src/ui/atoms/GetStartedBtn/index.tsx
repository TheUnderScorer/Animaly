import { StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { roundButtonBorderRadius } from '../../../styles/constants';

const styles = StyleSheet.create({
  btn: {
    width: 200,
    borderRadius: roundButtonBorderRadius,
  },
});

export interface GetStartedBtnProps {
  onPress: () => void;
}

const GetStartedBtn = (props: GetStartedBtnProps) => {
  return (
    <Button
      style={styles.btn}
      onPress={props.onPress}
      testID="getStarted"
      accessoryLeft={() => <MaterialIcon name="pets" color="#fff" size={20} />}>
      Get started
    </Button>
  );
};

export default GetStartedBtn;
