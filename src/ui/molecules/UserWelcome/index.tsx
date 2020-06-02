import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../store';
import { StyleProp, TextStyle, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { TimeOfDay } from '../../../utils/date';

export interface UserWelcomeProps {
  timeOfDay: TimeOfDay | null;
  textStyle?: StyleProp<TextStyle>;
}

const UserWelcome: FC<UserWelcomeProps> = ({ timeOfDay, textStyle }) => {
  const currentUser = useSelector((store: AppStore) => store.user.currentUser);

  if (!currentUser) {
    return null;
  }

  return (
    <View>
      <Text style={textStyle} category="h5">
        Good {timeOfDay ?? 'to see you'}, {currentUser.name}.
      </Text>
      <Text style={textStyle} category="p1">
        What would you like to do today?
      </Text>
    </View>
  );
};

export default UserWelcome;
