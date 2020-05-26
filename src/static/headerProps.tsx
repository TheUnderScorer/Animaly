import { Button, Icon, Text } from '@ui-kitten/components';
import { normalIcon } from '../styles/icons';
import React from 'react';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

export const stackHeaderProps: Partial<StackHeaderOptions> = {
  headerTitle: (props) => <Text category="h6">{props.children}</Text>,
  headerStyle: {
    height: 100,
  },
  headerLeft: (props) =>
    props.canGoBack ? (
      <Button
        onPress={props.onPress}
        appearance="ghost"
        accessoryLeft={() => (
          <Icon fill="#000" style={normalIcon} name="arrow-back-outline" />
        )}
      />
    ) : undefined,
};
