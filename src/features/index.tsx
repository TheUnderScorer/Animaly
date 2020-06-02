import { FeatureScreens } from '../screens';
import React, { ReactNode } from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { IconProps } from 'react-native-vector-icons/Icon';

export interface FeatureDescription<IconProps> {
  title: string;
  description: string;
  icon: (props?: IconProps) => ReactNode;
}

export type FeatureDescriptions = {
  [FeatureScreens.AnimalPhotos]: FeatureDescription<Omit<IconProps, 'name'>>;
  [FeatureScreens.MindClear]: FeatureDescription<Omit<IconProps, 'name'>>;
};

export const featureDescriptions: FeatureDescriptions = {
  [FeatureScreens.AnimalPhotos]: {
    title: 'Animal Photos',
    description: 'View random animal photos of your preference!',
    icon: (props) => <FontAwesomeIcon name="dog" {...props} />,
  },
  [FeatureScreens.MindClear]: {
    title: 'Mind Clear',
    description: 'Clear your mind.',
    icon: (props) => <MaterialIcon name="wb-sunny" {...props} />,
  },
};
